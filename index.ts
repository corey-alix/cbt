export { run as bible } from "./pages/bible.js"
import { questions } from "./data/questions.js"

function showArea(areas: HTMLElement[], currentStep: number) {
  areas.forEach((e, i) => e.classList.toggle("hidden", i !== currentStep))
  gotoNextFocusable(document.activeElement as HTMLElement)
}

function trigger(eventName: string, data: any = null) {
  const event = new CustomEvent(eventName, { detail: data })
  document.dispatchEvent(event)
}

function on(eventName: string, cb: (detail?: any) => void) {
  document.addEventListener(eventName, (e) => cb((<any>e).detail || null))
}

export function run() {
  buildForm()
  autoForLabel()
  applyBehaviors()
  applyTriggers()

  let currentStep = 0
  const areas = Array.from(
    document.querySelectorAll(".wizard .wizard-step")
  ) as HTMLElement[]

  showArea(areas, currentStep)

  on("next-area", () => {
    if (currentStep < areas.length - 1) {
      showArea(areas, ++currentStep)
    } else {
      trigger("finish")
    }
  })

  on("prior-area", () => {
    if (currentStep > 0) {
      showArea(areas, --currentStep)
    }
  })

  on("finish", () => {
    const form = document.querySelector("form.wizard") as HTMLFormElement
    const formData = getFormData(form)
    const db = JSON.parse(localStorage.getItem("cbt-db") || "[]") as Array<{
      tick: number
      situation: string
      reaction: string
      reinterpretation: string
      outcome: string
    }>

    db.unshift({
      tick: Date.now(),
      ...formData,
    })

    localStorage.setItem("cbt-db", JSON.stringify(db))

    location.href = "./pages/summary.html"
  })

  on("yesorno-toggler", (detail: { element: HTMLInputElement }) => {
    const yesorno = detail.element.closest(".yesorno") as HTMLElement
    if (!yesorno) return
    const yes = detail.element.checked
    yesorno.classList.toggle("yes", yes)
    yesorno.classList.toggle("no", !yes)
  })
}

function applyTriggers() {
  const triggers = Array.from(
    document.querySelectorAll("[data-trigger]")
  ) as HTMLElement[]
  triggers.forEach((element) => {
    const data = element.dataset.trigger
    if (!data) return
    if (element instanceof HTMLInputElement) {
      switch (element.type) {
        case "button":
          element.addEventListener("click", () => trigger(data, { element }))
          break
        case "checkbox":
          element.addEventListener("change", () => trigger(data, { element }))
          break
      }
    }
  })
}

function applyBehaviors() {
  Object.keys(behaviors).forEach((key) => {
    document.querySelectorAll(`.${key}`).forEach((element) => {
      behaviors[<keyof typeof behaviors>(<any>key)](element as HTMLElement)
    })
  })
}

const behaviors = {
  "tab-on-enter": (element: HTMLElement) => {
    element.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        // fake a tab keypress
        e.preventDefault()
        e.stopPropagation()
        // go to next focusable element
        gotoNextFocusable(element)
      }
    })
  },
  "scroll-to-top": (e: HTMLElement) => {
    // scroll the element to the top of the page
    e.addEventListener("focus", () => {
      const label = e.previousElementSibling as HTMLLabelElement
      if (label?.tagName === "LABEL") label.scrollIntoView(true)
      else e.scrollIntoView(true)
    })
  },
}

function getFormData(form: HTMLFormElement) {
  const inputs = Array.from(form.querySelectorAll("[id]")) as HTMLInputElement[]
  const formData = {} as any
  inputs.filter((e) => e.value).forEach((e) => (formData[e.id] = e.value))
  return formData
}

function gotoNextFocusable(element: HTMLElement) {
  const elements = Array.from(
    document.querySelectorAll(".tab-on-enter")
  ) as HTMLElement[]
  let index = elements.indexOf(element)
  while (true) {
    const next = elements[++index % elements.length]
    // is this element visible?
    if (next.offsetParent) {
      next.focus()
      break
    }
  }
}

function autoForLabel() {
  const labels = Array.from(
    document.querySelectorAll("label")
  ) as HTMLLabelElement[]
  labels.forEach((label) => {
    const input = label.nextElementSibling as HTMLInputElement
    if (!input || !input.id) return
    label.setAttribute("for", input.id)
  })
}

class FormGen {
  constructor(private form: HTMLFormElement) {}

  render() {
    const target = this.form.querySelector("#questions-go-here")
    // <step class="wizard-step">
    questions.forEach((question) => {
      const step = this.createStep()
      this.form.insertBefore(step, target)
      const label = this.createLabel(question)

      if (question.followup) {
        // <div class="yesorno yes">
        const yesorno = document.createElement("div")
        yesorno.classList.add(
          "yesorno",
          true === question.default ? "yes" : "no"
        )
        step.appendChild(yesorno)
        yesorno.appendChild(label)
        const checkbox = document.createElement("input")
        checkbox.classList.add("checkbox", "scroll-to-top", "tab-on-enter")
        checkbox.type = "checkbox"
        checkbox.id = question.id
        checkbox.checked = !!question.default
        checkbox.dataset.trigger = "yesorno-toggler"
        yesorno.appendChild(checkbox)
        const inputs = this.renderFollowup(question.followup, yesorno)
        inputs.forEach((input) => input.classList.add("if-yes"))
      } else {
        step.appendChild(label)
        const input = this.createInput(question)
        step.appendChild(input)
      }
    })
  }
  private createInput(question: {
    id: string
    q: string
    followup?: undefined
  }) {
    const input = document.createElement("textarea")
    input.classList.add(..."large input scroll-to-top tab-on-enter".split(" "))
    input.setAttribute("id", question.id)
    input.setAttribute("name", question.id)
    input.setAttribute("placeholder", question.q)
    return input
  }

  renderFollowup(
    questions: Array<{ id: string; q: string }>,
    container: HTMLElement
  ) {
    return questions.map((question) => {
      const input = this.createInput(question)
      container.appendChild(input)
      return input
    })
  }

  private createLabel(question: { id: string; q: string }) {
    const label = document.createElement("label")
    label.setAttribute("for", question.id)
    label.classList.add("question")
    label.innerText = question.q
    return label
  }

  private createStep() {
    const step = document.createElement("step")
    step.classList.add("wizard-step")
    return step
  }
}

function buildForm() {
  const form = document.querySelector("form.wizard") as HTMLFormElement
  const formGen = new FormGen(form)
  formGen.render()
}

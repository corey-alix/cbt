function showArea(areas: HTMLElement[], currentStep: number) {
  areas.forEach((e, i) => e.classList.toggle("hidden", i !== currentStep));
  areas[currentStep].focus();
}

function trigger(eventName: string, data: any = null) {
  const event = new CustomEvent(eventName, { detail: data });
  document.dispatchEvent(event);
}

function on(eventName: string, cb: (detail?: any) => void) {
  document.addEventListener(eventName, (e) => cb((<any>e).detail || null));
}

export function run() {
  const triggers = Array.from(
    document.querySelectorAll("[data-trigger]")
  ) as HTMLElement[];
  triggers.forEach((element) => {
    const data = element.dataset.trigger;
    if (!data) return;
    if (element instanceof HTMLInputElement) {
      switch (element.type) {
        case "button":
          element.addEventListener("click", () => trigger(data, { element }));
          break;
        case "checkbox":
          element.addEventListener("change", () => trigger(data, { element }));
          break;
      }
    }
  });

  let currentStep = 0;
  const areas = Array.from(
    document.querySelectorAll(".wizard .wizard-step")
  ) as HTMLElement[];

  showArea(areas, currentStep);

  on("next-area", () => {
    if (currentStep < areas.length - 1) {
      showArea(areas, ++currentStep);
    } else {
      trigger("finish");
    }
  });

  on("prior-area", () => {
    if (currentStep > 0) {
      showArea(areas, --currentStep);
    }
  });

  on("finish", () => {
    const form = document.querySelector("form.wizard") as HTMLFormElement;
    const formData = getFormData(form);
    const db = JSON.parse(localStorage.getItem("cbt-db") || "[]") as Array<{
      tick: number;
      situation: string;
      reaction: string;
      reinterpretation: string;
      outcome: string;
    }>;

    db.unshift({
      tick: Date.now(),
      ...formData,
    });

    localStorage.setItem("cbt-db", JSON.stringify(db));

    location.href = "./pages/summary.html";
  });

  on("yesorno-toggler", (detail: { element: HTMLInputElement }) => {
    const yesorno = detail.element.closest(".yesorno") as HTMLElement;
    if (!yesorno) return;
    const yes = detail.element.checked;
    yesorno.classList.toggle("yes", yes);
    yesorno.classList.toggle("no", !yes);
  });
}
function getFormData(form: HTMLFormElement) {
  const inputs = Array.from(
    form.querySelectorAll("[id]")
  ) as HTMLInputElement[];
  const formData = {} as any;
  inputs.filter((e) => e.value).forEach((e) => (formData[e.id] = e.value));
  return formData;
}

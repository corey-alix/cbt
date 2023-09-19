import { Bible } from "./Bible.js"
import type { BookName } from "./Bible"
import { Notes } from "./Notes.js"

export function run() {
  const topicInput = forceElement<HTMLInputElement>(
    "topic",
    `<input class="small input" type="text" placeholder="Topic" />`
  )

  topicInput.focus()
  topicInput.value = localStorage.getItem("topic") || ""
  renderTopic(topicInput.value)

  topicInput.addEventListener("input", () => {
    renderTopic(topicInput.value)
  })

  // turn the topic into a dropdown of topics
  const topics = Notes.map((n) => n.topic).filter(
    (t, i, a) => a.indexOf(t) === i
  )
  const topicItems = topics
    .map((t) => `<option value="${t}">${t}</option>`)
    .join("")
  const datalist = asHtml<HTMLDataListElement>(
    `<datalist id="topics">${topicItems}</datalist>`
  )
  topicInput.setAttribute("list", "topics")
  topicInput.parentNode?.insertBefore(datalist, topicInput.nextSibling)
}

function showBibleVerse(book: BookName, chapterVerse: string) {
  const [chapter, verse] = chapterVerse.split(":").map((n) => parseInt(n))
  return Bible[book].chapters[chapter].verses[verse]
}

function renderTopic(topic: string) {
  topic = topic.toLocaleLowerCase()
  const notes = Notes.filter((n) => n.topic.toLocaleLowerCase().includes(topic))
  // display the notes in a grid
  const grid = forceElement<HTMLDivElement>("grid", `<div class="grid"></div>`)

  grid.innerHTML = notes
    .map(
      (n) => `
    <div class="topic">
        <div class="book">${n.book} ${n.verse}</div>
        <div class="verse">${showBibleVerse(n.book, n.verse)}</div>
        <div class="note">${n.note}</div>
    </div>`
    )
    .join("")

  if (notes.length) {
    localStorage.setItem("topic", topic)
  }
}

function asHtml<T extends HTMLElement>(html: string) {
  const element = document.createElement("div")
  element.innerHTML = html
  return element.firstChild as T
}

function forceElement<T extends HTMLElement>(selector: string, html: string) {
  let element = document.querySelector(`[name="${selector}"`) as T
  if (!element) {
    element = asHtml<T>(html)
    element.setAttribute("name", selector)
    document.body.appendChild(element)
  }
  return element as T
}

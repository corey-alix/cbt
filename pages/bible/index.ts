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

function convertChapterVerseStringToChapterVerseArray(chapterVerse: string) {
  const result = [] as Array<{ chapter: number; verse: number }>
  // convert "1:1" to [{chapter:1, verse:1}]
  // convert "1:1-2" to [{chapter:1, verse:1}, {chapter:1, verse:2}]
  // convert "1:1-2:3" to [{chapter:1, verse:1}, {chapter:2, verse:3}]
  const [start, end] = chapterVerse.split("-")
  const [startChapter, startVerse] = start.split(":").map((n) => parseInt(n))
  result.push({ chapter: startChapter, verse: startVerse })
  if (!end) return result
  const [endChapter, endVerse] = end.split(":").map((n) => parseInt(n))
  if (!endVerse) {
    result.push({ chapter: startChapter, verse: endChapter })
  } else {
    result.push({ chapter: endChapter, verse: endVerse })
  }
  return result
}

function showBibleVerse(book: BookName, chapterVerse: string) {
  const refs = convertChapterVerseStringToChapterVerseArray(chapterVerse)
  return refs.map((ref) => getBibleVerseRef(book, ref)).join(" ")
}

function getBibleVerseRef(
  book: BookName,
  ref: { chapter: number; verse: number }
) {
  const { chapter, verse } = ref
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

type VerseType = Record<number, string>
type ChapterType = Record<number, { verses: VerseType }>
type BibleType = Record<string, { chapters: ChapterType }>

const Bible: BibleType = {
  Genesis: {
    chapters: {
      1: {
        verses: {
          1: "In the beginning God created the heaven and the earth.",
        },
      },
    },
  },
  Exodus: {
    chapters: {
      1: {
        verses: {
          1: "These are the names of the sons of Israel who went to Egypt with Jacob, each with his family:",
        },
      },
    },
  },
  Leviticus: {
    chapters: {
      1: {
        verses: {
          1: "The Lord called to Moses and spoke to him from the tent of meeting. He said,",
        },
      },
    },
  },
  Numbers: {
    chapters: {
      1: {
        verses: {
          1: "The Lord spoke to Moses in the tent of meeting in the Desert of Sinai on the first day of the second month of the second year after the Israelites came out of Egypt. He said:",
        },
      },
    },
  },
} as const

type BookName = keyof typeof Bible

const Notes = [
  {
    topic: "Creation",
    book: "Genesis",
    verse: "1:1",
    note: "There was a beginning, which was a concept I struggled with as a child, but which is totally reasonable.  How can there not be a beginning?  Something cannot be without a cause and yet we know God is.  This is where I have to trust in God's word and not my own understanding.",
  },
  {
    topic: "Slavery",
    book: "Exodus",
    verse: "1:1",
    note: "The brothers that sold Joseph into slavery begin there walk into 400 years of slavery. Our bad decisions have consequences, yet God uses them for ultimate good.",
  },
  {
    topic: "Faith",
    book: "Leviticus",
    verse: "1:1",
    note: "God literally calls to Moses and witnessing this, the people continued to sin against God. Trust can only come by faith.  God speaking to you would not be enough.",
  },
  {
    topic: "Faith",
    book: "Numbers",
    verse: "1:1",
    note: "God speaks to Moses about organizing armies - God expects us to do our part even when we feel inadequate.",
  },
] as Array<{
  topic: string
  book: BookName
  verse: string
  note: string
}>

export function run() {
  const topicInput = forceElement<HTMLInputElement>(
    "topic",
    `<input type="text" placeholder="Topic" />`
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

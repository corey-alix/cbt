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
  Deuteronomy: {
    chapters: {
      1: {
        verses: {
          1: "These are the words Moses spoke to all Israel in the wilderness east of the Jordan - that is, in the Arabah - opposite Suph, between Paran and Tophel, Laban, Hazeroth and Dizahab.",
        },
      },
    },
  },
  Joshua: {
    chapters: {
      1: {
        verses: {
          1: "After the death of Moses the servant of the Lord, the Lord said to Joshua son of Nun, Moses’ aide:",
        },
      },
    },
  },
  Judges: {
    chapters: {
      1: {
        verses: {
          1: "After the death of Joshua, the Israelites asked the Lord, “Who of us is to go up first to fight against the Canaanites?”",
        },
      },
    },
  },
  Ruth: {
    chapters: {
      1: {
        verses: {
          1: "In the days when the judges ruled, there was a famine in the land. So a man from Bethlehem in Judah, together with his wife and two sons, went to live for a while in the country of Moab.",
          17: "Where you die I will die, and there I will be buried. May the Lord deal with me, be it ever so severely, if even death separates you and me.",
        },
      },
    },
  },
  "1 Samuel": {
    chapters: {
      1: {
        verses: {
          1: "There was a certain man from Ramathaim, a Zuphite from the hill country of Ephraim, whose name was Elkanah son of Jeroham, the son of Elihu, the son of Tohu, the son of Zuph, an Ephraimite.",
          5: "But to Hannah he gave a double portion because he loved her, and the Lord had closed her womb.",
          11: "And she made a vow, saying, “Lord Almighty, if you will only look on your servant’s misery and remember me, and not forget your servant but give her a son, then I will give him to the Lord for all the days of his life, and no razor will ever be used on his head.”",
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
  {
    topic: "History",
    book: "Deuteronomy",
    verse: "1:1",
    note: "Know your story and know yourself. Be specific and be able to share the story well for future generations to hear.",
  },
  {
    topic: "Strength Courage",
    book: "Joshua",
    verse: "1:1",
    note: "God now speaks with Joshua, stressing the importance of knowing His word intimately.",
  },
  {
    topic: "Judgement Disobedience Forgetfulness",
    book: "Judges",
    verse: "1:1",
    note: "God is not speaking first, but the Israelites ask God who should go first to fight the Canaanites. It does not mention any other inquiries as the other tribes go.",
  },
  {
    topic: "Family",
    book: "Ruth",
    verse: "1:1",
    note: "Naomi wanted what was best for Ruth and that is why Ruth loved her so deeply.",
  },
  {
    topic: "Love",
    book: "Ruth",
    verse: "1:17",
    note: "Ruth's love for Naomi is poetically deep. Have can you earn such love?  By being a good friend and loving others.",
  },
  {
    topic: "History",
    book: "1 Samuel",
    verse: "1:1",
    note: "The story of Samuel begins with his father's love for Hannah.",
  },
  {
    topic: "Compassion",
    book: "1 Samuel",
    verse: "1:5",
    note: "Show people that you love them.",
  },
  {
    topic: "Purpose Destiny",
    book: "1 Samuel",
    verse: "1:11",
    note: "Hannah is asking for a purpose. She intuitively knows that she is meant to have a child and the unfulfilled longing is deep anguish.",
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

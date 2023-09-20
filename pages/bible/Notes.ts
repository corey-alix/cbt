import type { BookName } from "./Bible.js"

type Note = {
  topic: string
  book: BookName
  verse: string
  note: string
}

export const Notes = [
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
  {
    topic: "Life",
    book: "2 Samuel",
    verse: "1:1-2",
    note: "David was lethal yet retained sensitivity toward Saul. Hard but not hardened, he will do wrong but not be destroyed by it. Live in the sight of God and own your failures.",
  },
  {
    topic: "Urgency",
    book: "1 Kings",
    verse: "1:1",
    note: "David is old and cold.  Even great men die feeble. Do not waste your health.",
  },
  {
    topic: "Pride",
    book: "2 Kings",
    verse: "1:1",
    note: "Seeing God's punishment for outrageous, blatant pride does not create a fear of the Lord.",
  },
  {
    topic: "History",
    book: "1 Chronicles",
    verse: "1:1",
    note: "Identifying the family tree beginning with Adam.",
  },
  {
    topic: "History",
    book: "1 Chronicles",
    verse: "2:1-2:2",
    note: "Jacob's sons.",
  },
  {
    topic: "Greatness",
    book: "2 Chronicles",
    verse: "1:1",
    note: "Do not let Solomon's excesses offend; God makes Solomon great.",
  },
] as Array<Note>

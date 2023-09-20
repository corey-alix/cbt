export type VerseType = Record<number, string>
export type ChapterType = Record<number, { verses: VerseType }>
export type BibleType = Record<string, { chapters: ChapterType }>
export type BookName = keyof typeof Bible

export const Bible: BibleType = {
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
  "2 Samuel": {
    chapters: {
      1: {
        verses: {
          1: "After the death of Saul, David returned from striking down the Amalekites and stayed in Ziklag two days.",
          2: "On the third day a man arrived from Saul’s camp with his clothes torn and dust on his head. When he came to David, he fell to the ground to pay him honor.",
        },
      },
    },
  },
  "1 Kings": {
    chapters: {
      1: {
        verses: {
          1: "When King David was very old, he could not keep warm even when they put covers over him.",
        },
      },
    },
  },
  "2 Kings": {
    chapters: {
      1: {
        verses: {
          1: "After Ahab's death, Moab rebelled against Israel.",
        },
      },
    },
  },
  "1 Chronicles": {
    chapters: {
      1: {
        verses: {
          1: "Adam, Seth, Enosh...",
        },
      },
      2: {
        verses: {
          1: "These are the sons of Israel: Reuben, Simeon, Levi, Judah, Issachar, Zebulun,",
          2: "Dan, Joseph, Benjamin, Naphtali, Gad and Asher.",
        },
      },
    },
  },
  "2 Chronicles": {
    chapters: {
      1: {
        verses: {
          1: "Solomon son of David established himself firmly over his kingdom, for the Lord his God was with him and made him exceedingly great.",
        },
      },
    },
  },
} as const

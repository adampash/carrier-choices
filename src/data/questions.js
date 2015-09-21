const Questions = [
  // {
  //   text: "Which iPhone do you want?",
  //   answers: [
  //     {
  //       text: "iPhone 6S (16GB)",
  //       key: "6s16"
  //     },
  //     {
  //       text: "iPhone 6S (64GB)",
  //       key: "6s64"
  //     },
  //     {
  //       text: "iPhone 6S (128GB)",
  //       key: '6s128'
  //     },
  //     {
  //       text: "iPhone 6S Plus (16GB)",
  //       key: "6sp16"
  //     },
  //     {
  //       text: "iPhone 6S Plus (64GB)",
  //       key: "6sp64"
  //     },
  //     {
  //       text: "iPhone 6S Plus (128GB)",
  //       key: '6sp128'
  //     },
  //   ],
  //   optional: false
  // },
  {
    text: "What's your carrier?",
    answers: [
      {
        text: "Verizon",
        key: "verizon"
      },
      {
        text: "AT&T",
        key: "att"
      },
      {
        text: "T-Mobile",
        key: 'tmobile'
      },
      {
        text: "Sprint",
        key: 'sprint'
      }
    ],
    optional: false
  },
  {
    text: "How do you want to pay for your phone?",
    answers: [
      {
        text: "Pay off the entire phone up front.",
        key: "payoff"
      },
      {
        text: "Pay it slowly off over time.",
        key: "slow"
      }
    ],
    optional: false
  },
  {
    text: "Do you want to keep your old phones?",
    answers: [
      {
        text: "I want to keep or sell my old phone.",
        key: 'sell'
      },
      {
        text: "I'm okay with trading in my old phones.",
        key: 'trade',
      }
    ],
    optional: false
  },
  {
    text: "How often do you want to upgrade?",
    answers: [
      {
        text: "Every six months or less.",
        key: 'six'
      },
      {
        text: "Between one and two years.",
        key: 'one_and_two'
      },
      {
        text: "Every two years or more.",
        key: 'two_or_more'
      }
    ],
    optional: true
  },
  // {
  //   text: "Are subsidies or carrier financing cheaper?",
  //   answers: [
  //     "Verizon",
  //     "AT&T",
  //     "T-Mobile",
  //     "Sprint"
  //   ],
  //   optional: true
  // },
]

export default Questions

const Key = {
  verizon: {
    payoff: 'outright',
    slow: {
      sell: {
        yes: 'apple_finance',
        no: 'financing'
      },
      trade: {
        yes: 'apple_lease',
        no: 'carrier_lease'
      }
    },
  },
  att: {
    payoff: 'outright',
    slow: {
      sell: {
        yes: 'apple_finance',
        no: 'financing'
      },
      trade: 'apple_lease'
    },
  },
  tmobile: {
    payoff: 'outright',
    slow: {
      sell: {
        yes: 'apple_finance',
        no: 'financing'
      },
      trade: {
        yes: 'apple_lease',
        no: 'carrier_lease'
      }
    },
  },
  sprint: {
    payoff: 'outright',
    slow: {
      sell: {
        yes: 'apple_finance',
        no: 'financing'
      },
      trade: {
        yes: 'apple_lease',
        no: 'carrier_lease'
      }
    },
  }
}

export default Key

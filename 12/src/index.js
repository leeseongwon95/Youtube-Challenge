const coinInfo = document.getElementById('jsCoinInfo')

const API_URL = 'https://api.coinpaprika.com/v1/tickers'

coinInfo.innerHTML = 'Load coin info...'

function getCoinInfo() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      coinInfo.innerHTML = ''
      data.forEach((item, index, arr) => {
        const {
          name,
          quotes: {
            USD: { price },
          },
        } = item
        const li = document.createElement('li')
        const coinName = document.createElement('span')
        const coinPrice = document.createElement('span')
        coinName.innerHTML = `${name} : `
        coinPrice.innerHTML = price
        li.appendChild(coinName)
        li.appendChild(coinPrice)
        coinInfo.append(li)
      })
      console.log('Load Coin Info')
    })
    .catch((error) => {
      console.log(error)
    })
}

function init() {
  getCoinInfo()
  setInterval(() => {
    getCoinInfo()
  }, 5000)
}

init()

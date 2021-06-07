
document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'goku',
            img: 'images/Goku.png'
        },
        {
            name: 'goku',
            img: 'images/Goku.png'
        },
        {
            name: 'cell',
            img: 'images/Cell.png'
        },
        {
            name: 'cell',
            img: 'images/Cell.png'
        },
        {
            name: 'freeza',
            img: 'images/Freeza.png'
        },
        {
            name: 'freeza',
            img: 'images/Freeza.png'
        },
        {
            name: 'gohan',
            img: 'images/Gohan.png'
        },
        {
            name: 'gohan',
            img: 'images/Gohan.png'
        },
        {
            name: 'kuririn',
            img: 'images/Kuririn.png'
        },
        {
            name: 'kuririn',
            img: 'images/Kuririn.png'
        },
        {
            name: 'piccolo',
            img: 'images/Piccolo.png'
        },
        {
            name: 'piccolo',
            img: 'images/Piccolo.png'
        },
        {
            name: 'trunks',
            img: 'images/Trunks.png'
        },
        {
            name: 'trunks',
            img: 'images/Trunks.png'
        },
        {
            name: 'vegeta',
            img: 'images/Vegeta.png'
        },
        {
            name: 'vegeta',
            img: 'images/Vegeta.png'
        }
    ]
  
    cardArray.sort(() => 0.5 - Math.random())
  
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []
  
    
    function createBoard() {
      for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/ShenlongF.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
      }
    }
  
    function checkForMatch() {
      const cards = document.querySelectorAll('img')
      const optionOneId = cardsChosenId[0]
      const optionTwoId = cardsChosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/ShenlongF.png')
        cards[optionTwoId].setAttribute('src', 'images/ShenlongF.png')
        alert('Você clicou na mesma imagem!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        alert('Você encontrou o par.')
        cards[optionOneId].setAttribute('src', 'images/ShenlongB.png')
        cards[optionTwoId].setAttribute('src', 'images/ShenlongB.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'images/ShenlongF.png')
        cards[optionTwoId].setAttribute('src', 'images/ShenlongF.png')
        alert('Errado, tente novamente.')
      }
      cardsChosen = []
      cardsChosenId = []
      resultDisplay.textContent = cardsWon.length
      if  (cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = ' Parabéns! Você é bom de memória!'
      }
    }
  
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
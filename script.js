const name = prompt('Enter Your User Name')

alert(`Welcome ${name} Guess a number between 1 and 2`)
let question = Math.floor(Math.random() * 2) + 1;


if (question == prompt('Enter a number between 1 and 2')) {
  alert('Correct Score Your point is 1, Guess a number between 1 and 3')

  question = Math.floor(Math.random() * 3) + 1;

  if (question == prompt('Enter a number between 1 and 3')) {

    alert('Correct Score Your point 2,guess a number between 1 and 4')

    question = Math.floor(Math.random() * 4) + 1;
    if (question == prompt('Enter a number between 1 and 4')) {
      alert('Conratulations! You Won,Total points 3')

    } else {
      alert('game over your score is 2')
    }


  } else {
    alert('game over your score is 1')
  }
} else {
  alert('Whoops game over')
}


const canvas = document.querySelector('canvas'), ctx = canvas.getContext('2d')
  
function has_game_ended() {
  for (let i = 4; i < snake.length; i++)
  if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
  return snake[0].x < 0 || snake[0].y < 0 || snake[0].x > canvas.width - 10 || snake[0].y > canvas.height - 10
}

class Board {
  constructor(width, height, squareSize){
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'darkblue';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeRect(0, 0, width, height);
  }
clear(){
  ctx.fillStyle = 'white'
  ctx.strokeStyle = 'black'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.strokeRect(0, 0, canvas.width, canvas.height)

}
}
  
document.addEventListener('keydown', event => {
  if (event.keyCode === 37 ) snake.direction = {x: -10, y: 0} //L
  if (event.keyCode === 38 ) snake.direction = {x: 0, y: -10} //U
  if (event.keyCode === 39 ) snake.direction = {x: +10, y: 0} //R
  if (event.keyCode === 40 ) snake.direction = {x: 0, y: +10} //D
  if (event.keyCode === 81 ) snake.alive = false //morreu
  })
  
  class Snake {
    constructor(snake){this.snake = snake}
    print(){
      this.snake.forEach(({x, y}) => {
        ctx.fillStyle = 'lightblue'
        ctx.strokeStyle = 'darkblue'
        ctx.fillRect(x, y, 10, 10)
        ctx.strokeRect(x, y, 10, 10)
      })}
      direction = {x: 10, y: 0}
      alive = true
      move(){
        this.snake.push({x: this.snake.slice(-1)[0].x+snake.direction.x, y: this.snake.slice(-1)[0].y+snake.direction.y})
        this.snake.shift()
        board.clear()
        snake.print()
        console.log(this.direction)
        
      }
    }
    
    let board = new Board(400, 400, 1);
    let snake = new Snake([{x: 160, y: 200}, {x: 170, y: 200}, {x: 180, y: 200}, {x: 190, y: 200}, {x: 200, y: 200}])
    snake.print()
   


    setInterval(function () {
      snake.move()
  }, 200);
  
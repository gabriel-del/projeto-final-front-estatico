const board_border = 'black';
    const board_background = "white";
    const snake_col = 'lightblue';
    const snake_border = 'darkblue';
    
    let snake = [{x: 200, y: 200}, {x: 190, y: 200},{x: 180, y: 200}, {x: 170, y: 200}, {x: 160, y: 200} ]

    let changing_direction = false;
    let dx = 10, dy = 0;
    
    const canvas = document.querySelector('canvas') 
    const ctx = canvas.getContext("2d");
    main(); 

    document.addEventListener("keydown", change_direction);
    
    function main() { 

        if (has_game_ended()) return; 

        changing_direction = false;
        setTimeout(function onTick() {
        clear_board();
        move_snake();
        drawSnake();
        // Call main again
        main();
      }, 100)
    }
        function clear_board() {
      ctx.fillStyle = board_background;
      ctx.strokestyle = board_border;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
    }
    
    function drawSnake() {
      snake.forEach(drawSnakePart)
    }
    
    function drawSnakePart(snakePart) {

      ctx.fillStyle = snake_col;
      ctx.strokestyle = snake_border;
      ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
      ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    function has_game_ended() {
      for (let i = 4; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) return true
      }
      const hitLeftWall = snake[0].x < 0;
      const hitRightWall = snake[0].x > canvas.width - 10;
      const hitToptWall = snake[0].y < 0;
      const hitBottomWall = snake[0].y > canvas.height - 10;
      return hitLeftWall || hitRightWall || hitToptWall || hitBottomWall
    }

    function change_direction(event) {
      const LEFT_KEY = 37, RIGHT_KEY = 39, UP_KEY = 38, DOWN_KEY = 40;
    
      if (changing_direction) return;
      changing_direction = true;
      const keyPressed = event.keyCode;
      const goingUp = dy === -10;  
      const goingDown = dy === 10;
      const goingRight = dx === 10;
      const goingLeft = dx === -10;
      if (keyPressed === LEFT_KEY && !goingRight) { dx = -10; dy = 0;}
      if (keyPressed === UP_KEY && !goingDown) {dx = 0; dy = -10;}
      if (keyPressed === RIGHT_KEY && !goingLeft) {dx = 10; dy = 0;}  
      if (keyPressed === DOWN_KEY && !goingUp) {dx = 0;dy = 10;}
    }

    function move_snake() {
      const head = {x: snake[0].x + dx, y: snake[0].y + dy};
      snake.unshift(head);
      snake.pop();
    }
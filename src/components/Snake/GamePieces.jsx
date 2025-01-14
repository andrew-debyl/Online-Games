import React, { useEffect, useRef } from "react";

const GamePieces = ({ setScore, onGameOver }) => {
  const canvasRef = useRef();
  const snakeRef = useRef([
    { x: 100, y: 50 },
    { x: 95, y: 50 },
  ]);
  const appleRef = useRef({ x: 100, y: 100 });
  const directionRef = useRef(null);
  const prevDirection = useRef(null);

  const SNAKE_SPEED = 10;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const drawSnake = () => {
      snakeRef.current.forEach((snakePart) => {
        ctx.beginPath();
        ctx.rect(snakePart.x, snakePart.y, 10, 10);
        ctx.fillStyle = "#306850";
        ctx.fill();
        ctx.closePath();
      });
    };

    const drawApple = () => {
      ctx.beginPath();
      ctx.rect(appleRef.current.x, appleRef.current.y, 10, 10);
      ctx.fillStyle = "#FF0000";
      ctx.fill();
      ctx.closePath();
    };

    const drawBackground = (canvas, ctx) => {
      const squareSize = 20;
      const colors = ["#D0F0C0", "#e0f8cf"];

      for (let y = 0; y < canvas.height; y += squareSize) {
        for (let x = 0; x < canvas.width; x += squareSize) {
          ctx.beginPath();
          ctx.rect(x, y, squareSize, squareSize);
          ctx.fillStyle =
            (x / squareSize + y / squareSize) % 2 === 0 ? colors[0] : colors[1];
          ctx.fill();
          ctx.closePath();
        }
      }
    };

    const moveSnake = () => {
      if (directionRef.current) {
        const newSnake = [...snakeRef.current];
        const snakeHead = { x: newSnake[0].x, y: newSnake[0].y };

        handleWallCollision(snakeHead);

        for (let i = newSnake.length - 1; i > 0; i--) {
          newSnake[i].x = newSnake[i - 1].x;
          newSnake[i].y = newSnake[i - 1].y;
        }

        if (directionRef.current === "right") {
          snakeHead.x += SNAKE_SPEED;
          prevDirection.current = "right";
        } else if (directionRef.current === "left") {
          snakeHead.x -= SNAKE_SPEED;
          prevDirection.current = "left";
        } else if (directionRef.current === "up") {
          snakeHead.y -= SNAKE_SPEED;
          prevDirection.current = "up";
        } else if (directionRef.current === "down") {
          snakeHead.y += SNAKE_SPEED;
          prevDirection.current = "down";
        }

        newSnake[0] = snakeHead;
        handleAppleCollision(newSnake);
        handleBodyCollision(newSnake);

        snakeRef.current = newSnake;
      }
    };

    const handleBodyCollision = (newSnake) => {
      const snakeHead = newSnake[0];

      for (let i = 1; i < newSnake.length; i++) {
        if (snakeHead.x === newSnake[i].x && snakeHead.y === newSnake[i].y)
          onGameOver("self");
      }
    };

    const handleWallCollision = (snakeHead) => {
      if (
        snakeHead.x + SNAKE_SPEED > canvas.width ||
        snakeHead.x + SNAKE_SPEED < 0
      )
        onGameOver("wall");
      if (
        snakeHead.y + SNAKE_SPEED > canvas.height ||
        snakeHead.y + SNAKE_SPEED < 0
      )
        onGameOver("wall");
    };

    const handleAppleCollision = (newSnake) => {
      const snakeHead = newSnake[0];

      if (
        snakeHead.x === appleRef.current.x &&
        snakeHead.y === appleRef.current.y
      ) {
        setScore((prevScore) => prevScore + 1);

        appleRef.current = {
          x:
            Math.floor((Math.random() * canvas.width) / SNAKE_SPEED) *
            SNAKE_SPEED,
          y:
            Math.floor((Math.random() * canvas.height) / SNAKE_SPEED) *
            SNAKE_SPEED,
        };

        newSnake.push({
          x: newSnake[newSnake.length - 1].x,
          y: newSnake[newSnake.length - 1].y,
        });
      }
    };

    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowRight":
          if (prevDirection.current !== "left") {
            directionRef.current = "right";
          }
          break;
        case "ArrowLeft":
          if (prevDirection.current !== "right") {
            directionRef.current = "left";
          }
          break;
        case "ArrowUp":
          if (prevDirection.current !== "down") {
            directionRef.current = "up";
          }
          break;
        case "ArrowDown":
          if (prevDirection.current !== "up") {
            directionRef.current = "down";
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    const interval = setInterval(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground(canvas, ctx);
      drawSnake();
      drawApple();
      moveSnake();
    }, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <canvas className="gameCanvas" ref={canvasRef} width={650} height={420} />
  );
};

export default GamePieces;

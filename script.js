function getRandomDirection() {
    return Math.random() > 0.5 ? 1 : -1;
}

function moveBalls() {
    var balls = document.getElementsByClassName('ball');
    var container = document.querySelector('.container');
    var containerWidth = container.offsetWidth;
    var containerHeight = container.offsetHeight;

    for (var i = 0; i < balls.length; i++) {
        var ball = balls[i];
        var ballWidth = ball.offsetWidth;
        var ballHeight = ball.offsetHeight;
        var posX = parseInt(ball.style.left) || 0;
        var posY = parseInt(ball.style.top) || 0;
        var speedX = parseInt(ball.getAttribute('data-speed-x')) || getRandomDirection();
        var speedY = parseInt(ball.getAttribute('data-speed-y')) || getRandomDirection();

        if (posX + speedX < 0 || posX + ballWidth + speedX > containerWidth) {
            speedX *= -1;
        }

        if (posY + speedY < 0 || posY + ballHeight + speedY > containerHeight) {
            speedY *= -1;
        }

        posX += speedX;
        posY += speedY;

        ball.style.left = posX + 'px';
        ball.style.top = posY + 'px';
        ball.setAttribute('data-speed-x', speedX);
        ball.setAttribute('data-speed-y', speedY);
    }

    requestAnimationFrame(moveBalls);
}

var balls = document.getElementsByClassName('ball');

for (var i = 0; i < balls.length; i++) {
    var ball = balls[i];
    var posX = Math.random() * (500 - ball.offsetWidth);
    var posY = Math.random() * (500 - ball.offsetHeight);

    ball.style.left = posX + 'px';
    ball.style.top = posY + 'px';
}

moveBalls();

var c = document.querySelector(`#pong`)
var ctx = c.getContext(`2d`)
var timer = setInterval(main, 1000/60)

var fy = .85

var p1 = new Box();
p1.w = 20
p1.h = 150
p1.x = 0 +p1.w/2
var p2 = new Box();
p2.w = 20
p2.h = 150
p2.x = 780 + p2.w/2

var ball = new Box();
ball.w=20
ball.h=20
ball.vx=-2
ball.vy = -2
ball.color= "blue"






function main()
{
    ctx.clearRect(0,0,c.width,c.height)
    if (keys[`w`])
    {
        p2.vy += -p2.force
    }
    if(keys[`s`])
    {
        p2.vy += p2.force
    }
    if (keys[`e`])
    {
        p1.vy += -p1.force
    }
    if(keys[`d`])
    {
        p1.vy += p1.force
    }
    p1.vy *= fy
    p1.move();
    p2.vy *= fy
    p2.move();
    ball.move();

    if (p1.y < 0+p1.h/2)
    {
        p1.y = 0+p1.h/2;
    }
    if (p1.y > c.height-p1.h/2)
    {
        p1.y = c.height - p1.h/2;
    }
    if (p2.y < 0+p2.h/2)
    {
        p2.y = 0+p2.h/2;
    }
    if (p2.y > c.height-p2.h/2)
    {
        p2.y = c.height - p2.h/2;
    }
    if(ball.collide(p1))
    {
        ball.x = p1.x + p1.w/2 +ball.w/2
        ball.vx = -ball.vx;
    }
    if(ball.collide(p2))
    {
        ball.x = p2.x + p2.w/2 +ball.w/2
        ball.vx = ball.vx;
    }
    if (ball.x < 0)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if(ball.x >c.width)
    {
        ball.x = c.width
        ball.vx = -ball.vx
    }
    if(ball.y <0)//goes off y axis
    {
        ball.y = 0
        ball.vy = -ball.vy
    }
    if (ball.x > 785)
    {
        ball.x = c.width/2
        ball.y = c.height/2
    }
    if (ball.y > c.height)
    {
        ball.y = c.height
        ball.vy = -ball.vy
    }
    
    p1.draw()
    p2.draw()
    ball.draw()
}

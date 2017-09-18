new Rect(10,10,100,100)
.addTo(stage)
.attr('fillColor', 'red')
.animate(new KeyframeAnimation('1000ms',{
    from:{x: 200, y: 10},
    to: {x: 10, y: 10}
}
))
new Rect(10,10,100,100)
.addTo(stage)
.attr( 'fillColor','blue')
//.attr('strokeColor', 'black','strokeWidth 5' )
.animate(new KeyframeAnimation('1000ms',{

    from:{x: 10, y: 10},
    to: {x: 200, y: 10}
}
))
new Rect(10,10,100,100)
.addTo(stage)
.attr( 'fillColor','yellow')
.animate(new KeyframeAnimation('1000ms',{

    from:{x: 200, y: 200},
    to: {x: 10, y: 10}
}
))
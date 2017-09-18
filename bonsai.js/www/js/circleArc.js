new Circle(0,5,12)//coord x,y,radio
.addTo(stage)
.attr('fillColor', 'red')
.animate(new KeyframeAnimation('4500ms',{
    from:{x: 0, y: 5},
    '1s': {x: 300, y: 5},
    '2.5s': {x: 300, y: 450},
    to: {x: 0, y: 5}
}
))
new Arc(0,5,12,(Math.PI / 180) * 60,(Math.PI / 180) * 300)
.addTo(stage)
.attr( 'fillColor','blue')
.animate(new KeyframeAnimation('4500ms',{

    from:{x: 0, y: 5},
    '1.3s': {x: 300, y: 5},
    '2.7s': {x: 300, y: 450},
    to: {x: 0, y: 5}
}
))
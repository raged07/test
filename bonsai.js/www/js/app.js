new Rect(10,10,200,100)
.addTo(stage)
.attr('fillColor','green')

.animate('3s',{
    x: 200,
    y: 300
},{
    easing: 'bounceIn',
    delay: '100ms'
});

new Circle(500,500,100)
.addTo(stage)
.attr('fillColor', 'red')

//mover el rectangulo de lado a lado, gist sep 7
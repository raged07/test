let numStars = 7;
let width = 500;
let height = 500;

let stars = (function(star){
    let stars = [];
    for(let i=0; i<numStars; i++){
        let h = i * 360 / numStars;
        stars[i] = star.clone().attr({
            fillColor: 'hsl('+ h +', 100%, 50%)',
            x: width,
            y: height
        })
    }
    return stars;
})(new Star(width/2, height/2, 0.5, 5));// x, y, radio, factor de multiplicacion(5 puntas de estrella)
stage.length(1);

let i=0;
stage.on(0, function(){
    let star = stars[i];
    star.attr({
        scaleX: 3,
        scaleY: 10,
        opacity: 1
    }).addTo(stage).animate(20 * numStars,{//tiempo de animacion 14 seg
        scaleX: width*20,
        scaleY: height*20,
        opacity: 1
    },{isTimeLineBound: false});

    i = (i + 1) % numStars;
    stage.removeChild(star[i]);
})
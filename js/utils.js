//General Functions
function degreesToRadians(degrees){
	return degrees*Math.PI/180;
}

function radiansToDegrees(radians){
    return radians*180/Math.PI;
}

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDistance(x1, y1, x2, y2){
    var dx = x2-x1;
    var dy = y2-y1;
    return Math.sqrt(dx*dx + dy*dy);
}

//Reference: Material Design color scheme from http://htmlcolorcodes.com/color-chart/
var color = {
    red:   vec4(229/255,  57/255,  53/255, 1.0),
    blue:  vec4( 57/255,  73/255, 171/255, 1.0),
    white: vec4(255/255, 255/255, 255/255, 1.0),
    black: vec4(  0/255,   0/255,   0/255, 1.0),
    yellow:vec4(255/255, 179/255,   0/255, 1.0),
    green: vec4( 67/255, 160/255,  71/255, 1.0),
    gray:  vec4( 84/255, 110/255, 122/255, 1.0),
    brown: vec4(109/255,  76/255,  65/255, 1.0),
    ltblue:vec4(179/255, 229/255, 252/255, 1.0),   //different luminance for background...
    orange:vec4(245/255, 124/255,   0/255, 1.0),
    drkgry:vec4(0.2, 0.2, 0.2, 1.0) //default color for ambient
}
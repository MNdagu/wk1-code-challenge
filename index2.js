function speedDetector(){
    let speed = parseInt(document.getElementById("speed").value);
    let points = 0

    if (speed <= 70){
        document.getElementById("print").innerHTML= 'Ok';
    }else {
        points = Math.floor(speed - 70) / 5;

        if(points > 12){
            document.getElementById("print").innerHTML= 'License suspended!';
        
        }else{
            document.getElementById("print").innerHTML= `You have ${points} demerit points!`;
        
        }
    }
 }

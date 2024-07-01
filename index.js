function gradeGenerator(){
    let mark = prompt('Enter mark:');
//if value entered is not a number or is greater than 100,the alert should pop up
    if(isNaN(mark) || mark > 100){
        alert('Please enter a valid number for your mark.')
        return;
    }

    if (mark >= 80){
        document.getElementById("grade").innerHTML= 'You got an A!';
    }else if(mark >= 60){
        document.getElementById("grade").innerHTML= 'You got an B!';;
    }else if(mark >= 50){
        document.getElementById("grade").innerHTML= 'You got an C!';;
    }else if(mark >= 40){
        document.getElementById("grade").innerHTML= 'You got an D!';;
    }else {
        document.getElementById("grade").innerHTML= 'You got an E!';;
    }
    
    return;

}

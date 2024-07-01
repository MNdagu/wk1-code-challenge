function calculator(){
    let basic = parseInt(document.getElementById("basic").value);
    let benefits = parseInt(document.getElementById("benefits").value);

//If the inputs of basic and benefits are not a number,the alert should pop up
    if(isNaN(basic) && isNaN(benefits)){
        alert('Please enter a valid number');
        return;
    }
//Calculate gross salary
    let gross = Math.round(basic + benefits);

//Calculate PAYE
    let paye = 0;
    if(gross <= 28895){
        paye = Math.round(gross * 0.1);
    }else if( gross <= 38895){
        paye = Math.round(gross * 0.15);
    }else if(gross <= 56395){
        paye = Math.round(gross * 0.2);
    }else if( gross <= 71695){
        paye = Math.round(gross * 0.3);
    }else{
        paye = Math.round(gross * 0.5);
    };


//Calculate nhif
    let nhif = 0;
    if (gross <= 5999){
        nhif = 150;
    }else if(gross <= 7999){
        nhif = 300;
    }else if(gross <= 11999){
        nhif = 400;
    }else if(gross <= 14999){
        nhif = 500;
    }else if(gross <= 19999){
        nhif = 600;
    }else if(gross <= 24999){
        nhif = 750;
    }else if(gross <= 29999){
        nhif = 850;
    }else if(gross <= 34999){
        nhif = 900;
    }else if(gross <= 39999){
        nhif = 950;
    }else if(gross <= 44999){
        nhif = 1000;
    }else if(gross <= 49999){
        nhif = 1100;
    }else if(gross <= 59999){
        nhif = 1200;
    }else if(gross <= 69999){
        nhif = 1300;
    }else if(gross <= 79999){
        nhif = 1400;
    }else if(gross <= 89999){
        nhif = 1500;
    }else if(gross <= 99999){
        nhif = 1600;
    }else{
        1700;

    };


//Calculate nssf
    let nssf = Math.round(gross * 0.03);
//Calculate Net salary
    let net = Math.round(gross - (paye + nhif + nssf));

//Print out the results in our html document
    document.getElementById("result").innerHTML = 
    `<p>Your Gross salary is : ${gross}Ksh</p>
    <p>Your NHIF deduction is : ${nhif}Ksh</p>
    <p>Your NSSF deduction is : ${nssf}Ksh</p>
    <p>Your PAYE is : ${paye}Ksh</p>
    <p>Your Net salary is : ${net}Ksh</p>`

};


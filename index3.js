function calculator(){
    let basic = parseInt(document.getElementById("basic").value);
    let benefits = parseInt(document.getElementById("benefits").value);

    if(isNaN(basic) && isNaN(benefits)){
        alert('Please enter a valid number');
        return;
    }

    let gross = Math.round( basic + benefits);
    let paye = Math.round (0.25 * gross);
    let nhif = Math.round(0.0275 * gross);
    let nssf = Math.round(0.03 * gross);
    let net = Math.round(gross - (paye + nhif + nssf));

    document.getElementById("result").innerHTML = 
    `<p>Your Gross salary is ${gross}Ksh</p>
    <p>Your NHIF deduction is ${nhif}Ksh</p>
    <p>Your NSSF deduction is ${nssf}Ksh</p>
    <p>Your PAYE is ${paye}Ksh</p>
    <p>Your Net salary is ${net}Ksh</p>`

};


import React from "react";
function Emailcheck(email){
    //console.log(email);
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.match(mailformat)){
        return true;
    }else{
        return 'Email is not valid'
    }
}

function Inputcheck(inputvl){
    if(inputvl=='' || inputvl==null || inputvl==undefined){
        return 'Input value is required';
    }else{
        return true;
    }
}

function Phonecheck(phoneinput){
    const phoneno = /^\d{10}$/;
    if(phoneinput.value.match(phoneno)){
        return true;
    }else{
        return 'Phone no is not valid';
    }
}

const Validcheck = {
    Emailcheck,
    Inputcheck,
    Phonecheck,
}

export default Validcheck;

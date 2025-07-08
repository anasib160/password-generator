document.getElementById("submit").onclick=function generatePass(){
    let passwordLength = parseInt(document.getElementById("passwordLength").value) ;
    let upperCase = document.getElementById("upperCase").checked ;
    let LowerCase = document.getElementById("LowerCase").checked ;
    let symbools = document.getElementById("symbools").checked;
    let numb = document.getElementById("numb").checked ;

    let low = "abcdefghijklmnopqrstuvwxyz";
    let upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbber = "01234567890123456789";
    let symbols ="!@#$%^&*()!@#$%^&*()";
    
    let password = [];
    let finalpasswd = [];

    password += LowerCase ?  low : "";
    password += upperCase ?  upp : "";
    password += symbools ?  symbols : "";
    password += numb ?  numbber : "";
    console.log(password);
    for( let i=0 ; i < passwordLength ; i++){
        let indxpw = Math.floor(Math.random() * password.length);
        finalpasswd += password[indxpw];
    }

    if(passwordLength<1 || passwordLength==null){
        document.getElementById("res").textContent="you must pick a Password Length > 1" ;
    }else if (password == ""){
        document.getElementById("res").textContent="you must pick a choice" ;
    }else{
        document.getElementById("res").textContent="Your password is  : " + finalpasswd;
    }
};

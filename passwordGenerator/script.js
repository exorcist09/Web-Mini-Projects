const passwordBox= document.getElementById("password")

const length = 16;

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number ="1234567890"
const symbol ="!@#$%^&*><{}[]+=-~`"

const altChars =upperCase +lowerCase+number+symbol;

const createPass=()=>{
    let password="";
    password +=upperCase[Math.floor(Math.random()*upperCase.length)];
    password +=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password +=number[Math.floor(Math.random()*number.length)];
    password +=symbol[Math.floor(Math.random()*symbol.length)];

    while(length > password.length){
        password +=altChars[Math.floor(Math.random()*altChars.length)];
    }

    passwordBox.value =password;
}

const copyFun=()=>{
    passwordBox.select();
    document.execCommand("copy");
}
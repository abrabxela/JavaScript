/*1*/
let firstName = "Oleksii";
let  lastName="Barba";
let fullName=`${firstName} ${lastName}`;
console.log (fullName);
/*2*/
let a=20;
let b=30;
let p=a*b;
console.log (`${p}`);
/*3*/
let faktorial=10**6;
console.log(`${faktorial}`);
/*4*/
randomNumber=Math.floor(Math.random()*50);
console.log(`${randomNumber}`);
/*5*/
let number5=0;
if (number5<0){
console.log("negative value");}
else if (number5==0) {
console.log("number is 0");}
else {
console.log("positive value");}
/*6*/
let text="immortal";
if ( text.length>1)
console.log(text.charAt((text.length)-2));
else console.log("text to small");
/*7*/
let number=1;
switch (number)
{
case 1:
console.log("Січень");
break;
case 2:
console.log("Лютий");
break;
case 3:
console.log("Березень");
break;
case 4:
console.log("Квітень");
break;
case 5:
console.log("Травень");
break;
case 6:
console.log("Червень");
break;
case 7:
console.log("Липень");
break;
case 8:
console.log("Серпень");
break;
case 9:
console.log("Вересень");
break;
case 10:
console.log("Жовтень");
break;
case 11:
    console.log("Листопад");
    break;
case 12:
    console.log("Грудень");
    break;
default:
    console.log("такого місяця не існує")
}
/*8*/
let passwd="xdkjghjioh&"
if (5<passwd.length&&passwd.indexOf("&")>=0){
    console.log("Пароль надійний");}
    else {console.log("Пароль не надійний");
}
/*9*/
let valueA=3;
let valueB=5;
if (typeof(valueA)=="number"&&typeof(valueB)=="number"){
    console.log(valueA+valueB);
}
else{console.log("Sum of those items can’t be counted");}
/*10*/
let textOne="sdfqfds";
let textTwo="rewrty";
if (typeof(textOne)=="string"&&typeof(textTwo)=="string"&&textOne.length==textTwo.length)
{
    console.log("those items are strings and they’re equal");
}
else{console.log("items are not compareble");}

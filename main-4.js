//1
let number1 =Number(prompt('ввести числo ')); 
let number2 = Number(prompt('ввести числo '));
let number3 = Number(prompt('ввести числo '));
 let resu$lt;

if (number1 >= number2 && number1 >= number3){
      resu$lt = number1;
}else if (number2 >= number1 && number2 >= number3){
    resu$lt = number2;
}else {
    resu$lt =number3; 
}

console.log(` найбільшим числом буде : ${resu$lt}`);




//2
let month = Number(prompt('напишите какой месяц'));
if (month === 12 || month === 2 || month === 1){
    console.log("зима");
} else if (month === 5 || month === 3 || month === 4 ){
    console.log("весна")
} else if (month === 8 || month === 6 || month === 7){
    console.log("лето");
} else if (month === 11 || month === 9 || month === 10 ){
   console.log("осень");
} else if (month === ''){
    console.log(' ведите число:(');
} else {
    console.log('введите коректный месяц');
}


//3
let m = Number(prompt( 'ввести число'));
let a;

if (m > 0){
    a = "положительное";
}else if (m < 0){
    a = 'отрицательное';
}else{
    a = 'нуль';
}

console.log(a);





//4
let userGradus = Number(prompt('введите велечину угла в градусах')); 
let result = userGradus > 90 ? "тупой угол" : "острый угол";

console.log(result);





//5
let uzerStudent = Number(prompt("введите оценку от 0 до 100"));
let resalt;
if (uzerStudent >= 90){
    resalt = uzerStudent;
}else if (uzerStudent >= 80){
   resalt = uzerStudent;
}else if (uzerStudent >= 70){
    resalt = uzerStudent;
}else if (uzerStudent >= 60){
    resalt = uzerStudent;
}else {
    resalt = uzerStudent;
}

console.log(resalt);



let uzer;
if (uzerStudent >= 90){
    uzer = 'A';
}else if (uzerStudent >= 80){
    uzer = 'B';
}else if (uzerStudent >= 70){
    uzer = 'C';
}else if (uzerStudent >= 60){
    uzer = 'D';
}else {
    uzer = 'F';
}

console.log(uzer);

resalt++;

console.log(` increment-   ${resalt}`);

let UserStudent = uzerStudent >= 60 ? "прошел":"не прошeл";
console.log(UserStudent);





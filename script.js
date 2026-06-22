let questions=[
{
question:"HTML nə üçün istifadə olunur?",
options:["Structure","Database","Server"],
answer:"Structure"
},
{
question:"CSS nə edir?",
options:["Style verir","Məlumat saxlayır","Proqram yazır"],
answer:"Style verir"
},
{
question:"JavaScript nədir?",
options:["Programming language","Browser","Design tool"],
answer:"Programming language"
}
];

let current=0;
let score=0;
let selected=null;

function showQuestion(){
let quiz=document.getElementById("quiz");
let q=questions[current];

quiz.innerHTML=`
<h3>${q.question}</h3>
`;

q.options.forEach(option=>{

let button=document.createElement("button");

button.innerText=option;
button.className="option";

button.onclick=function(){
selected=option;

let buttons=document.querySelectorAll(".option");

buttons.forEach(btn=>{
btn.style.background="#eee";
});

button.style.background="#4caf50";
};

quiz.appendChild(button);

});

}

function nextQuestion(){

if(selected==null){
alert("Choose an answer");
return;
}

if(selected==questions[current].answer){
score++;
}

current++;
selected=null;

if(current<questions.length){
showQuestion();
}else{

document.getElementById("quiz").innerHTML="";

document.getElementById("result").innerHTML=
"Your score: "+score+"/"+questions.length;
document.getElementById("nextBtn").style.display="none"

}
}

showQuestion(); 

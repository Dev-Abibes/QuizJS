

const quizData = [
    {
        question: 'How old is Macron ?',
        a: '44',
        b: '42',
        c: '46',
        d: '45',
        correct:'c' 
    }, {
        question: 'what is the best programming language in 2022 ?',
        a: 'js',
        b: 'php',
        c: 'java',
        d: 'python',
        correct:'c' 
    }, {
        question: 'who is the president of USA in 2020 ?',
        a: 'Obama',
        b: 'Trump',
        c: 'Clinton',
        d: 'Harry Potter',
        correct:'b' 
    } ,{
        question: 'what does html stand for ?',
        a: 'hyper text markup laguage',
        b: 'cascading style sheet',
        c: 'application programming interface',
        d: 'dont know',
        correct:'a' 
    }, {
        question: 'Le candidat le plus extreme à droite en france ?',
        a: 'E.Macron ',
        b: 'E.Zemmour',
        c: 'M.le pen',
        d: 'J.Lassale',
        correct:'b' 
    }
];

const questionEl = document.getElementById("question");
const question_a = document.getElementById("a_text");
const question_b = document.getElementById("b_text");
const question_c = document.getElementById("c_text");
const question_d = document.getElementById("d_text");
const btn = document.getElementById("submitBtn");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");


let currentData = 0;
let score = 0;
showQuiz();

function showQuiz(){
    deselectAnswer();
    const item = quizData[currentData];
    questionEl.innerText = item.question;
    question_a.innerText = item.a;
    question_b.innerText = item.b;
    question_c.innerText = item.c;
    question_d.innerText = item.d;
}

function getSelected(){
    let answer = undefined;
    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswer(){
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })
}

btn.addEventListener("click", ()=>{

    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentData].correct){
            score++;
        }
        currentData++;
        if(currentData < quizData.length){
            showQuiz();
        }else{
            quiz.innerHTML = `
                <h2> Votre score de ce quiz est ${score} / ${quizData.length} question</h2>
                <button  onclick="location.reload()">Reload</button>
            `;
        }
    }
})
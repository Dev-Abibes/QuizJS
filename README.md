### un petit Quiz sur javascript
#### On doit d'abord contruire une table
```js
onst quizData = [
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
    },
 ```
 #### On prepare les éléments de HTML$
 ```js
    const questionEl = document.getElementById("question");
    const question_a = document.getElementById("a_text");
    const question_b = document.getElementById("b_text");
    const question_c = document.getElementById("c_text");
    const question_d = document.getElementById("d_text");
    const btn = document.getElementById("submitBtn");
    const answerEls = document.querySelectorAll(".answer");
    const quiz = document.getElementById("quiz");
```
#### On crée deux variable suivant
```js
let currentData = 0;
let score = 0;
```
### On cree une fonction ShowQuiz
```js
    function showQuiz(){
        deselectAnswer();
        const item = quizData[currentData];
        questionEl.innerText = item.question;
        question_a.innerText = item.a;
        question_b.innerText = item.b;
        question_c.innerText = item.c;
        question_d.innerText = item.d;
    }
```
#### On cree plusieur fonctions
##### 
```js
    function getSelected()
    function deselectAnswer()
```
```js
  function getSelected(){
      let answer = undefined;
      answerEls.forEach((answerEl)=>{
          if(answerEl.checked){answer = answerEl.id; }
      });
      return answer;
  }
  function deselectAnswer(){
      answerEls.forEach((answerEl)=>{ answerEl.checked = false; })
  }
  btn.addEventListener("click", ()=>{
      const answer = getSelected();
      if(answer){ if(answer === quizData[currentData].correct){
              score++;
          }
          currentData++;
          if(currentData < quizData.length){ showQuiz();
          }else{ quiz.innerHTML = `
                  <h2> Votre score de ce quiz est ${score} / ${quizData.length} question</h2>
                  <button  onclick="location.reload()">Reload</button> `;
          }}
   })
```
### On doit faire appel à la fonction showQuiz pour s'executer
```js
  showQuiz()
```


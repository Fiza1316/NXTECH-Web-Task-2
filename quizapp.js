const questions = [
    {
        'que': 'Which of the following is a markup language?',
        'a': 'HTML',
        'b': 'CSS',
        'c': 'JavaScript',
        'd': 'PHP',
        'correct': 'a'
    },

    {
        'que': 'JavaScript is an ___________ language ?' ,
        'a': 'Object-Oriented',
        'b': 'Object-Based',
        'c': 'Procedural',
        'd': 'None of the above',
        'correct': 'a'
    },

    {
        'que': 'What does CSS stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheets',
        'c': 'Cat search style',
        'd': 'Chrome style sheets',
        'correct': 'b',
    },
    {
        
       'que': 'The "fuction" and "var" are known as:',
       'a': 'Declarative statements',
       'b': 'Data types',
       'c': 'Keywords',
       'd': 'Prototypes',
       'correct': 'a'
    },

    {
        
        'que': ' In the JavaScript , which one of the following is not considered as an error :',
        'a': 'Syntax error',
        'b': 'Missing of semicolons',
        'c': 'Division by zero',
        'd': 'Missing of Bracket',
        'correct': 'c'
        },

    {
        
        'que': 'How do we write a comment in JavaScript ?',
        'a': '/**/',
        'b': '//',
        'c': '#',
        'd': '$$',
        'correct': 'b'
    },

    {
        
        'que': 'Which of the following is  not a JavaScript framework?',
        'a': 'Node',
        'b': 'Vue',
        'c': 'React',
        'd': 'Cassandra',
        'correct': 'd'
    },

    {
        
        'que': `What will be the output of the following code snippet?
        print(NaN === NaN);`,
        'a': 'true',
        'b': 'false',
        'c': 'undefined',
        'd': 'error',
        'correct': 'b'
    },
    {
        
        'que': 'Which of the following keywords is used to define a variable in JavaScript?',
        'a': 'var',
        'b': 'let',
        'c': 'Both a and b',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        
        'que': 'Which of the following methods is used to access HTML elements using  JavaScript?',
        'a': 'getElementById()',
        'b': 'getElementByClassName()',
        'c': 'Both a and b',
        'd': 'None of the above',
        'correct': 'c'
    },
    {
        
        'que': 'How can a datatype be declared to be a constant type?',
        'a': 'const',
        'b': 'let',
        'c': 'var',
        'd': 'constant',
        'correct': 'a'
    }

]

let index = 0;
let total = questions.length;
let right = 0 , wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.options');
const loadQuestion = () => {
    if(index == total){
        return endQuiz()
    }

    reset();
   const data= questions[index];

   quesBox.innerText =`${index+1}) ${data.que}`;
   optionInputs[0].nextElementSibling.innerText = data.a;
   optionInputs[1].nextElementSibling.innerText = data.b;
   optionInputs[2].nextElementSibling.innerText = data.c;
   optionInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    
    let answer;
 optionInputs.forEach(
    (input) => {
        if(input.checked) {
      answer= input.value;
    
    }
    }
 )  
 return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById("box").innerHTML =`
    <div style ="text-align: center">
    <h3> Thank you for playing the quiz </h3>
    <h2> ${right} / ${total} are correct </h2>
    </div>
    `

}
 
loadQuestion();

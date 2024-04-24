const quizData = [
    {
        question: "Rainbow consists how many colors?",
        a: '5 colors', 
        b:'6 colors', 
        c:'7 colors',
        d:'8 colors',
        correct: 'c',
      },
      {
        question:'Which animal is known as the ship of Desert?',
        a:'Dog',
        b:'Elephant',
        c:'Camel', 
        d:'Cow',
        correct: 'c',
      },
      {
        question: 'How many letters in English alphabets?',
        a:'26',
        b: '25',
        c: '24',
        d: '27',
        correct: 'a',
      },
      {
        question: 'In which side the Sun rises?',
        a: 'North', 
        b:'South', 
        c:'East', 
        d:'West',
        correct: 'c',
      },
      {
        question: 'Which is the largest ocean on Earth?',
        a:'Pacific Ocean',
         b: 'Indian Ocean',
          c:'Atlantic Ocean',
          d:'Arctic Ocean',
          correct: 'a',
      },
   
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}
const quizEnd = () => {
    // console.log(document.getElementsByClassName("container"));
    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <p><h1><u><i>Congratualtions!</i></u></h1></p> 
            <br>
            <h3>You’ve completed the quiz. 
               We hope you’ve learned something new today.
         <hr>
        <div class="result">
           <h3>Your Result: ${correct} / ${total}</h3>
        </div>
        <div style="text-align: center;">
        <button><a style="text-decoration: none; color: black;" href="2index.html" class="button"> <h2>Finish</h2></a></button> 
        
        </div>
        </div>
    `
}
loadQuestion(index);
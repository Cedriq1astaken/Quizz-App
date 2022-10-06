let btnWelcome = document.getElementById('btnWelcome');
let firstPage = document.getElementById('first');
let mainPage = document.getElementById('main');
let myQuestion = document.getElementById('question');
let nextBtn = document.getElementById('nextBtn');
let done = document.getElementById('done');
let finalScoreDisplay = document.getElementById('finalScoreDisplay');
let answerChecker= 0;
let btn = [
    document.getElementById('btn1'),
    document.getElementById('btn2'),
    document.getElementById('btn3'),
    document.getElementById('btn4')
]
let finalScore = 0;
const question = [
    {
        question : 'Quel est le lac le plus grand?',
        reponse1 : 'La mer Caspienne',
        reponse2 : 'Le lac superieur',
        reponse3 : 'le lac azuei',
        reponse4 : 'La mer noire',
        bonneReponse: 0
    },
    {
        question : 'Combien d\'ocean il y a t\'il sur terre?',
        reponse1 : '3',
        reponse2 : '4',
        reponse3 : '5',
        reponse4 : '6',
        bonneReponse: 2
    },
    {
        question : '6 / 2(1+2)',
        reponse1 : '1',
        reponse2 : '3',
        reponse3 : '9',
        reponse4 : 'Laisse moi',
        bonneReponse: 2
    },
    {
        question : 'Periode de l\'occupation americaine',
        reponse1 : '1915-1939',
        reponse2 : '1920-1950',
        reponse3 : '1980-1982',
        reponse4 : '1920-1939',
        bonneReponse: 0
    },
    {
        question : 'Christ Pratt Mario good????',
        reponse1 : 'No',
        reponse2 : 'Yeah',
        reponse3 : 'WTF',
        reponse4 : '????',
        bonneReponse: 1
    }, 
]
let questionNum = [];
let myChoice;
let final = 0;
for(i = 0; i < question.length; i++){
    questionNum.push(i);
}

let questionsChooser = () =>{
    let number = questionNum[Math.floor(Math.random(), question.length)];
    myChoice = number;
    questionNum.splice(questionNum.indexOf(number), 1)
    return question[number]
}
btnWelcome.onclick = () =>{
    let choice = questionsChooser();
    firstPage.style.visibility = 'none';
    mainPage.style.visibility = 'visible';
    myQuestion.innerHTML = choice.question
    btn[0].innerHTML = choice.reponse1
    btn[1].innerHTML = choice.reponse2
    btn[2].innerHTML = choice.reponse3
    btn[3].innerHTML = choice.reponse4
}
let answer = (a) =>{
    if(answerChecker == 0){
        if(a == question[myChoice].bonneReponse){
            btn[a].style.backgroundColor = 'lightgreen';
            nextBtn.style.visibility = 'visible'
            final++
            finalScore++
            answerChecker++
        }
        else{
            btn[a].style.backgroundColor = 'red';
            btn[question[myChoice].bonneReponse].style.backgroundColor = 'lightgreen';
            nextBtn.style.visibility = 'visible'
            final++
            answerChecker++
        }
    }
    else{

    }
}
let reset = () =>{
    for(i = 0; i<4; i++){
        btn[i].style.backgroundColor = 'gray'
    }
}
nextBtn.onclick = () =>{
    if(final == question.length){
        first.style.visibility = 'hidden'
        main.style.visibility= 'hidden'
        done.style.visibility = 'visible'
        finalScoreDisplay.innerHTML =  `Your final score is ${finalScore}/${question.length}`
        nextBtn.style.visibility = 'hidden'
        answerChecker--
    }
    else{  
        let choice = questionsChooser();
        myQuestion.innerHTML = choice.question
        btn[0].innerHTML = choice.reponse1
        btn[1].innerHTML = choice.reponse2
        btn[2].innerHTML = choice.reponse3
        btn[3].innerHTML = choice.reponse4
        nextBtn.style.visibility = 'hidden'
        reset()
        answerChecker--
    }
}


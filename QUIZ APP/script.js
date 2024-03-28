import question from "./question.js";

/**
 * TODO: 
 *    add event to start button and append template to html using js
 */

const startQuizBtn = document.querySelector("#btn-start");
const templateNode = document.querySelectorAll("template");
const startscreen = "startscreenTemplate"
const endscreen = "endscreenTemplate"

function ScoreBoard() {

    this.correctAnswer = 0;
    this.wrongAnswer = 0;
    this.updateCorrectAnswer = () => this.correctAnswer = this.correctAnswer + 1;
    this.updatewrongAnswer = () => this.wrongAnswer = this.wrongAnswer + 1;
}

const score = new ScoreBoard();


// let currentIndex, suffeledQuestion;

const quizContainer = document.querySelector(".quizbox-container")
startQuizBtn.addEventListener("click", () => {

    const content = getTemplateFromNode(templateNode, startscreen);
    QuestionObject.shuffleAllQuestion(question)
    genrateQuiz(content);

})

const Timer = (function () {
    function TimeObject() {
        this.startTime = question.length;
        this.endTime = 0;
        this.intervalDelay = 1000;
        this.timeInterval = null;

        if (this.timeInterval) clearInterval(this.timeInterval);
        this.start = (timerElement, progress) => {
            this.timeInterval = setInterval(() => {
                timerElement.innerHTML = this.startTime;

                progress.setAttribute("value", Math.floor(
                    (((question.length + 1) - this.startTime) / question.length) * 100
                ))

                // progress.setAttribu = ;
                timerIntervalHandler(this);


            }, this.intervalDelay)
        }
        this.updateInterval = (value) => {
            this.intervalDelay = value;
        }
    }
    return new TimeObject();
})();

function genrateQuiz(content) {


    const { currentIndex, suffledArray } = QuestionObject
    Timer.updateInterval(1000);
    const timerElement = content.querySelector(".quuizBox__model--start button.timer span");
    const progress = content.querySelector(".model__start--main input[type='range']");

    // console.log(suffledArray[currentIndex])

    quizContent(content, { _question_: suffledArray[currentIndex], index: currentIndex });

    Timer.start(timerElement, progress);

    const remaningQue = content.querySelector("[data-remaning-que]");
    const totelQue = content.querySelector("[data-totel-que]");
    remaningQue.innerText = currentIndex + 1;
    totelQue.innerText = question.length;

    const nextBtn = content.querySelector("[data-next-btn-event]");
    // nextBtn.style.display = "none"
    nextBtn.setAttribute("style", " filter: grayscale(1); pointer-events: none;")
    nextBtn.addEventListener("click", nextBtnEventHandler)


    quizContainer.innerHTML = "";
    quizContainer.appendChild(content);


}

function nextBtnEventHandler() {


    console.log(QuestionObject.currentIndex)

    clearInterval(Timer.timeInterval);
    setTimeout(() => {
        const content = getTemplateFromNode(templateNode, startscreen);
        const timerElement = content.querySelector(".quuizBox__model--start button.timer span");
        const progress = content.querySelector(".model__start--main input[type='range']");
        Timer.updateInterval(10);
        Timer.start(timerElement, progress);
    }, 90)



}


function quizContent(content, { _question_, index }) {
    const questionBox = content.querySelector("[data-questionbox]");
    questionBox.innerHTML = `Q${index + 1}: ${_question_.question}`;
    const options = content.querySelectorAll(".opstions button");
    const shuffledKeys = Object.keys(_question_.answers).sort(
        () => Math.random() - 0.5
    );
    shuffledKeys.forEach((key, index) => {
        options[index].innerHTML = _question_.answers[key];
        options[index].setAttribute("data-answer", key);
    });
    optionEventListner(content);

}


const QuestionObject = (function () {
    function QueObj() {
        this.suffledArray = [];
        this.currentIndex = 0;
        this.shuffleAllQuestion = (question) => {
            this.suffledArray = shuffle(question.sort(() => Math.random() - 0.5));
        }
        this.updateIndex = () => this.currentIndex = this.currentIndex + 1;
    }

    const shuffle = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    return new QueObj();
})();




function timerIntervalHandler(timerObject) {
    const { currentIndex, updateIndex } = QuestionObject;
    if (timerObject == null) return;
    if (timerObject.startTime <= 0) {
        clearInterval(timerObject.timeInterval);
        timerObject.startTime = question.length;
        if (currentIndex != question.length - 1) {
            updateIndex();
            const content = getTemplateFromNode(templateNode, startscreen);
            genrateQuiz(content);
        }
        if (currentIndex == question.length - 1) {

            const content = getTemplateFromNode(templateNode, endscreen);
            const correctbox = content.querySelector("[data-correct-answer]");
            const wrongbox = content.querySelector("[data-wrong-answer]");

            correctbox.innerText = score.correctAnswer;
            wrongbox.innerText = score.wrongAnswer;

            const restart = content.querySelector("[id=\"btn-start\"]");
            const quit = content.querySelector("[id=\"btn-quit\"]");


            quit.addEventListener("click", () => {
                window.location.reload();
            })

            quizContainer.innerHTML = "";
            quizContainer.appendChild(content);
            // console.log("end screen is displayed")
            console.log(score)
        }
    }
    (timerObject.startTime > timerObject.endTime)
        ? timerObject.startTime--
        : timerObject.endTime--;
}

function getTemplateFromNode(templateNode, dataset) {

    if (
        templateNode == null &&
        dataset == null
    ) return;

    const templateNodeElement = Object.values(templateNode).filter(node => Object.keys(node.dataset)[0] == dataset)[0];

    return templateNodeElement.content.cloneNode(true)
}

function optionEventListner(content) {
    const { currentIndex, suffledArray } = QuestionObject;
    const options = content.querySelectorAll(".opstions button");
    // console.log(options);
    options.forEach((option, index) => {
        const answerKey = `answer_${String.fromCharCode(97 + index)}`;
        option.addEventListener("click", (event) => {
            // TODO check answer and put wrong and correct class for it accordingly
            event.target.setAttribute("data-poinerEvents", "disabled")
            checkAnswer({
                target: event.target,
                selectedAnswer: answerKey,
                answer: suffledArray[currentIndex].correct_answer,
                allOptions: options,
            })

            if (event.target.dataset.answer == suffledArray[currentIndex].correct_answer) {
                score.updateCorrectAnswer();
            } else {
                score.updatewrongAnswer();
            }

            console.log("correctAnswer", score.correctAnswer, "wrongAnswer", score.wrongAnswer);

            const nextBtn = document.querySelector("[data-next-btn-event]");
            // nextBtn.style.display = "block"
            nextBtn.removeAttribute("style", true)
            clearInterval(Timer.timeInterval);
        })
    });


}
//  console.log("correctAnswer",score.correctAnswer,"wrongAnswer",score.wrongAnswer)
function checkAnswer({
    target,
    answer,
    allOptions
}) {

    const button = Array.from(
        document.querySelectorAll(".opstions button")
    ).filter(btn => btn.dataset.answer === answer && btn !== target);
    allOptions.forEach((option, index) => {
        option.setAttribute("data-poinerEvents", "disabled")
        if (answer == target.dataset.answer) {
            target.setAttribute("data-poinerEvents", null)
            target.classList.add("correct");
        }
        if (answer != target.dataset.answer) {
            target.setAttribute("data-poinerEvents", null)
            target.classList.add("wrong");
            button[0].setAttribute("data-poinerEvents", null);
            button[0].classList.add("correct");
        }
    })
}




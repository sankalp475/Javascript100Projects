import question from "./question.js";

/**
 * TODO: 
 *    add event to start button and append template to html using js
 */

const startQuizBtn = document.querySelector("#btn-start");
const templateNode = document.querySelectorAll("template");
const startscreen = "startscreenTemplate"
const endscreen = "endscreenTemplate"

// let currentIndex, suffeledQuestion;

const quizContainer = document.querySelector(".quizbox-container")
startQuizBtn.addEventListener("click", () => {

    const content = getTemplateFromNode(templateNode, startscreen);
    // console.log(QuestionObject.suffledArray)
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
                timerIntervalHandler(this, timerElement);
            }, this.intervalDelay)
        }
    }
    return new TimeObject();
})();

function genrateQuiz(content) {


    const { currentIndex, suffledArray } = QuestionObject

    const timerElement = content.querySelector(".quuizBox__model--start button.timer span");
    const progress = content.querySelector(".model__start--main input[type='range']");

    // console.log(suffledArray[currentIndex])

    quizContent(content, { _question_: suffledArray[currentIndex], index: currentIndex });

    Timer.start(timerElement, progress);

    const remaningQue = content.querySelector("[data-remaning-que]");
    const totelQue = content.querySelector("[data-totel-que]");
    remaningQue.innerText = currentIndex + 1;
    totelQue.innerText = question.length;


    quizContainer.innerHTML = "";
    quizContainer.appendChild(content);

}

function quizContent(content, { _question_, index }) {

    const questionBox = content.querySelector("[data-questionbox]");
    questionBox.innerHTML = `Q${index + 1}: ${_question_.question}`;

    const options = content.querySelectorAll(".opstions button");

    const shuffledKeys = Object.keys(_question_.answers).sort(
        () => Math.random() - 0.5
    );
    // const answerKey = `answer_${String.fromCharCode(97 + index)}`;
    shuffledKeys.forEach((key, index) => {
        options[index].innerHTML = _question_.answers[key];
        // console.log(index, _question_.answers[key], index, key)
        options[index].setAttribute("data-answer", key);
    });


    // const content = getTemplateFromNode(templateNode, startscreen);
    optionEventListner(content);
    // let t = content.querySelector(".quuizBox__model--start button.timer span");

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
            console.log("end screen is displayed")
        }
        // console.log(suffeledQuestion[currentIndex]);
        // console.log(currentIndex, suffeledQuestion[currentIndex])

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
    const options = content.querySelectorAll(".opstions button");
    // console.log(options);
    options.forEach((option) => {
        // console.log(option)
        option.addEventListener("click", (event) => {
            // TODO check answer and put wrong and correct class for it accordingly
            // Timer.timeInterval = null;
            // console.log()
            clearInterval(Timer.timeInterval)
            
        })
    });


}




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

    const opstions = content.querySelectorAll(".opstions button");
    opstions.forEach((option, index) => {
        let values = Object.values(_question_.answers).sort((n) => Math.random() - 0.5);
        let keys = Object.keys(_question_.answers).sort((n) => Math.random() - 0.5);
        //  console.log(q)
        // const option = label.querySelector("p")
        ;
        const answerKey = `answer_${String.fromCharCode(97 + index)}`;
        console.log(answerKey)

        // if(_question_.answers[answerKey] == q[index] ) {
        //     option.innerHTML = _question_.answers[answerKey];
        //     option.dataset.answer = answerKey;
        // }
        // console.log( index,_question_.answers[answerKey],index, q[index] )
        // console.log(_question_.answers)

        // console.log(index,Object.keys(_question_.answers))
    });
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
    // timerObject = this;
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





    // console.log( Math.random() - .5);

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




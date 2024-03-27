import question from "./question.js";

/**
 * TODO: 
 *    add event to start button and append template to html using js
 */

const startQuizBtn = document.querySelector("#btn-start");
const templateNode = document.querySelectorAll("template");
const startscreen = "startscreenTemplate"
const endscreen = "endscreenTemplate"

const quizContainer = document.querySelector(".quizbox-container")
startQuizBtn.addEventListener("click", () => {

    const content = getTemplateFromNode(templateNode, startscreen);

    genrateQuiz(content);

})

function genrateQuiz(content) {

    const timerElement = content.querySelector(".quuizBox__model--start button.timer span");
    const progress = content.querySelector(".model__start--main input[type='range']");
    // progressBox.style.setProperty("--progress_value", trackProgress());
    Timer.start(timerElement, progress);

    quizContainer.innerHTML = "";
    quizContainer.appendChild(content)
}


const Timer = (function () {
    function TimeObject(

    ) {
        this.startTime = question.length;
        this.endTime = 0;
        this.intervalDelay = 1000;
        this.timeInterval = null;

        if (this.timeInterval) clearInterval(this.timeInterval);
        this.start = (timerElement, progress) => {
            this.timeInterval = setInterval(() => {
                timerElement.innerHTML = this.startTime;
                progress.value = Math.floor(
                    (question.length + 1) - this.startTime
                )
                // progress.style.setProperty("--progress_value", trackProgress());
                timerIntervalHandler(this, timerElement);
            }, this.intervalDelay)
        }
    }
    return new TimeObject();
})();

// function trackProgress(i) {
//    console.log(((i + 1) - i))
// }
// trackProgress(20);

function timerIntervalHandler(timerObject) {
    // timerObject = this;
    if (timerObject == null) return;

    if (timerObject.startTime <= 0) {
        clearInterval(timerObject.timeInterval);
        
        timerObject.startTime = question.length;
        const content = getTemplateFromNode(templateNode, startscreen);
        genrateQuiz(content);
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




function ScoreBoard() {

    this.correctAnswer = 0,
        this.wrongAnswer = 0,
        this.update = function (key) {
            if (key == null) return;
            if (key === "correct") this.correctAnswer = this.correctAnswer + 1
            if (key === "wrong") this.wrongAnswer = this.wrongAnswer + 1
        }

}

const score = new ScoreBoard();
// scores.update("correctAnswer")


const startBtn = document.querySelector("#btn-start");
const quizBox = document.querySelector("[data-guizBox]");

let maxRange = 20;
let questionCounter = 0;
const Template = document.querySelector("[data-TemplateContainer]");


startBtn.addEventListener("click", () => {
    const content = templateInnerHtml(Template);

    // console.log(uniqueNumber())
    genrateQuiz(quizBox, content, questionCounter);
})

let temp = 0;
function genrateQuiz(quizBox, content, questionCounter) {

    if (
        (quizBox == undefined) ||
        (content == undefined) ||
        (questionCounter == undefined)
    ) return;

    const timeBox = content.querySelector(".quizBox-header > button:nth-child(2) span")
    if (questionCounter != QUESTIONS.length) {
        startTimer(timeBox);
    }


    const progressBox = content.querySelector(".progress");
    progressBox.style.setProperty("--progress_value", trackProgress());

    let __queIndex = questionCounter;
    if (__queIndex <= QUESTIONS.lengthn - 1) {
        generateContent(
            content,
            QUESTIONS[questionCounter],
            true
        );
    }



    const QueRemaning = content.querySelector("[data-question-remaning]");
    const remaning = QueRemaning.querySelector("#remanng__que");
    const totle = QueRemaning.querySelector("#totle__que");


    remaning.innerHTML = temp++;;
    totle.innerHTML = QUESTIONS.length;

    const nextQue = content.querySelector("#next__que");
    NextQueEventHandler(nextQue);

    quizBox.innerHTML = "";
    quizBox.appendChild(content);
}
// const quextionLength = 20;
function NextQueEventHandler(nextQue) {

    nextQue.addEventListener("click", () => {

        const content = templateInnerHtml(Template);

        const timeBox = document.querySelector(".quizBox-header > button:nth-child(2) span")
        if (questionCounter <= QUESTIONS.length - 1) startTimer(timeBox);
        questionCounter++;
        let __queestion = QUESTIONS[questionCounter]

        if (questionCounter < QUESTIONS.length) {
            generateContent(document, __queestion, false);
        }

        console.log(questionCounter, __queestion)

        const progressBox = document.querySelector(".progress");
        progressBox.style.setProperty(
            "--progress_value",
            trackProgress({ type: "calculateProgress" }, questionCounter)
        );

        const remaning = document.querySelector("#remanng__que");
        remaning.innerHTML = questionCounter;

        if (questionCounter == QUESTIONS.length) {
            let quizBox = document.querySelector("[data-guizBox]");
            let _Template_ = document.querySelector("[data-endScreen]")
            const content = templateInnerHtml(_Template_);
            console.log(score)

            console.log(content)

            quizBox.innerHTML = ""
            quizBox.appendChild(content)
            // startTimer();
        }

        const labels = document.querySelectorAll("label");

        labels.forEach((label) => {
            label.removeAttribute("wrong")
            label.removeAttribute("correct")
            label.removeAttribute("disabled")
            label.removeAttribute("style")

            let input = label.querySelectorAll("input[type=\"radio\"]");
            input[0].checked = false;
        })
    })
}



function trackProgress({ type = "default" } = {}, IndexValue) {
    if (type == "default") return `0%`;

    if (type == "calculateProgress" && IndexValue == undefined) return;
    console.log(`${(IndexValue / QUESTIONS.length) * 100}%`)
    if (type == "calculateProgress") return `${(IndexValue / QUESTIONS.length) * 100}%`;
}

let timeInterval = null;
function startTimer(timerContainer, isTimerNull) {


    if (!timerContainer) return;
    if (timeInterval) clearInterval(timeInterval);
    let totleTime = 20;

    timeInterval = setInterval(() => {

        if (totleTime == 0) {
            clearInterval(timeInterval);
            const nextQueBtn = document.querySelector("#next__que");
            nextQueBtn.click();
        }
        timerContainer.innerHTML = totleTime;
        totleTime--;

    }, 1000);
}


function templateInnerHtml(Template) {
    if (!(Template instanceof Object)) return;
    const cloneNode = Template.content.cloneNode(true);

    return cloneNode;
}

function random(range) {
    return Math.floor(Math.random() * (range + 1))
}

function randomInRange(quantity, max) {
    let array = new Set();
    while (array.size < quantity) {
        let newRandom = random(max);
        const indexofRandom = Array.from(newRandom).indexOf(newRandom)
        if (indexofRandom === -1) {
            array.add(newRandom)
        }
    }
    return array;
}

let unique = Array.from(randomInRange(maxRange, maxRange))




function generateContent(content, question, nextClick) {
    const questionBox = content.querySelector("[data-quizBody] h4");
    let q = questionCounter;
    questionBox.innerHTML = `Q${++q}: ${question.question}`;

    const labels = content.querySelectorAll("[data-quizBody] .options > label");
    labels.forEach((label, idx) => {
        const option = label.querySelector("p");
        const answerKey = `answer_${String.fromCharCode(97 + idx)}`;
        option.textContent = question.answers[answerKey];
        label.dataset.answer = answerKey;
        const radio = label.querySelector("input[type='radio']");
        let correct = answerKey === question.correct_answer
        if (nextClick != false) {
            radio.addEventListener("click", (e) => {
                e.target.checked = false;
                checkAnswer(
                    { target: label },
                    answerKey,
                    question.correct_answer,
                )
                if (correct) {
                    score.update("correct")
                } else {
                    score.update("wrong")
                }
            })
        }



    });
}

function checkAnswer({ target, labels }, selectedAnswer, correctAnswer) {

    // console.log(event)
    const correct = selectedAnswer === correctAnswer;
    const Labels = Array.from(
        document.querySelectorAll("[data-quizBody] .options > label")
    ).filter(lbl => lbl.dataset.answer === correctAnswer && lbl !== target);


    Labels.forEach(lbl => {
        let input = lbl.querySelector("input[type=\"radio\"]");
        if (input.checked == true) {
            input.checked = false;
        }
    })
    if (correct) {
        target.setAttribute("correct", true)

        console.log("correct")
    }
    if (!correct) {
        //  console.log("wrong")
        target.setAttribute("wrong", true)
        Labels.forEach(lbl => lbl.setAttribute("correct", true));
    }
    disableOptions(correct, target, Labels[0]);
}

function disableOptions(isCorrect, target, isCorrectElement) {
    const labels = document.querySelectorAll("[data-quizBody] .options > label");

    labels.forEach(label => {
        label.setAttribute("disabled", true);
        if (isCorrect) target.removeAttribute("disabled")
        if (!isCorrect) {
            target.removeAttribute("disabled");
            target.setAttribute("wrong", true);
            if (
                label.classList[0] == isCorrectElement.classList[0]
            ) {
                label.removeAttribute("disabled")
                isCorrectElement.setAttribute("correct", true)
            }

        }
        let input = label.querySelectorAll("input[type=\"radio\"]");
        input[0].checked = false;
    });
}



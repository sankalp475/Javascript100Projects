const QUESTIONS = [
    {
        "id": 1,
        "question": "Which tag is used to create a checkbox in HTML?",
        "description": null,
        "answers": {
            "answer_a": "&lt;checkbox&gt;",
            "answer_b": "&lt; Input type = \"checkbox\"&gt;",
            "answer_c": "&lt;cb&gt;",
            "answer_d": "&lt; Input type  \"checkbox\"&gt;",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 2,
        "question": "Which is not a domain name extension",
        "description": null,
        "answers": {
            "answer_a": ".mil",
            "answer_b": ".com",
            "answer_c": ".int",
            "answer_d": ".org",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "explanation": null,
        "tip": null,
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 3,
        "question": "Which are the objects used for storing data on the client provided by the HTML local storage?",
        "description": null,
        "answers": {
            "answer_a": "Window.localStorage",
            "answer_b": "Window.storage",
            "answer_c": "Window.localSession",
            "answer_d": "none of above",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Hard"
    },
    {
        "id": 4,
        "question": "Which attribute sets the text direction as related to lang attribute.",
        "answers": {
            "answer_a": "Sub",
            "answer_b": "Dir",
            "answer_c": "Ds",
            "answer_d": "Lang",

        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
        },
        "correct_answer": "answer_a",
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 5,
        "question": "What is the use of Canvas element in HTML5?",
        "answers": {
            "answer_a": "The canvas element is used to draw graphics by making use of CSS. It is defined with the &lt;canvas&gt; tag.",
            "answer_b": "The canvas element is used to draw graphics by making use of JavaScript. It is defined with the &lt;canvas&gt; tag.",
            "answer_c": "The canvas element is used to draw graphics by making use of .NET It is defined with the &lt;canvas&gt; tag.",
            "answer_d": "The canvas element is used to draw graphics by making use of .JSON It is defined with the &lt;canvas&gt; tag.",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 6,
        "question": "Why do we need HTML5 Server-Sent Events?",
        "description": null,
        "answers": {
            "answer_a": "Server-Sent Events (SSE) is a recent HTML5 specification in combination with the EventSource API designed for streaming updates.",
            "answer_b": "Server-Sent Events (SSE) is a recent HTML5 specification in combination with the EventSource API designed for getting POST and GET request.",
            "answer_c": "Server-Sent Events (SSE) is a recent HTML5 specification dose not consume bandwidth compared to traditional polling methods.",
            "answer_d": "none of above",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Hard"
    },
    {
        "id": 7,
        "question": "Tags and test that are not directly displayed on the page are written in _____ section.",
        "description": null,
        "answers": {
            "answer_a": "&lt;html&gt;",
            "answer_b": "&lt;body&gt;",
            "answer_c": "&lt;title&gt;",
            "answer_d": "&lt;head&gt;",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
        },
        "correct_answer": "answer_a",
        "tags": [
            {
                "name": "HTML"
            }
        ],
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 8,
        "question": "&lt;TD&gt; … &lt;/TD&gt; tag is used for ________",
        "answers": {
            "answer_a": "Table heading",
            "answer_b": "none of the above",
            "answer_c": "Table row",
            "answer_d": "Table Records",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 9,
        "question": "What does vlink attribute mean?",
        "answers": {
            "answer_a": "visited link",
            "answer_b": "active link",
            "answer_c": "very good link",
            "answer_d": "virtual link",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Hard"
    },
    {
        "id": 10,
        "question": "A simple text file which tells the browser what to cache Is known as a/an ________.",
        "answers": {
            "answer_a": "Input Files",
            "answer_b": "HTML File",
            "answer_c": "A Manifest File",
            "answer_d": "Output Files",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 11,
        "question": "Which html attribute is used to provide an advisory text about an element or Its contents.",
        "answers": {
            "answer_a": "Dir",
            "answer_b": "Title",
            "answer_c": "Tooltip",
            "answer_d": "None of the above",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 12,
        "question": "A much better approach to establish the base URL is to use the ______ element.",
        "answers": {
            "answer_a": "BODY",
            "answer_b": "HEAD",
            "answer_c": "BASE",
            "answer_d": "None Of The Above",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 13,
        "question": "The way the browser displays the object can be modified by _____",
        "answers": {
            "answer_a": "attributes",
            "answer_b": "modifiers",
            "answer_c": "parameters",
            "answer_d": "None of above",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 14,
        "question": "Which of the following attribute triggers event when an element gets user Input?",
        "answers": {
            "answer_a": "Ondata",
            "answer_b": "Onloadeddata",
            "answer_c": "Oninput",
            "answer_d": "Onhaschange",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 15,
        "question": "A homepage is __________",
        "answers": {
            "answer_a": "an index of encyclopedia articles",
            "answer_b": "the first page of a website",
            "answer_c": "required for access to the Internet",
            "answer_d": "where all Internet data is stored",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Easy"
    },
    {
        "id": 16,
        "question": "Which attribute you’ll use with the TD tag to merge two cells horizontally?",
        "answers": {
            "answer_a": "merge=colspan2",
            "answer_b": "merge=row2",
            "answer_c": "colspan=2",
            "answer_d": "rowspan=2",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "true",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Medium"
    },
    {
        "id": 17,
        "question": "In HTML document the tags",
        "answers": {
            "answer_a": "Should be written in upper case",
            "answer_b": "can be written in both uppercase or lowercase",
            "answer_c": "should be written in propercase",
            "answer_d": "should be written in lower case",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Easy"
    },
    {
        "id": 18,
        "question": "HTML Uses",
        "answers": {
            "answer_a": "Fixed Tags Defined By The Language",
            "answer_b": "Pre-specified Tags",
            "answer_c": "Tags Only For Linking",
            "answer_d": "User Defined Tags",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "true",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Easy"
    },
    {
        "id": 19,
        "question": "All elements are identified by their __________ and are marked up using either start tags and end tags or self-closing tags",
        "answers": {
            "answer_a": "Attribute Names",
            "answer_b": "Tag Names",
            "answer_c": "Class Names",
            "answer_d": "None of the mentioned",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "true",
            "answer_c_correct": "false",
            "answer_d_correct": "false",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Easy"
    },
    {
        "id": 20,
        "question": "Which of the following is true about HTML 5?",
        "answers": {
            "answer_a": "HTML5 is the next major revision of the HTML standard superseding HTML 4.01, XHTML 1.0, and XHTML 1.1.",
            "answer_b": "HTML5 is a cooperation between the World Wide Web Consortium (W3C) and the Web Hypertext Application Technology Working Group (WHATWG).",
            "answer_c": "HTML5 is a standard for structuring and presenting content on the World Wide Web",
            "answer_d": "All of These",
        },
        "multiple_correct_answers": "false",
        "correct_answers": {
            "answer_a_correct": "false",
            "answer_b_correct": "false",
            "answer_c_correct": "false",
            "answer_d_correct": "true",
        },
        "correct_answer": "answer_a",
        "category": "Code",
        "difficulty": "Easy"
    }
]

const startBtn = document.querySelector("#btn-start");
const quizBox = document.querySelector("[ data-guizBox]");
let default_que = 0;

startBtn.addEventListener("click", () => {

    const Template = document.querySelector("[data-TemplateContainer]");
    const content = templateInnerHtml(Template);


    genrateQuiz(quizBox, content);

})


function genrateQuiz(quizBox, content) {

    if ((quizBox == undefined) || (content == undefined)) return;

    const timeBox = content.querySelector(".quizBox-header > button:nth-child(2) span")
    startTimer(timeBox);

    const progressBox = content.querySelector(".progress");
    progressBox.style.setProperty("--progress_value", trackProgress());

    genrateQuestion(content, default_que);

    const nextQue = content.querySelector("#next__que");
    const QueRemaning = content.querySelector("[data-question-remaning]");
    const rq = QueRemaning.querySelector("#remanng__que");
    const tq = QueRemaning.querySelector("#totle__que");

    rq.innerHTML = default_que;
    tq.innerHTML = QUESTIONS.length;

    nextQue.addEventListener("click", function () {
        nextQueEventHandler(rq, progressBox, function () {
           genrateQuestion(content, default_que);
        });
    });

    quizBox.innerHTML = "";
    quizBox.appendChild(content);
}


function nextQueEventHandler(remaningQue, progressBox, callback) {
    if(remaningQue == undefined || progressBox == undefined || callback == undefined ) return;

   if(default_que < QUESTIONS.length) ++default_que;
   remaningQue.innerHTML = default_que;
   
   progressBox.style.setProperty("--progress_value", 
   trackProgress({ type: "calculateProgress" }, default_que));

   callback();
}

function genrateQuestion(content, index) {
   if (content == undefined) return;

   const heading  = content.querySelector("[data-quizBody] > h4");
   const q = QUESTIONS[index];
      console.log(QUESTIONS[index])
}

function trackProgress({ type = "default" } = {}, IndexValue) {
    if (type == "default") return `0%`;

    if (type == "calculateProgress" && IndexValue == undefined) return;

    if (type == "calculateProgress") return `${(IndexValue / QUESTIONS.length) * 100}%`;
}

function templateInnerHtml(Template) {
    if (!(Template instanceof Object)) return;
    const cloneNode = Template.content.cloneNode(true);

    return cloneNode;
}

function startTimer(TimerBox) {
    if (!TimerBox) return;
    let x = 20;
    const i = setInterval(() => {
        if (x == 0) clearInterval(i);
        TimerBox.innerHTML = x;
        x--;
    }, 1000);
}
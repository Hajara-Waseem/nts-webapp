// Questions answers
const questions = {
    verbal: [
        {
            question: "Choose the synonym of 'Abundant'.",
            options: [
                "Scarce",
                "Plentiful",
                "Limited",
                "Rare"
            ],
            answer: 1,
            explanation:
                "Abundant means available in large quantities. Therefore, 'Plentiful' is the correct synonym."
        },

        {
            question: "Choose the antonym of 'Ancient'.",
            options: [
                "Old",
                "Historic",
                "Modern",
                "Traditional"
            ],
            answer: 2,
            explanation:
                "Ancient means very old. Its opposite is 'Modern'."
        },

        {
            question: "Book is to Reading as Fork is to ______.",
            options: [
                "Cooking",
                "Writing",
                "Eating",
                "Drawing"
            ],
            answer: 2,
            explanation:
                "A book is used for reading, while a fork is commonly used for eating."
        },

        {
            question: "Choose the correctly spelled word.",
            options: [
                "Necessary",
                "Neccessary",
                "Necesary",
                "Necassary"
            ],
            answer: 0,
            explanation:
                "'Necessary' is the correctly spelled word."
        },

        {
            question:
                "Complete the sentence: She was tired, ______ she continued working.",
            options: [
                "because",
                "but",
                "therefore",
                "so"
            ],
            answer: 1,
            explanation:
                "'But' shows the contrast between being tired and continuing to work."
        }
    ],

    quantitative: [
        {
            question: "What is 20% of 250?",
            options: [
                "25",
                "40",
                "50",
                "60"
            ],
            answer: 2,
            explanation:
                "20% of 250 = (20 ÷ 100) × 250 = 50."
        },

        {
            question:
                "If the ratio of boys to girls is 2:3 and there are 20 boys, how many girls are there?",
            options: [
                "25",
                "30",
                "35",
                "40"
            ],
            answer: 1,
            explanation:
                "2 parts = 20, so 1 part = 10. Girls are 3 parts = 30."
        },

        {
            question:
                "What is the average of 10, 20, 30 and 40?",
            options: [
                "20",
                "25",
                "30",
                "35"
            ],
            answer: 1,
            explanation:
                "Average = (10 + 20 + 30 + 40) ÷ 4 = 100 ÷ 4 = 25."
        },

        {
            question:
                "If 3x + 5 = 20, what is the value of x?",
            options: [
                "3",
                "4",
                "5",
                "6"
            ],
            answer: 2,
            explanation:
                "3x + 5 = 20. Therefore 3x = 15 and x = 5."
        },

        {
            question:
                "A car travels 120 km in 2 hours. What is its average speed?",
            options: [
                "40 km/h",
                "50 km/h",
                "60 km/h",
                "80 km/h"
            ],
            answer: 2,
            explanation:
                "Speed = Distance ÷ Time = 120 ÷ 2 = 60 km/h."
        }
    ],

    analytical: [
        {
            question:
                "Find the next number: 2, 4, 8, 16, ___",
            options: [
                "20",
                "24",
                "30",
                "32"
            ],
            answer: 3,
            explanation:
                "Each number is multiplied by 2: 2 × 2 = 4, 4 × 2 = 8, so 16 × 2 = 32."
        },

        {
            question:
                "Find the next number: 3, 6, 9, 12, ___",
            options: [
                "14",
                "15",
                "16",
                "18"
            ],
            answer: 1,
            explanation:
                "The sequence increases by 3 each time. Therefore, 12 + 3 = 15."
        },

        {
            question:
                "If all roses are flowers and all flowers are plants, which statement is definitely true?",
            options: [
                "All plants are roses",
                "All roses are plants",
                "No roses are plants",
                "Some plants are not flowers"
            ],
            answer: 1,
            explanation:
                "If roses are flowers and flowers are plants, then roses must also be plants."
        },

        {
            question:
                "Ali is taller than Bilal. Bilal is taller than Hamza. Who is the shortest?",
            options: [
                "Ali",
                "Bilal",
                "Hamza",
                "Cannot be determined"
            ],
            answer: 2,
            explanation:
                "Ali > Bilal > Hamza, so Hamza is the shortest."
        },

        {
            question: "Find the odd one out.",
            options: [
                "Apple",
                "Mango",
                "Carrot",
                "Banana"
            ],
            answer: 2,
            explanation:
                "Apple, mango and banana are fruits. Carrot is a vegetable."
        }
    ],

    gk: [
        {
            question: "What is the capital city of Pakistan?",
            options: [
                "Lahore",
                "Karachi",
                "Islamabad",
                "Peshawar"
            ],
            answer: 2,
            explanation:
                "Islamabad is the capital city of Pakistan."
        },

        {
            question:
                "Which is the largest planet in our Solar System?",
            options: [
                "Earth",
                "Mars",
                "Jupiter",
                "Saturn"
            ],
            answer: 2,
            explanation:
                "Jupiter is the largest planet in our Solar System."
        },

        {
            question:
                "What is the chemical formula for water?",
            options: [
                "CO2",
                "H2O",
                "O2",
                "NaCl"
            ],
            answer: 1,
            explanation:
                "A water molecule contains two hydrogen atoms and one oxygen atom, written as H2O."
        },

        {
            question:
                "The United Nations headquarters is located in which city?",
            options: [
                "London",
                "Paris",
                "New York",
                "Geneva"
            ],
            answer: 2,
            explanation:
                "The headquarters of the United Nations is in New York City."
        },

        {
            question:
                "Which is the largest ocean in the world?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Arctic Ocean",
                "Pacific Ocean"
            ],
            answer: 3,
            explanation:
                "The Pacific Ocean is the largest ocean on Earth."
        }
    ]
};

// Category information for the quiz

const categoryInfo = {
    verbal: {
        title: "Verbal Reasoning",
        icon: "🔤",

        description:
            "Improve your vocabulary, grammar, analogies and verbal relationships.",

        howToSolve:
            "Read the sentence carefully and focus on the relationship between words. For synonyms and antonyms, identify the exact meaning of the word before looking at the options.",

        exampleQuestion:
            "Happy is to Sad as Hot is to ______.",

        exampleAnswer:
            "Cold",

        exampleExplanation:
            "Happy and Sad are opposites. Similarly, Hot and Cold are opposites.",

        topics: [
            "Synonyms & Antonyms",
            "Analogies",
            "Sentence Completion",
            "Vocabulary",
            "Correct Spellings"
        ],

        tips: [
            "Learn common synonyms and antonyms.",
            "Read English articles regularly.",
            "Look for relationships in analogy questions.",
            "Improve your vocabulary with new words.",
            "Read the complete sentence before choosing an answer."
        ]
    },

    quantitative: {
        title: "Quantitative Reasoning",
        icon: "🔢",

        description:
            "Strengthen your mathematical and numerical problem-solving skills.",

        howToSolve:
            "Identify what the question is asking, write down the given values and apply the correct formula. Work step-by-step instead of trying to calculate everything mentally.",

        exampleQuestion:
            "What is 25% of 200?",

        exampleAnswer:
            "50",

        exampleExplanation:
            "25% means 25 ÷ 100. Therefore, (25 ÷ 100) × 200 = 50.",

        topics: [
            "Percentages",
            "Ratios",
            "Averages",
            "Basic Algebra",
            "Speed, Distance & Time"
        ],

        tips: [
            "Memorize basic mathematical formulas.",
            "Practice percentages and ratios.",
            "Break large calculations into smaller steps.",
            "Check your calculations before answering.",
            "Practice mental mathematics regularly."
        ]
    },

    analytical: {
        title: "Analytical Reasoning",
        icon: "🧩",

        description:
            "Develop your logical thinking and problem-solving abilities.",

        howToSolve:
            "Look for patterns, relationships and logical rules. For sequences, compare the difference or multiplication between consecutive numbers. For ordering questions, arrange the information step-by-step.",

        exampleQuestion:
            "Find the next number: 5, 10, 15, 20, ___",

        exampleAnswer:
            "25",

        exampleExplanation:
            "Each number increases by 5. Therefore, 20 + 5 = 25.",

        topics: [
            "Number Series",
            "Logical Statements",
            "Ordering Problems",
            "Odd One Out",
            "Patterns & Relationships"
        ],

        tips: [
            "Look for patterns in sequences.",
            "Read logical statements carefully.",
            "Eliminate obviously wrong options.",
            "Break complex problems into smaller steps.",
            "Practice reasoning questions regularly."
        ]
    },

    gk: {
        title: "General Knowledge",
        icon: "🌍",

        description:
            "Test your knowledge of Pakistan, science, geography and the world.",

        howToSolve:
            "Read each question carefully and identify the topic. Eliminate clearly incorrect options first and then select the fact that you know is correct.",

        exampleQuestion:
            "Which planet is known as the Red Planet?",

        exampleAnswer:
            "Mars",

        exampleExplanation:
            "Mars appears reddish because of iron minerals on its surface.",

        topics: [
            "Pakistan Studies",
            "World Geography",
            "Basic Science",
            "International Organizations",
            "World Knowledge"
        ],

        tips: [
            "Read current affairs regularly.",
            "Revise important facts about Pakistan.",
            "Learn basic geography and science.",
            "Keep a list of important world organizations.",
            "Review general knowledge before your test."
        ]
    }
};

// variables and functions for quiz 
let currentCategory = "";
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

let timerInterval;
let timeLeft = 120;

function openCategory(category) {

    // Completely clear previous quiz data
    clearQuizData();

    localStorage.setItem("selectedCategory", category);

    window.location.href = "category.html";
}

function clearQuizData() {

    localStorage.removeItem("quizScore");
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("quizFinished");
    localStorage.removeItem("quizTime");
    localStorage.removeItem("selectedAnswer");

    // Clear saved answers for all questions
    for (let i = 0; i < 30; i++) {

        localStorage.removeItem(
            "answeredQuestion_" + i
        );
    }

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
}

function loadCategory() {

    const title =
        document.getElementById("categoryTitle");

    if (!title) {
        return;
    }

    const category = localStorage.getItem("selectedCategory") || "verbal";

    const data = categoryInfo[category];


    document.getElementById("categoryIcon").textContent = data.icon;

    document.getElementById("categoryTitle").textContent = data.title;

    document.getElementById("categoryDescription").textContent = data.description;

    // How to solve
    document.getElementById("howToSolve").textContent = data.howToSolve;

    // Example
    document.getElementById("exampleQuestion").textContent = data.exampleQuestion;

    document.getElementById("exampleAnswer").textContent = data.exampleAnswer;

    document.getElementById("exampleExplanation").textContent = data.exampleExplanation;

    // Topics
    const topicsContainer = document.getElementById("topics");

    topicsContainer.innerHTML = "";

    data.topics.forEach(topic => {
        const div = document.createElement("div");

        div.className = "topic";

        div.innerHTML =
            `✓ ${topic}`;

        topicsContainer.appendChild(div);
    });

    // Tips
    const tipsContainer = document.getElementById("tips");

    tipsContainer.innerHTML = "";

    data.tips.forEach(tip => {

        const li = document.createElement("li");

        li.textContent = tip;

        tipsContainer.appendChild(li);
    });
}

function startQuiz() {

    const category = localStorage.getItem("selectedCategory") || "verbal";

    // Start a completely new quiz
    localStorage.setItem("selectedCategory",category);

    localStorage.setItem("quizScore","0");

    localStorage.setItem("currentQuestion","0");

    localStorage.removeItem("quizFinished");

    localStorage.removeItem("quizTime");

    localStorage.removeItem("selectedAnswer");

    currentCategory = category;
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    window.location.href = "quiz.html";
}

function loadQuiz() {

    const questionElement = document.getElementById("question");

    if (!questionElement) {
        return;
    }

    currentCategory = localStorage.getItem("selectedCategory") || "verbal";

    // Restore saved quiz progress
    currentQuestion = parseInt(localStorage.getItem("currentQuestion") || "0");

    score =parseInt(localStorage.getItem("quizScore") || "0");

    selectedAnswer = null;

    const categoryData = categoryInfo[currentCategory];

    document.getElementById("quizCategory").textContent = categoryData.title;

    displayQuestion();

    startTimer();
}

function displayQuestion() {

    const quizQuestions = questions[currentCategory];

    const questionData = quizQuestions[currentQuestion];

    document.getElementById("questionNumber").textContent = currentQuestion + 1;

    const percentage = ((currentQuestion + 1) / quizQuestions.length) * 100;

    document.getElementById("progressPercent").textContent =Math.round(percentage) + "%";

    document.getElementById("progress").style.width = percentage + "%";

    document.getElementById("question").textContent = questionData.question;

    // Live score
    document.getElementById("liveScore").textContent = score;

    const optionsContainer = document.getElementById("options");

    optionsContainer.innerHTML = "";

    // Check if this question was already answered
    const savedAnswer =
        localStorage.getItem("answeredQuestion_" + currentQuestion);

    const savedAnswerIndex =
        savedAnswer !== null
            ? parseInt(savedAnswer)
            : null;

    selectedAnswer =savedAnswerIndex;

    questionData.options.forEach((option, index) => {

        const button =document.createElement("button");

        button.className = "option";

        button.innerHTML =
            `<span class="option-letter">
                ${String.fromCharCode(65 + index)}
             </span>
             ${option}`;

        button.onclick = function () {
            selectOption(index, button);
        };

        optionsContainer.appendChild(button);

        // Restore previous answer
        if (savedAnswerIndex !== null) {

            button.disabled = true;

            if (index === savedAnswerIndex) {

                if (
                    savedAnswerIndex ===
                    questionData.answer
                ) {
                    button.classList.add("correct");
                } else {
                    button.classList.add("wrong");
                }
            }

            // Show correct answer if previous answer was wrong
            if (
                savedAnswerIndex !==
                questionData.answer &&
                index === questionData.answer
            ) {
                button.classList.add("correct");
            }
        }
    });

// Restore feedback
    const feedback = document.getElementById("feedback");

    if (savedAnswerIndex !== null) {

        const isCorrect = savedAnswerIndex === questionData.answer;

        feedback.className =
            isCorrect
                ? "feedback correct-feedback"
                : "feedback wrong-feedback";

        document.getElementById("feedbackTitle").textContent =
            isCorrect
                ? "Correct! ✓"
                : "Incorrect ✗";

        document.getElementById("feedbackText").textContent =questionData.explanation;

    } else {
        feedback.className ="feedback hidden";

        document.getElementById("feedbackTitle").textContent = "";

        document.getElementById("feedbackText").textContent = "";
    }

    const nextButton = document.getElementById("nextButton");

    nextButton.disabled = savedAnswerIndex === null;

    nextButton.textContent =
        currentQuestion === quizQuestions.length - 1
            ? "Finish Quiz ✓"
            : "Next Question →";
}

function selectOption(index, button) {

    // Prevent changing answer after feedback
    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;

    const questionData = questions[currentCategory][currentQuestion];

    const allOptions = document.querySelectorAll(".option");

    // Save selected answer
    localStorage.setItem("answeredQuestion_" + currentQuestion,selectedAnswer);

    // Disable all options
    allOptions.forEach(option => {
        option.disabled = true;
    });

    if (index === questionData.answer) {
        // Correct
        score++;

        // SAVE SCORE IMMEDIATELY
        localStorage.setItem("quizScore",score);

        button.classList.add("correct");

        showFeedback(
            true,
            "Correct! ✓",
            questionData.explanation
        );

    } else {
        // Wrong
        button.classList.add("wrong");

        // Show correct answer
        allOptions[questionData.answer]
            .classList.add("correct");

        showFeedback(
            false,
            "Incorrect ✗",
            questionData.explanation
        );
    }

    // Update live score
    document.getElementById("liveScore").textContent = score;

    // Enable next button
    document.getElementById("nextButton").disabled = false;
}

function showFeedback(isCorrect, title, explanation) {

    const feedback = document.getElementById("feedback");

    feedback.className =
        isCorrect
            ? "feedback correct-feedback"
            : "feedback wrong-feedback";

    document.getElementById("feedbackTitle").textContent =title;

    document.getElementById("feedbackText").textContent =explanation;
}

function nextQuestion() {

    if (selectedAnswer === null) {
        return;
    }

    const quizQuestions = questions[currentCategory];

    currentQuestion++;

    if (currentQuestion >= quizQuestions.length) {

        clearInterval(timerInterval);

        // Save final score
        localStorage.setItem("quizScore",score);

        localStorage.setItem("quizFinished","true");

        // Remove timer
        localStorage.removeItem("quizTime");

        // Remove saved question position
        localStorage.removeItem("currentQuestion");

        window.location.href ="result.html";

        return;
    }

    // Save current question position
    localStorage.setItem("currentQuestion",currentQuestion);

    displayQuestion();
}

function startTimer() {

    clearInterval(timerInterval);

    // Restore timer after page refresh
    const savedTime =localStorage.getItem("quizTime");

    if (savedTime !== null) {

        timeLeft =parseInt(savedTime);

    } else {
        timeLeft = 120;

        localStorage.setItem("quizTime",timeLeft);
    }

    updateTimer();

    timerInterval =setInterval(() => {

            timeLeft--;

            // Save remaining time
            localStorage.setItem("quizTime",timeLeft);

            updateTimer();

            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                localStorage.removeItem("quizTime");

                finishQuizByTime();
            }

        }, 1000);
}

function updateTimer() {

    const timer =document.getElementById("timer");

    if (!timer) {
        return;
    }

    const minutes =Math.floor(timeLeft / 60);

    const seconds = timeLeft % 60;

    timer.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

function finishQuizByTime() {

    localStorage.setItem("quizScore",score);

    localStorage.setItem("quizFinished","true");

    localStorage.removeItem("currentQuestion");

    localStorage.removeItem("quizTime");

    localStorage.removeItem("selectedAnswer");

    alert("Time is up!");

    window.location.href = "result.html";
}

function loadResult() {

    const scoreElement = document.getElementById("score");

    if (!scoreElement) {
        return;
    }

    const category =localStorage.getItem("selectedCategory") || "verbal";

    const finalScore =parseInt(
            localStorage.getItem("quizScore")
        ) || 0;

    const total = questions[category].length;

    const percentage =Math.round((finalScore / total) * 100);

    const wrong = total - finalScore;

    document.getElementById("score").textContent = finalScore;

    document.getElementById("percentage").textContent = percentage + "%";

    document.getElementById("correctAnswers").textContent = finalScore;

    document.getElementById("wrongAnswers").textContent = wrong;

    document.getElementById("totalQuestions").textContent = total;

    document.getElementById("totalQuestions2").textContent = total;

    document.getElementById("resultCategory").textContent = categoryInfo[category].title;

    const title = document.getElementById("resultTitle");

    const message = document.getElementById("resultMessage");

    const icon = document.getElementById("resultIcon");

    if (percentage >= 80) {

        title.textContent ="Excellent! 🎉";

        message.textContent ="Excellent performance! Keep up the great work.";

        icon.textContent = "🏆";
    }

    else if (percentage >= 60) {

        title.textContent ="Good Job! 👍";

        message.textContent = "Good effort! A little more practice can make you even better.";

        icon.textContent = "🎯";

    }

    else {

        title.textContent ="Keep Practicing! 💪";

        message.textContent = "Review the topics and try the quiz again.";

        icon.textContent = "📚";
    }
}

function retryQuiz() {

    // Clear ALL saved quiz data
    clearQuizData();

    const category =localStorage.getItem("selectedCategory")|| "verbal";

    // Start the same category from zero
    localStorage.setItem("selectedCategory",category);

    localStorage.setItem("quizScore","0");

    localStorage.setItem( "currentQuestion", "0");

    window.location.href = "quiz.html";
}

function backToCategories() {

    clearQuizData();

    localStorage.removeItem("selectedCategory");

    window.location.href = "index.html#categories";
}

loadCategory();
loadQuiz();
loadResult();
# NTS Test Preparation App

🔗 **Live demo:** https://hajara-waseem.github.io/nts-webapp/

## Idea

A small interactive test-preparation web app modeled on NTS-style exams. Users can study each test category with brief explanations and tips, then take a timed multiple-choice quiz for that category. Scores are tracked locally so users can see their progress across categories. All content and logic are built with JavaScript and localStorage.

## Features

- Category-wise learning: Verbal Reasoning, Quantitative Reasoning, Analytical Reasoning, General Knowledge
- Each category has a short "how to solve" explanation with examples before the quiz
- Timed multiple-choice quiz per category
- Instant feedback after each answer (correct/incorrect, with a short explanation)
- Progress bar during the quiz
- Result screen showing score and percentage for the categories
- "Try again" option to clear saved data
- Responsive design (mobile, tablet, desktop)
- Consistent navigation bar across all pages

## Pages / Screens

1. **Home**: Intro to the app, 4 category cards (Verbal, Quantitative, Analytical, General Knowledge)
2. **Category Learning Page**: Short tips/explanation + examples for that category, "Start Quiz" button
3. **Quiz Page**: One question at a time, 4 options, timer, live score
4. **Result Page**: Score, percentage, correct/incorrect breakdown, "Try Again" / "Back to Categories" buttons

## Rough Layout Sketch
| LOGO Home Categories | <- Navbar (all pages)
HOME PAGE
| NTS Test Preparation |
| Practice smart. Track your progress. |
| [Verbal] [Quantitative] [Analytical] [GK] | <- category cards
CATEGORY LEARNING PAGE (e.g. Verbal Reasoning)
| Verbal Reasoning - Tips |
| - How to solve analogies (example) |
| - How to solve synonyms/antonyms (example) |
| |
| [ Start Quiz Button ] |
QUIZ PAGE
| Question 4 of 10 Time Left: 00:45 |
| "Choose the correct synonym for 'Abundant'" |
| [ Option A ] [ Option B ] |
| [ Option C ] [ Option D ] |
| Score: 3/3 |
RESULT PAGE
| Quiz Complete! |
| Your Score: 7/10 (70%) |
| |
| Categories: |
| - Verbal 7/10 |
| - Quantitative 5/10 |
| |
| [ Try Again ] [ Back to Categories ] |
FOOTER (all pages)
| (c) 2026 NTS Prep |

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (no frameworks or libraries)

## How to Run Locally

1. Clone or download this repository
2. Open `index.html` directly in your browser

No build steps, installs, or a server are required — it's a fully static site.

## Author

Hajara Waseem — Web Design and Development, 6th Semester

## License

This project was created for academic/educational purposes.
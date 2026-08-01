# 🧠 Quiz App

A responsive and interactive quiz application built using **HTML, CSS, and Vanilla JavaScript**. The application challenges users with multiple-choice questions, provides instant feedback, tracks scores in real time, and displays a personalized result based on overall performance.

---

## 🚀 Features

- 🎯 20 multiple-choice quiz questions

- ✅ Instant answer validation

- 📊 Real-time score tracking

- 📈 Progress bar showing quiz completion

- 🎉 Dynamic result message based on score

- 🔄 Restart quiz functionality

- 📱 Fully responsive design

- ⚡ Built with Vanilla JavaScript (No frameworks or libraries)

---

## 🛠️ Tech Stack

- **HTML5** – Semantic structure
- **CSS3** – Styling, animations, and responsive layout
- **JavaScript (ES6)** – Quiz logic, DOM manipulation, and event handling

---

## 📂 Project Structure

```text
Quiz-Time/
│
├── index.html      # Main HTML file
├── style.css       # Styles and responsive design
├── script.js       # Quiz functionality and logic
└── README.md
```

---

## 📸 Application Flow

1. User lands on the welcome screen.

2. Clicks the **Start Quiz** button.

3. Questions are displayed one at a time.

4. Selecting an answer immediately highlights the correct and incorrect choices.

5. The score updates automatically for correct answers.

6. The progress bar advances after each question.

7. Once all questions are completed, the final score and a personalized message are displayed.

8. Users can restart the quiz and play again.

---

## 🧩 Quiz Logic

- Questions are stored as an array of JavaScript objects.

- Each question contains:
  - Question text
  - Four answer options
  - One correct answer

- Multiple clicks are prevented after selecting an answer.

- The next question appears automatically after a short delay.

- The final score percentage determines the result message shown to the user.

---

## 💻 Getting Started

### Clone the repository

```bash
git clone https://github.com/Bhavin-Patel-dev/Quiz-App.git
```

### Navigate to the project folder

```bash
cd Quiz-App
```

### Run the project

Simply open the `index.html` file in your preferred browser.

For a better development experience, you can use the **Live Server** extension in VS Code.

---

## 🎯 Future Improvements

- ⏱️ Add a timer for each question

- 🔀 Randomize question order

- 🏷️ Quiz categories

- 🎚️ Difficulty levels

- 💾 Store high scores using Local Storage

- 🔊 Sound effects

- 🌙 Dark mode

- 🏆 Leaderboard

- 🌐 Fetch questions from an API

---

## 🤝 Contributing

Contributions are welcome and greatly appreciated!

To contribute:

1. Fork this repository.
2. Create a new branch.

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them.

   ```bash
   git commit -m "Add your meaningful commit message"
   ```

4. Push your branch.

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a Pull Request with a clear description of your changes.

---

## ⭐ Support

If you found this project useful or learned something from it, consider giving it a **⭐ Star** on GitHub. Your support helps others discover the project and encourages future improvements.

Happy Coding! 🚀

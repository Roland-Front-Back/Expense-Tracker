<div id="top"> <!-- HEADER STYLE: CLASSIC --> <div align="center"> <img src="assets/img/expenses.png" width="120" alt="Project Logo"/>

# 💸 EXPENSE-TRACKER

<em>Simple, visual, and intuitive way to track and manage your personal expenses.</em>

<!-- BADGES --> <img src="https://img.shields.io/github/license/Roland-Front-Back/Expense-Tracker?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license"> <img src="https://img.shields.io/github/last-commit/Roland-Front-Back/Expense-Tracker?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit"> <img src="https://img.shields.io/github/languages/top/Roland-Front-Back/Expense-Tracker?style=default&color=0080ff" alt="repo-top-language"> <img src="https://img.shields.io/github/languages/count/Roland-Front-Back/Expense-Tracker?style=default&color=0080ff" alt="repo-language-count"> </div> <br>

## 📑 Table of Contents

- [📌 Overview](#-overview)

- [✨ Features](#-features)

- [📁 Project Structure](#-project-structure)

  - [📂 Project Index](#-project-index)

- [🚀 Getting Started](#-getting-started)

  - [📋 Prerequisites](#-prerequisites)

  - [📥 Installation](#-installation)

  - [🛠️ Usage](#-usage)

  - [🧪 Testing](#-testing)

- [🗺️ Roadmap](#-roadmap)

- [🤝 Contributing](#-contributing)

- [📝 License](#-license)

- [🙏 Acknowledgments](#-acknowledgements)

## 📌 Overview

The Expense Tracker is a responsive web application that allows users to input their budget and categorize expenses to track their financial status visually. With dynamically added entries, a clean UI, and a pie chart for visual analysis, users can make informed financial decisions quickly.

## ✨ Features

- 💰 Set a total budget and track expenses across common categories.

- ➕ Dynamically add multiple entries per category.

- 📊 Visualize spending with a Chart.js pie chart.

- 🧾 Get real-time feedback on budget balance (Covered or Exceeded).

- 🧹 Clear all data and charts with one click.

- 💻 Fully responsive design for all screen sizes.

- 🧪 Built-in input validation for data integrity.

## 📁 Project Structure

```sh
└── Expense-Tracker/
    ├── assets/
    │   ├── css/
    │   │   └── style.css
    │   ├── js/
    │   │   └── script.js
    │   └── img/
    │       └── expenses.png
    └── index.html
```

## 📂 Project Index

<details open> <summary><b><code>EXPENSE-TRACKER/</code></b></summary> <blockquote> <table> <thead> <tr> <th>📄 File Name</th> <th>📘 Summary</th> </tr> </thead> <tr> <td><b><a href='index.html'>index.html</a></b></td> <td>Main HTML structure of the expense tracker app</td> </tr> <tr> <td><b><a href="style.css">style.css</a></b></td> <td>Custom styles and responsive design</td> </tr> <tr> <td><b><a href="script.js">script.js</a></b></td> <td>Expense logic, chart rendering, and UI behavior</td> </tr> </table> </blockquote> </details>

## 🚀 Getting Started

### 📋 Prerequisites

You only need a modern web browser to run this project.

### 📥 Installation

To run the Expense Tracker locally:

1. Clone the repository:

```sh
git clone https://github.com/Roland-Front-Back/Expense-Tracker.git
```

2. Navigate to the project directory:

```sh
cd Expense-Tracker
```

3. Open index.html in your browser:

```sh
open index.html
```

Or double-click it from your file explorer.

## 🛠️ Usage

1. 🧮 Enter your budget.

2. 🗂️ Select a category and click Add to input expenses.

3. ➕ Repeat to add more entries.

4. 📊 Click Calculate Expenses to view:

   - Budget status (✔️ Covered or ❌ Exceed)

   - Remaining vs Spent breakdown

   - Pie chart of spending

5. 🧹 Click Clear to reset everything.

## 🧪 Testing

There’s no automated test suite yet. You can manually:

- Enter invalid inputs (e.g. 2e10, -50, abc)

- Check chart behavior on different screen sizes

- Test add, calculate, and clear functions

## 🗺️ Roadmap

- ✅ Add dynamic input for categories

- ✅ Render chart based on category totals

- ✅ Add input validation and error handling

- 🕶️ Add dark mode toggle

- 💾 Save budget data with localStorage

- 📤 Export data to CSV or PDF

## 🤝 Contributing

We welcome your contributions! 😄

- 🐛 Report issues

- 📩 Submit Pull Requests

- 💬 Start a Discussion

<details> <summary>🧭 Contribution Guide</summary>

1. 🍴 Fork the repo

2. 📥 Clone to local:

```sh
git clone https://github.com/your-username/Expense-Tracker
```

3. 🌿 Create a feature branch:

```sh
git checkout -b feature/amazing-feature
```

4. 💻 Make changes + test

5. ✅ Commit:

```sh
git commit -m "Add amazing-feature"
```

6. 🚀 Push and submit PR

</details>

## 📝 License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- 📈 <a href="https://www.chartjs.org/">Chart.js</a> for powering visual data.

- 🎨 <a href="https://fonts.google.com/">Google Fonts</a> for typography.

- 💡 Inspired by real-world budgeting needs and minimalist design.

<div align="right"><a href="#top">BACK TO TOP</a></div>

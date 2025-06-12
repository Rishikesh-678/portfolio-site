
# Personal Portfolio Website

This is a responsive personal portfolio website built using **HTML**, **CSS**, and **JavaScript**. It showcases sections like About, Skills, Projects, and Contact information, and includes responsive design using media queries.

## 📁 Project Structure

```
├── index.html
├── style.css
├── mediaqueries.css
├── script.js
├── assets/
│   └── [images and icons]
└── README.md
```

## ✨ Features

- Modern and clean UI using CSS Flexbox
- Responsive design using media queries (`mediaqueries.css`)
- Hamburger menu for mobile navigation (`script.js`)
- Smooth scroll and hover effects
- Structured sections: About, Experience, Projects, Contact

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- Google Fonts (`Poppins`)

## 📱 Responsive Design

Media queries target:
- **1400px and below:** Wrapping containers
- **1200px and below:** Switch to hamburger menu, block layout
- **600px and below:** Mobile-optimized layout and font sizes

## ⚙️ Functionality

The hamburger menu toggles navigation links using JavaScript:
```js
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
```

## 🚀 Getting Started

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Make sure `style.css`, `mediaqueries.css`, and `script.js` are correctly linked.

## 📸 Preview

https://rishikesh-678.github.io/portfolio-site/

## 📄 License

This project is free to use and modify. Attribution is appreciated.

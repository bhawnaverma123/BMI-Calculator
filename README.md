# BMI Calculator 📊

A simple and user-friendly Body Mass Index (BMI) calculator built with vanilla HTML, CSS, and JavaScript. This project is perfect for beginners learning web development fundamentals.

![BMI Calculator Preview](https://img.shields.io/badge/Status-Complete-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🌟 Features

- **Simple Input Form**: Easy-to-use form for weight (kg) and height (cm) input
- **Real-time Calculation**: Instant BMI calculation with the click of a button
- **BMI Categories**: Color-coded results showing BMI categories:
  - 🔵 Underweight (< 18.5)
  - 🟢 Normal Weight (18.5 - 24.9)
  - 🟡 Overweight (25.0 - 29.9)
  - 🔴 Obese (≥ 30.0)
- **Input Validation**: Comprehensive error handling for invalid inputs
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Modern, intuitive interface with smooth animations
- **Keyboard Support**: Calculate BMI by pressing Enter key
- **Reference Guide**: Built-in BMI categories reference for user education

## 🚀 Demo

To see the BMI Calculator in action:

1. Clone this repository
2. Open `index.html` in your web browser
3. Enter your weight and height
4. Click "Calculate BMI" and see your results!

## 📁 Project Structure

```
BMI-Calculator/
├── index.html          # Main HTML structure
├── style.css           # CSS styling and responsive design
├── script.js           # JavaScript logic and functionality
└── README.md           # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling, flexbox, gradients, and animations
- **Vanilla JavaScript**: DOM manipulation, event handling, and calculations

## 📋 How to Use

1. **Enter Weight**: Input your weight in kilograms (1-1000 kg)
2. **Enter Height**: Input your height in centimeters (30-300 cm)
3. **Calculate**: Click the "Calculate BMI" button or press Enter
4. **View Results**: See your BMI value and category with color coding
5. **Reference**: Check the BMI categories guide for understanding

## 🔧 Installation & Setup

### Option 1: Download and Run
1. Download all files to your computer
2. Keep all files in the same folder
3. Double-click `index.html` to open in your browser

### Option 2: Clone Repository
```bash
git clone https://github.com/bhawnaverma123/BMI-Calculator.git
cd BMI-Calculator
```
Then open `index.html` in your preferred browser.

### Option 3: Live Server (Recommended for Development)
If you have VS Code with Live Server extension:
1. Open the project folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## 📐 BMI Formula

The calculator uses the standard BMI formula:

```
BMI = weight (kg) / (height in meters)²
```

**Example Calculation:**
- Weight: 70 kg
- Height: 175 cm (1.75 m)
- BMI = 70 / (1.75)² = 22.9 (Normal Weight)

## 🎨 Design Features

- **Gradient Background**: Beautiful blue gradient for visual appeal
- **Card Design**: Clean white card layout with shadow effects
- **Color Coding**: Different colors for each BMI category
- **Smooth Animations**: Hover effects and transitions
- **Mobile-First**: Responsive design that works on all screen sizes

## 🔍 Code Highlights

### Key JavaScript Functions:
- `calculateBMI()`: Main calculation coordinator
- `validateInputs()`: Input validation and error handling
- `calculateBMIValue()`: BMI formula implementation
- `getBMICategory()`: Category determination logic
- `displayResults()`: Dynamic result display

### CSS Features:
- Flexbox layout for centering
- CSS Grid for form organization
- Custom properties for consistent theming
- Media queries for responsive design

## 🎯 Learning Objectives

This project demonstrates:
- **HTML**: Form elements, semantic structure, accessibility
- **CSS**: Flexbox, gradients, animations, responsive design
- **JavaScript**: DOM manipulation, event handling, functions, conditionals
- **Best Practices**: Code organization, comments, validation

## 🤝 Contributing

Contributions are welcome! Here are some ideas for improvements:

- Add metric/imperial unit conversion
- Include BMI history tracking
- Add BMI trend charts
- Implement dark/light theme toggle
- Add more detailed health recommendations
- Include age and gender considerations

### How to Contribute:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Bhawna Verma**
- GitHub: [@bhawnaverma123](https://github.com/bhawnaverma123)

## 🙏 Acknowledgments

- BMI calculation formula from WHO (World Health Organization)
- Color scheme inspired by modern web design trends
- Icons and badges from Shields.io

## 📞 Support

If you have any questions or need help, please:
1. Check the [Issues](https://github.com/bhawnaverma123/BMI-Calculator/issues) page
2. Create a new issue if your question isn't already addressed
3. Provide as much detail as possible for faster resolution

---

⭐ **If you found this project helpful, please give it a star!** ⭐

*Made with ❤️ for learning web development*
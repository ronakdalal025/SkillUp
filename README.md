# ScoreUp IELTS – Homepage Assignment

A modern, responsive homepage built with **React JS** for a fictional IELTS coaching institute. The design emphasizes clarity, professional aesthetics, and responsiveness for both desktop and mobile users.

---

## 🚀 Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/ronakdalal025/SkillUp.git
   ```

2. Navigate to the project folder:

   ```bash
   cd IELTS-ASSIGNMENT
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the app in your browser (usually at `http://localhost:5173/`).

---

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation menu, logo, and mobile toggle logic
│   ├── Footer.jsx              # Basic links, contact info, and copyright
│   └── StarRating.jsx          # Reusable utility component for testimonial ratings
│
├── sections/
│   ├── HeroSection.jsx         # Hero section with main headline and call-to-action
│   ├── FeaturesSection.jsx     # Section displaying 4 feature cards
│   └── TestimonialsSection.jsx # Section with 3 student review cards
│
├── data/
│   └── content.js              # Exports featuresData and testimonialsData arrays
│
├── assets/
│   └── HeroVisual.jsx          # Inline SVG graphic used in Hero section
│
└── App.jsx                     # Main entry point assembling all sections
```

---

## 🎨 Design Choices

* **Modern & Professional Layout**
  Chose a clean layout with a consistent color palette (blue/purple shades) and modern typography to reflect trust and credibility for an educational institute.

* **Responsive Design**
  Implemented responsiveness so the page adapts smoothly to mobile, tablet, and desktop screens.

* **Component-Based Approach**
  Each section (Navbar, Hero, Features, Testimonials, Footer) is modular and reusable, making the codebase clean and maintainable.

* **Feature Highlights**

  * *Speaking Practice* (personalized coaching sessions)
  * *Mock Tests* (full-length practice exams)
  * *AI Band Score Predictor* (tech-driven feedback)
  * *Premium Study Materials* (updated resources for preparation)

* **Student Testimonials**
  Included real-style feedback cards with star ratings to build authenticity and trust.

* **Footer Simplicity**
  Contact info, quick links, and resource links are placed neatly in the footer for easy access.

---
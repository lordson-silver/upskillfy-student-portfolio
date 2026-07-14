# Front-End Web Developer Portfolio: Student Guide

Welcome to the **Modern Bento Portfolio** capstone project directory. This project is structured as a comprehensive learning sample for students undergoing front-end web development training. It replaces traditional linear layouts with a high-fidelity, grid-based layout inspired by the award-winning **Norden** portfolio.

---

## 🎯 Core Concepts Covered

This capstone integrates multiple core competencies taught across the course modules:

### 1. High Converting Elements & CTAs

- **Concept**: Utilizing primary vs secondary visual hierarchy for Call To Action (CTA) buttons.
- **Tutor Highlight**: Explain the contrast between the solid `Hire Me` primary button and the bordered `Download CV` secondary button. Show how the social links draw attention effectively without overpowering the main CTAs.

### 2. Semantic HTML5 Structure

- **Concept**: Avoiding "div-soup" by using descriptive semantic containers.

### 2. CSS Custom Properties (Variables)

- **Concept**: Storing reusable values (colors, shadows, border-radii) globally.

### 3. CSS Grid (The Bento Grid)

- **Concept**: Aligning elements in two dimensions (columns and rows).

### 4. Flexbox Layouts

- **Concept**: Distributing space and aligning elements in one dimension.

### 5. Micro-Animations & Scalable Vector Graphics (SVG)

- **Concept**: Enhancing user experience with CSS transitions and inline vector graphics.

---

---

### 🚀 Challenge 1: Dark Mode Toggle

- **Task**: Add a dark mode toggle button in the navbar.
- **Concept**: Use JavaScript to toggle a `.dark` class on the `<body>` element.
- **CSS Hint**:
  ```css
  body.dark {
  	--bg-color: #09090b;
  	--card-bg: #18181b;
  	--text-primary: #f4f4f5;
  	--text-secondary: #a1a1aa;
  	--border-color: rgba(255, 255, 255, 0.08);
  }
  ```
- **Learning Goal**: Demonstrating the power of CSS Variables combined with JavaScript DOM class toggling.

### 🚀 Challenge 2: Dynamic Project Populator

- **Task**: Move the featured projects inside a JavaScript array of objects and render them dynamically.
- **Concept**: JavaScript Array methods (`forEach`), template literals, and inserting HTML elements (`innerHTML` or `appendChild`).
- **Learning Goal**: Bridging static HTML mockups to dynamic database/API-driven rendering.

### 🚀 Challenge 3: Contact Form Validation

- **Task**: Replace the simple mailto link with a custom modal or form in the Get In Touch Card and validate input data.
- **Concept**: Listening to form submit events, preventing default browser behavior, checking string validity (e.g., regex for emails), and rendering error/success labels dynamically.

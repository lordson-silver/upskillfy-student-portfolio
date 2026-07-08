# Front-End Web Developer Portfolio: Instructor & Student Guide

Welcome to the **Modern Bento Portfolio** capstone project directory. This project is structured as a comprehensive learning sample for students undergoing front-end web development training. It replaces traditional linear layouts with a high-fidelity, grid-based layout inspired by the award-winning **Norden** portfolio.

This guide provides instructors and tutors with a clear breakdown of the code, key concepts to explain, and structured code-along pathways for students.

---

## 📂 Project Structure

Within `/training`, the project is structured as follows:

- **`index.html`**: Semantic markup containing standard developer details (Angela Yu profile, core skills, projects built during the course, and a contact section). Includes inline comments prefixed with `INSTRUCTOR NOTE`.
- **`style.css`**: Modern stylesheet demonstrating custom variables (design system tokens), card styling, hover animations, CSS Grid alignment, and CSS Media Queries. Includes inline tutor comments.
- **`profile.png`**: High-fidelity, professional developer avatar that represents a live, realistic portfolio sample.

---

## 🎯 Core Concepts Covered

This capstone integrates multiple core competencies taught across the course modules:

### 1. High Converting Elements & CTAs

- **Concept**: Utilizing primary vs secondary visual hierarchy for Call To Action (CTA) buttons.
- **Tutor Highlight**: Explain the contrast between the solid `Hire Me` primary button and the bordered `Download CV` secondary button. Show how the social links draw attention effectively without overpowering the main CTAs.

### 2. Semantic HTML5 Structure

- **Concept**: Avoiding "div-soup" by using descriptive semantic containers.
- **Tutor Highlight**: Discuss the usage of `<header>` for navigation, `<main>` for the grid body, `<section>` for individual portfolio cards, and `<footer>` for footer contents. Explain how screen readers and search engine crawlers (SEO) benefit from this semantic layout.

### 2. CSS Custom Properties (Variables)

- **Concept**: Storing reusable values (colors, shadows, border-radii) globally.
- **Tutor Highlight**: Show students how changing a single variable in `:root` (such as `--accent: #10b981`) propagates updates across the entire site. This is an excellent bridge into CSS design systems.

### 3. CSS Grid (The Bento Grid)

- **Concept**: Aligning elements in two dimensions (columns and rows).
- **Tutor Highlight**: Walk through the `.portfolio-grid` class. Point out `grid-template-columns: repeat(12, 1fr)`. Demonstrate how different cards span columns using `grid-column: span X` (e.g., Hero card spans 8 columns, Image card spans 4 columns, creating a clean 2/3 and 1/3 split).

### 4. Flexbox Layouts

- **Concept**: Distributing space and aligning elements in one dimension.
- **Tutor Highlight**: Show how Flexbox is used for smaller elements inside the grid layout, such as aligning elements inside `.nav-container` (`justify-content: space-between`) and aligning avatar images with titles in `.card-hero-header`.

### 5. Micro-Animations & Scalable Vector Graphics (SVG)

- **Concept**: Enhancing user experience with CSS transitions and inline vector graphics.
- **Tutor Highlight**:
  - **Pulsing Indicator**: Explain the `@keyframes` rule behind the `.pulse-dot::after` animation to demonstrate how repeating animations work.
  - **Inline SVGs**: Point out that SVGs scale perfectly without pixelation, load instantly, and can be styled dynamically using CSS properties like `color` and `stroke`.

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
- **Teaching Goal**: Demonstrating the power of CSS Variables combined with JavaScript DOM class toggling.

### 🚀 Challenge 2: Dynamic Project Populator

- **Task**: Move the featured projects inside a JavaScript array of objects and render them dynamically.
- **Concept**: JavaScript Array methods (`forEach`), template literals, and inserting HTML elements (`innerHTML` or `appendChild`).
- **Teaching Goal**: Bridging static HTML mockups to dynamic database/API-driven rendering.

### 🚀 Challenge 3: Contact Form Validation

- **Task**: Replace the simple mailto link with a custom modal or form in the Get In Touch Card and validate input data.
- **Concept**: Listening to form submit events, preventing default browser behavior, checking string validity (e.g., regex for emails), and rendering error/success labels dynamically.

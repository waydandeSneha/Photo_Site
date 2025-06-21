
# 📸 Personal Photography Website – *Golden Petal Canvas*

Welcome to **Golden Petal Canvas**, a personal photography website built using **HTML, CSS, and JavaScript**, showcasing various styles of photography through well-structured pages, interactivity, and visual storytelling.

---

## 🧾 Table of Contents

- [About the Project](#about-the-project)  
- [Live Demo](#live-demo)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Pages Overview](#pages-overview)  
- [Technologies Used](#technologies-used)  
- [How to Run Locally](#how-to-run-locally)  
- [Screenshots](#screenshots)  
- [Author](#author)

---

## 📌 About the Project

This is a fully responsive and interactive portfolio website designed for photographers to showcase their work across various genres — nature, wildlife, events, architecture, and more.

The aim of the project is to:
- Present professional-level photography work
- Create a responsive, accessible, and engaging web interface
- Implement core JavaScript features to enhance interactivity

---

## 🔗 Live Demo

Coming soon... (You can add your GitHub Pages link or Netlify/Render URL here)

---

## ✨ Features

- Responsive design for mobile, tablet, and desktop
- Navbar toggle menu
- Portfolio filtering by category
- Interactive blog section with scroll animations and read more toggles
- Lightbox gallery with image previews
- Animated counters and scroll reveals
- Social media footer links
- Clean, modular structure for scalability

---

## 📁 Project Structure

```
Project/
│
├── images/                   # Contains all images categorized in folders (AboutMe, Portfolio, Blog, Gallary)
│
├── scripts/                  # All JavaScript functionality
│   ├── script.js             # Common functionality for navbar toggle
│   ├── blog.js               # Scroll animations & read more toggles
│   ├── gallary.js            # Lightbox initialization
│   ├── portfolio.js          # Dynamic image loading by category
│   └── aboutme.js            # Scroll reveals & animated counters
│
├── styles/                   # All CSS styles
│   ├── main.css              # Common styling
│   ├── aboutme.css
│   ├── blog.css
│   ├── gallary.css
│   └── portfolio.css
│
├── simple-lightbox-master/  # Lightbox plugin for image previews
│
├── index.html               # Home page
├── aboutMe.html             # About the photographer
├── blog.html                # Photography blog page
├── gallary.html             # Interactive photo gallery
└── portfolio.html           # Category-based image showcase
```

---

## 📄 Pages Overview

### `index.html` – **Home Page**
- Introduction to the site/brand
- Hero section with visuals
- Links to other main sections
- Includes header and footer

### `aboutMe.html` – **About Me**
- Photographer’s bio and story
- Social media links
- Inspirational photography quotes
- Instagram photo grid
- JS Features: Scroll reveal animations, animated counters (optional section)

### `portfolio.html` – **Portfolio**
- Category-wise image showcase (e.g., Nature, Events, Street)
- Images loaded dynamically via JavaScript from `portfolio.js`
- Filtered into sections for a cleaner layout

### `gallary.html` – **Gallery**
- Grid layout of photography images
- Lightbox plugin (`SimpleLightbox`) used to show full-size previews on click
- Enhanced UX for exploring visuals

### `blog.html` – **Blog**
- Multiple blog entries (large and small format)
- `Read More` toggle feature for long descriptions
- Blog cards animated on scroll using `ScrollReveal`
- Smooth scroll to blog section with “View All Blogs” button

---

## 🛠 Technologies Used

- HTML5
- CSS3 (including Flexbox, Grid)
- JavaScript (Vanilla)
- ScrollReveal.js for animations
- SimpleLightbox.js for lightbox effect
- Font Awesome & Remix Icon for icons

---

## ▶️ How to Run Locally

1. Clone the repository  
   ```bash
   git clone https://github.com/your-username/photography-website.git
   cd photography-website
   ```

2. Open `index.html` in your browser.

> You can also use VS Code Live Server extension for live preview.

---



## 🙋‍♀️ Author

**Sneha Waydande**  
Final Year B.Tech CSE Student | Photographer | Web Developer  
[LinkedIn](https://www.linkedin.com/) • [Email](mailto:sneha@example.com)

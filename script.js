// DOM Elements
const loadingScreen = document.getElementById("loading-screen")
const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
const sidebar = document.getElementById("sidebar")
const navLinks = document.querySelectorAll(".nav-link")
const contentSections = document.querySelectorAll(".content-section")
const downloadCvBtn = document.getElementById("download-cv")
const contactForm = document.getElementById("contact-form")
const portfolioFilters = document.querySelectorAll(".filter-btn")
const portfolioItems = document.querySelectorAll(".portfolio-item")
const cursor = document.querySelector(".cursor")
const cursorFollower = document.querySelector(".cursor-follower")

// Loading Screen
window.addEventListener("load", () => {
  setTimeout(() => {
    loadingScreen.style.opacity = "0"
    setTimeout(() => {
      loadingScreen.style.display = "none"
    }, 500)
  }, 1000)
})

// Custom Cursor
if (window.innerWidth > 768) {
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    setTimeout(() => {
      cursorFollower.style.left = e.clientX + "px"
      cursorFollower.style.top = e.clientY + "px"
    }, 100)
  })

  // Cursor hover effects
  const hoverElements = document.querySelectorAll("a, button, .portfolio-item, .service-card, .testimonial-card")
  hoverElements.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      cursor.style.transform = "scale(1.5)"
      cursorFollower.style.transform = "scale(0.5)"
    })

    el.addEventListener("mouseleave", () => {
      cursor.style.transform = "scale(1)"
      cursorFollower.style.transform = "scale(1)"
    })
  })
}

// Mobile Menu Toggle
mobileMenuToggle.addEventListener("click", () => {
  mobileMenuToggle.classList.toggle("active")
  sidebar.classList.toggle("active")
})

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!sidebar.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
    mobileMenuToggle.classList.remove("active")
    sidebar.classList.remove("active")
  }
})

// Navigation
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault()

    // Remove active class from all links and sections
    navLinks.forEach((l) => l.classList.remove("active"))
    contentSections.forEach((s) => s.classList.remove("active"))

    // Add active class to clicked link
    link.classList.add("active")

    // Show corresponding section
    const targetSection = document.getElementById(link.dataset.section)
    if (targetSection) {
      targetSection.classList.add("active")
    }

    // Close mobile menu
    mobileMenuToggle.classList.remove("active")
    sidebar.classList.remove("active")

    // Scroll to top of main content
    document.querySelector(".main-content").scrollTop = 0
  })
})

// Portfolio Filters - FIXED VERSION
portfolioFilters.forEach((filter) => {
  filter.addEventListener("click", () => {
    // Remove active class from all filters
    portfolioFilters.forEach((f) => f.classList.remove("active"))

    // Add active class to clicked filter
    filter.classList.add("active")

    const filterValue = filter.dataset.filter
    console.log("Filter clicked:", filterValue) // Debug log

    // Filter portfolio items with smooth animation
    portfolioItems.forEach((item) => {
      const itemCategory = item.dataset.category
      console.log("Item category:", itemCategory) // Debug log

      if (filterValue === "all") {
        // Show all items
        item.style.display = "block"
        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "scale(1)"
        }, 50)
      } else if (itemCategory === filterValue) {
        // Show matching items
        item.style.display = "block"
        setTimeout(() => {
          item.style.opacity = "1"
          item.style.transform = "scale(1)"
        }, 50)
      } else {
        // Hide non-matching items
        item.style.opacity = "0"
        item.style.transform = "scale(0.8)"
        setTimeout(() => {
          item.style.display = "none"
        }, 300)
      }
    })
  })
})

// Download CV Functionality
downloadCvBtn.addEventListener("click", () => {
  const resumeHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purushotham V Mitti - Resume</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 40px 20px;
            color: #333;
            background: #fff;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            border-bottom: 3px solid #6366f1;
            padding-bottom: 20px;
        }
        .header h1 {
            font-size: 32px;
            margin-bottom: 10px;
            color: #1e293b;
        }
        .header .title {
            font-size: 18px;
            color: #6366f1;
            font-weight: 600;
        }
        .contact-info {
            text-align: center;
            margin-bottom: 30px;
            font-size: 14px;
            color: #64748b;
        }
        .section {
            margin-bottom: 30px;
        }
        .section h2 {
            font-size: 24px;
            color: #1e293b;
            border-bottom: 2px solid #6366f1;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }
        .job {
            margin-bottom: 25px;
            padding: 20px;
            background: #f8fafc;
            border-left: 4px solid #6366f1;
            border-radius: 8px;
        }
        .job-title {
            font-size: 18px;
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 5px;
        }
        .job-company {
            font-size: 16px;
            color: #6366f1;
            font-weight: 600;
            margin-bottom: 5px;
        }
        .job-period {
            color: #64748b;
            font-size: 14px;
            margin-bottom: 10px;
        }
        .job-description {
            color: #475569;
            margin-bottom: 10px;
        }
        .skills {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-top: 10px;
        }
        .skill {
            background: #e0e7ff;
            color: #6366f1;
            padding: 4px 12px;
            border-radius: 15px;
            font-size: 12px;
            font-weight: 500;
        }
        .skills-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .skill-item {
            background: #f1f5f9;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 14px;
            color: #475569;
            border: 1px solid #e2e8f0;
        }
        .certifications {
            list-style: none;
            padding: 0;
        }
        .certifications li {
            padding: 10px 0;
            border-bottom: 1px solid #e2e8f0;
            color: #475569;
        }
        .certifications li:before {
            content: "🏆 ";
            margin-right: 10px;
        }
        .projects {
            display: grid;
            gap: 20px;
        }
        .project {
            background: #f8fafc;
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
        }
        .project h4 {
            color: #1e293b;
            margin-bottom: 10px;
            font-size: 16px;
        }
        .project p {
            color: #64748b;
            font-size: 14px;
            margin-bottom: 10px;
        }
        @media print {
            body { font-size: 12px; }
            .header h1 { font-size: 24px; }
            .section h2 { font-size: 18px; }
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Purushotham V Mitti</h1>
        <div class="title">Aspiring Developer</div>
    </div>
    
    <div class="contact-info">
        Bangalore, India | Phone: +91 8073866293 | Email: purushothamvmitti05@gmail.com<br>
        LinkedIn: linkedin.com/in/purushotham-v-mitti | GitHub: github.com/purushothamvmitti05
    </div>
    
    <div class="section">
        <h2>Professional Summary</h2>
        <p>Strategic and results-driven Computer Science and Design graduate with proven experience in Python development, backend automation, and full-stack web technologies. Skilled in building scalable, data-driven solutions using modern frameworks and tools. Adept at solving real-world problems through efficient code, optimized databases, and agile collaboration. Eager to contribute as a Software or Backend Engineer in innovative, impact-driven teams.</p>
    </div>
    
    <div class="section">
        <h2>Education</h2>
        <div class="job">
            <div class="job-title">Bachelor of Engineering in Computer Science and Design</div>
            <div class="job-company">K.S. Institute of Technology, Bangalore</div>
            <div class="job-period">2023 – 2025 | CGPA: 8.35</div>
        </div>
    </div>
    
    <div class="section">
        <h2>Technical Skills</h2>
        <div class="skills-grid">
            <span class="skill-item">Python</span>
            <span class="skill-item">Java</span>
            <span class="skill-item">JavaScript</span>
            <span class="skill-item">HTML/CSS</span>
            <span class="skill-item">MSSQL</span>
            <span class="skill-item">SQL Automation</span>
            <span class="skill-item">Flask</span>
            <span class="skill-item">Machine Learning</span>
            <span class="skill-item">IoT</span>
            <span class="skill-item">Git</span>
            <span class="skill-item">Docker</span>
            <span class="skill-item">Linux</span>
            <span class="skill-item">Aveva Reports</span>
        </div>
    </div>
    
    <div class="section">
        <h2>Professional Experience</h2>
        
        <div class="job">
            <div class="job-title">Software Developer Intern – Python & Database Systems</div>
            <div class="job-company">Utthunga Technologies Pvt Ltd, Bangalore</div>
            <div class="job-period">February 2025 – May 2025</div>
            <div class="job-description">
                • Automated database operations and reporting using MSSQL and Aveva Reports, reducing manual tasks by 30%<br>
                • Optimized stored procedures and complex queries, improving database response time by 25%<br>
                • Designed database automation workflows, extending unit testing with Python scripting for advanced data processing
            </div>
            <div class="skills">
                <span class="skill">Python</span>
                <span class="skill">MSSQL</span>
                <span class="skill">Aveva Reports</span>
                <span class="skill">Database Automation</span>
            </div>
        </div>
        
        <div class="job">
            <div class="job-title">Full Stack Web Development Intern</div>
            <div class="job-company">Varcons Technologies Pvt Ltd</div>
            <div class="job-period">April 2024 – May 2024</div>
            <div class="job-description">
                • Developed a Student Bus Pass System using PHP and SQL, cutting application processing time by 40% for 500+ students<br>
                • Designed and built a fully responsive front-end using HTML, CSS, and JavaScript<br>
                • Worked in an Agile team, delivering the project two weeks ahead of schedule
            </div>
            <div class="skills">
                <span class="skill">PHP</span>
                <span class="skill">SQL</span>
                <span class="skill">HTML</span>
                <span class="skill">CSS</span>
                <span class="skill">JavaScript</span>
                <span class="skill">Agile</span>
            </div>
        </div>
        
        <div class="job">
            <div class="job-title">Python Programming Intern</div>
            <div class="job-company">YBI Foundation</div>
            <div class="job-period">August 2024 – October 2024</div>
            <div class="job-description">
                • Developed multiple Python scripts for data processing, automation, and analysis<br>
                • Built real-time mini-projects using Python libraries such as NumPy, Pandas, and Matplotlib<br>
                • Enhanced Python debugging and optimization skills through collaborative code reviews
            </div>
            <div class="skills">
                <span class="skill">Python</span>
                <span class="skill">NumPy</span>
                <span class="skill">Pandas</span>
                <span class="skill">Matplotlib</span>
                <span class="skill">Data Analysis</span>
            </div>
        </div>
        
        <div class="job">
            <div class="job-title">IoT and Micro Python Intern</div>
            <div class="job-company">Cranes Varsity</div>
            <div class="job-period">October 2023 – December 2023</div>
            <div class="job-description">
                • Designed a Gas Leakage Detector using ESP32 and gas sensors with real-time SMS alert system<br>
                • Developed a Classroom Automation System for remote device control via mobile app, improving energy efficiency<br>
                • Configured MQTT protocol for reliable IoT device communication
            </div>
            <div class="skills">
                <span class="skill">IoT</span>
                <span class="skill">ESP32</span>
                <span class="skill">MicroPython</span>
                <span class="skill">MQTT</span>
                <span class="skill">Sensors</span>
            </div>
        </div>
    </div>
    
    <div class="section">
        <h2>Key Projects</h2>
        <div class="projects">
            <div class="project">
                <h4>Medico - Medical Guidance System</h4>
                <p>ML-powered healthcare platform with disease prediction, medicine recommendations, and blood bank assistance using Random Forest algorithm. Technologies: Python, Flask, Machine Learning, HTML, CSS, JavaScript</p>
            </div>
            
            <div class="project">
                <h4>Animal Rescue Web Application</h4>
                <p>Platform for uploading injured animal images, notifying nearby veterinary hospitals with QR-based donation system. Technologies: HTML, CSS, JavaScript, QR Integration</p>
            </div>
            
            <div class="project">
                <h4>Online Quiz Application</h4>
                <p>Interactive quiz platform with admin panel, question management, and user tracking system. Technologies: Python, HTML, CSS, JavaScript</p>
            </div>
        </div>
    </div>
    
    <div class="section">
        <h2>Certifications</h2>
        <ul class="certifications">
            <li>Full Stack Web Development – Varcons Technologies Pvt Ltd</li>
            <li>Python Programming – YBI Foundation</li>
            <li>Introduction to Cloud Computing – IBM</li>
            <li>Java Programming – Great Learning</li>
            <li>Industrial Robotics and Applications – GTTC-Siemens Center of Excellence</li>
            <li>AWS Glue for Data Engineers – In Progress (Udemy)</li>
        </ul>
    </div>
    
    <div class="section">
        <h2>Publications</h2>
        <div class="job">
            <div class="job-title">MEDICO: SPECIALIZED MEDICINE GUIDANCE & BLOOD BANK ASSISTANCE</div>
            <div class="job-company">International Research Journal of Modernization in Engineering Technology and Science</div>
            <div class="job-period">Volume: 07/Issue: 04/April-2025 | Impact Factor: 8.187</div>
            <div class="job-description">Co-authored research paper on ML-powered healthcare platform with disease prediction and blood bank assistance systems.</div>
        </div>
    </div>
</body>
</html>
    `

  const blob = new Blob([resumeHTML], { type: "text/html" })
  const url = URL.createObjectURL(blob)

  const link = document.createElement("a")
  link.href = url
  link.download = "Purushotham_V_Mitti_Resume.html"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)

  setTimeout(() => URL.revokeObjectURL(url), 100)

  // Show success message
  showNotification("Resume downloaded successfully!", "success")
})

// Contact Form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Simple validation
  if (!name || !email || !message) {
    showNotification("Please fill in all fields", "error")
    return
  }

  // Simulate form submission
  const submitBtn = contactForm.querySelector(".submit-btn")
  const originalText = submitBtn.innerHTML

  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...'
  submitBtn.disabled = true

  setTimeout(() => {
    submitBtn.innerHTML = originalText
    submitBtn.disabled = false
    contactForm.reset()
    showNotification("Message sent successfully! I'll get back to you soon.", "success")
  }, 2000)
})

// Notification System
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification ${type}`
  notification.innerHTML = `
        <i class="fas fa-${type === "success" ? "check-circle" : type === "error" ? "exclamation-circle" : "info-circle"}"></i>
        <span>${message}</span>
    `

  // Add notification styles
  notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#6366f1"};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        display: flex;
        align-items: center;
        gap: 10px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        backdrop-filter: blur(10px);
    `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 4000)
}

// Add notification animations
const style = document.createElement("style")
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`
document.head.appendChild(style)

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.querySelectorAll(".service-card, .testimonial-card, .portfolio-item, .timeline-item").forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
  observer.observe(el)
})

// Typing effect for profile title
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Initialize typing effect after loading
window.addEventListener("load", () => {
  setTimeout(() => {
    const profileTitle = document.querySelector(".profile-title")
    if (profileTitle) {
      typeWriter(profileTitle, "Aspiring Developer", 150)
    }
  }, 1500)
})

// Parallax effect for floating shapes
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const shapes = document.querySelectorAll(".floating-shape")

  shapes.forEach((shape, index) => {
    const speed = 0.5 + index * 0.1
    shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`
  })
})

// Skills animation on hover
document.querySelectorAll(".skill-tag").forEach((skill) => {
  skill.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.05)"
  })

  skill.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Portfolio item hover effects
document.querySelectorAll(".portfolio-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)"
  })

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)"
  })
})

// Add loading states to buttons
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", function () {
    if (!this.classList.contains("loading")) {
      this.classList.add("loading")
      setTimeout(() => {
        this.classList.remove("loading")
      }, 1000)
    }
  })
})

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to main content
  document.querySelector(".main-content").style.opacity = "0"
  setTimeout(() => {
    document.querySelector(".main-content").style.transition = "opacity 1s ease"
    document.querySelector(".main-content").style.opacity = "1"
  }, 500)

  // Initialize portfolio filter - show all items by default
  const allItems = document.querySelectorAll(".portfolio-item")
  allItems.forEach((item) => {
    item.style.display = "block"
    item.style.opacity = "1"
    item.style.transform = "scale(1)"
  })

  console.log("Portfolio initialized successfully! 🚀")
  console.log("Portfolio items found:", portfolioItems.length)
  console.log("Filter buttons found:", portfolioFilters.length)
})

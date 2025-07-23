// Smooth scrolling for navigation links (only internal links)
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

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)"
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)"
    navbar.style.boxShadow = "none"
  }
})

// Simple AOS (Animate On Scroll) implementation
function initAOS() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("aos-animate")
      }
    })
  }, observerOptions)

  // Observe all elements with data-aos attribute
  document.querySelectorAll("[data-aos]").forEach((el) => {
    observer.observe(el)
  })
}

// Portfolio item hover effects
function initPortfolioEffects() {
  const portfolioItems = document.querySelectorAll(".portfolio-item")

  portfolioItems.forEach((item) => {
    item.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)"
    })

    item.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })
}

// Form submission handler
function initContactForm() {
  const form = document.querySelector(".contact-form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()

    // Get form data
    const formData = new FormData(form)
    const data = Object.fromEntries(formData)

    // Simulate form submission
    const submitButton = form.querySelector(".submit-button")
    const originalText = submitButton.innerHTML

    submitButton.innerHTML = "Sending..."
    submitButton.disabled = true

    setTimeout(() => {
      submitButton.innerHTML = "Message Sent! ✓"
      submitButton.style.background = "#22c55e"

      setTimeout(() => {
        submitButton.innerHTML = originalText
        submitButton.style.background = ""
        submitButton.disabled = false
        form.reset()
      }, 2000)
    }, 1500)
  })
}

// Mobile navigation toggle
function initMobileNav() {
  const navToggle = document.querySelector(".nav-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation()
      navMenu.classList.toggle("active")
      navToggle.classList.toggle("active")
    })

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      }
    })

    // Close menu when clicking on a link
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
        navToggle.classList.remove("active")
      })
    })
  }
}

// Parallax effect for hero section
function initParallax() {
  const hero = document.querySelector(".hero")
  const heroImg = document.querySelector(".hero-img")

  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const rate = scrolled * -0.5

    if (heroImg) {
      heroImg.style.transform = `translateY(${rate}px)`
    }
  })
}

// Typing animation for hero title
function initTypingAnimation() {
  const heroTitle = document.querySelector(".hero-title")
  const text = heroTitle.textContent
  heroTitle.textContent = ""

  let i = 0
  const typeWriter = () => {
    if (i < text.length) {
      heroTitle.textContent += text.charAt(i)
      i++
      setTimeout(typeWriter, 50)
    }
  }

  setTimeout(typeWriter, 1000)
}

// Smooth reveal animation for service cards
function initServiceCardAnimation() {
  const serviceCards = document.querySelectorAll(".service-card")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateY(0)"
          }, index * 200)
        }
      })
    },
    { threshold: 0.1 },
  )

  serviceCards.forEach((card) => {
    observer.observe(card)
  })
}

// Process steps animation
function initProcessAnimation() {
  const processSteps = document.querySelectorAll(".process-step")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateX(0)"
          }, index * 300)
        }
      })
    },
    { threshold: 0.1 },
  )

  processSteps.forEach((step) => {
    observer.observe(step)
  })
}

// Cursor trail effect
function initCursorTrail() {
  const cursor = document.createElement("div")
  cursor.className = "cursor-trail"
  cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(0, 0, 0, 0.1);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        transform: translate(-50%, -50%);
    `
  document.body.appendChild(cursor)

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"
  })

  // Hide cursor trail on mobile
  if (window.innerWidth <= 768) {
    cursor.style.display = "none"
  }
}

// Social links hover animation
function initSocialLinksAnimation() {
  const socialLinks = document.querySelectorAll(".social-link")

  socialLinks.forEach((link) => {
    link.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px) scale(1.05)"
    })

    link.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
}

// Profile image hover effect
function initProfileImageAnimation() {
  const profileImg = document.querySelector(".profile-img")

  if (profileImg) {
    profileImg.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(5deg)"
    })

    profileImg.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)"
    })
  }
}

// Language selector functionality
function initLanguageSelector() {
  const langButtons = document.querySelectorAll(".lang-btn")
  const elementsToTranslate = document.querySelectorAll("[data-en][data-pt]")

  let currentLang = "en"

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.dataset.lang

      if (selectedLang === currentLang) return

      // Update active button
      langButtons.forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")

      // Update text content
      elementsToTranslate.forEach((element) => {
        const text = element.dataset[selectedLang]
        if (text) {
          element.textContent = text
        }
      })

      currentLang = selectedLang

      // Store preference
      localStorage.setItem("preferred-language", selectedLang)
    })
  })

  // Load saved language preference
  const savedLang = localStorage.getItem("preferred-language")
  if (savedLang && savedLang !== "en") {
    const targetBtn = document.querySelector(`[data-lang="${savedLang}"]`)
    if (targetBtn) {
      targetBtn.click()
    }
  }
}

// Initialize all functions when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initAOS()
  initPortfolioEffects()
  initContactForm()
  initMobileNav()
  initParallax()
  initServiceCardAnimation()
  initProcessAnimation()
  initCursorTrail()
  initSocialLinksAnimation()
  initProfileImageAnimation()
  initLanguageSelector()

  // Add loading animation
  document.body.style.opacity = "0"
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease"
    document.body.style.opacity = "1"
  }, 100)
})

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply throttling to scroll events
window.addEventListener(
  "scroll",
  throttle(() => {
    // Scroll-based animations can be added here
  }, 16),
) // ~60fps

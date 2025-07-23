// Work page specific functionality
document.addEventListener("DOMContentLoaded", () => {
  // Portfolio filtering functionality
  const filterButtons = document.querySelectorAll(".filter-btn")
  const portfolioProjects = document.querySelectorAll(".portfolio-project")

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter

      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Filter projects
      portfolioProjects.forEach((project) => {
        const category = project.dataset.category

        if (filter === "all" || category === filter) {
          project.classList.remove("hidden")
          project.classList.add("show")
        } else {
          project.classList.add("hidden")
          project.classList.remove("show")
        }
      })
    })
  })

  // Animate results numbers on scroll
  const resultNumbers = document.querySelectorAll(".result-number")

  const animateNumbers = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target
        const finalNumber = target.textContent
        const isPercentage = finalNumber.includes("%")
        const isPlus = finalNumber.includes("+")
        const numericValue = Number.parseInt(finalNumber.replace(/[^\d]/g, ""))

        let current = 0
        const increment = numericValue / 50
        const timer = setInterval(() => {
          current += increment
          if (current >= numericValue) {
            current = numericValue
            clearInterval(timer)
          }

          let displayValue = Math.floor(current)
          if (finalNumber.includes("M")) {
            displayValue = (displayValue / 1000000).toFixed(1) + "M"
          } else if (finalNumber.includes("K")) {
            displayValue = (displayValue / 1000).toFixed(0) + "K"
          }

          if (isPlus) displayValue = "+" + displayValue
          if (isPercentage) displayValue += "%"

          target.textContent = displayValue
        }, 30)

        observer.unobserve(target)
      }
    })
  }

  const numberObserver = new IntersectionObserver(animateNumbers, {
    threshold: 0.5,
  })

  resultNumbers.forEach((number) => {
    numberObserver.observe(number)
  })

  // Stagger animation for portfolio items
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }, index * 100)
      }
    })
  }, observerOptions)

  portfolioProjects.forEach((project) => {
    project.style.opacity = "0"
    project.style.transform = "translateY(30px)"
    project.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    portfolioObserver.observe(project)
  })

  // Smooth scroll for internal links
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
})

// Função para inicializar seletor de idioma (se não existir em script.js)
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

// Initialize language selector
initLanguageSelector()

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

// Initialize mobile nav
initMobileNav()
  
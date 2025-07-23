// About page specific functionality
document.addEventListener("DOMContentLoaded", () => {
  // Animate stats on scroll
  const statItems = document.querySelectorAll(".stat-item")
  const valueItems = document.querySelectorAll(".value-item")

  const observerOptions = {
    threshold: 0.3,
    rootMargin: "0px 0px -50px 0px",
  }

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("animate")

          // Animate the number counting
          const numberElement = entry.target.querySelector(".stat-number")
          const finalNumber = numberElement.textContent
          const isPercentage = finalNumber.includes("%")
          const isPlus = finalNumber.includes("+")
          const numericValue = Number.parseInt(finalNumber.replace(/[^\d]/g, ""))

          let current = 0
          const increment = numericValue / 30
          const timer = setInterval(() => {
            current += increment
            if (current >= numericValue) {
              current = numericValue
              clearInterval(timer)
            }

            let displayValue = Math.floor(current)
            if (isPlus) displayValue = displayValue + "+"
            if (isPercentage) displayValue += "%"

            numberElement.textContent = displayValue
          }, 50)
        }, index * 200)
      }
    })
  }, observerOptions)

  const valuesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("animate")
        }, index * 150)
      }
    })
  }, observerOptions)

  statItems.forEach((item) => {
    statsObserver.observe(item)
  })

  valueItems.forEach((item) => {
    valuesObserver.observe(item)
  })

  // Profile image hover effect
  const profileImage = document.querySelector(".profile-image")
  if (profileImage) {
    profileImage.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05) rotate(2deg)"
    })

    profileImage.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)"
    })
  }

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

  // Add parallax effect to hero image
  const heroImage = document.querySelector(".hero-bg-image")
  if (heroImage) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3
      heroImage.style.transform = `translateY(${rate}px)`
    })
  }
})

// Initialize language selector and mobile nav
initLanguageSelector()
initMobileNav()

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
  
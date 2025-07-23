// Services page specific functionality
document.addEventListener("DOMContentLoaded", () => {
  // Animate service items on scroll
  const serviceItems = document.querySelectorAll(".service-item")
  const packageCards = document.querySelectorAll(".package-card")

  const observerOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px",
  }

  const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("animate")
        }, index * 150)
      }
    })
  }, observerOptions)

  const packagesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("animate")
        }, index * 200)
      }
    })
  }, observerOptions)

  serviceItems.forEach((item) => {
    servicesObserver.observe(item)
  })

  packageCards.forEach((card) => {
    packagesObserver.observe(card)
  })

  // Add hover effects to service icons
  const serviceIcons = document.querySelectorAll(".service-icon")
  serviceIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.1) rotate(5deg)"
    })

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)"
    })
  })

  // Package card hover effects
  const packageButtons = document.querySelectorAll(".package-btn, .package-button")
  packageButtons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
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

  // Add parallax effect to hero image
  const heroImage = document.querySelector(".hero-bg-image")
  if (heroImage) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3
      heroImage.style.transform = `translateY(${rate}px)`
    })
  }

  // Price animation on scroll
  const priceElements = document.querySelectorAll(".amount")
  const priceObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const finalPrice = entry.target.textContent
          const numericPrice = Number.parseInt(finalPrice)
          let currentPrice = 0
          const increment = numericPrice / 30

          const timer = setInterval(() => {
            currentPrice += increment
            if (currentPrice >= numericPrice) {
              currentPrice = numericPrice
              clearInterval(timer)
            }
            entry.target.textContent = Math.floor(currentPrice)
          }, 50)

          priceObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  priceElements.forEach((price) => {
    priceObserver.observe(price)
  })
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
  
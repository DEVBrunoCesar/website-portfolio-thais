// Contact form specific functionality
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Get submit button
      const submitButton = contactForm.querySelector(".submit-button")
      const originalContent = submitButton.innerHTML

      // Show loading state
      submitButton.innerHTML = `
                <span>Sending...</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                </svg>
            `
      submitButton.disabled = true

      // Simulate form submission
      setTimeout(() => {
        submitButton.innerHTML = `
                    <span>Message Sent!</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="20,6 9,17 4,12"/>
                    </svg>
                `
        submitButton.style.background = "#22c55e"

        // Reset form after success
        setTimeout(() => {
          contactForm.reset()
          submitButton.innerHTML = originalContent
          submitButton.style.background = ""
          submitButton.disabled = false
        }, 3000)
      }, 2000)
    })
  }

  // Form validation enhancements
  const inputs = contactForm.querySelectorAll("input, select, textarea")
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      validateField(this)
    })

    input.addEventListener("input", function () {
      if (this.classList.contains("error")) {
        validateField(this)
      }
    })
  })

  function validateField(field) {
    const value = field.value.trim()
    const isRequired = field.hasAttribute("required")

    // Remove existing error styling
    field.classList.remove("error")
    const existingError = field.parentNode.querySelector(".error-message")
    if (existingError) {
      existingError.remove()
    }

    // Validate required fields
    if (isRequired && !value) {
      showFieldError(field, "This field is required")
      return false
    }

    // Validate email
    if (field.type === "email" && value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(value)) {
        showFieldError(field, "Please enter a valid email address")
        return false
      }
    }

    return true
  }

  function showFieldError(field, message) {
    field.classList.add("error")
    const errorDiv = document.createElement("div")
    errorDiv.className = "error-message"
    errorDiv.textContent = message
    errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.875rem;
            margin-top: 0.25rem;
        `
    field.parentNode.appendChild(errorDiv)
  }

  // Add error styles to CSS
  const style = document.createElement("style")
  style.textContent = `
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
            border-color: #ef4444;
            box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
        }
    `
  document.head.appendChild(style)
})
  
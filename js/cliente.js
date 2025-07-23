// Client Project Page Functionality
document.addEventListener("DOMContentLoaded", () => {
  // Get client parameter from URL
  const urlParams = new URLSearchParams(window.location.search)
  const clientId = urlParams.get("client")

  // Client data configuration - easily configurable for new clients
  const clientData = {
    "gaming-legend": {
      name: "Gaming Legend",
      category: "GAMING CONTENT CREATOR",
      categoryPt: "CRIADOR DE CONTEÚDO GAMING",
      description: "Complete channel rebrand with thumbnail redesign that resulted in explosive growth",
      descriptionPt: "Rebrand completo do canal com redesign de thumbnails que resultou em crescimento explosivo",
      stats: {
        ctrIncrease: "+250%",
        subscribers: "2.1M",
        monthlyViews: "15M+",
      },
      challenge:
        "Gaming Legend was struggling with low click-through rates despite having great content. Their thumbnails weren't standing out in the crowded gaming space, and subscriber growth had plateaued.",
      challengePt:
        "Gaming Legend estava lutando com baixas taxas de cliques apesar de ter ótimo conteúdo. Suas thumbnails não se destacavam no espaço gaming lotado, e o crescimento de inscritos havia estagnado.",
      goals: [
        "Increase click-through rates by at least 100%",
        "Create a consistent visual brand identity",
        "Stand out in the competitive gaming niche",
        "Boost subscriber growth and engagement",
      ],
      goalsPt: [
        "Aumentar taxas de cliques em pelo menos 100%",
        "Criar uma identidade visual de marca consistente",
        "Se destacar no nicho competitivo de gaming",
        "Impulsionar crescimento de inscritos e engajamento",
      ],
      projectDetails: {
        duration: "3 months",
        durationPt: "3 meses",
        thumbnails: "45",
        contentType: "Gaming Reviews & Gameplay",
        contentTypePt: "Reviews de Games & Gameplay",
        channelGrowth: "800K → 2.1M subscribers",
        channelGrowthPt: "800K → 2.1M inscritos",
      },
      testimonial:
        "The thumbnail redesign completely transformed my channel. Not only did my click-through rates skyrocket, but my subscriber growth exploded. The new thumbnails perfectly capture the energy of my content and stand out in search results. Best investment I've made for my channel!",
      testimonialPt:
        "O redesign das thumbnails transformou completamente meu canal. Não apenas minhas taxas de cliques dispararam, mas meu crescimento de inscritos explodiu. As novas thumbnails capturam perfeitamente a energia do meu conteúdo e se destacam nos resultados de busca. Melhor investimento que fiz para meu canal!",
      authorTitle: "Gaming Content Creator, 2.1M Subscribers",
      authorTitlePt: "Criador de Conteúdo Gaming, 2.1M Inscritos",
    },
    "tech-reviewer": {
      name: "Tech Reviewer Pro",
      category: "TECHNOLOGY REVIEWS",
      categoryPt: "REVIEWS DE TECNOLOGIA",
      description: "Modern, clean thumbnail design that increased engagement and subscriber growth",
      descriptionPt: "Design moderno e limpo de thumbnails que aumentou engajamento e crescimento de inscritos",
      stats: {
        ctrIncrease: "+180%",
        subscribers: "1.5M",
        monthlyViews: "8M+",
      },
      challenge:
        "Tech Reviewer Pro needed thumbnails that would stand out in the competitive tech review space while maintaining a professional appearance that matched their detailed review content.",
      challengePt:
        "Tech Reviewer Pro precisava de thumbnails que se destacassem no espaço competitivo de reviews de tech mantendo uma aparência profissional que combinasse com seu conteúdo detalhado de reviews.",
      goals: [
        "Create professional, clean thumbnail designs",
        "Increase click-through rates significantly",
        "Establish visual consistency across all content",
        "Appeal to tech-savvy audience",
      ],
      goalsPt: [
        "Criar designs de thumbnails profissionais e limpos",
        "Aumentar significativamente as taxas de cliques",
        "Estabelecer consistência visual em todo o conteúdo",
        "Atrair audiência conhecedora de tecnologia",
      ],
      projectDetails: {
        duration: "2 months",
        durationPt: "2 meses",
        thumbnails: "32",
        contentType: "Tech Reviews & Unboxings",
        contentTypePt: "Reviews de Tech & Unboxings",
        channelGrowth: "600K → 1.5M subscribers",
        channelGrowthPt: "600K → 1.5M inscritos",
      },
      testimonial:
        "The new thumbnail design perfectly captures the essence of my tech reviews. They're clean, professional, and incredibly effective at driving clicks. My channel growth has been phenomenal since the redesign!",
      testimonialPt:
        "O novo design de thumbnails captura perfeitamente a essência dos meus reviews de tech. São limpos, profissionais e incrivelmente eficazes em gerar cliques. O crescimento do meu canal tem sido fenomenal desde o redesign!",
      authorTitle: "Tech Reviewer, 1.5M Subscribers",
      authorTitlePt: "Reviewer de Tech, 1.5M Inscritos",
    },
    // Add more clients here easily...
  }

  // Load client data if available
  if (clientId && clientData[clientId]) {
    loadClientData(clientData[clientId])
  }

  function loadClientData(data) {
    // Update page title
    document.title = `${data.name} - Thumbnail Designer`

    // Update client name
    const clientNameElements = document.querySelectorAll('[data-en="Gaming Legend"]')
    clientNameElements.forEach((el) => {
      el.setAttribute("data-en", data.name)
      el.setAttribute("data-pt", data.name)
      el.textContent = data.name
    })

    // Update category
    const categoryElements = document.querySelectorAll('[data-en="GAMING CONTENT CREATOR"]')
    categoryElements.forEach((el) => {
      el.setAttribute("data-en", data.category)
      el.setAttribute("data-pt", data.categoryPt)
      el.textContent = data.category
    })

    // Update description
    const descElements = document.querySelectorAll('[data-en*="Complete channel rebrand"]')
    descElements.forEach((el) => {
      el.setAttribute("data-en", data.description)
      el.setAttribute("data-pt", data.descriptionPt)
      el.textContent = data.description
    })

    // Update stats
    document.querySelector(".stat-hero:nth-child(1) .stat-number").textContent = data.stats.ctrIncrease
    document.querySelector(".stat-hero:nth-child(2) .stat-number").textContent = data.stats.subscribers
    document.querySelector(".stat-hero:nth-child(3) .stat-number").textContent = data.stats.monthlyViews

    // Update challenge text
    const challengeElements = document.querySelectorAll('[data-en*="Gaming Legend was struggling"]')
    challengeElements.forEach((el) => {
      el.setAttribute("data-en", data.challenge)
      el.setAttribute("data-pt", data.challengePt)
      el.textContent = data.challenge
    })

    // Update project details
    const durationEl = document.querySelector(".detail-card:nth-child(1) p")
    if (durationEl) {
      durationEl.setAttribute("data-en", data.projectDetails.duration)
      durationEl.setAttribute("data-pt", data.projectDetails.durationPt)
      durationEl.textContent = data.projectDetails.duration
    }

    const thumbnailsEl = document.querySelector(".detail-card:nth-child(2) p")
    if (thumbnailsEl) {
      thumbnailsEl.textContent = data.projectDetails.thumbnails
    }

    const contentTypeEl = document.querySelector(".detail-card:nth-child(3) p")
    if (contentTypeEl) {
      contentTypeEl.setAttribute("data-en", data.projectDetails.contentType)
      contentTypeEl.setAttribute("data-pt", data.projectDetails.contentTypePt)
      contentTypeEl.textContent = data.projectDetails.contentType
    }

    const channelGrowthEl = document.querySelector(".detail-card:nth-child(4) p")
    if (channelGrowthEl) {
      channelGrowthEl.setAttribute("data-en", data.projectDetails.channelGrowth)
      channelGrowthEl.setAttribute("data-pt", data.projectDetails.channelGrowthPt)
      channelGrowthEl.textContent = data.projectDetails.channelGrowth
    }

    // Update testimonial
    const testimonialEl = document.querySelector("blockquote")
    if (testimonialEl) {
      testimonialEl.setAttribute("data-en", data.testimonial)
      testimonialEl.setAttribute("data-pt", data.testimonialPt)
      testimonialEl.textContent = data.testimonial
    }

    // Update author info
    const authorNameEl = document.querySelector(".author-info h4")
    if (authorNameEl) {
      authorNameEl.textContent = data.name
    }

    const authorTitleEl = document.querySelector(".author-info p")
    if (authorTitleEl) {
      authorTitleEl.setAttribute("data-en", data.authorTitle)
      authorTitleEl.setAttribute("data-pt", data.authorTitlePt)
      authorTitleEl.textContent = data.authorTitle
    }
  }

  // Animate timeline items on scroll
  const timelineItems = document.querySelectorAll(".timeline-item")

  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = "1"
            entry.target.style.transform = "translateX(0)"
          }, index * 200)
        }
      })
    },
    { threshold: 0.3 },
  )

  timelineItems.forEach((item) => {
    item.style.opacity = "0"
    item.style.transform = "translateX(-30px)"
    item.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    timelineObserver.observe(item)
  })

  // Animate stats on scroll
  const statNumbers = document.querySelectorAll(".stat-number")

  const statsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "scale(1.1)"
          setTimeout(() => {
            entry.target.style.transform = "scale(1)"
          }, 200)
        }
      })
    },
    { threshold: 0.5 },
  )

  statNumbers.forEach((stat) => {
    stat.style.transition = "transform 0.3s ease"
    statsObserver.observe(stat)
  })

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

  // Chamar as funções
  initMobileNav()
  initLanguageSelector()
})

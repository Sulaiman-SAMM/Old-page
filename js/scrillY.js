  // Start Programming Sprache -- and -- Zusätzliche Fähigkeiten

  let progressSpan = document.querySelectorAll(".the-progress span");
  let div = document.querySelector(".our-skills");
  
  window.onscroll = function () {
    if (window.scrollY >= div.offsetTop + 50) {
      progressSpan.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }
  };
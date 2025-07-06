// Portfolio filter
        document.querySelectorAll(".filter-btn").forEach((btn) => {
          btn.addEventListener("click", function () {
            // Remove active style from all buttons
            document.querySelectorAll(".filter-btn").forEach((b) => {
              b.classList.remove("bg-blue-800");
              b.classList.add("bg-slate-800");
            });
            // Add active style to clicked button
            this.classList.remove("bg-slate-800");
            this.classList.add("bg-blue-800");

            const filter = this.getAttribute("data-filter");
            document.querySelectorAll(".portfolio-card").forEach((card) => {
              if (
                filter === "all" ||
                card.getAttribute("data-category") === filter
              ) {
                card.style.display = "";
              } else {
                card.style.display = "none";
              }
            });
          });
        });
        // Set ALL as default active
        document.querySelector('.filter-btn[data-filter="all"]').click();


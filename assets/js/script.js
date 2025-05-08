// Datei: assets/js/script.js

// Einfache JS-Unterstützung für Dropdown-Navigation auf Mobilgeräten

document.addEventListener("DOMContentLoaded", () => {
    const dropdownParents = document.querySelectorAll("nav ul li");
  
    dropdownParents.forEach(parent => {
      const dropdown = parent.querySelector(".dropdown");
      if (dropdown) {
        parent.addEventListener("click", (e) => {
          // Nicht weiterleiten bei Link ohne Ziel
          if (parent.querySelector("a").getAttribute("href") === "#") {
            e.preventDefault();
          }
          dropdown.classList.toggle("open");
        });
      }
    });
  
    // Optional: Formularprüfung
    const form = document.querySelector("form");
    if (form) {
      form.addEventListener("submit", (e) => {
        const name = form.querySelector("#name").value.trim();
        const email = form.querySelector("#email").value.trim();
        const nachricht = form.querySelector("#nachricht").value.trim();
  
        if (!name || !email || !nachricht) {
          e.preventDefault();
          alert("Bitte füllen Sie alle Felder aus.");
        }
      });
    }
  });
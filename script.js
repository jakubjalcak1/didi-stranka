// Parallax efekt
window.addEventListener('scroll', () => {
  const stickyBackground = document.querySelector('.sticky-background');
  const scrollY = window.scrollY;
  stickyBackground.style.setProperty('--scroll-offset', `${scrollY * 0.5}px`);

  const stopPosition = 1000; // Pozícia, kde má pozadie zastaviť
  if (window.scrollY > stopPosition) {
      stickyBackground.classList.remove('sticky');
      stickyBackground.classList.add('not-sticky');
  } else {
      stickyBackground.classList.add('sticky');
      stickyBackground.classList.remove('not-sticky');
  }
});

  // Funkcia na vyplnenie kalendára
function vyplnKalendar() {
    const calendarGrid = document.querySelector(".calendar-grid");
    const pocetPrazdnych = 5; // November 2023 začína v stredu (5 prázdnych políčok)
  
    // Pridaj prázdne dni
    for (let i = 0; i < pocetPrazdnych; i++) {
      const emptyDiv = document.createElement("div");
      emptyDiv.classList.add("empty");
      calendarGrid.appendChild(emptyDiv);
    }
  
    // Pridaj dni v novembri
    for (let den = 1; den <= 30; den++) {
      const dateDiv = document.createElement("div");
      dateDiv.classList.add("date");
      if (den === 24) {
        dateDiv.classList.add("heart"); // Špeciálny štýl pre 24.
      }
      dateDiv.textContent = den;
      calendarGrid.appendChild(dateDiv);
    }
  }
  
  document.getElementById('like-icon').addEventListener('click', function() {
    this.classList.toggle('liked');
    this.classList.toggle('far');
    this.classList.toggle('fas');
});

  // Spusti funkciu po načítaní stránky
  window.onload = vyplnKalendar;
  
  // Počítadlo
  const startDate = new Date("2023-11-24T20:58:00");

    function updateCountdown() {
      const now = new Date();
      const diff = now - startDate;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      document.getElementById("days").textContent = String(days).padStart(2, "0");
      document.getElementById("hours").textContent = String(hours).padStart(2, "0");
      document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
      document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
    }

    setInterval(updateCountdown, 1000);
    updateCountdown();
  
  // Tajná sekcia
  function skontrolujHeslo() {
    const heslo = document.getElementById("heslo").value;
    if (heslo === "Dianka Nagajdová") { // Zmeň heslo podľa potreby
      document.getElementById("tajny-obsah").classList.remove("hidden");
    } else {
      alert("Nesprávne heslo!");
    }
  }

  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        // Získajte aktuálny stav (či je obrázok už aktívny)
        const isActive = this.classList.contains('active');

        // Odstráňte triedu 'active' zo všetkých obrázkov
        document.querySelectorAll('.gallery-item').forEach(el => {
            el.classList.remove('active');
        });

        // Odstráňte triedu 'active' z body
        document.body.classList.remove('active');

        // Ak obrázok nebol aktívny, pridajte triedu 'active' jemu a body
        if (!isActive) {
            this.classList.add('active');
            document.body.classList.add('active');
        }
    });
});

// Interaktívne efekty
document.querySelectorAll('.milnik').forEach(milnik => {
  milnik.addEventListener('mouseenter', () => {
      milnik.querySelector('.content').style.transform = 'scale(1.05)';
  });

  milnik.addEventListener('mouseleave', () => {
      milnik.querySelector('.content').style.transform = 'scale(1)';
  });
});

// Srdce sa pohybuje spolu so scrollovaním
window.addEventListener('scroll', () => {
  const heart = document.querySelector('.heart');
  const scrollY = window.scrollY;
  heart.style.top = `${scrollY -20}px`; // Srdce sa posúva spolu so scrollovaním
});
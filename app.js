const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); 
      }
    });
    
  },
  {
    threshold: 0.15, rootMargin: "0px 0px -10% 0px"
  }
);


reveals.forEach(el => observer.observe(el));




const nav_bar_btn = document.getElementById("nav-bar-btn");
const nav_bar = document.getElementById("nav-bar");
const header = document.getElementById("header");

nav_bar_btn.addEventListener("click", () => {
    nav_bar.classList.toggle("active");
    nav_bar_btn.classList.toggle("active");
    header.classList.toggle("active"); 

    // Mobil navigasyon açıldığında, scroll rengini etkisiz hale getir.
    if (nav_bar.classList.contains("active")) {
        header.classList.remove('scroll');
    } else if (window.scrollY > 0) {
        // Kapanınca, eğer sayfa kaydırılmışsa scroll rengini geri getir.
        header.classList.add('scroll');
    }
});

// Header scroll ile renk değiştirme
window.addEventListener('scroll', () => {
    // Navigasyon açıkken scroll rengini değiştirme. Sadece kapalıyken değiştir.
    if (!nav_bar.classList.contains("active")) { 
        if (window.scrollY > 0) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    }
});


const nav_links = document.querySelectorAll('#nav-bar ul li a');

nav_links.forEach(link => {
    link.addEventListener('click', () => {
        // Menüyü kapatan sınıfları kaldır
        nav_bar.classList.remove("active");
        nav_bar_btn.classList.remove("active");
        header.classList.remove("active");

        // Eğer sayfa kaydırılmışsa, header'a scroll sınıfını geri ekle
        if (window.scrollY > 0) {
            header.classList.add('scroll');
        }
    });
});
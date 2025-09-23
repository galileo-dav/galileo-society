// Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const links = document.getElementById('nav-links');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('is-open');
      document.body.classList.toggle('nav-open');
    });

    // Newsletter form (demo)
    const form = document.getElementById('newsletterForm');
    const msg = document.getElementById('formMsg');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = form.email.value.trim();
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
        msg.textContent = 'Email chưa hợp lệ. Vui lòng kiểm tra.';
        msg.className = 'form-msg is-error';
        return;
      }
      msg.textContent = 'Đăng ký thành công! Cảm ơn bạn đã quan tâm 🎉';
      msg.className = 'form-msg is-success';
      form.reset();
    });

    // Scroll animations using IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){ entry.target.classList.add('in-view'); }
      });
    }, {threshold: 0.15});
    document.querySelectorAll('.anim-up, .anim-fade').forEach(el => observer.observe(el));

    // Parallax effect
    const parallax = document.querySelector('.parallax');
    const media = document.querySelector('.parallax__media');
    function updateParallax(){
      const rect = parallax.getBoundingClientRect();
      const offset = rect.top * -0.2; // speed
      media.style.transform = `translateY(${offset}px)`;
      requestAnimationFrame(() => {});
    }
    document.addEventListener('scroll', updateParallax, {passive: true});
    window.addEventListener('load', updateParallax);
    window.addEventListener('resize', updateParallax);

    // Year in footer
    document.getElementById('year').textContent = new Date().getFullYear();

      
    // Parallax effect for hero
    function updateHeroParallax() {
    const hero = document.querySelector('.hero');
    const parallaxElement = document.querySelector('.hero__parallax');
  
    if (!hero || !parallaxElement) return;
  
    const rect = hero.getBoundingClientRect();
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.3; // tốc độ parallax (âm = di chuyển ngược)
  
    // Chỉ áp dụng khi hero còn trong viewport
    if (rect.bottom >= 0) {
      parallaxElement.style.transform = `translateY(${rate}px)`;
  }
}

// Gắn event listener
window.addEventListener('scroll', updateHeroParallax, { passive: true });
window.addEventListener('load', updateHeroParallax);
window.addEventListener('resize', updateHeroParallax);
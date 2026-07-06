document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');
  
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if(btn) {
      btn.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
          }
        });
        // Toggle current item
        item.classList.toggle('active');
      });
    }
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const target = document.querySelector(targetId);
      if (target) {
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
        }
        window.scrollTo({
          top: target.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });
});

// Mock Paystack Payment Initiation
function initiatePayment(tier, amount) {
  console.log(`Initiating mock Paystack payment for ${tier} at ₦${amount}`);
  // Simulate payment popup or redirect
  alert(`[MOCK] Redirecting to Paystack checkout for Sell Out ${tier} (₦${amount})...\n\nAssuming successful payment, you will now be redirected to the onboarding page.`);
  
  // Simulate successful payment
  setTimeout(() => {
    window.location.href = 'onboarding.html?tier=' + tier;
  }, 1000);
}

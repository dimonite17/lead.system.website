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

// Paystack Payment Initiation
function initiatePayment(tier, amount) {
  const email = prompt("Please enter your email address to proceed to payment:");
  if (!email) return;

  let handler = PaystackPop.setup({
    key: 'pk_test_ee3d0e946a48f6064c373fdb26f6b2770452cef0',
    email: email,
    amount: amount * 100, // Amount is in kobo
    currency: 'NGN',
    callback: function(response){
      // Successful payment
      window.location.href = 'onboarding.html?tier=' + tier + '&ref=' + response.reference;
    },
    onClose: function(){
      alert('Transaction was not completed, window closed.');
    }
  });
  handler.openIframe();
}

// ===== Theme Toggle =====
const themeBtns = document.querySelectorAll('.theme-btn');
const html = document.documentElement;

function setTheme(theme) {
  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    html.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
    html.style.colorScheme = prefersDark ? 'dark' : 'light';
  } else {
    html.setAttribute('data-theme', theme);
    html.style.colorScheme = theme;
  }
  
  themeBtns.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === theme);
  });
  
  localStorage.setItem('blink-theme', theme);
}

// Load saved theme
const savedTheme = localStorage.getItem('blink-theme') || 'system';
setTheme(savedTheme);

themeBtns.forEach(btn => {
  btn.addEventListener('click', () => setTheme(btn.dataset.theme));
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (localStorage.getItem('blink-theme') === 'system') {
    setTheme('system');
  }
});

// ===== Mobile Menu =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
mobileMenu.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ===== Project Input =====
const projectInput = document.getElementById('projectInput');
const submitBtn = document.getElementById('submitBtn');

projectInput.addEventListener('input', () => {
  submitBtn.disabled = projectInput.value.trim() === '';
});

projectInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && projectInput.value.trim() !== '') {
    handleProjectSubmit();
  }
});

submitBtn.addEventListener('click', handleProjectSubmit);

function handleProjectSubmit() {
  if (projectInput.value.trim() === '') return;
  
  // Simulate submission animation
  submitBtn.style.transform = 'scale(0.9)';
  setTimeout(() => {
    submitBtn.style.transform = '';
    alert('This is a clone demo! In the real Blink, your app would start building now. 🚀');
  }, 200);
}

// ===== Suggestion Chips =====
document.querySelectorAll('.suggestion-chip:not(.more-chip)').forEach(chip => {
  chip.addEventListener('click', () => {
    projectInput.value = chip.textContent;
    projectInput.dispatchEvent(new Event('input'));
    projectInput.focus();
  });
});

// ===== Tab Switching =====
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// ===== FAQ Toggle =====
function toggleFaq(button) {
  const faqItem = button.closest('.faq-item');
  const wasOpen = faqItem.classList.contains('open');
  
  // Close all FAQ items in the same column
  faqItem.closest('.faq-column').querySelectorAll('.faq-item').forEach(item => {
    item.classList.remove('open');
  });
  
  if (!wasOpen) {
    faqItem.classList.add('open');
  }
}

// ===== Navbar Scroll Effect =====
let lastScroll = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.08)';
  } else {
    navbar.style.boxShadow = 'none';
  }
  
  lastScroll = currentScroll;
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Animate sections on scroll
document.querySelectorAll('.alternatives, .categories, .tutorials, .prompts, .docs, .faq, .cta').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(30px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});

// ===== Keyboard Shortcut =====
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K to focus input
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    projectInput.focus();
  }
});

console.log('%c⚡ Blink Clone', 'font-size: 20px; font-weight: bold; color: #216BE4;');
console.log('%cBuilt with love by Super Z', 'font-size: 12px; color: #737373;');

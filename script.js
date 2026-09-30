// Mukammal aur bilkul sahi JavaScript code
const themeToggleBtn = document.getElementById('theme-toggle');

// Dark Mode Toggle Logic
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
        themeToggleBtn.innerHTML = "🌙 Switch Theme";
    } else {
        document.body.setAttribute('data-theme', 'dark');
        themeToggleBtn.innerHTML = "☀️ Light Mode";
    }
});

// Interactive Button Alert & Form Clear Function
function showAlert() {
    const oldToast = document.querySelector('.custom-toast');
    if (oldToast) oldToast.remove();

    const toast = document.createElement('div');
    toast.className = 'custom-toast';
    toast.innerHTML = '✨ <span>Success!</span> Connecting to backend...';

    document.body.appendChild(toast);

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.reset();
    }

    setTimeout(() => {
        toast.style.animation = 'fadeOut 0.5s ease forwards';
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// =======================================================
// SMOOTH TYPING ANIMATION FOR CODE BOX
// =======================================================
const codeLines = [
    '<span class="keyword">const</span> dev = {',
    '    <span class="property">role</span>: <span class="string">"Web Developer"</span>,',
    '    <span class="property">tech</span>: [<span class="string">"HTML"</span>, <span class="string">"CSS"</span>, <span class="string">"JS"</span>],',
    '    <span class="property">status</span>: <span class="string">"Coding Magic"</span>',
    '};',
    '<span class="keyword">if</span> (dev.status === <span class="string">"Coding Magic"</span>) {',
    '    <span class="function">animateWebsite</span>();',
    '}'
];

const typingContainer = document.getElementById('typing-code');
let lineIndex = 0;
let charIndex = 0;
let currentHTML = "";

function typeCode() {
    if (lineIndex < codeLines.length) {
        let currentLine = codeLines[lineIndex];
        
        if (charIndex < currentLine.length) {
            // HTML Tag handle karne ka 100% sahi jugard
            if (currentLine.charAt(charIndex) === '<') {
                let closingTagIndex = currentLine.indexOf('>', charIndex);
                currentHTML += currentLine.substring(charIndex, closingTagIndex + 1);
                charIndex = closingTagIndex + 1;
            } else {
                currentHTML += currentLine.charAt(charIndex);
                charIndex++;
            }
            
            typingContainer.innerHTML = currentHTML + '<span class="cursor">|</span>';
            setTimeout(typeCode, 20); // Letter type hone ki speed
        } else {
            currentHTML += '<br>';
            lineIndex++;
            charIndex = 0; // Agli line ke liye characters reset
            setTimeout(typeCode, 400); // Har line ke darmiyan ka pause
        }
    } else {
        // Poora code type hone ke 4 second baad dobara shuru hoga
        setTimeout(() => {
            typingContainer.innerHTML = "";
            currentHTML = "";
            lineIndex = 0;
            charIndex = 0;
            typeCode();
        }, 4000);
    }
}

// Animation tab shuru ho jab page load ho jaye
document.addEventListener("DOMContentLoaded", () => {
    if (typingContainer) {
        typeCode();
    }
});

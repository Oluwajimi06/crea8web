// ACHIEVEMENTS
function animateValue(id, start, end, duration) {
    var obj = document.getElementById(id);
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
            setTimeout(function() {
                animateValue(id, start, end, duration);
            }, 1000); // Adjust the delay before restarting the animation
        }
    }, stepTime);
}

animateValue("years", 0, 6, 2000); // Adjust duration (in milliseconds) as per your preference
animateValue("businesses", 0, 84, 2000);
animateValue("projects", 0, 258, 2000);
animateValue("featured", 0, 36, 2000);



// FAQ 
const faqs =  document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    })
})



// TESTIMONIAL
$(document).ready(function(){
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false, // Disable arrows
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

// HERO-SECTION
const texts = ["Create a unique online experience for your brand.","Your business deserves a great performing website.","Optimize Everything in your business with us."]; // Array of texts to type
const typingSpeed = 100; // Speed of typing in milliseconds

const textElement = document.getElementById('typing-text');
let index = 0;

function typeText() {
  const text = texts[index];
  let i = 0;
  const typingInterval = setInterval(() => {
    textElement.textContent += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(typingInterval);
      setTimeout(eraseText, 1000); // Wait 1 second before erasing text
    }
  }, typingSpeed);
}

function eraseText() {
  const text = textElement.textContent;
  let i = text.length - 1;
  const erasingInterval = setInterval(() => {
    textElement.textContent = text.substring(0, i);
    i--;
    if (i < 0) {
      clearInterval(erasingInterval);
      index = (index + 1) % texts.length;
      setTimeout(typeText, 500); // Wait 0.5 second before typing next text
    }
  }, typingSpeed / 2);
}

typeText(); // Start typing animation



// testing
"use strict";

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);
















  
 
  
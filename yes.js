const febHolidays = [
    "I love you so much, bbyy ❤️",
    "You're very competent 🔥",
    "I know you can do it, bbyy 😊",
    "You're super duper funny! 🤩",
    "Screenshot this for a free dinner!",
    "You are the love of my life ❤",
    "I love spending time with you",
    "You are my princess ✨💕",
    "And of course... wait...",
    "My future wife 🤭",
    "I will always be there for you",
    "I'm so grateful we met",
    "I'm attracted to you more every day",
    "I always love the 1001 questions you have",
    "Keep moving, bbyy!",
    "You're almost there!",
    "Your hard work adds up, bbyy!",
    "Don't give up!",
    "It's okay to take a break sometimes",
    "I admire how hardworking you are",
    "Let's grow old together, bbyy",
    "Screenshot this for a free snack!",
    "Your mind is stronger than you think",
    "People want to be around you, boo 🥰",
    "You are very smart, bbyy!",
    "You can learn anything!",
    "There's no one better than you❤️",
    "You're the best baby!! 💖",
    "You have a way of charming people",
    "Your sense of humor is unmatched 🤌🏻",
    "Screenshot this for a free drink!",
    "I think you are super duper cute 💓",
    "I love how you care for others.",
    "I appreciate how ambitious you are 🥰",
    "I want to marry you.",
    "You are so gorgeous,",
    "I cannot take my eyes off you",
    "We are in this together, bby 😘",
    "I love how communicative you are 💖",
    "You will survive any hardships",
    "We will be rich together, boo!!",
    "You will achieve anything you want",
    "You're good at learning everything",
    "I'm so proud of you!"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
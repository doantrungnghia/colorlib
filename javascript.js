document.addEventListener("DOMContentLoaded", function(event) {
  var sliderButton = document.querySelectorAll(".slider-btn");
  var slider = document.querySelectorAll(".slider-dad");
  var slideIndex = 0;
  var listBtn = document.querySelectorAll(".list-btn");
  var listItem = document.querySelectorAll(".list-right_bottom");
  ////SLIDER/////
  for (var i = 0; i < sliderButton.length; i++) {
    sliderButton[i].onclick = function() {
      clearInterval(animationSlide);
      animationSlide();
      //REMOVE ALL
      for (i = 0; i < slider.length; i++) {
        slider[i].classList.add("--display-none");
        slider[i].classList.remove("slider-effect");
      }
      for (var k = 0; k < sliderButton.length; k++)
        sliderButton[k].classList.remove("active");
      //ADD SLIDER-BTN-ACTIVE
      this.classList.add("active");
      //GET DATA-SLIDER-ACTIVE
      var dataSlider = this.getAttribute("data-slider");
      //GIVE SLIDER-SLIDER SHOW
      slider[dataSlider].classList.remove("--display-none");
      slider[dataSlider].classList.add("slider-effect");
      slideIndex = Number(this.getAttribute("data-slider")) + 1;
    };
  }
  animationSlide();
  function animationSlide() {
    //REMOVE AL;
    for (var i = 0; i < slider.length; i++)
      slider[i].classList.add("--display-none");
    for (var k = 0; k < sliderButton.length; k++)
      sliderButton[k].classList.remove("active");
    if (slideIndex >= slider.length) slideIndex = 0;
    slider[slideIndex].classList.remove("--display-none");
    slider[slideIndex].classList.add("slider-effect");
    sliderButton[slideIndex].classList.add("active");
    slideIndex++;
    setTimeout(animationSlide, 5000);
  }

  ////FUNCTION COUNT UP AUTMOMATIC //
  function animateValue(id, start, end, duration) {
    // assumes integer values for start and end

    var obj = document.getElementById(id);
    var range = end - start;
    // no timer shorter than 50ms (not really visible any way)
    var minTimer = 50;
    // calc step time to show all interediate values
    var stepTime = Math.abs(Math.floor(duration / range));

    // never go below minTimer
    stepTime = Math.max(stepTime, minTimer);

    // get current time and calculate desired end time
    var startTime = new Date().getTime();
    var endTime = startTime + duration;
    var timer;
    function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - remaining * range);
      obj.innerHTML = value;
      if (value == end) {
        clearInterval(timer);
      }
    }

    timer = setInterval(run, stepTime);
    run();
  }
  animateValue("count_1", 0, 100, 5000);
  animateValue("count_2", 0, 85, 5000);
  animateValue("count_3", 0, 10567, 5000);
  animateValue("count_4", 0, 900, 5000);

  ///FUNCTION LIST-MENU-BTN
  listItem[0].style.display = "block";
  for (var i = 0; i < listBtn.length; i++) {
    listBtn[i].onclick = function() {
      //REMOVE ALL
      for (var k = 0; k < listBtn.length; k++) {
        listBtn[k].classList.remove("active");
        listItem[k].style.display = "none";
      }
      var dataList = this.getAttribute("data-list");
      //ADD SLIDER-BTN-ACTIVE
      this.classList.add("active");
      listItem[dataList].style.display = "block";
    };
  }

  ///// EFFECT MAIN SHOW
  function showElements(phantuhienthi) {
    vitri = phantuhienthi.offsetTop;
    xuathien = vitri - 700;
    if (window.scrollY >= xuathien) phantuhienthi.classList.add("main-effect");
  }
  function showElements2(phantuhienthi) {
    vitri = phantuhienthi.offsetTop;
    xuathien = vitri - 700;
    if (window.scrollY >= xuathien) phantuhienthi.classList.add("main-effect2");
  }
  var infoItem = document.querySelectorAll(".info-item");
  var socialItem = document.querySelector(".social .row");
  var aboutText = document.querySelector(".about-text");
  var servicesContainer = document.querySelector(".services .container");
  var mealsContainer = document.querySelector(".meals .container-fluid");
  var pricingContainer = document.querySelector(".pricing .container");
  var gallery = document.querySelector(".gallery");
  var counterContainer = document.querySelector(".counter .container");
  var listLContainer = document.querySelector(".list-left");
  var listRContainer = document.querySelector(".list-right");
  var blogHead = document.querySelector(".blog-head");
  var blogItem = document.querySelector(".blog-items");
  var map = document.querySelector(".appointment-map");
  var contact = document.querySelector(".appointment-contact");
  var footer = document.querySelector(".footer .container");
  if (window.innerWidth > 992) {
    window.addEventListener("scroll", function() {
      console.log(window.scrollY);
      showElements(infoItem[0]);
      showElements(infoItem[1]);
      showElements(infoItem[2]);
      showElements(socialItem);
      showElements(aboutText);
      showElements(servicesContainer);
      showElements(mealsContainer);
      showElements(pricingContainer);
      showElements2(gallery);
      showElements2(counterContainer);
      showElements2(listLContainer);
      showElements(listRContainer);
      showElements(blogHead);
      showElements2(blogItem);
      showElements2(map);
      showElements(contact);
      showElements(footer);
    });
  }
});

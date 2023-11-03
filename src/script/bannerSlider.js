const slider = document.querySelector(".banner-slider"),
  sliderLine = document.querySelector(".banner-slider__items"),
  slides = document.querySelectorAll(".banner-slider__item"),
  indicators = document.querySelectorAll(".banner-slider__indicator");

let sliderCount = 0,
  sliderWidth = slider.offsetWidth;

const rollSlider = () => {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
};

const thisSlide = (index) => {
  indicators.forEach(item => item.classList.remove("active"));
  indicators[index].classList.add("active");
};

const showSlide = () => {
  sliderLine.style.width = sliderWidth * slides.length + "px";
  slides.forEach(item => item.style.width = sliderWidth + "px");
  
  rollSlider();
};

showSlide();

const nextSlide = () => {
  sliderCount++;
  if (sliderCount >= slides.length) sliderCount = 0;

  rollSlider();
  thisSlide(sliderCount);
};

indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    sliderCount = index;    
    rollSlider();
    thisSlide(sliderCount);
  });
});

window.addEventListener("resize", showSlide);

setInterval(() => {
  nextSlide();
},5000);

export { showSlide, nextSlide };

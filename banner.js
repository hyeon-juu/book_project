const slides = [
    {image: "img/banner1.png", text: '" 🍀읽는 사람의 카탈로그\n 봄의 헤이모구 굿즈🐻 "'},
    {image: "img/banner2.png", text: '" 제 10회 READING LOG📖 손글씨 대회\n책 속의 감동을 손글씨로 담다! "'},
    {image: "img/banner3.png", text: '" 최재천 교수가 9년간 집필한 <<숙론>>\n어떻게 마주 앉아 대화할 것인가 "'},
    {image: "img/banner4.png", text: '" 북메이트와 함께 읽는 5월의 책💚\n독서 지원금 & 린넨 에코백 "'},
    {image: "img/banner5.png", text: '" 크레용 토끼와 함께하는\n친절한 드로잉🐰 "'},
    {image: "img/banner6.png", text: '" 수능 실전연습 START!\nEBS FINAL 실전모의고사💯 "'},
    {image: "img/banner7.png", text: '" 늙어서 즐거워야\n진짜 성공한 삶이다! "'},
    {image: "img/banner8.png", text: '" 하이큐 챔프 & 매거진\n하이큐 마그넷 북마크🔥 "'}
];
let currentIndex = 0;

function changeSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    document.getElementById('banner__img').src = slides[currentIndex].image;
    document.getElementById('banner__text').innerText = slides[currentIndex].text;
}
setInterval(changeSlide, 3000); 

// function changeSlide(index) {
//     currentIndex = (index + slides.length) % slides.length;
//     document.getElementById('banner__text').innerText = slides[currentIndex].text;
//     document.getElementById('banner__img').src = slides[currentIndex].image;

//     document.querySelectorAll('.banner__button').forEach(button => {
//         button.classList.remove('active');
//     });
//     document.querySelector(`.banner__button[data-index="${currentIndex}"]`).classList.add('active');
// }

// document.querySelectorAll('.banner__button').forEach(button => {
//     button.addEventListener('click', function() {
//         changeSlide(parseInt(this.getAttribute('data-index')));
//     });
// });

// changeSlide(0);
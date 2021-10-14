const hamburger = document.querySelector('.fa-bars');
const menu = document.querySelector('#menu');
const menuLis = menu.querySelectorAll('li');

hamburger.addEventListener('click', () => {
  menu.classList.replace('invisible', 'menu');
});
for (let i = 0; i < menuLis.length; i += 1) {
  menuLis[i].addEventListener('click', () => {
    menu.classList.replace('menu', 'invisible');
  });
}

const speakers = [
  {
    name: 'Brad Traversy',
    career: 'Youtuber,Instructor,Web-developer',
    description: 'Brad Traversy has been programming for around 12 years and teaching for almost 5 years. He is the owner of Traversy Media which is a successful web development YouTube channel.',
    img: './images/Brad_1_200x200.jpg',
  },
  {
    name: 'Ariel Camus',
    career: 'CEO and founder of Microverse',
    description: 'Ariel Camus has been programming for around 12 years and teaching for almost 5 years. He is the owner of lorem ipsum which is a successful web development YouTube channel.',
    img: './images/Ariel_200x200.jpg',
  },
  {
    name: 'Mosh Hamedani',
    career: 'Youtuber,Instructor,Web-developer',
    description: 'Mosh Hamedani has been programming for around 12 years and teaching for almost 5 years. He is the owner of lorem ipsum which is a successful web development YouTube channel.',
    img: './images/Mosh_1_200x200.jpg',
  },
  {
    name: 'Colt Steele',
    career: 'Youtuber,Instructor,Web-developer',
    description: 'Colt Steele has been programming for around 12 years and teaching for almost 5 years. He is the owner of lorem ipsum which is a successful web development YouTube channel.',
    img: './images/Colt_1_200x200.jpg',
  },
  {
    name: 'Tim Buchalka',
    career: 'Instructor,Software developer',
    description: 'Tim Buchalka has been programming for around 12 years and teaching for almost 5 years. He is the owner of lorem ipsum which is a successful web development YouTube channel.',
    img: './images/Tim_Buchalka_512x512.jpg',
  },
  {
    name: 'Andrew Mead',
    career: 'Instructor,Web-developer',
    description: 'Andrew Mead has been programming for around 12 years and teaching for almost 5 years. He is the owner of lorem ipsum which is a successful web development YouTube channel.',
    img: './images/Andrew_1_200x200.jpg',
  },
];

function speakersContent(info) {
  return `<div class='speaker'>
  <div class='img-container'>
    <img src="${info.img}" alt='yoga-teacher'></img>
  </div>
  <div class='info-container'>
    <h2>${info.name}</h2>
    <p class='career'>${info.career}</p>
    <div class='career-indicator'></div>
    <p class='description'>${info.description}</p>
  </div>
</div>`;
}

const speakerContainer = document.querySelector('.speaker-container');
if (speakerContainer) {
  for (let i = 0; i < speakers.length; i += 1) {
    speakerContainer.innerHTML += speakersContent(speakers[i]);
  }
}

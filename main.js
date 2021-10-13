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
    img: './images/brad.jfif',
  },
  {
    name: 'Ariel Camus',
    career: 'CEO and founder of Microverse',
    description: 'Ariel Camus is the founder and CEO of Microverse, an online school that offers opportunities to people around the world.',
    img: './images/Ariel.jpg',
  },
  {
    name: 'Mosh Hamedani',
    career: 'Youtuber,Instructor,Web-developer',
    description: 'A passionate software engineer with two decades of experience and has taught over 3 million people who to code or how to become professional software engineers through my YouTube channel and online courses.',
    img: './images/Mosh.jpg',
  },
  {
    name: 'Colt Steele',
    career: 'Youtuber,Instructor,Web-developer',
    description: "A developer with a serious love for teaching. Has spent the last few years teaching people to program at 2 different immersive bootcamps where I've helped hundreds of people become web developers and change their lives.",
    img: './images/Colt.jpg',
  },
  {
    name: 'Tim Buchalka',
    career: 'Instructor,Software developer',
    description: "Tim's been a professional software developer for close to 40 years.  During his career, he has worked for major companies such as Fujitsu, Mitsubishi, and Saab.His video courses are used to train developers in major companies such as Mercedes-Benz, Paypal, VW, Pitney Bowes, IBM, and T-Mobile.",
    img: './images/Tim.jfif',
  },
  {
    name: 'Adrew Mead',
    career: 'Instructor,Web-developer',
    description: 'A full-stack developer living in beautiful Philadelphia! Launched first Udemy course in 2014 and had a blast teaching and helping others. Since then, has launched 3 courses with over 110,000 students and over 18,000 5-star reviews.',
    img: './images/Andrew.jpg',
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
if(speakerContainer) {
  for(let i = 0; i < speakers.length; i += 1) {
    speakerContainer.innerHTML += speakersContent(speakers[i]);
  }
}

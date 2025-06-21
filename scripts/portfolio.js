

// const imageData = {
//   nature: ['nature1.jpg', 'nature2.jpg', 'nature3.jpg', 'nature4.jpg'],
//   food: ['food1.jpg', 'food2.webp', 'food3.webp', 'food4.jpg'],
//   wildlife: ['wild1.jpg', 'wild2.jpg', 'wild3.webp', 'wild4.jpg'],
//   event: ['event1.jpg', 'event2.jpg', 'event3.jpg', 'event4.jpg'],
//   architecture: ['arch1.jpg', 'arch2.jpg', 'arch3.jpg', 'arch4.jpg'],
//   bird: ['bird1.jpg', 'bird2.jpg', 'bird3.webp', 'bird4.jpg'],
//   macro: ['macro1.jpg', 'macro2.jpg', 'macro3.jpg', 'macro4.jpg'],
//   sunset: ['sun1.jpg', 'sun2.avif', 'sun3.jpg', 'sun4.jpg'],
//   pet: ['pet1.jpg', 'pet2.jpg', 'pet3.jpg', 'pet4.jpg'],
//   astro: ['astro1.jpg', 'astro2.jpg', 'astro3.jpg', 'astro4.jpg'],
//   street: ['street1.jpg', 'street2.jpg', 'street3.jpg', 'street4.jpg'],
//   sports: ['sport1.jpg', 'sport2.jpg', 'sport3.jpg', 'sport4.webp'],
//   adventure: ['adv1.jpg', 'adv2.jpg', 'adv3.jpg', 'adv4.jpg'],
// };

// document.querySelectorAll('.photo-container').forEach(container => {
//   const category = container.getAttribute('data-category');
//   const images = imageData[category];

//   if (images) {
//     images.forEach(src => {
//       const div = document.createElement('div');
//       div.className = 'photo';
//       div.style.backgroundImage = `url('../images/portfolio/${src}')`;
//       container.appendChild(div);
//     });
//   }

// });


const imageData = {
  nature: ['nature1.jpg', 'nature2.jpg', 'nature3.jpg', 'nature4.jpg'],
  food: ['food1.jpg', 'food2.webp', 'food3.webp', 'food4.jpg'],
  wildlife: ['wild1.jpg', 'wild2.jpg', 'wild3.webp', 'wild4.jpg'],
  event: ['event1.jpg', 'event2.jpg', 'event3.jpg', 'event4.jpg'],
  architecture: ['arch1.jpg', 'arch2.jpg', 'arch3.jpg', 'arch4.jpg'],
  bird: ['bird1.jpg', 'bird2.jpg', 'bird3.webp', 'bird4.jpg'],
  macro: ['macro1.jpg', 'macro2.jpg', 'macro3.jpg', 'macro4.jpg'],
  sunset: ['sun1.jpg', 'sun2.avif', 'sun3.jpg', 'sun4.jpg'],
  pet: ['pet1.jpg', 'pet2.jpg', 'pet3.jpg', 'pet4.jpg'],
  astro: ['astro1.jpg', 'astro2.jpg', 'astro3.jpg', 'astro4.jpg'],
  street: ['street1.jpg', 'street2.jpg', 'street3.jpg', 'street4.jpg'],
  sports: ['sport1.jpg', 'sport2.jpg', 'sport3.jpg', 'sport4.webp'],
  adventure: ['adv1.jpg', 'adv2.jpg', 'adv3.jpg', 'adv4.jpg'],
};

document.querySelectorAll('.photo-container').forEach(container => {
  const category = container.getAttribute('data-category');
  const images = imageData[category];

  if (images) {
    images.forEach(src => {
      const div = document.createElement('div');
      div.className = 'photo';
      div.style.backgroundImage = `url('../images/portfolio/${src}')`;
      container.appendChild(div);
    });
  }
});

document.querySelectorAll('.types-button').forEach(button => {
  button.addEventListener('click', () => {
    window.location.href = 'gallary.html';
  });
});

// document.querySelector('.types-button').addEventListener('click', function () {
//   window.open('gallary.html');
// });

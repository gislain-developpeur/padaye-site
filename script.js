let imageIndex = 0;
let videoIndex = 0;

function moveImageSlides(n) {
    const slides = document.querySelector('.image-slider .slides');
    const totalSlides = slides.children.length;

    imageIndex += n;

    if (imageIndex >= totalSlides) {
        imageIndex = 0;
    } else if (imageIndex < 0) {
        imageIndex = totalSlides - 1;
    }

    const offset = -imageIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function moveVideoSlides(n) {
    const slides = document.querySelector('.video-slider .slides');
    const totalSlides = slides.children.length;

    // Pause all videos and refresh iframes
    document.querySelectorAll('.video-slider video').forEach(video => video.pause());
    document.querySelectorAll('.video-slider iframe').forEach(iframe => {
        const src = iframe.src;
        iframe.src = src; // Refresh iframe to stop video
    });

    videoIndex += n;

    if (videoIndex >= totalSlides) {
        videoIndex = 0;
    } else if (videoIndex < 0) {
        videoIndex = totalSlides - 1;
    }

    const offset = -videoIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;

    // Play video in the current slide
    const currentSlide = slides.children[videoIndex];
    const video = currentSlide.querySelector('video');
    if (video) {
        video.play();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Initially play the first video if it's a video
    const firstSlide = document.querySelector('.video-slider .slide');
    const firstVideo = firstSlide.querySelector('video');
    if (firstVideo) {
        firstVideo.play();
    }
    // });
    // document.querySelectorAll('.anim-image').forEach(image => {
    //     image.addEventListener('mouseover', function () {
    //         this.style.transform = 'scale(1.2)';
    //     });

    //     image.addEventListener('mouseout', function () {
    //         this.style.transform = 'scale(1)';
});
// });
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Empêche le rechargement de la page lors de la soumission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let responseText = `Merci pour votre message, ${name} ! Nous vous contacterons sur ${email} dans un bref delai. très passionné pour votre message: ${message}`;

    document.getElementById('response').innerText = responseText;
    document.getElementById('contactForm').reset();
});
//rechercher des élément







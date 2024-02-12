function SIPHR() {
    window.open("https://www.instagram.com/siphr.in/",
            ""); 
};

function reload() {
    window.location.reload();
}

gsap.from(".nav-logo, .nav-links > a", 1.5, {
    top:"30px",
    opacity: 0,
    ease: "power4.inOut",
    delay: 1,
    stagger: {
        amount: 0.3,
    },

});

gsap.from("h1", 1.5, {
    y:50,
    opacity: 0,
    ease: "power4.inOut",
    delay: 1.5,
    stagger: {
        amount: 0.3,
    },

});

gsap.from(".play-wrapper, .pattern, .copy", 1.5, {
    scaleY: 0,
    ease: "power3.inOut",
    delay: 1,
    stagger: {
        amount: 0.3,
    },
    delay: 2.5,

});

gsap.from(".hr", 1.5, {
    width:"0",
    ease: "power3.inOut",
    delay: 3,

});

gsap.from(".btns", 1.5, {
    X:50,
    opacity: 0,
    ease: "power3.inOut",
    delay: 3,

});

gsap.from(".play-btn", 1.5, {
    scale: 0,
    opacity: 0,
    ease: "power3.inOut",
    delay: 3,

});

gsap.from(".hero-wrapper", 1.5, {
    width: "100%",
    ease: "power3.inOut",
    delay: 3,

});

gsap.from(".arrow", 1.5, {
    scale: 0,
    ease: "power3.inOut",
    delay: 3,

});

gsap.from(".marquee", 1.5, {
    bottom: "-10rem",
    ease: "power3.inOut",
    delay: 4,

});

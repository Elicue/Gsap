
// gsap.to(".cape-arrière", { y: 155, duration: 1.5})
// gsap.to(".haut", { y: 120, duration: 1.5})
// gsap.to(".bras", { y: 55, duration: 2})
// gsap.to(".cape-devant", { y: 105, duration: 1.5})
// gsap.to(".tête", { y: -10, duration: 1})
// gsap.to(".jupe", { y: -120, duration: 1.5})
// gsap.to(".boucle", { y: -60, duration: 1.5})
// gsap.to(".jambes", { y: -460, duration: 1.5})

const timeline = gsap.timeline({ repeat : -1, yoyo : true });

timeline.to(".cape-arrière", { y: 155, duration: 1.5})
timeline.to(".haut", { y: 125, duration: 1.5, delay: -1.5})
timeline.to(".bras", { y: 55, duration: 2, delay: -1.5})
timeline.to(".cape-devant", { y: 105, duration: 1.5, delay: -1.5})
timeline.to(".tête", { y: -5, duration: 1, delay: -1.5})
timeline.to(".jupe", { y: -120, duration: 1.5, delay: -1.5})
timeline.to(".boucle", { y: -60, duration: 1.5, delay: -1.5})
timeline.to(".jambes", { y: -460, duration: 1.5, delay: -1.5})
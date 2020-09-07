import gsap from 'gsap';

const animationEnter = (container) => {
	// console.log(container);
	const cols = container.querySelectorAll('.column');
	return gsap.from(cols, { 
		duration: 0.7, 
		autoAlpha: 0,
		y: -30,
		stagger: 0.03,
		ease: 'power1.out'
	});
}

export default animationEnter;
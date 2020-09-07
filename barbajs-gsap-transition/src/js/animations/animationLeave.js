import gsap from 'gsap';

const animationLeave = (container) => {
	// console.log(container);
	const cols = container.querySelectorAll('.column');
	return gsap.to(cols, { 
		duration: 0.7, 
		y: 30,
		autoAlpha: 0,
		stagger: 0.1,
		ease: 'power1.in'
	});
}

export default animationLeave;
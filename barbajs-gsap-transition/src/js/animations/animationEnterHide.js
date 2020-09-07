import gsap from 'gsap';

const animationEnterHide = (container) => {
	const images = container.querySelectorAll('img');
	return gsap.from(images, { 
		duration: 0.7, 
		xPercent: 101,
		stagger: 0.03,
		ease: 'power1.out'
	});
}

export default animationEnterHide;
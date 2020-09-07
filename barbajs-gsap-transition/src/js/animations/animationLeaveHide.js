import gsap from 'gsap';

const animationLeaveHide = (container) => {
	const images = container.querySelectorAll('img');
	return gsap.to(images, { 
		duration: 0.7, 
		xPercent: -101,
		stagger: 0.1,
		ease: 'power1.in'
	});
}

export default animationLeaveHide;
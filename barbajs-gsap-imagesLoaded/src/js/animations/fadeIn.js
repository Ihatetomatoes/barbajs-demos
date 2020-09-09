import gsap from 'gsap';
import imagesLoaded from 'imagesloaded';

const fadeIn = (container) => {

	// setup variables
	// https://codepen.io/desandro/pen/hlzaw
	let loadedImageCount = 0;
	let imageCount = 0;
	const progressEl = document.querySelector('.progress');

	// center progress on the screen and fade it in
	gsap.set(progressEl, {xPercent: -50, yPercent: -50});
	gsap.to(progressEl, {autoAlpha: 1, duration: 0.3, ease: 'none'});

	// setup Images loaded
	const imgLoad = imagesLoaded(container);
	imageCount = imgLoad.images.length;

	// show progress
	function updateProgress(value) {
		// console.log(value / imageCount);
		const diplay = value / imageCount;
		//update progress text
		console.log(`${Math.round(diplay* 100)}% loaded`);
	}

	// set the initial progress to 0
	updateProgress(0);

	// triggered after each item is loaded
	imgLoad.on('progress', () => {
		// increase the number of loaded images
		loadedImageCount += 1; // same as loadedImageCount++;
		// update progress
		updateProgress(loadedImageCount);
	});

	// do whatever you want when all images are loaded
	return imgLoad.on('done', () => {
		// return timeline to reveal the next page
		console.log('all done');
		const tl = gsap.timeline();
		tl
			.to(progressEl, {duration: 0.3, autoAlpha: 0, ease: 'power1.in'}, 0.4)
			.to(container, { duration: 1, autoAlpha: 1 });
		return tl;
	});

}

export default fadeIn;
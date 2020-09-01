class About {
	namespace = 'about';

	beforeEnter = data => {
		console.log(data, 'on about page');
	};
}

export default new About();

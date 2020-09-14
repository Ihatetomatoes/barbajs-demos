class DetailPage {
	namespace = 'detail';

	beforeEnter = data => {
		console.log(data, 'on project detail');
	};
}

export default new DetailPage();

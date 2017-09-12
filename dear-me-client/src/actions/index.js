import axios from 'axios';

export const submitLetter = (values, history) => {
	return function(dispatch) {
		axios
			.post('/sendLetter', values)
			.catch(error => console.log(error))
			.then(res => dispatch({ type: 'SEND_LETTER' }));
		history.push('/');
	};
};

export function captcha(response) {
	return {
		type: 'CAPTCHA',
		payload: response
	};
}

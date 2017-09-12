export default function(state = {}, action) {
	switch (action.type) {
		case 'SEND_LETTER':
			return  {...state};

		case 'CAPTCHA':
			return {
			...state,
			g-recaptcha-response: action.payload;
		};
	}
	return state;
}

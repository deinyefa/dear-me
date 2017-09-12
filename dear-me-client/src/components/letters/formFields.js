import { InputField, TextareaField, SelectField } from './fields';

export default [
	{
		label: 'Name',
		name: 'name',
		type: 'text',
		component: InputField,
		noValueError: 'You have to provide a name'
	},
	{
		label: 'Email',
		name: 'email',
		type: 'email',
		component: InputField,
		noValueError: 'You have to provide a valid email'
	},
	{
		label: 'Subject',
		name: 'subject',
		type: 'text',
		component: InputField,
		noValueError: 'You have to provide a subject line'
	},
	{
		label: 'Message',
		name: 'message',
		type: 'text',
		component: TextareaField,
		noValueError: 'You have to provide a message'
	},
	{
		label: 'When would you like your message to be sent?',
		name: 'sendWhen',
		component: SelectField,
		noValueError: 'When should we send your letter?'
	}
];

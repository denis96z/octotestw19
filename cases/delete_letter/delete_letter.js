import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import returnToInbox from '../../steps/utils';

describe('delete test', () => {
	it('Авторизоваться и открыть первое письмо на странице и проверить наличие кнопки удалить и удалить это письмо', () => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);
		
		letters.openByLetterNumber(1);
		buttons.clickByName('Удалить');

		returnToInbox('trash')
	});
});

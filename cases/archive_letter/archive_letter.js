import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import returnToInbox from '../../steps/utils';

// пример теста
describe('archive test', () => {
	it('Авторизоваться и открыть первое письмо на странице и архивировать его', () => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);
		
		letters.openByLetterNumber(1); // выбор первого письма из списка
		buttons.checkByName('.button2_archive');
		buttons.clickByName('.button2_archive');

		returnToInbox('archive')		
	});
});

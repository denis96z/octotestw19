import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';

describe('button test', () => {
	it('Авторизоваться и открыть первое письмо на странице и проверить наличие кнопки удалить', () => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);

		letters.openByLetterNumber(1);
		buttons.checkByName('.button2_folder');
		buttons.clickByName('.button2_folder');
		buttons.checkByName('.nav_expanded > a:nth-child(1)'); // вернуть в Входящие
		buttons.clickByName('.nav_expanded > a:nth-child(1)');
	});
});

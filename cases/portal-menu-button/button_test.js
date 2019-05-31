import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';

// пример теста
describe('button test', () => {
	it('Авторизоваться и открыть первое письмо на странице и проверить наличие кнопки удалить', () => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);
		// layout.setPaneAndSize(3);
		// folders.clickFolderByName('Входящие');
		// letters.openBySubject('Добро пожаловать в бета-сообщество Почты!'); // 
		buttons.checkByName('portal-menu-element portal-menu-element_select portal-menu-element_short portal-menu-element_not-touch')

		buttons.clickByName('button2 button2_has-ico button2_delete button2_pure button2_short button2_ico-text-top button2_hover-support js-shortcut')
	});
});

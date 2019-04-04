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
		layout.setPaneAndSize(3);
		folders.clickFolderByName('Входящие');
		letters.openBySubject('Добро пожаловать в бета-сообщество Почты!'); // 
		buttons.checkByName('delete')
	});
});

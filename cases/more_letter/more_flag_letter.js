import main from '../../steps/main';
import layout from '../../steps/layout'
import folders from '../../steps/sidebar/folders';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';

// пример теста
describe('flag test', () => {
	it('Авторизоваться и открыть первое письмо на странице. Пометить письмо флажком важное, снять флажок', () => {
		main.open('https://mail.ru');
		main.login(process.env.LOGIN, process.env.PASSWORD);
		
		letters.openByLetterNumber(1); 
		// кнопка ещё
		buttons.checkByName('div.portal-menu-element:nth-child(6)')
		buttons.clickByName('div.portal-menu-element:nth-child(6)')
		
		// пометить флагом 
		buttons.checkByName('.dropdown_expanded > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
		buttons.clickByName('.dropdown_expanded > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')

		// кнопка ещё
		buttons.checkByName('div.portal-menu-element:nth-child(6)')
		buttons.clickByName('div.portal-menu-element:nth-child(6)')

		// снять флаг 
		buttons.checkByName('.dropdown_expanded > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
		buttons.clickByName('.dropdown_expanded > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)')
	});
});

import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';

// пример теста
describe('read/unread letter test', () => {
    it('Авторизоваться и открыть первое письмо на странице, пометить его как прочитанное, затем как непрочитанное', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        letters.openByLetterNumber(1);
        // кнопка ещё
        buttons.checkByName('div.portal-menu-element:nth-child(6)')
        buttons.clickByName('div.portal-menu-element:nth-child(6)')

        // пометить непрочитанным 
        buttons.checkByName('.dropdown_expanded > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
        buttons.clickByName('.dropdown_expanded > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')

        // кнопка ещё
        buttons.checkByName('div.portal-menu-element:nth-child(6)')
        buttons.clickByName('div.portal-menu-element:nth-child(6)')

        // пометить прочитанным 
        buttons.checkByName('.dropdown_expanded > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
        buttons.clickByName('.dropdown_expanded > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)')
    });
});

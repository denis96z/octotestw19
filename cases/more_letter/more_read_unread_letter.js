import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import dropdowns from '../../steps/portal/dropdown';

describe('read/unread letter test', () => {
    it('Авторизоваться и открыть первое письмо на странице, пометить его как прочитанное, затем как непрочитанное', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        letters.openBySubject("Вход с нового устройства");
        // кнопка ещё
        buttons.clickByName('Ещё');
        // пометить непрочитанным 
        dropdowns.clickByNumber(1, "more");

        // кнопка ещё
        buttons.clickByName('Ещё');
        // пометить прочитанным 
        dropdowns.clickByNumber(1, "more");
    });
});

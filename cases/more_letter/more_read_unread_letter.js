import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';

describe('read/unread letter test', () => {
    it('Авторизоваться и открыть первое письмо на странице, пометить его как прочитанное, затем как непрочитанное', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        letters.openBySubject("Вход с нового устройства");

        buttons.clickByName('Пометить прочитанным');
        buttons.clickByName('Пометить непрочитанным');
    });
});

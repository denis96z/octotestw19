import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import returnToInbox from '../../steps';

describe('archive test', () => {
    it('Авторизоваться и открыть первое письмо на странице и архивировать его', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        letters.openBySubject("Вход с нового устройства");
        buttons.clickByName('В архив');

        returnToInbox('archive');
    });
});

import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import returnToInbox from '../../steps';

describe('spam test', () => {
    it('Авторизоваться и поместить письмо в спам', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        letters.openBySubject("Вход с нового устройства");
        buttons.clickByName('Спам');

        returnToInbox('spam');
    });
});

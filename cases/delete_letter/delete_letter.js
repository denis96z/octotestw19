import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import returnToInbox from '../../steps';

describe('delete test', () => {
    it('Авторизоваться и открыть первое письмо на странице и проверить наличие кнопки удалить и удалить это письмо', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        let subject = 'Вход с нового устройства';

        letters.openBySubject(subject);
        buttons.clickByName('Удалить');

        returnToInbox('trash', subject);
    });
});

import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import returnToInbox from '../../steps';

describe('spam test', () => {
    it('Авторизоваться и поместить письмо в спам', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        let subject = 'Вход с нового устройства';

        letters.openBySubject(subject);
        buttons.clickByName('Спам');

        returnToInbox('spam', subject);
        
        main.open('https://octavius.mail.ru/inbox/');
		letters.openBySubject(subject);
    });
});

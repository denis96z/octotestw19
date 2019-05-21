import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import returnToPreviousState from '../../steps';

describe('spam test', () => {
    it('Авторизоваться и поместить письмо в спам', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        let subject = 'test1';

        letters.openBySubject(subject);
        buttons.clickByName('Спам');

        returnToPreviousState('spam', subject);

        main.open('https://octavius.mail.ru/inbox/');
		letters.openBySubject(subject);
    });
});

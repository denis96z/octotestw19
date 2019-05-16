import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import returnToInbox from '../../steps';

describe('archive test', () => {
    it('Авторизоваться и открыть первое письмо на странице и архивировать его', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        let subject = 'test1';

        letters.openBySubject(subject);
        buttons.clickByName('В архив');

		returnToInbox('archive', subject);
		
		main.open('https://octavius.mail.ru/inbox/');
		letters.openBySubject(subject);
    });
});

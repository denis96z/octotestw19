import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';


describe('reply and forward test', () => {
    before(function() {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
    });
    it('Авторизоваться и открыть первое письмо на странице. Переслать на письмо.', () => {
        main.open('https://octavius.mail.ru/inbox/');

        let subject = 'test1';

        letters.openBySubject(subject);
        buttons.clickByName('Переслать');

        letters.checkReplyForwardSubject(subject, false); // проверка темы сообщения, в данном случае на ответ
        letters.closeReplyForwardWindow();
        
    });
    it('Авторизоваться и открыть первое письмо на странице. Ответить на письмо.', () => {

        let subject = 'test1';
        main.open('https://octavius.mail.ru/inbox/');
        letters.openBySubject(subject);
        buttons.clickByName('Ответить');

        letters.checkReplyForwardSubject(subject, true); // проверка темы сообщения, в данном случае на ответ
        letters.closeReplyForwardWindow();
        // main.open('https://octavius.mail.ru/inbox/');
    });
});

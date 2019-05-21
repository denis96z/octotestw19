import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';


describe('reply and forward test', () => {
    before(function() {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
    });
    it(`Авторизоваться и открыть первое письмо на странице. 
    Переслать на письмо.`, () => {
        main.open('https://octavius.mail.ru/inbox/');

        const subject = 'test1';

        letters.openBySubject(subject);
        buttons.clickByName('Переслать');

        // проверка темы сообщения, в данном случае на ответ
        letters.checkReplyForwardSubject(subject, false);
        letters.closeReplyForwardWindow();
        letters.checkMessageMin();
    });
    it(`Авторизоваться и открыть первое письмо на странице. 
    Ответить на письмо.`, () => {
        const subject = 'test1';
        main.open('https://octavius.mail.ru/inbox/');
        letters.openBySubject(subject);
        buttons.clickByName('Ответить');

        // проверка темы сообщения, в данном случае на ответ
        letters.checkReplyForwardSubject(subject, true);
        letters.closeReplyForwardWindow();
        letters.checkMessageMin();
    });
});

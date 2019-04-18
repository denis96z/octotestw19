import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import returnToInbox from '../../steps/utils';

describe('spam test', () => {
    it('Авторизоваться и поместить письмо в спам', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        letters.openByLetterNumber(1); // выбор первого письма из списка

        buttons.checkByName('.button2_spam-on');
        buttons.clickByName('.button2_spam-on');

        returnToInbox('spam')
    });
});

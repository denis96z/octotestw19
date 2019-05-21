import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import returnToPreviousState from '../../steps';

describe('delete test', () => {
    it(`Авторизоваться и открыть первое письмо на странице и 
    проверить наличие кнопки удалить и удалить это письмо`, () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        const subject = 'test1';

        letters.openBySubject(subject);
        buttons.clickByName('Удалить');

        returnToPreviousState('trash', subject);

        // откроем это письмо, чтобы убедится, что всё ок
        main.open('https://octavius.mail.ru/inbox/');
        letters.openBySubject(subject);
    });
});

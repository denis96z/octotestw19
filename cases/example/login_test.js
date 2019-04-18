import main from '../../steps/main';
import letters from '../../steps/letters';

// пример теста
describe('login test', () => {
    it('Авторизоваться и открыть первое письмо на странице', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);
        letters.openByLetterNumber(1); // 
    });
});

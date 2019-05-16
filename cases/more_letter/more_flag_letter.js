import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import dropdowns from '../../steps/portal/dropdown';

describe('flag test', () => {
    it('Авторизоваться и открыть первое письмо на странице. Пометить письмо флажком, снять флажок', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        letters.openBySubject("Вход с нового устройства");
        // кнопка ещё
        buttons.clickByName('Ещё');
        // пометить непрочитанным 
        dropdowns.clickByIcoName("16-flag", "more");

        // кнопка ещё
        buttons.clickByName('Ещё');
        // пометить прочитанным 
        dropdowns.clickByIcoName("16-flag", "more");
    });
});

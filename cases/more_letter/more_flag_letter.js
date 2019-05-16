import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';

describe('flag test', () => {
    it('Авторизоваться и открыть первое письмо на странице. Пометить письмо флажком, снять флажок', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        letters.openBySubject("Вход с нового устройства");
        buttons.clickByName('Пометить флажком');

        letters.openBySubject("Вход с нового устройства");
        buttons.clickByName('Снять флажок');
    });
});

import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import dropdowns from '../../steps/portal/dropdown';

describe('folder test', () => {
    it('Авторизоваться и переместить письмо в папку входящие', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        letters.openBySubject("Вход с нового устройства");
        buttons.clickByName('В папку');
        dropdowns.clickByNumber(1, "folders");
    });
});

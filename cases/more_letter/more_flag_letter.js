import main from '../../steps/main';
import letters from '../../steps/letters';
import buttons from '../../steps/portal/button';
import dropdowns from '../../steps/portal/dropdown';

describe('flag test', () => {
    it('Авторизоваться и открыть первое письмо на странице. Пометить письмо флажком, снять флажок', () => {
        main.open('https://mail.ru');
        main.login(process.env.LOGIN, process.env.PASSWORD);

        let subject = 'test1';
		const id = '1:9ed4cdea4d30a62d:0';

        letters.openBySubject(subject);
        // кнопка ещё
        buttons.clickByName('Ещё');
        // пометить флагом 
        dropdowns.clickByNumber(2, "more");


        main.open('https://octavius.mail.ru/inbox/');
        letters.checkFlag(subject, id, true); // проверка установлен ли флаг

        letters.openBySubject(subject);
        // кнопка ещё
        buttons.clickByName('Ещё');
        // снять флаг
		dropdowns.clickByNumber(2, "more");
		
		main.open('https://octavius.mail.ru/inbox/');
        letters.checkFlag(subject, id, false); // проверка снят ли флаг
    });
});

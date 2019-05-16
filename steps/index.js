import buttons from './portal/button';
import dropdowns from './portal/dropdown';
import letters from './letters';
import main from './main';

export default function returnToInbox(from) {
    // возвращаем во входящие 
    main.open(`https://octavius.mail.ru/${from}/`);
    letters.openBySubject("Вход с нового устройства"); // выбор письма по теме

    buttons.clickByName('В папку');
    dropdowns.clickByIcoName("inbox", "folders"); // клик по иконке(Входящие)
}

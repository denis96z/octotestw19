import buttons from './portal/button';
import dropdowns from './portal/dropdown';
import letters from './letters';
import main from './main';

export default function returnToInbox(from, subject) {
    main.open(`https://octavius.mail.ru/${from}/`);
    letters.openBySubject(subject);
    buttons.clickByName('В папку');
    dropdowns.clickByIcoName("inbox", "folders"); // клик по иконке(Входящие)
}

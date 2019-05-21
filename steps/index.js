import buttons from './portal/button';
import dropdowns from './portal/dropdown';
import letters from './letters';
import main from './main';

export default function returnToPreviousState(from, subject) {
    main.open(`https://octavius.mail.ru/${from}/`);
    letters.openBySubject(subject);
    buttons.clickByName('В папку');
    dropdowns.clickByNumber(1, "folders"); // клик по иконке(Входящие)
}

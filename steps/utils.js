import buttons from './portal/button';
import letters from './letters/index';
import main from './main';

export default function returnToInbox(from) {
    // возвращаем во входящие 
    main.open(`https://octavius.mail.ru/${from}/`);
    letters.openByLetterNumber(1);
    buttons.checkByName('.button2_folder');
    buttons.clickByName('.button2_folder');
    buttons.checkByName('.nav_expanded > a:nth-child(1)'); // вернуть в Входящие
    buttons.clickByName('.nav_expanded > a:nth-child(1)');
}

import DefaultSteps from '../default';
import page from '../../pages/letters';

class LettersSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openBySubject(subject) {
        this.page.hasLetterBySubject(subject);
        this.page.openBySubject(subject);
    }

    checkReadUnread(subject, id){
        this.page.hasLetterBySubject(subject);
        this.page.checkReadUnread(id);
    }

}

export default new LettersSteps();

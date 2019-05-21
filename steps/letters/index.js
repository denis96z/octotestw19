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

    checkReadUnread(subject, id) {
        this.page.hasLetterBySubject(subject);
        this.page.checkReadUnread(id);
    }

    checkFlag(subject, id, isSet) {
        this.page.hasLetterBySubject(subject);
        this.page.checkFlag(id, isSet);
    }

    checkReplyForwardSubject(subject, isReply) {
        this.page.checkReplyForwardSubject(subject, isReply);
    }

    closeReplyForwardWindow() {
        this.page.closeReplyForwardWindow();
    }

    checkMessageMin() {
        this.page.checkMessageMin();
    }
}

export default new LettersSteps();

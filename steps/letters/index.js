import DefaultSteps from '../default';
import page from '../../pages/letters';

class LettersSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    openByLetterNumber(letterNumber) {
        this.page.hasLetterByLetterNumber(letterNumber);
        this.page.openByLetterNumber(letterNumber);
    }

}

export default new LettersSteps();

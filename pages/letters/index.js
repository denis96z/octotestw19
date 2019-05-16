import DefaultPage from '../default';

class LettersPage extends DefaultPage {
    constructor() {
        super('letters')
    }

    get locators() {
        const container = '.dataset__items';

        return {
            container,
            letterByLetterNumber: (letterNumber) => container + ` a.llc:nth-child(${letterNumber + 1})`,
            letterBySubject: (subject) => `.dataset__items .llc__item_title[title="${subject}"]`
        }
    }

    /**
     * Проверяет есть ли письмо с названием Subject
     *
     * @param {string} subject
     * @param {boolean} reverse
     * @returns {boolean}
     */
    hasLetterBySubject(subject, reverse = false) {
        try {
            this.page.waitForVisible(this.locators.letterBySubject(subject), null, reverse);

            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * Открыть письмо по названию
     * @param  {string} subject
     */
    openBySubject(subject, reverse = false) {
        try {
            this.page.waitForVisible(this.locators.letterBySubject(subject), null, reverse);
            this.page.click(this.locators.letterBySubject(subject));

            return true;
        } catch (err) {
            return false;
        }

    }

}

export default new LettersPage();

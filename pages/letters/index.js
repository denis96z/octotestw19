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
            letterBySubject: (subject) => `.dataset__items .llc__item_title[title="${subject}"]`,
            checkReadUnreadById: (id) => `.dataset__items .llc[data-id="${id}"] .ll-rs`,
            checkFlagById: (id, isSet) => `.dataset__items .llc[data-id="${id}"] .ll-fs` + isSet ? ' .ll-fs_is-active' : '',
            checkReplyForwardSubject: (subject, isReply) => `.container--3QXHv > .inputContainer--nsqFu > .container--H9L5q[value="` + (isReply ? 'Re' : 'Fwd' ) +`: ${subject}"]`,
            closeReplyForwardWindow: () => `.compose-app__compose .controls_container--17SRg .container--1mFoS[title="Закрыть"]`
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

    /**
     * Проверить помечено ли письмо как прочитанное или нет
     * @param {*} id id письма
     */
    checkReadUnread(id, reverse = false){
        try {
            this.page.waitForVisible(this.locators.checkReadUnreadById(id), null, reverse);

            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * Проверка выставлен ли флаг у письма или нет
     * @param {*} id id письма
     * @param {*} isSet если true, то проверка на наличие флага у письма, false иначе
     */
    checkFlag(id, isSet, reverse = false){
        try {
            this.page.waitForVisible(this.locators.checkReadUnreadById(id, isSet), null, reverse);

            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * Проверка на наличие темы письма с приставкой "Re: " или "Fwd: "
     * @param {*} subject тема письма
     * @param {*} isReply true – проверка на Re, false – проверка на Fwd
     */
    checkReplyForwardSubject(subject, isReply, reverse = false){
        try {
            this.page.waitForVisible(this.locators.checkReplyForwardSubject(subject, isReply), null, reverse);

            return true;
        } catch (err) {
            return false;
        }
    }

    /**
     * Закрывает окно ответа на письмо
     */
    closeReplyForwardWindow(reverse = false){
        try {
            this.page.waitForVisible(this.locators.closeReplyForwardWindow(), null, reverse);
            this.page.click(this.locators.closeReplyForwardWindow());

            return true;
        } catch (err) {
            return false;
        }
    }

}

export default new LettersPage();

import DefaultPage from '../default';

class ButtonsPage extends DefaultPage {
    constructor() {
        super('buttons')
    }

    get locators() {
        const container = '';
        return {
            container,
            buttonByName: (buttonName) => `.portal-menu .layout__main-frame .portal-menu-element .button2[title="${buttonName}"]`
        }
    }

    /**
     * Проверяет, есть ли такая кнопка в меню
     * @param {string} buttonName
     */
    hasButtonByName(buttonName, reverse = false) {
        try {
            this.page.waitForVisible(this.locators.buttonByName(buttonName), null, reverse);

            return true;
        } catch (err) {
            return false;
        }
    }

    clickButtonByName(buttonName, reverse = false) {
        this.page.waitForVisible(this.locators.buttonByName(buttonName), null, reverse);
        this.page.click(this.locators.buttonByName(buttonName));
    }

}

export default new ButtonsPage();
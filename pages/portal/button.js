import DefaultPage from '../default';

class ButtonsPage extends DefaultPage {
    constructor() {
        super('buttons');
    }

    get locators() {
        const container = '.portal-menu .layout__main-frame .portal-menu-element ';
        return {
            container,
            buttonByName: (buttonName) => container + `.button2[title="${buttonName}"]`,
            disabledButtonByName: (buttonName) =>
                container + `.button2[data-title="${buttonName}"][disabled=""]`,
        };
    }

    /**
     * Проверяет, есть ли такая кнопка в меню
     * @param {string} buttonName
     * @param {boolean} reverse
     * @return {boolean}
     */
    hasButtonByName(buttonName, reverse = false) {
        try {
            this.page.waitForVisible(this.locators.buttonByName(buttonName), null, reverse);

            return true;
        } catch (err) {
            return false;
        }
    }

    hasDisabledButtonByName(buttonName, reverse = false) {
        try {
            this.page.waitForVisible(
                this.locators.disabledButtonByName(buttonName), null, reverse
            );

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


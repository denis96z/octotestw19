import DefaultPage from '../default';

class DropdownsPage extends DefaultPage {
    constructor() {
        super('dropdowns')
    }

    get locators() {
        const inFolderContainer = '.dropdown__menu .nav-folders .nav_expanded';
        return {
            elementByNumber: (elementName) => inFolderContainer + ` > .nav__item .nav__folder .nav__folder-ico .ico_${elementName}`
        }
    }

    /**
     * Проверяет, есть ли такая кнопка в меню
     * @param {string} elementName
     */
    hasElementByName(elementName, reverse = false) {
        try {
            console.log("element: ", this.locators.elementByNumber(elementName));

            this.page.waitForVisible(this.locators.elementByNumber(elementName), null, reverse);

            return true;
        } catch (err) {
            return false;
        }
    }

    clickElementByName(elementName, reverse = false) {
        this.page.waitForVisible(this.locators.elementByNumber(elementName), null, reverse);
        this.page.click(this.locators.elementByNumber(elementName));
    }

}

export default new DropdownsPage();
import DefaultPage from '../default';

class DropdownsPage extends DefaultPage {
    constructor() {
        super('dropdowns');
    }

    get locators() {
        const inFolderContainer = '.dropdown__menu .nav-folders .nav_expanded';
        const inMoreContainer = '.dropdown_expanded .dropdown__menu .list';
        return {
            elementFolderByNumber: (elementNumber) =>
                inFolderContainer + ` > :nth-child(${elementNumber})`,
            elementMoreByNumber: (elementNumber) =>
                inMoreContainer + ` > :nth-child(${elementNumber})`,
        };
    }

    /**
     * Проверяет, есть ли пункт в меню по его номеру
     * @param {string} elementNumber
     * @param {string} type
     * @param {boolean} reverse
     * @return {boolean}
     */
    hasElementByNumber(elementNumber, type, reverse = false) {
        try {
            switch (type) {
            case 'folder': {
                this.page.waitForVisible(
                    this.locators.elementFolderByNumber(elementNumber), null, reverse
                );
                return true;
            }
            case 'more': {
                this.page.waitForVisible(
                    this.locators.elementMoreByNumber(elementNumber), null, reverse
                );
                return true;
            }
            }
        } catch (err) {
            return false;
        }
    }

    clickElementByNumber(elementNumber, type, reverse = false) {
        switch (type) {
        case 'folders': {
            this.page.waitForVisible(
                this.locators.elementFolderByNumber(elementNumber), null, reverse
            );
            this.page.click(this.locators.elementFolderByNumber(elementNumber));
            break;
        }
        case 'more': {
            this.page.waitForVisible(
                this.locators.elementMoreByNumber(elementNumber), null, reverse
            );
            this.page.click(this.locators.elementMoreByNumber(elementNumber));
            break;
        }
        }
    }
}

export default new DropdownsPage();

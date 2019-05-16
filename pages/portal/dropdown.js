import DefaultPage from '../default';

class DropdownsPage extends DefaultPage {
    constructor() {
        super('dropdowns')
    }

    get locators() {
        const inFolderContainer = '.dropdown__menu .nav-folders .nav_expanded';
        const inMoreContainer = '.dropdown_expanded .dropdown__menu .list .list-item .list-item__ico'
        return {
            elementFolderByNumber: (elementName) => inFolderContainer + ` > .nav__item .nav__folder .nav__folder-ico .ico_${elementName}`,
            elementMoreByNumber: (elementName) => inMoreContainer + ` > .ico_${elementName}`,
        }
    }
    /**
     * Проверяет, есть ли такая кнопка в меню
     * @param {string} elementName
     */
    hasElementByName(elementName, type, reverse = false) {
        try {
            switch (type){
                case "folder": {
                    this.page.waitForVisible(this.locators.elementFolderByNumber(elementName), null, reverse);
                    return true;
                }
                case "more": {
                    this.page.waitForVisible(this.locators.elementMoreByNumber(elementName), null, reverse);
                    return true;
                }
            }
        } catch (err) {
            return false;
        }
    }

    clickElementByName(elementName, type, reverse = false) {
        switch (type){
            case "folder": {
                this.page.waitForVisible(this.locators.elementFolderByNumber(elementName), null, reverse);
                this.page.click(this.locators.elementFolderByNumber(elementName));
            }
            case "more": {
                this.page.waitForVisible(this.locators.elementMoreByNumber(elementName), null, reverse);
                this.page.click(this.locators.elementMoreByNumber(elementName));
            }
        }
    }

}

export default new DropdownsPage();
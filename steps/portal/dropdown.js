import DefaultSteps from '../default';
import page from '../../pages/portal/dropdown';

class DropdownsSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    checkByIcoName(elementName, type) {
        this.page.hasElementByName(elementName, type);
    }

    /**
     * 
     * @param {*} elementName имя иконки (пример .ico_**inbox**)
     * @param {*} type тип выпадающего меню ["folders", "more"]
     */
    clickByIcoName(elementName, type) {
        this.checkByIcoName(elementName, type);
        this.page.clickElementByName(elementName, type);
    }

}

export default new DropdownsSteps();

import DefaultSteps from '../default';
import page from '../../pages/portal/dropdown';

class DropdownsSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    checkByNumber(elementNumber, type) {
        this.page.hasElementByNumber(elementNumber, type);
    }

    /**
     *
     * @param {*} elementNumber номер в пункте меню
     * @param {*} type тип выпадающего меню ["folders", "more"]
     */
    clickByNumber(elementNumber, type) {
        this.checkByNumber(elementNumber, type);
        this.page.clickElementByNumber(elementNumber, type);
    }
}

export default new DropdownsSteps();

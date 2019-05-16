import DefaultSteps from '../default';
import page from '../../pages/portal/dropdown';

class DropdownsSteps extends DefaultSteps {
    constructor() {
        super(page);
    }

    checkByName(elementName) {
        this.page.hasElementByName(elementName);
    }

    clickByName(elementName) {
        this.checkByName(elementName);
        this.page.clickElementByName(elementName);
    }

}

export default new DropdownsSteps();

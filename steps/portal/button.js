import DefaultSteps from '../default';
import page from '../../pages/portal/buttons';

class ButtonsSteps extends DefaultSteps {
	constructor() {
        super(page);
	}

	checkByName(buttonName) {
		this.page.hasButtonByName(buttonName);
	}

}

export default new ButtonsSteps();

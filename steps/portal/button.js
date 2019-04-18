import DefaultSteps from '../default';
import page from '../../pages/portal/button.js';

class ButtonsSteps extends DefaultSteps {
	constructor() {
	super(page);
	}

	checkByName(buttonName) {
		this.page.hasButtonByName(buttonName);
	}

	clickByName(buttonName) {
		this.page.clickButtonByName(buttonName);
	}

}

export default new ButtonsSteps();

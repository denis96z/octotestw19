import DefaultPage from '../default';

class ButtonsPage extends DefaultPage {
	constructor() {
		super('buttons')
	}

	get locators() {
		const container = '';
		// portal-menu-element portal-menu-element_title portal-menu-element_expanded portal-menu-element_not-touch
		return {
			container,
			buttonByName: (buttonName) => container + ` .portal-menu-element_select`
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

	openByLetterNumber (letterNumber) {
		try {

			// const locator = this.locators.buttonByName(buttonName);
			// this.page.waitForVisible(locator);
			// this.page.click(locator);

			this.page.waitForVisible(this.locators.buttonByName(buttonName), null, reverse);
			this.page.click(this.locators.buttonByName(buttonName));
			
			return true;
		} catch (err) {
			return false;
		}
		
	}

	clickButtonByName(buttonName, reverse = false) {
		// const locator = this.locators.buttonByName(buttonName);
		// this.page.waitForVisible(locator);
		// this.page.click(locator);

		this.page.waitForVisible(this.locators.buttonByName(buttonName), null, reverse);
		this.page.click(this.locators.buttonByName(buttonName));
	}

}

export default new ButtonsPage();
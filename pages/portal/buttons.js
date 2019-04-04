import DefaultPage from '../default';

class ButtonsPage extends DefaultPage {
	constructor() {
		super('buttons')
	}

	get locators() {
		const container = '[data-qa-id="application"] [data-qa-id="portal"]';
		return {
			container,
			buttonByName: (buttonName) => container + ` [data-qa-id="${buttonName}"]`
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
}

export default new ButtonsPage();
import DefaultPage from '../default';

class LettersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators () {
		const container = '';

		return {
			container,
			letterByLetterNumber: (letterNumber) => container + ` a.llc:nth-child(${letterNumber})`
		}
	}

	/**
	 * Проверяет есть ли письмо с темой
	 *
	 * @param {string} letterNumber
	 * @param {boolean} reverse
	 * @returns {boolean}
	 */
	hasLetterByLetterNumber (letterNumber, reverse = false) {
		try {
			this.page.waitForVisible(this.locators.letterByLetterNumber(letterNumber), null, reverse);

			return true;
		} catch (err) {
			return false;
		}
	}

	/**
	 * Открыть письмо по letterNumber
	 * @param  {string} letterNumber
	 */
	openByLetterNumber (letterNumber, reverse = false) {
		try {
			this.page.waitForVisible(this.locators.letterByLetterNumber(letterNumber), null, reverse);
			this.page.click(this.locators.letterByLetterNumber(letterNumber));

			return true;
		} catch (err) {
			return false;
		}
		
	}

}

export default new LettersPage();

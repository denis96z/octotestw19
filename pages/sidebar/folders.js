import DefaultPage from '../default';

class FoldersPage extends DefaultPage {
	constructor() {
		super('letters')
	}

	get locators() {
		const container = '[class = "nav__item]';
		return {
			container,
			folderByName: (folderName) => container + ` [title=${folderName}]`
		}
	}

	/**
	 * Клик по любой папке, если сайдбар не узкий
	 * @param {string} folderName
	 */
	clickFolderByName(folderName) {
		const locator = this.locators.folderByName(folderName);
		this.page.waitForVisible(locator);
		this.page.click(locator);
	}

}

export default new FoldersPage();

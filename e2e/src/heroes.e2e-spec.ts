import { HerosPage } from './heroes.po';
import { browser, protractor, element, by } from 'protractor';

describe('Heros page', () => {

  let hPage: HerosPage;

  beforeEach(() => {
    hPage = new HerosPage();
  });

  it('should add and remove heroes', () => {

    hPage.navigateTo();
    browser.sleep(3000);

    expect(hPage.noHeroes()).toBe(7);

    hPage.addHero('Hulk');
    browser.sleep(3000);

    expect(hPage.noHeroes()).toBe(8);

    hPage.delHero(7);
    browser.sleep(3000);

    expect(hPage.noHeroes()).toBe(7);

  });

});
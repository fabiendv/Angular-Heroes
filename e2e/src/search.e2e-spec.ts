import { HeroDetailPage } from './hero-detail.po';
import { DashboardPage } from './dashboard.po';
import { browser, protractor, element, by } from 'protractor';

describe('Hero search', () => {

  let dPage: DashboardPage;
  let hdPage: HeroDetailPage;
  let result;
  let result1;
  let result2;
  beforeEach(() => {
    dPage = new DashboardPage();
    hdPage = new HeroDetailPage();
  });

  it('should display matching search results', () => {
    dPage.navigateTo();
    dPage.searchFor('man');
    browser.sleep(2000);

    result = dPage.getSearchResults();
    /*
    console.log("normal",result[0]);
    result1 = dPage.getSearchResults().catch;
    console.log("catch",result1);
    result2 = dPage.getSearchResults().cancel;
    console.log("cancel",result2);
    */
    // expect(result).toEqual([
    //   {index: 0, text: 'Test'},
    //   {index: 1, text: 'Batman'},
    //   {index: 2, text: 'Superman'},
    //   {index: 3, text: 'Iron Man'},
    //   {index: 4, text: 'Wonder Woman'},
    // ]);

    //ok avec li class search result
    expect(result).toEqual([
      { index: 0, text: 'Batman\nSuperman\nIron Man\nWonder Woman' },
      { index: 1, text: 'Batman' },
      { index: 2, text: 'Superman' },
      { index: 3, text: 'Iron Man' },
      { index: 4, text: 'Wonder Woman' },
    ]);
  });

  it('should navigate from search result to hero details', () => {
    dPage.navigateTo();
    browser.sleep(2000);

    dPage.searchFor('man');
    browser.sleep(2000);

    dPage.clickSearchResult(1);
    //hdPage.navigateTo(1);
    browser.sleep(2000);

    expect(hdPage.getHeaderText()).toBe('BATMAN Details');
  });

});

import { RezeptbuchAppPage } from './app.po';

describe('rezeptbuch-app App', () => {
  let page: RezeptbuchAppPage;

  beforeEach(() => {
    page = new RezeptbuchAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

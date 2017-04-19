import { CSWebAppPage } from './app.po';

describe('csweb-app App', () => {
  let page: CSWebAppPage;

  beforeEach(() => {
    page = new CSWebAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

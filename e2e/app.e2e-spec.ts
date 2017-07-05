import { UrmProjectPage } from './app.po';

describe('urm-project App', () => {
  let page: UrmProjectPage;

  beforeEach(() => {
    page = new UrmProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

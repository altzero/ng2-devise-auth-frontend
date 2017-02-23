import { Ng2DeviseAuthFrontendPage } from './app.po';

describe('ng2-devise-auth-frontend App', () => {
  let page: Ng2DeviseAuthFrontendPage;

  beforeEach(() => {
    page = new Ng2DeviseAuthFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

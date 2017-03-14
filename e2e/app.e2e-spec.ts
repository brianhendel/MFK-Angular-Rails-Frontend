import { MFKAngularFrontendPage } from './app.po';

describe('mfk-angular-frontend App', () => {
  let page: MFKAngularFrontendPage;

  beforeEach(() => {
    page = new MFKAngularFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

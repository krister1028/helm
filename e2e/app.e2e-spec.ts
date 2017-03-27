import { HelmPage } from './app.po';

describe('helm App', function() {
  let page: HelmPage;

  beforeEach(() => {
    page = new HelmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

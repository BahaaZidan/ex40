import { Ex40Page } from './app.po';

describe('ex40 App', () => {
  let page: Ex40Page;

  beforeEach(() => {
    page = new Ex40Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

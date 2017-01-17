import { Library2Page } from './app.po';

describe('library2 App', function() {
  let page: Library2Page;

  beforeEach(() => {
    page = new Library2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

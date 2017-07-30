import { GoodFormsPage } from './app.po';

describe('good-forms App', () => {
  let page: GoodFormsPage;

  beforeEach(() => {
    page = new GoodFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

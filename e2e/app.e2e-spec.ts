import { PocAngular2LazyLoadPage } from './app.po';

describe('poc-angular2-lazy-load App', () => {
  let page: PocAngular2LazyLoadPage;

  beforeEach(() => {
    page = new PocAngular2LazyLoadPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

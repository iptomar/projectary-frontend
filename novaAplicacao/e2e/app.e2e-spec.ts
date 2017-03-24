import { NovaAplicacaoPage } from './app.po';

describe('nova-aplicacao App', () => {
  let page: NovaAplicacaoPage;

  beforeEach(() => {
    page = new NovaAplicacaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

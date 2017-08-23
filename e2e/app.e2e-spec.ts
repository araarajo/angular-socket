import { Angular2SocketPage } from './app.po';

describe('angular2-socket App', () => {
  let page: Angular2SocketPage;

  beforeEach(() => {
    page = new Angular2SocketPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

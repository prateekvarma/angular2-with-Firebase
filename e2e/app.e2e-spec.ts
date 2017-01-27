import { LessonProjectPage } from './app.po';

describe('lesson-project App', function() {
  let page: LessonProjectPage;

  beforeEach(() => {
    page = new LessonProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

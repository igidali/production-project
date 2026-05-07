import { ArticleBlockType, ArticleType } from '../../types/article';
import { TestAsyncThunk } from 'shared/lib/tests';
import { fetchArticleById } from './fetch-article-by-id';

const data = {
  id: '1',
  title: 'Title',
  subtitle: 'Subtitle',
  img: '/img',
  views: 1,
  createdAt: 'today',
  type: [ArticleType.IT],
  blocks: [
    {
      id: '1',
      type: ArticleBlockType.TEXT,
      paragraphs: ['text'],
    },
  ],
};

describe('fetchArticleById.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ data }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(data);
  });

  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toBe('error');
  });
});

import { Article, ArticleBlockType, ArticleType } from '../types/article';
import { fetchArticleById } from '../services/fetch-article-by-id/fetch-article-by-id';
import { ArticleDetailsSchema } from '../types/article-details-schema';
import { articleDetailsReducer } from './article-details-slice';

const data: Article = {
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

describe('articleDetailsSlice.test', () => {
  test('fetchArticleById pending', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: 'error',
    };

    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending)).toEqual({
      isLoading: true,
      error: undefined,
    });
  });

  test('fetchArticleById fulfilled', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(data, ''))).toEqual({
      isLoading: false,
      data,
    });
  });

  test('fetchArticleById rejected', () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    };

    expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.rejected(null, '', '1', 'error'))).toEqual({
      isLoading: false,
      error: 'error',
    });
  });
});

import { memo, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from 'shared/assets/icons/calendar-20-20.svg';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { classNames } from 'shared/lib/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components';
import { useAppDispatch } from 'shared/lib/hooks';
import { Avatar } from 'shared/ui/avatar';
import { Icon } from 'shared/ui/icon';
import { Skeleton } from 'shared/ui/skeleton';
import { Text, TextAlign, TextSize } from 'shared/ui/text';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/article-details';
import { fetchArticleById } from '../../model/services/fetch-article-by-id/fetch-article-by-id';
import { articleDetailsReducer } from '../../model/slice/article-details-slice';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../article-code-block-component/article-code-block-component';
import { ArticleImageBlockComponent } from '../article-image-block-component/article-image-block-component';
import { ArticleTextBlockComponent } from '../article-text-block-component/article-text-block-component';
import cls from './article-details.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id: string;
}

export const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent key={block.id} block={block} className={cls.block} />;
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent key={block.id} block={block} className={cls.block} />;
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />;
      default:
        return null;
    }
  }, []);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={cls.avatar} width={200} height={200} border="50%" />
        <Skeleton className={cls.title} width={300} height={32} />
        <Skeleton className={cls.skeleton} width={600} height={24} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
        <Skeleton className={cls.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = <Text align={TextAlign.CENTER} title={t('Произошла ошибка при загрузке статьи.')} />;
  } else {
    content = (
      <>
        <div className={cls.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={cls.avatar} />
        </div>
        <Text className={cls.title} title={article?.title} text={article?.subtitle} size={TextSize.L} />
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={EyeIcon} />
          <Text text={String(article?.views)} />
        </div>
        <div className={cls.articleInfo}>
          <Icon className={cls.icon} Svg={CalendarIcon} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      {' '}
      <div className={classNames(cls.ArticleDetails, {}, [className])}>{content}</div>
    </DynamicModuleLoader>
  );
});

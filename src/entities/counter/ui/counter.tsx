import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/button';
import { getCounterValue } from '../model/selectors';
import { counterActions } from '../model/slice/counter-slice';

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const { t } = useTranslation();

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <>
      <div data-testid='value-title'>{counterValue}</div>
      <Button onClick={increment} data-testid='increment-btn'>
        {t('increment')}
      </Button>
      <Button onClick={decrement} data-testid='decrement-btn'>
        {t('decrement')}
      </Button>
    </>
  );
};

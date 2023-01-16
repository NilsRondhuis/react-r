import { useSelector, useDispatch } from 'react-redux';
import actions from 'redux/actions';
import selectors from 'redux/selectors';
import statusFilters from 'redux/constants';
import Button from 'components/Button/Button';
import css from './StatusFilter.module.css';

const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectors.getStatusFilter);

  const handleFilterChange = filter =>
    dispatch(actions.setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'redux/counterSlice';
import Section from 'components/common/Section/Section';
// import SharedLayout from 'components/SharedLayout/SharedLayout';
// import Profile from 'pages/Profile';
// import UserLogin from 'pages/UserLogin';
// import { Route, Routes } from 'react-router-dom';

const App = () => {
  const value = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      {/* <Routes>
        <Route path="/" element={<SharedLayout />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/profile" element={<Profile />} />
      </Routes> */}
      <Section title="Redux toolkit and redux-persist">
        <div>
          <p>Value: {value}</p>
          <div>
            <button type="button" onClick={() => dispatch(decrement(10))}>
              decrement
            </button>
            <button type="button" onClick={() => dispatch(increment(10))}>
              increment
            </button>
          </div>
        </div>
      </Section>
    </>
  );
};

export default App;

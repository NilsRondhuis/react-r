import Section from 'components/common/Section/Section';
import { CounterRedux } from 'components/CounterRedux/CounterRedux';
import { CounterReduxToolkit } from 'components/CounterReduxToolkit/CounterReduxToolkit';

const App = () => {
  return (
    <>
      <Section title="Counter expamle redux">
        <CounterRedux />
      </Section>
      <Section title="Counter example redux-toolkit">
        <CounterReduxToolkit />
      </Section>
    </>
  );
};

export default App;

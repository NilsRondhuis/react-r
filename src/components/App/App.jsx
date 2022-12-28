import CallbackExample from 'components/CallbackExample/CallbackExample';
import Section from 'components/common/Section/Section';
import MemoExample from 'components/MemoExample/MemoExample';
import SkipMountExample from 'components/SkipMountExample/SkipMountExample';
import UseMemoExample from 'components/UseMemoExample/UseMemoExample';
import UseRefExample from 'components/UseRefExample/UseRefExample';

const App = () => {
  return (
    <>
      <Section title="Skip mount example">
        <SkipMountExample />
      </Section>
      <Section title="CB example">
        <CallbackExample />
      </Section>
      <Section title="Memo example">
        <MemoExample />
      </Section>
      <Section title="useMemo Example">
        <UseMemoExample />
      </Section>
      <Section title="useRef Example">
        <UseRefExample />
      </Section>
    </>
  );
};

export default App;

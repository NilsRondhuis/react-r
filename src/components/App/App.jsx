import Clock from 'components/Clock/Clock';
import ColorPicker from 'components/ColorPicker/ColorPicker';
import Section from 'components/common/Section/Section';
import Counter from 'components/Counter/Counter';
import ExampleSkipRender from 'components/Counter/ExampleSkipRender';
import Review from 'components/Review/Review';
import SignUpForm from 'components/SignUpForm/SignUpForm';
import colors from '../../data/colors.json';

const App = () => {
  return (
    <>
      <Section title="Skip first render">
        <ExampleSkipRender />
      </Section>
      <Section title="Clock">
        <Clock />
      </Section>
      <Section title="Review">
        <Review />
      </Section>
      <Section title="Counter">
        <Counter />
      </Section>
      <Section title="Form">
        <SignUpForm />
      </Section>
      <Section title="Color picker">
        <ColorPicker colors={colors} />
      </Section>
    </>
  );
};

export default App;

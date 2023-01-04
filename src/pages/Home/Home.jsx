import React from 'react';
import Section from 'components/common/Section/Section';
import heroImg from '../../images/default.png';

const Home = () => {
  return (
    <main>
      <Section title="Welcome">
        <img src={heroImg} alt="Hero" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid
          sapiente quis earum obcaecati doloribus ea, neque quasi quidem? Saepe
          dolores neque dolore ab delectus temporibus, vel aliquid iure adipisci
          quos.
        </p>
      </Section>
    </main>
  );
};

export default Home;

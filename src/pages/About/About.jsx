import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Section from 'components/common/Section/Section';

const About = () => {
  return (
    <main>
      <Section title="About us">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa eius,
          adipisci corporis et omnis animi! Aspernatur recusandae, eius
          assumenda corrupti, consequuntur harum doloribus, sed blanditiis quia
          corporis provident voluptatibus repellat. Tempora libero
          necessitatibus nihil neque facilis asperiores, placeat voluptatibus
          nesciunt, doloribus illum qui cum sed labore nostrum sapiente animi
          non, eligendi magni! Dolorem maiores fugit aliquid. Cupiditate hic
          distinctio tempore. Veritatis, autem atque? Dolore quos, omnis ipsum
          cumque dolorem labore similique dolorum hic suscipit dignissimos
          inventore aliquam necessitatibus repellat fuga! Alias voluptate quae
          suscipit, at totam commodi necessitatibus nesciunt similique? Iure
          aspernatur atque, necessitatibus natus eos temporibus dicta provident
          neque est. Eaque sit, quidem, sint laborum reiciendis quos earum
          numquam mollitia, cum debitis suscipit excepturi. Quasi commodi culpa
          tempora modi. Nulla earum sunt beatae obcaecati voluptatibus dolorem
          sit voluptate! Ullam ea quasi voluptates laudantium error id porro
          corporis deserunt eum recusandae vero ut mollitia, laborum explicabo a
          atque maxime similique.
        </p>

        <ul>
          <li>
            <Link to="mission">Read about our mission</Link>
          </li>
          <li>
            <Link to="team">Get to know the team</Link>
          </li>
          <li>
            <Link to="reviews">Go through the reviews</Link>
          </li>
        </ul>
        <Suspense fallback={<p>Loading page...</p>}>
          <Outlet />
        </Suspense>
      </Section>
    </main>
  );
};

export default About;

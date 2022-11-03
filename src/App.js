import Section from "./components/Section";
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json";

function App() {
  return (
    <>
      <Section title="Топ недели">
        <PaintingList arr={paintings} />
      </Section>
      <Section>
        <PaintingList arr={paintings} />
      </Section>
    </>
  );
}

export default App;

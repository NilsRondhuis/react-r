import Section from "../common/Section/Section";
import PaintingList from "../PaintingList/PaintingList";
import paintings from "../../data/paintings.json";
import recipes from "../../data/recipes.json";
import RecipeList from "../RecipeList/RecipeList";
import { Container } from "./App.styled";

function App() {
  return (
    <>
      <Container>
        <Section title="Топ недели">
          <PaintingList arr={paintings} />
        </Section>
        <Section title="Recipes">
          <RecipeList recipes={recipes} />
        </Section>
      </Container>
    </>
  );
}

export default App;

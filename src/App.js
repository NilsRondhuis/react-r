import Section from "./components/Section";
import PaintingList from "./components/PaintingList";
import paintings from "./paintings.json";
import recipes from "./data/recipes.json";
import RecipeList from "./components/RecipeList/RecipeList";

function App() {
  return (
    <>
      <Section title="Топ недели">
        <PaintingList arr={paintings} />
      </Section>
      <Section>
        <PaintingList arr={paintings} />
      </Section>
      <Section title="Recipes">
        <RecipeList recipes={recipes} />
      </Section>
    </>
  );
}

export default App;

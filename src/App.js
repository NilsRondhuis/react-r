import ProductList from "./components/ProductList";
import Section from "./components/Section";
import products from "./product.json";

export default function App() {
  return (
    <>
      <Section title="Top this week">
        <ProductList items={products} />
      </Section>
    </>
  );
}

import Section from "./components/Section/Section";
import ColorPicker from "./components/ColorPicker/ColorPicker";
import colorPickerOptions from "./data/colorPickerOptions.json";
import Alert from "./components/Alert/Alert";
import Box from "./components/Box/Box";

export default function App() {
  return (
    <>
      <Section title="App">
        {/* <ColorPicker options={colorPickerOptions}/>
     </Section> 
     <Section>
       <Alert text="Error" type="error" />
       <Alert text="Warning" type="warning" />
       <Alert text="Success" type="success" /> */}
        <Box type="small" />
        <Box type="medium" />
        <Box type="large" />
      </Section>
    </>
  );
}

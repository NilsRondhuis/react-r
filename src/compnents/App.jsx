import EventBoard from "./EventBoard/EventBoard";
import PageTitle from "./PageTitle/PageTitle";
import events from "../data/events.json";

const App = () => {
  return (
    <>
      App
      <PageTitle title="24th Core Worlds Coallition Conference" />
      <EventBoard events={events} />
    </>
  );
};

export default App;

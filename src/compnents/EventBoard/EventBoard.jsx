import PropTypes from "prop-types";
import s from "./EventBoard.module.css";
import EventCard from "./EventCard/EventCard";

const EventBoard = ({ events }) => {
  return (
    <div className={s.eventBoard}>
      {events.map(({ name, location, speaker, type, time }) => (
        <EventCard
          key={name}
          name={name}
          location={location}
          speaker={speaker}
          type={type}
          start={time.start}
          end={time.end}
        />
      ))}
    </div>
  );
};

EventBoard.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })
  ).isRequired,
};

export default EventBoard;

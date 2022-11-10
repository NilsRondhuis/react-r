import PropTypes from "prop-types";
import s from "./EventCard.module.css";
import { ImLocation } from "react-icons/im";
import { AiOutlineUser } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import formatEventStart from "../../../utils/formatEventStart";
import formatEventDuration from "../../../utils/formatEventDuration";
import { iconsSize } from "../../../constans";

const EventCard = ({ name, location, speaker, type, start, end }) => {
  const formatedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <div className={s.card}>
      <h2 className={s.title}>{name}</h2>
      <p className={s.text}>
        <ImLocation className={s.icon} size={iconsSize.small} />
        {location}
      </p>
      <p className={s.text}>
        <AiOutlineUser className={s.icon} size={iconsSize.small} />
        {speaker}
      </p>
      <p className={s.text}>
        <BsCalendar3 className={s.icon} size={iconsSize.small} />
        {formatedStart}
      </p>
      <p className={s.text}>
        <BiTimeFive className={s.icon} size={iconsSize.small} />
        {duration}
      </p>
      <span className={`${s.type} ${s[type]}`}>{type}</span>
    </div>
  );
};

EventCard.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  speaker: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};

export default EventCard;

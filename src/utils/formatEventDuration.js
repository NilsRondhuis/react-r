import { formatDistanceStrict } from "date-fns";

const formatEventDuration = (start, end) => {
  return formatDistanceStrict(Date.parse(start), Date.parse(end));
};

export default formatEventDuration;

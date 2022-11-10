import { format } from "date-fns";

const formatEventStart = (start) => {
  return format(Date.parse(start), "dd MMMM yyyy, HH:mm");
};

export default formatEventStart;

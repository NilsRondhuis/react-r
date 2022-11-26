import PropTypes from "prop-types";
import { SectionShared, SectionTitle } from "./Section.styled";

function Section({ title, children }) {
  return (
    <SectionShared>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </SectionShared>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;

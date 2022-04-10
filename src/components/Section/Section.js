import PropTypes from "prop-types";
import "./Section.css";

export default function Section({ title, children }) {
  return (
    <>
      <section className="Section">
        {title && <h2>{title}</h2>}
        {children}
      </section>
    </>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

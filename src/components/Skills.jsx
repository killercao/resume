// @flow
import React from "react";
import PropTypes from "prop-types";
import Section from "./layouts/Section";

const propTypes = {
  skills: PropTypes.array,
};
const defaultProps = {
  skills: [],
};

export default function Skills({ skills }: { skills: Array<string> }) {
  return (
    <Section title="Skills">
      <ul>{skills.map((s, id) => <li key={id}>{s}</li>)}</ul>
    </Section>
  );
}

Skills.propTypes = propTypes;
Skills.defaultProps = defaultProps;

// @flow
import React from "react";
import PropTypes from "prop-types";
import Section from "./layouts/Section";

const propTypes = {
  data: PropTypes.string.isRequired,
};
const defaultProps = {
  data: "",
};

export default function Profile({ data }: { data: string }) {
  return (
    <Section title="Summary">
      <p>{data}</p>
    </Section>
  );
}

Profile.propTypes = propTypes;
Profile.defaultProps = defaultProps;

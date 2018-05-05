// @flow
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Section, MainText, SubText, DateText, LocationText } from "./layouts";

const propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      school: PropTypes.string,
      degree: PropTypes.string,
      dates: PropTypes.string,
    })
  ),
};

const defaultProps = {
  data: [],
};

const Div = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "heading location"
    "degree date";

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-areas: "heading" "degree" "date";
  }
`;


type EducationType = {
  school: string,
  degree: string,
  dates: string,
  gpa: string,
};

const style = {
  school: {
    gridArea: "heading",
  },
  degree: {
    gridArea: "degree",
  },
};

const Education = ({ data }: { data: EducationType }) => {
  return (
    <div>
      <Div>
        <MainText>
          {data.school}
        </MainText>
        <SubText style={style.degree}>
          {data.degree}
        </SubText>
        <DateText>{data.dates}</DateText>
        <LocationText>{data.location}</LocationText>
      </Div>
    </div>
  );
};

export default function Educations({ data }: { data: Array<EducationType> }) {
  return (
    <Section title="Education">
      {data.map((edu, id) => <Education key={id} data={edu} />)}
    </Section>
  );
}

Educations.propTypes = propTypes;
Educations.defaultProps = defaultProps;

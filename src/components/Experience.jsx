// @flow
import React from "react";
import styled from "styled-components";
import { Section, MainText, SubText, LocationText, DateText } from "./layouts";

type Exp = {
    company: string,
    title: string,
    location: string,
    dates: string,
    descriptions: Array<string>,
};

const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: "company company company location" "position position position date";

    @media (max-width: 600px) {
        grid-template-rows: fit-content(4);
        grid-template-columns: 1fr;
        grid-template-areas: "company" "position" "location" "date";
    }
`;

const Container = styled.div`
    margin-bottom: 1.5rem;

    @media print {
        margin-bottom: 0.7rem;
    }
`;

const ExperienceHelper = ({ data }: { data: Exp }) => {
    return (
        <Container>
            <Header>
                <MainText style={{ gridArea: "company" }}>
                    {data.company}
                </MainText>
                <SubText style={{ gridArea: "position" }}>{data.title}</SubText>
                <LocationText>{data.location}</LocationText>
                <DateText>{data.dates}</DateText>
            </Header>

            <ul>{data.descriptions.map((x, id) => <li key={id}>{x}</li>)}</ul>
        </Container>
    );
};

export default function Experience({ data }: { data: Array<Exp> }) {
    return (
        <Section title="Experience">
            {data.map((exp, id) => <ExperienceHelper data={exp} key={id} />)}
        </Section>
    );
}

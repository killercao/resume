// @flow
import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  letter-spacing: 0.5rem;
  font-weight: 400;
  margin: 1rem 0;
  font-size: 3rem;

  @media (max-width: 600px) {
    letter-spacing: 2px;
    font-size: 2rem;
  }

  @media (max-width: 900px) {
    letter-spacing: 2px;
    font-size: 2rem;
  }
`;

const Lists = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }
`;
const ListItem = styled.li`
  margin: 0 1.5% 0 0;
  white-space: nowrap;
`;

export default function Header(props: any) {
  return (
    <div style={{ width: "100%" }}>
      <H1>
        Jia Cao, <span className="text-muted">CPA</span>
      </H1>
      <Lists>
        <ListItem>
          <i className="ion-ios-email icon-small" />
          <a
            href="mailto:mojia0819@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            mojia0819@gmail.com
          </a>
        </ListItem>

        <ListItem>
          <i className="ion-ios-telephone icon-small" />
          <a href="tel:6505332464" target="_blank" rel="noopener noreferrer">
            (650) 533-2464
          </a>
        </ListItem>

        <ListItem>
          <i className="ion-ios-home icon-small" />
          <a
            href="https://www.google.com/maps/place/Burlingame,+CA/@37.5877343,-122.3851441,14z/data=!3m1!4b1!4m5!3m4!1s0x808f7625549b8e59:0xbbcfa3e532f8f4f!8m2!3d37.5778696!4d-122.34809"
            target="_blank"
            rel="noopener noreferrer"
          >
            Burlingame, California
          </a>
        </ListItem>
      </Lists>
    </div>
  );
}

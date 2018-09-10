// @flow
import React from "react";
import Header from "./Header";
import Summary from "./Summary";
import Skills from "./Skills.jsx";
import Experience from "./Experience";
import Educations from "./Education.jsx";
import { profile, skills, experiences, educations } from "../data";

export default function App(prop: any) {
  return (
    <div className="app">
      <Header />
      <Experience data={experiences} />
      <Educations data={educations} />
      <Skills skills={skills} />
    </div>
  );
}

// @flow
import React from "react";
import Header from "./Header";
import Skills from "./Skills.jsx";
import Experience from "./Experience";
import Educations from "./Education.jsx";
import { skills, experiences, educations } from "../data";

export default function App() {
  return (
    <div className="app">
      <Header />
      <Experience data={experiences} />
      <Educations data={educations} />
      <Skills skills={skills} />
    </div>
  );
}

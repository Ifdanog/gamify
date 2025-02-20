import React from "react";
import Banner from "./banner";
import Section from "./section";
import Grid from "./grid";
const MainContent = () => {
  return (
    <div className="flex-1 p-4 overflow-y-scroll">
      <Banner />
      <Section title="Streams">
        <Grid items={6} />
      </Section>
      <Section title="Games">
        <Grid items={6} />
      </Section>
    </div>
  );
};

export default MainContent;

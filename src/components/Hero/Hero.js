import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, my name is Peter, and I am an experienced Fullstack Developer with 3+ years of experience in developing and maintaining web applications. Expertise in HTML/CSS, JavaScript, Typescript React.js, Node.js, etc. Proven success in integrating back-end services and databases in order to build high-quality front-end user interfaces. Seeking a challenging role as a Fullstack Developer utilizing my technical and analytical skills.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

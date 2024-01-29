import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there ! <br />
        I'm Ravindran
      </SectionTitle>
      <SectionText>
        I am Ravindran, I’m looking to collaborate with new things. I’m quite
        interested in recreating the code
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1G2hPpQZBzkygG9QZqGplyd5zmk0gIJjb/view?usp=sharing")
        }
      >
        Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;

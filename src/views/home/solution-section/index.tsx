import React, { type JSX } from "react";
import { Typography, useTheme } from "@mui/material";
import SolutionCard from "./card";
import SolutionsCards from "./data/solutions.json";
import { SolutionWrapper } from "./index.styled";
import SectionWrapperSG from "../../../components/section-wrapper";
import Flex from "../../../components/wrapper/flex";
import GetStartedButton from "../../../components/buttons/get-started-button";
import { uuid } from "../../../utils/functions";
// import { SectionBadgeSG } from "../../../components/section-badge";
import { SectionTitleDistinctSG } from "../../../components/section-title/index.styled";
import { SectionTitleSG } from "../../../components/section-title";

export interface ISolutionCard {
  title: string;
  description: string;
  icon: string;
}

const SolutionSection: React.FC = (): JSX.Element => {
  const theme = useTheme();
  return (
    <SectionWrapperSG sectionName="solutions-section" column>
      <Flex column maxWidth={theme.spacing(62)} gap={3}>
        {/* <SectionBadgeSG variant="h3">About</SectionBadgeSG> */}
        <SectionTitleSG>
          O platformă dedicată – tot ce ai nevoie pentru a{" "}
          <SectionTitleDistinctSG>
            descoperi natura alături de elevi
          </SectionTitleDistinctSG>
          .
        </SectionTitleSG>
        <Typography textAlign="center">
          Aici găsești prezentări ale excursiilor ecologice, activităților de
          teren și proiectelor realizate împreună cu elevii. Inspirație,
          învățare și bucuria naturii – toate într-un singur loc.
        </Typography>
      </Flex>
      <SolutionWrapper>
        <Flex flexWrap="wrap" justifyCenter maxWidth={theme.spacing(145)}>
          {SolutionsCards.map(
            (card: ISolutionCard): JSX.Element => (
              <SolutionCard key={`${uuid()}-solution-card`} {...card} />
            )
          )}
        </Flex>
      </SolutionWrapper>
      <GetStartedButton/>
    </SectionWrapperSG>
  );
};

export default SolutionSection;

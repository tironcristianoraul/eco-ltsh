import React, { type JSX } from "react";
import { Typography, useTheme } from "@mui/material";
import SolutionCard from "./card";
import SolutionsCards from "./data/solutions.json";
import { SolutionWrapper } from "./index.styled";
import SectionWrapperSG from "../../../components/section-wrapper";
import Flex from "../../../components/wrapper/flex";
import GetStartedButton from "../../../components/buttons/get-started-button";
import { uuid } from "../../../utils/functions";
import { SectionBadgeSG } from "../../../components/section-badge";
import { SectionTitleDistinctSG } from "../../../components/section-title/index.styled";
import { SectionTitleSG } from "../../../components/section-title";
import { useNavigate } from "react-router";

export interface ISolutionCard {
  title: string;
  description: string;
  icon: string;
}

const SolutionSection: React.FC = (): JSX.Element => {
  const theme = useTheme();
  const navigate = useNavigate();
  return (
    <SectionWrapperSG sectionName="solutions-section" column>
      <Flex column maxWidth={theme.spacing(62)} gap={3}>
        <SectionBadgeSG variant="h3">Solution</SectionBadgeSG>
        <SectionTitleSG>
          Platformă completă – tot ce ai nevoie pentru a{" "}
          <SectionTitleDistinctSG>proteja natura</SectionTitleDistinctSG>.
        </SectionTitleSG>
        <Typography textAlign="center">
          Îți oferim toate instrumentele necesare pentru a inspira schimbare, a
          educa comunitatea, a organiza inițiative verzi și a contribui activ la
          un viitor sustenabil.
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
      <GetStartedButton
        onClick={(): void => {
          navigate("/post");
        }}
      />
    </SectionWrapperSG>
  );
};

export default SolutionSection;

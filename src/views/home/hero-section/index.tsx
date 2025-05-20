import React from "react";
import { useTheme } from "@mui/material";
import HeroDetails from "../components/hero-details";
import { HeroSectionWrapper } from "./index.styled";
import type { JSX } from "@emotion/react/jsx-runtime";
import SectionWrapperSG from "../../../components/section-wrapper";
import Flex from "../../../components/wrapper/flex";

// interface IIcon {
//   icon: string;
//   type: string;
// }

const LandingHeroSection: React.FC = (): JSX.Element => {
  //   const handleIcon = (icon: IIcon): JSX.Element => {
  //     switch (icon.type) {
  //       case "reddit": {
  //         return <RedditIcon icon={icon.icon} />;
  //       }
  //       case "twitter": {
  //         return <TwitterIcon icon={icon.icon} />;
  //       }
  //       case "youtube": {
  //         return <YoutubeIcon icon={icon.icon} />;
  //       }
  //       case "tiktok": {
  //         return <TiktokIcon icon={icon.icon} />;
  //       }
  //       default: {
  //         return <div />;
  //       }
  //     }
  //   };

  const theme = useTheme();

  return (
    <SectionWrapperSG p={0} sectionName="hero-section">
      <HeroSectionWrapper>
        <Flex column margin={10} gap={10} maxWidth={theme.spacing(150)}>
          <HeroDetails />
        </Flex>
      </HeroSectionWrapper>
    </SectionWrapperSG>
  );
};

export default LandingHeroSection;

import { useState } from "react";
import type { ISolutionCard } from "..";
import {
  HeadingText,
  HoverIcon,
  IconBackground,
  SolutionCardSubtitle,
  StyledSolutionCard,
} from "./index.styled";
import Flex from "../../../../components/wrapper/flex";
import type { JSX } from "@emotion/react/jsx-runtime";

const SolutionCard: React.FC<ISolutionCard> = ({
  title,
  description,
  icon,
}): JSX.Element => {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <StyledSolutionCard hover>
      <Flex
        gap={1}
        onMouseOver={(): void => setHover(true)}
        onMouseLeave={(): void => setHover(false)}
        width="100%"
        height="100%"
      >
        <IconBackground hover={hover}>
          <HoverIcon icon={icon} hover={hover} />
        </IconBackground>
        <Flex gap={2}>
          <HeadingText hover={hover}>{title}</HeadingText>
          <SolutionCardSubtitle>{description}</SolutionCardSubtitle>
        </Flex>
      </Flex>
    </StyledSolutionCard>
  );
};

export default SolutionCard;

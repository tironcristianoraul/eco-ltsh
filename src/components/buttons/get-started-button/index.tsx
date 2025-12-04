import { useState } from "react";
import {
  StyledGetStartedButton,
  StyledGetStartedButtonArrow,
} from "./index.styled";
import type { GetStartedButtonProps } from "./index.interface";
import type { JSX } from "@emotion/react/jsx-runtime";
import { useNavigate } from "react-router";

const GetStartedButton: React.FC<GetStartedButtonProps> = (
  props: GetStartedButtonProps
): JSX.Element => {
  const { white, size, disabled } = props;
  const [hover, setHover] = useState<boolean>();
  const navigate = useNavigate();

  return (
    <StyledGetStartedButton
      white={white}
      size={size}
      disabled={disabled}
      onMouseOver={(): void => setHover(true)}
      onMouseLeave={(): void => setHover(false)}
      onClick={() => navigate("/post")}
    >
      <a style={{ color: "inherit", textDecoration: "none" }} href="/post">
        Începe
      </a>
      <StyledGetStartedButtonArrow hover={!!hover} icon="maki:arrow" />
    </StyledGetStartedButton>
  );
};

export default GetStartedButton;

import { Box, styled, type BoxProps } from "@mui/material";
import type { FC } from "react";
import { Link, type LinkProps } from "react-router-dom";

const HeaderWrapper: FC<BoxProps> = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'space-between'
}));

const Headerlink: FC<LinkProps> = styled(Link)(() => ({

}))

export { HeaderWrapper, Headerlink };
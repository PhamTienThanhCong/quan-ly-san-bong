import Link from "next/link";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import { WEB_NAME } from "@quanlysanbong/constants/MainContent";

const LinkStyled = styled(Link)(() => ({
  height: "70px",
  width: "180px",
  overflow: "hidden",
  display: "block"
}));

const Logo = () => {
  return (
    <LinkStyled href="/">
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image src="/img/logo.png" alt="logo" height={70} width={70} priority />
      </Box>
    </LinkStyled>
  );
};

export default Logo;

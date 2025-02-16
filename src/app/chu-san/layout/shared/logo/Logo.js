import Link from "next/link";
import { styled } from "@mui/material";
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
      <Image src="/img/logo.png" alt="logo" height={70} width={174} priority />
      {WEB_NAME}
    </LinkStyled>
  );
};

export default Logo;

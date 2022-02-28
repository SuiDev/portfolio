import React from "react";
import styled from "styled-components";

const Footer = () => (
  <>
    <FooterStyle>
        ©2022 SuiSui. All Rights Riserved.
    </FooterStyle>
  </>
);

// フッターCSS
const FooterStyle = styled.div`
  font-size: 12px;
  margin: 0;
  padding: 12px 0 12px 0;
  background-color: black;
  color: white;
  text-align: center;
`;

export default Footer;

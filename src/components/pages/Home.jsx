import React from "react";

/** Material UI Modules */
import Box from "@mui/material/Box";

import About from "components/organisms/About";
import Skill from "components/organisms/Skill";
import Top from "components/organisms/Top";
import Work from "components/organisms/Work";
import backGroundImage from "assets/back_ground.jpg";

const Home = () => (
  <>
    {/** 背景画像 */}
    <div style={{ 
      backgroundImage: `url(${backGroundImage})`,
      backgroundSize: "100%",
      backgroundAttachment: "fixed"
    }}>
      <Box
        sx={{
          margin: "0 100px 0 100px"
        }}
      >
        {/** トップ画面 */}
        <Top />
        {/** プロフィール */}
        <About />
        {/** スキル　*/}
        <Skill />
        {/** 製作物 */}
        <Work />
      </Box>
    </div>
  </>
);

export default Home;

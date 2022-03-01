import React, { createContext } from "react";
import { useMediaQuery } from "react-responsive";

/** Material UI Modules */
import Box from "@mui/material/Box";

import About from "components/organisms/About";
import Footer from "components/organisms/Footer";
import Header from "components/organisms/Header";
import Skill from "components/organisms/Skill";
import Top from "components/organisms/Top";
import Work from "components/organisms/Work";
import backGroundImage from "assets/back_ground.jpg";

export const MediaContext = createContext()

const Home = () => {
  // 画面の横幅が1180px以上のときtrue,1180px以下のときfalseを返します。
  const isPCScreen = useMediaQuery({ query: "(min-width: 1180px)"})
  // 画面の横幅が820px以下のときtrue,820px以上のときfalseを返します。
  const isTabletScreen = useMediaQuery({ query: "(max-width: 820px)"})
  // 画面の横幅が600px以下のときtrue,600px以上のときfalseを返します。
  const isMobileScreen = useMediaQuery({ query: "(max-width: 600px)"})
  // 画面の横幅が880px以下のときtrue,880px以上のときfalseを返します。
  const headerResponsiveEdge = useMediaQuery({ query: "(max-width: 880px)"})

  // コンテキストで渡すユーザーメディアデータです。
  const mediaData = {
    "isPCScreen": isPCScreen,
    "isMobileScreen": isMobileScreen,
    "isTabletScreen": isTabletScreen,
    "headerResponsiveEdge": headerResponsiveEdge
  }

  return (
    <>
      {/** コンテキストでユーザーメディアデータを渡します。*/}
      <MediaContext.Provider value={mediaData}>
        <Header />
        {mediaData.isPCScreen ?
          // PCの表示
          <>
            {/** 背景画像を表示します。 */}
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
          :
          // PC以外の表示
          <>
            {/** トップ画面 */}
            <Top />
            {/** プロフィール */}
            <About />
            {/** スキル　*/}
            <Skill />
            {/** 製作物 */}
            <Work />
          </>
        }
        <Footer />
      </MediaContext.Provider>
    </>
  );
}

export default Home;

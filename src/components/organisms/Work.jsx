import React from "react";
import styled from "styled-components";

/** Material UI Modules */
import Grid from "@mui/material/Grid";

import TaskApp from "components/organisms/work/TaskApp";
import PortfolioSite from "components/organisms/work/PortfolioSite";
import { MediaContext } from "components/pages/Home";
import customMedia from "components/utils/styledMediaConfig";

const Work = () => (
  <>
    <WorkStyle>
      <div
        id="work"
      >
        <Title>
          製作物
        </Title>
        <MediaContext.Consumer>
          {media =>
            <>
              {media.isPCScreen ?
                // PC表示のとき
                <>
                  <Grid
                    container
                  >
                    <Grid
                      item
                      xs={1.5}
                    />
                    <Grid
                      item
                      xs={4}
                    >
                      {/** ポートフォリオサイト */}
                      <PortfolioSite />
                    </Grid>
                    <Grid
                      item
                      xs={1}
                    />
                    <Grid
                      item
                      xs={4}
                    >
                      {/** タスク管理アプリ */}
                      <TaskApp />
                    </Grid>
                    <Grid
                      item
                      xs={1.5}
                    />
                  </Grid>
                </>
                :
                // PC以外の表示のとき
                <>
                  <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                  >
                    <Grid
                      item
                      xs={1}
                    />
                    <Grid
                      item
                      xs={10}
                    >
                      {/** ポートフォリオサイト */}
                      <PortfolioSite />
                    </Grid>
                    <Grid
                      item
                      xs={1}
                    />
                    <Grid
                      item
                      xs={1}
                    />
                    <Grid
                      item
                      xs={10}
                    >
                      {/** タスク管理アプリ */}
                      <TaskApp />
                    </Grid>
                    <Grid
                      item
                      xs={1}
                    />
                  </Grid>
                </>
              }
            </>
          }
        </MediaContext.Consumer>
      </div>
    </WorkStyle>
  </>
);

// 製作アプリ全体CSS
const WorkStyle = styled.div`
  height: calc(100vh - 65px);
  background-color: white;
  text-align: center;

  ${customMedia.lessThan("pc")`
    height: auto;
  `};
`;

// タイトルCSS
const Title = styled.div`
  font-family: "Hiragino Sans","ヒラギノ角ゴシック";
  font-size: 30px;
  margin: 0;
  padding: 50px 0 50px 0;
`;

export default Work;

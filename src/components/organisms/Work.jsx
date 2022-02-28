import React from "react";
import styled from "styled-components";

/** Material UI Modules */
import Grid from '@mui/material/Grid';

import TaskApp from "components/organisms/work/TaskApp";
import PortfolioSite from "components/organisms/work/PortfolioSite";

const Work = () => (
  <>
    <WorkStyle>
      <div
        id="work"
      >
        <Title>
          製作物
        </Title>
        <Grid
          container
        >
          <Grid
            item
            xs={1.5}
          />
          {/** ポートフォリオサイト */}
          <Grid
            item
            xs={4}
          >
            <PortfolioSite />
          </Grid>
          <Grid
            item
            xs={1}
          />
          {/** タスク管理アプリ */}
          <Grid
            item
            xs={4}
          >
            <TaskApp />
          </Grid>
          <Grid
            item
            xs={1.5}
          />
        </Grid>
      </div>
    </WorkStyle>
  </>
);

// 製作アプリ全体CSS
const WorkStyle = styled.div`
  height: calc(100vh - 65px);
  background-color: white;
  text-align: center;
`;

// タイトルCSS
const Title = styled.div`
  font-family: "Hiragino Sans","ヒラギノ角ゴシック";
  font-size: 30px;
  margin: 0;
  padding: 50px 0 50px 0;
`;

export default Work;

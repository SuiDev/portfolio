import React from "react";
import styled from "styled-components";

import useGetWindowSize from "components/utils/useGetWindowSize";
import topImage from "assets/top_image.jpg";

const Top = () => {
  const { width, height } = useGetWindowSize();

  return (
    <>
      <TopStyle>
        <div
          id="top"
        >
          <img
            alt="トップ画像"
            src={topImage}
            width={"100%"}
            height={height - 65}
          />
          <MainMessageStyle>
            ユーザーが快適に使えるサービスを追求し
            <br />
            社会貢献したい
          </MainMessageStyle>
        </div>
      </TopStyle>
    </>
  );
}

// トップCSS
const TopStyle = styled.div`
  position: relative;
  height: calc(100vh - 65px);
  background-color: #F7F8FA;
  opacity: 0.9;
`;

// メインメッセージCSS
const MainMessageStyle = styled.div`
  font-family: "Hiragino Sans","ヒラギノ角ゴシック";
  position: absolute;
  top: 20%;
  left: 10%;
  font-size: 30px;
  opacity: 0.8;
`;

export default Top;

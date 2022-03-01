import React from "react";
import styled from "styled-components";

import { MediaContext } from "components/pages/Home";
import useGetWindowSize from "components/utils/useGetWindowSize";
import topImagePC from "assets/top_image_pc.jpg";
import topImageMobile from "assets/top_image_mobile.jpg";

const Top = () => {
  const { width, height } = useGetWindowSize();

  return (
    <>
      <TopStyle>
        <div
          id="top"
        >
          <MediaContext.Consumer>
            {media =>
              <>
                {!media.isMobileScreen ?
                  // スマホ以外のとき
                  <>
                    <img
                      alt="トップ画像"
                      src={topImagePC}
                      width={"100%"}
                      height={height - 65}
                    />
                    <MainMessageStyle>
                      ユーザーが快適に使えるサービスを追求し
                      <br />
                      社会貢献したい
                    </MainMessageStyle>
                  </>
                  :
                  // スマホのとき
                  <>
                    <img
                      alt="トップ画像"
                      src={topImageMobile}
                      width={"100%"}
                      height={height - 65}
                    />
                    <MainMessageStyle>
                      ユーザーが快適に使える
                      <br />
                      サービスを追求し
                      <br />
                      社会貢献したい
                    </MainMessageStyle>
                  </>
                }
              </>
            }
          </MediaContext.Consumer>
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

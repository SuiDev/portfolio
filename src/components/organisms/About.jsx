import React from "react";
import styled from "styled-components";

/** Material UI Modules */
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import GitHubIcon from "assets/github.png";
import ProfileIcon from "assets/profile.png";
import TwitterIcon from "assets/twitter.png";

const About = () => (
  <>
    <AboutStyle>
      <div
        id="about"
      > 
        <Title>
          プロフィール
        </Title>
        <Grid 
          container
          spacing={2}
        >
          <Grid
            item
            xs={1}
          />
          <Grid
            item
            xs={3}
          >
            <ProfileIcons>
              {/** TODO: imageサイズ変更 */}
              <img
                alt="プロフィールアイコン"
                src={ProfileIcon}
                width={200}
                height={200}
              />
              <p>
                すいすい
              </p>
            </ProfileIcons>
            <Contents>
              <Typography
                variant="body1"
                gutterBottom
              >
                年齢: 25才 <br />
                趣味: 音楽関連(鑑賞/ライブ、<br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ギター/ベース/DTM初心者) <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ラジオを聴くこと <br />
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;ゲーム(マリオカート) 
              </Typography>
            </Contents>
            <Grid
              container={true}
              item
            >
              <Grid
                item={true}
                xs={6}
              >
                {/** GitHubリンク */}
                <LinkIcons>
                  <a 
                    href="https://github.com/SuiDev"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="GitHubアイコン"
                      src={GitHubIcon}
                      width={45}
                      height={45}
                    />
                  </a>
                </LinkIcons>
              </Grid>
              <Grid
                item={true}
                xs={6}
              >
                {/** Twitterリンク */}
                <LinkIcons>
                  <a 
                    href="https://twitter.com/sui89413753"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="Twitterアイコン"
                      src={TwitterIcon}
                      width={54}
                      height={42}
                    />
                  </a>
                </LinkIcons>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={1}
          />
          <Grid
            item
            xs={6}
          >
            <SubTitle>
              経歴
            </SubTitle>
            <Contents>
              <PStyle>
                ■ 1997/2: 宮城県仙台市生まれ
              </PStyle>
              <PStyle>
                ■ 2019/3: 茨城大学理学部を卒業
              </PStyle>
              <PStyle>
                ■ 2019/4: メーカー系SIer 入社 (現職)
              </PStyle>
              <PStyle>
                &emsp;&emsp;&emsp;■ 2019/7-2021/3: 自社パッケージ製品開発やプロトタイプ開発を担当
              </PStyle>
              <PStyle>
                &emsp;&emsp;&emsp;■ 2021/4-現在&emsp;&emsp;&emsp;&emsp;: 小規模な受託開発案件にて全工程を一貫して担当
              </PStyle>             
            </Contents>
            <SubTitle>
              メッセージ
            </SubTitle>
            <Contents>
              <PStyle>
                はじめまして、ご覧いただきありがとうございます！
              </PStyle>
              <PStyle>
                私は現在、自社サービスを事業とする企業への転職を目指し、アウトプットの作成や転職活動を行っています。
              </PStyle>
              <PStyle>
                SIerから自社サービス企業への転職は、技術力やビジネス面でギャップがあることは承知していますが、現在の知識をベースに大規模システム開発のために必要な技術を身につけ、事業に貢献できる人となりたいです。
              </PStyle>
              <PStyle>
                簡単なポートフォリオですが、興味持っていただけましたらご連絡よろしくお願いいたします。
              </PStyle>
            </Contents>
          </Grid>
          <Grid
            item
            xs={1}
          />
        </Grid>
      </div>
    </AboutStyle>
  </>
);

// プロフィールCSS
const AboutStyle = styled.div`
  height: calc(100vh - 65px);
  background-color: white;
`;

// タイトルCSS
const Title = styled.div`
  font-family: "Hiragino Sans","ヒラギノ角ゴシック";
  font-size: 30px;
  margin: 0;
  padding: 50px 0 0 0;
  text-align: center;
`;

// サブタイトルCSS
const SubTitle = styled.div`
  font-family: "Hiragino Sans","ヒラギノ角ゴシック";
  font-size: 20px;
  margin: 30px 0 10px 0;
  padding: 0;
  text-align: center;
`;

// コンテンツCSS
const Contents = styled.div`
  margin: 15px 0 40px 20px;
  padding: 0;
`;

// プロフィールアイコンCSS
const ProfileIcons = styled.div`
  font-size: 25px;
  margin: 0;
  padding: 20px 40px 0 40px;
  text-align: center;
  line-height: 15px;
`;

// 他サイトリンクアイコンCSS
const LinkIcons = styled.div`
  margin: 10px 0 0 0;
  padding: 0;
  text-align: center;
`;

// パラグラフCSS
const PStyle = styled.p`
  margin: 0 0 13px 0;
  font-size: 16px;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  line-height: 1.5;
`;

export default About;

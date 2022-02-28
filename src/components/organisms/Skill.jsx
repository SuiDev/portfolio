import React from "react";
import styled from "styled-components";

/** Material UI Modules */
import Grid from '@mui/material/Grid';

const Skill = () => (
  <>
    <SkillStyle>
      <div id="skill">
        <Title>
          スキル
        </Title>
      </div>
      <Grid
        container
      >
        <Grid
          item
          xs={1}
        />
          <Grid
            item
            xs={4.5}
          >
            <SubTitle>
              ハードスキル
            </SubTitle>
            <PStyle>
              ■ 言語: Python(Flask) / C# / JavaScript(React) / Node.js / HTML / CSS
            </PStyle>
            <PStyle>
              ■ ミドルウェア: PostgreSQL / Nginx / IIS
            </PStyle>
            <PStyle>
              ■ IDE: Visual Studio Code / Visual Studio / vim
            </PStyle>
            <PStyle>
              ■ OS: Windows / Mac / Linux(Ubuntu / Amazon Linux2)
            </PStyle>
            <PStyle>
              ■ その他: Git / GitHub Enterprise / AWS / Docker / Docker Compose
            </PStyle>
            <SubTitle>
              得意分野・経験
            </SubTitle>
            <PStyle>
              ■ Python, C#でのサーバーサイド開発
            </PStyle>
            <PStyle>
              ■ コーディング規約や可読性を意識したコーディング
            </PStyle>
            <PStyle>
              ■ 技術選定や設計からの0→1の開発
            </PStyle>
            <PStyle>
              ■ スクラム開発の一般的なプロセスやツールの使用経験
            </PStyle>
            <PStyle>
              &emsp;&emsp;&emsp;■ 各種スクラムイベント, GitHub Enterprise, Redmine 
            </PStyle>
            <PStyle>
              ■ 顧客ヒアリングからの一貫したアプリケーション開発
            </PStyle>
          </Grid>
          <Grid
            item
            xs={1}
          />
          <Grid
            item
            xs={4.5}
          >
            <SubTitle>
              ソフトスキル
            </SubTitle>
            <PStyle>
              ■ コミュニケーション: 相手を尊重することと自分からネガティブな発言を極力しないことを意識しています。
            </PStyle>
            <PStyle>
              ■ リーダーシップ: プロジェクト責任者は未経験ですが、開発メンバー2,3名の技術的な取りまとめを経験しています。将来的にはメンバーに安心感を与えられるような人となれるよう、様々なスキルを磨いていきたいです。
            </PStyle>
            <PStyle>
              ■ タスク管理: タスク計画時に本当に必要な作業かどうか、もっと効率よくできるタイミングや方法がないか考えることを意識しています。自身の管理については、現職では複数のプロジェクトを掛け持ちすることもあり、忙しくなる時期を見越してできるだけ作業が集中しないような計画を立てています。
            </PStyle>
            <PStyle>
              ■ 適応力: 現職では短期間でプロジェクトが変わることも多く、その経験からプロジェクト参画初期の既存システムの理解や状況を理解する能力を徐々に高めています。
            </PStyle>
            <PStyle>
              ■ 自走力: 開発担当が私だけのPJ経験や、周りが知らないことを技術調査から始める経験を多くしています。
            </PStyle>
            <PStyle>
              ■ リモートワーク: 現在は、ほぼフルリモートで勤務中のため慣れています。しかしながら、チーム開発では対面コニュニケーションのメリットも大きいと感じています。
            </PStyle>
          </Grid>
        <Grid
          item
          xs={1}
        />
      </Grid>
    </SkillStyle>
  </>
);

// スキルCSS
const SkillStyle = styled.div`
  height: calc(100vh - 65px);
  background-color: #F7F8FA;
`;

// タイトルCSS
const Title = styled.div`
  font-family: "Hiragino Sans","ヒラギノ角ゴシック";
  font-size: 30px;
  margin: 0;
  padding: 50px 0 20px 0;
  text-align: center;
`;

// サブタイトルCSS
const SubTitle = styled.div`
  font-family: "Hiragino Sans","ヒラギノ角ゴシック";
  font-size: 20px;
  margin: 0;
  padding: 20px 0 20px 0;
  text-align: center;
`;

// パラグラフCSS
const PStyle = styled.p`
  margin: 0 0 13px 0;
  font-size: 16px;
  font-family: "Roboto","Helvetica","Arial",sans-serif;
  line-height: 1.5;
`;

export default Skill;

import React from "react";

import WorkCard from "components/molecules/WorkCard";

const PortfolioSite = () => (
  <>
    <WorkCard
      name="portfolioSite"
      title="ポートフォリオサイト"
      url="https://suidev.github.io/portfolio/"
      description="
        本サイトをスクラッチ開発しました。
        サーバーサイドのポジションを目指しているため、UIを考えながらも短時間で作成することに決め5日(約30時間)で作成しました。
        デプロイをGitHub Pages、開発をReactにてMaterial UIを積極的に利用しています。
        "
    />
  </>
);

export default PortfolioSite;

import React from "react";

import WorkCard from "components/molecules/WorkCard";

const PortfolioSite = () => (
  <>
    <WorkCard
      name="portfolioSite"
      title="ポートフォリオ"
      url="https://suidev.github.io/portfolio/"
      description="
        本サイトをスクラッチ開発しました。
        サーバーサイドのポジションを目指しているため、UIを考えながらも短時間で作成することに決め1週間(約35時間)で作成しました。
        デプロイはGitHub Pagesを使い、開発はReactにてMaterial UIを積極的に利用しています。
        "
    />
  </>
);

export default PortfolioSite;

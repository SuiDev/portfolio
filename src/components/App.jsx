import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Layout from "components/pages/Layout";

const Home = lazy(() => import("components/pages/Home"));

const App = () => (
  // ルーティング
  <BrowserRouter
    basename={process.env.PUBLIC_URL}
  >
    {/** ロードマスクを適用します。*/}
    <Suspense
      fallback={<></>}
    >
      {/** ヘッダーとフッターを共通部分として表示します。*/}
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          {/** TODO: basename以降の存在しないパスをリダイレクトさせる。*/}
          <Route
            path="/*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </Layout>
    </Suspense>
  </BrowserRouter>
);

export default App;

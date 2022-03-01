import React, { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

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
    </Suspense>
  </BrowserRouter>
);

export default App;

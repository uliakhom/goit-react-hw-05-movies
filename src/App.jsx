import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import HeaderMenu from "modules/HeaderMenu";

const HomePage = lazy(() => import("./components/pages/HomePage"));
const MoviesPage = lazy(() => import("./components/pages/MoviesPage"));
const MoviesDetailsPage = lazy(() =>
  import("./components/pages/MoviesDetailsPage")
);
const Cast = lazy(() => import("./modules/Cast"));
const Reviews = lazy(() => import("./modules/Reviews"));

export const App = () => {
  return (
    <div>
      <HeaderMenu />
      <Suspense fallback={<p>...loading</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MoviesDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

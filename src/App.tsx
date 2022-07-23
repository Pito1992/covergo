import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  HOME_PAGE_URL, INTRODUCTION_PAGE_URL, SUMMARY_PAGE_URL, ERROR_PAGE_URL
} from './constants/urls';

import HomePage from "./pages/Home";
import IntroductionPage from "./pages/Introduction";
import SummaryPage from "./pages/Summary";
import ErrorPage from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_PAGE_URL} element={<HomePage />} />
        <Route path={INTRODUCTION_PAGE_URL} element={<IntroductionPage />} />
        <Route path={SUMMARY_PAGE_URL} element={<SummaryPage />} />
        <Route path={ERROR_PAGE_URL} element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

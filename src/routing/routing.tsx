import { BrowserRouter, Routes, Route } from 'react-router-dom';

import IndexPage from '../pages/home';
import BookingPage from '../pages/book';
import RecommendationsPage from '../pages/recommendations';
// import NewZealandPage from '../pages/new-zealand';
import ServicesPage from '../pages/services';

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<IndexPage />} path="/"></Route>
        <Route element={<ServicesPage />} path="/services"></Route>
        <Route element={<BookingPage />} path="/bookAppointment"></Route>
        <Route element={<RecommendationsPage />} path="/recommendations"></Route>
        {/* <Route element={<NewZealandPage />} path="/newzealand"></Route> */}
      </Routes>
    </BrowserRouter>
  );
};

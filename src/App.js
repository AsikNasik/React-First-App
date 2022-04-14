// import Todo from './components/Todo'
import { Route, Routes } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import FavoritesMeetupsPage from "./pages/FavoritesMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorite-meetups" element={<FavoritesMeetupsPage />} />
      </Routes>

      {/* <h1>My Todos</h1>
      <Todo title="Learn React" />
      <Todo title="Learn Vue" />
      <Todo title="Learn Angular" /> */}
    </Layout>
  );
}

export default App;

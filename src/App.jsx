import Header from "./components/header/Header";
import Banner from "./components/Banner/Banner";
import DisplayRow from "./components/DisplayRow/DisplayRow";
import { Routes, Route } from "react-router-dom";
import {
  trendingNow,
  actionAndAdventure,
  newReleases,
  continueWatching,
  netflixOriginals,
} from "./Data/Data";

function Home() {
  return (
    <>
      <Banner />
      <DisplayRow title="Trending Now" movies={trendingNow} />
      <DisplayRow title="Action & Adventure" movies={actionAndAdventure} />
      <DisplayRow title="New Releases" movies={newReleases} />
      <DisplayRow title="Continue Watching" movies={continueWatching} />
      <DisplayRow title="Netflix Originals" movies={netflixOriginals} />
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

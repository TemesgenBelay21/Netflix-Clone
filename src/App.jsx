import Header from "./components/header/Header";
import Banner from "./components/Banner/Banner";
import DisplayRow from "./components/DisplayRow/DisplayRow";
import {
  trendingNow,
  actionAndAdventure,
  newReleases,
  continueWatching,
  netflixOriginals,
} from "./Data/Data";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <DisplayRow title="Trending Now" movies={trendingNow} isFirst />
      <DisplayRow title="Action & Adventure" movies={actionAndAdventure} />
      <DisplayRow title="New Releases" movies={newReleases} />
      <DisplayRow title="Continue Watching" movies={continueWatching} />
      <DisplayRow title="Netflix Originals" movies={netflixOriginals} />
    </>
  );
}

export default App;

import KillerSally from '../assets/image/10061.jpg'
import Pepsi from '../assets/image/10066.jpg'
import FitForTv from '../assets/image/10067.jpg'
import champion from '../assets/image/10079.jpg'
import TheArt from '../assets/image/10072.jpg'
import coldStorage from '../assets/image/coldStorage.webp'
import hamnet from '../assets/image/hamnet.webp'
import hoppers from '../assets/image/hoppers.webp'
import marshals from '../assets/image/marshals.webp'
import monarch from '../assets/image/monarchLegacyOfMonsters.webp'
import pursuit from '../assets/image/pursuitOfJade.webp'
import TheBride from '../assets/image/TheBride.webp'
import Vladimir from '../assets/image/vladimir.webp'
import YoungSherlock from '../assets/image/youngSherlock.webp'

const allMovies = [
  {
    id: 1,
    title: "Monarch",
    poster_path: monarch,
    matureRating: "U/A 16+",
    category: "Movie",
    quality: "HD",
    genres: ["Action", "Thriller", "Adventure"],
    badge: "Recently added"
  },
  {
    id: 2,
    title: "Killer Sally",
    poster_path: KillerSally,
    matureRating: "U/A 16+",
    category: "Movie",
    quality: "HD",
    genres: ["Crime", "Drama", "Thriller"],
    badge: "Recently added"
  },
  {
    id: 3,
    title: "Pepsi",
    poster_path: Pepsi,
    matureRating: "U/A 16+",
    category: "Movie",
    quality: "HD",
    genres: ["Sci-Fi", "Thriller", "Action"],
    badge: "Recently added"
  },
  {
    id: 4,
    title: "Fit For Tv",
    poster_path: FitForTv,
    matureRating: "U/A 13+",
    category: "Movie",
    quality: "HD",
    genres: ["Adventure", "Fantasy"],
    badge: "Recently added"
  },
  {
    id: 5,
    title: "Champion",
    poster_path: champion,
    matureRating: "U/A 13+",
    category: "Movie",
    quality: "HD",
    genres: ["Adventure", "Fantasy"],
    badge: "Recently added"
  },
  {
    id: 6,
    title: "Damsel",
    poster_path: TheArt,
    matureRating: "U/A 13+",
    category: "Movie",
    quality: "HD",
    genres: ["Adventure", "Fantasy"],
    badge: "Recently added"
  },
  {
    id: 7,
    title: "Cold Storage",
    poster_path: coldStorage,
    matureRating: "U/A 13+",
    category: "Movie",
    quality: "HD",
    genres: ["Adventure", "Fantasy"],
    badge: "Recently added"
  },
  {
    id: 8,
    title: "Hamnet",
    poster_path: hamnet,
    matureRating: "U/A 13+",
    category: "Movie",
    quality: "HD",
    genres: ["Adventure", "Fantasy"],
    badge: "Recently added"
  },
  {
    id: 9,
    title: "Marshals",
    poster_path: marshals,
    matureRating: "U/A 13+",
    category: "Movie",
    quality: "HD",
    genres: ["Adventure", "Fantasy"],
    badge: "Recently added"
  },
  {
    id: 10,
    title: "Hoppers",
    poster_path: hoppers,
    matureRating: "U/A 13+",
    category: "Movie",
    quality: "HD",
    genres: ["Comedy", "Adventure"],
    badge: "Recently added"
  },
  {
    id: 11,
    title: "The Bride",
    poster_path: TheBride,
    matureRating: "U/A 16+",
    category: "Movie",
    quality: "HD",
    genres: ["Horror", "Thriller"],
    badge: "New"
  },
  {
    id: 12,
    title: "Vladimir",
    poster_path: Vladimir,
    matureRating: "U/A 16+",
    category: "Movie",
    quality: "HD",
    genres: ["Drama", "Action"],
    badge: "New"
  },
  {
    id: 13,
    title: "Young Sherlock",
    poster_path: YoungSherlock,
    matureRating: "U/A 13+",
    category: "Series",
    quality: "HD",
    genres: ["Mystery", "Adventure"],
    badge: "New"
  },
  {
    id: 14,
    title: "Pursuit of Jade",
    poster_path: pursuit,
    matureRating: "U/A 16+",
    category: "Movie",
    quality: "HD",
    genres: ["Drama", "Romance"],
    badge: "Trending"
  },
]

export const trendingNow = allMovies

export const actionAndAdventure = [
  allMovies[0],
  allMovies[2],
  allMovies[4],
  allMovies[5],
  allMovies[8],
  allMovies[11],
]

export const newReleases = [
  allMovies[6],
  allMovies[7],
  allMovies[8],
  allMovies[9],
  allMovies[10],
  allMovies[12],
]

export const continueWatching = [
  allMovies[1],
  allMovies[3],
  allMovies[13],
  allMovies[0],
  allMovies[5],
]

export const netflixOriginals = [
  allMovies[0],
  allMovies[5],
  allMovies[6],
  allMovies[10],
  allMovies[11],
  allMovies[12],
]

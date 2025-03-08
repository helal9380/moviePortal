/** @format */

// export const movieData = [
//   {
//     id: 1,
//     title: "Inception",
//     genre: "Sci-Fi",
//     year: 2010,
//     rating: 8.8,
//     description:
//       "A thief who enters the dreams of others to steal secrets must plant an idea in a target’s subconscious.",
//     image: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
//   },
//   {
//     id: 2,
//     title: "The Dark Knight",
//     genre: "Action",
//     year: 2008,
//     rating: 9.0,
//     description:
//       "Batman faces his greatest psychological and physical test when he battles the Joker.",
//     image: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
//   },
//   {
//     id: 3,
//     title: "Interstellar",
//     genre: "Sci-Fi",
//     year: 2014,
//     rating: 8.6,
//     description:
//       "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
//     image: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
//   },
//   {
//     id: 4,
//     title: "Fight Club",
//     genre: "Drama",
//     year: 1999,
//     rating: 8.8,
//     description:
//       "An insomniac office worker and a soapmaker form an underground fight club with unintended consequences.",
//     image: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
//   },
//   {
//     id: 5,
//     title: "The Matrix",
//     genre: "Sci-Fi",
//     year: 1999,
//     rating: 8.7,
//     description:
//       "A computer hacker learns about the true nature of reality and his role in the war against its controllers.",
//     image: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
//   },
//   {
//     id: 6,
//     title: "Forrest Gump",
//     genre: "Drama",
//     year: 1994,
//     rating: 8.8,
//     description:
//       "The presidencies of Kennedy and Johnson, Vietnam, Watergate, and other history unfold through the perspective of an Alabama man.",
//     image: "https://image.tmdb.org/t/p/w500/h5J4W4veyxMXDMjeNxZI46TsHOb.jpg",
//   },
// ];
const data = [
  {
    id: crypto.randomUUID(),
    cover: "once-in-ho.jpg",
    title: "Once Upon a Time... in Hollywood",
    description:
      "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.",
    genre: "Comedy/Drama",
    rating: 5,
    price: 140,
  },
  {
    id: crypto.randomUUID(),
    cover: "marriage-strory.jpg",
    title: "Marriage Story",
    description:
      "Noah Baumbach's incisive and compassionate look at a marriage breaking up and a family staying together.",
    genre: "Comedy/Drama",
    rating: 3,
    price: 90,
  },
  {
    id: crypto.randomUUID(),
    cover: "pain-and-gain.jpg",
    title: "Pain & Gain",
    description:
      "A trio of bodybuilders in Florida get caught up in an extortion ring and a kidnapping scheme that goes terribly wrong.",
    genre: "Action/Comedy/Crime/Drama",
    rating: 4,
    price: 100,
  },
  {
    id: crypto.randomUUID(),
    cover: "parasite.jpg",
    title: "Parasite",
    description:
      "All unemployed, Ki-taek and his family take peculiar interest in the wealthy and glamorous Parks, as they ingratiate themselves into their lives and get entangled in an unexpected incident.",
    genre: "Comedy, Drama, Thriller",
    rating: 4,
    price: 250,
  },
  {
    id: crypto.randomUUID(),
    cover: "iron-man.png",
    title: "Iron Man",
    description:
      "When Branch’s brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    genre: "Action/Adventure/Sci-fi",
    rating: 5,
    price: 100,
  },
];

function getAllMovies() {
  return data;
}

export { getAllMovies };

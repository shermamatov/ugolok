import { collection, limit, query } from "firebase/firestore";
import { db } from "./fire";

export const films = [
    {
        id: 1,
        name: "Человек-паук: Паутина вселенных",
        poster: "https://ru-images-s.kinorium.com/movie/1080/2005077.jpg?1684410495",
        year: 2023,
    },
    {
        id: 2,
        name: "Флеш",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f8bb36c1-e261-4293-b606-c5e57b562f7a/600x900",
        year: 2023,
    },
    {
        id: 3,
        name: "Оппенгеймер",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/220x330",
        year: 2023,
    },
    {
        id: 4,
        name: "Кунг-фу жеребец",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b79effc2-518e-4992-8241-fff34eb6f4ca/220x330",
        year: 2023,
    },
    {
        id: 5,
        name: "Человек-паук: Паутина вселенных",
        poster: "https://ru-images-s.kinorium.com/movie/1080/2005077.jpg?1684410495",
        year: 2023,
    },
    {
        id: 6,
        name: "Флеш",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f8bb36c1-e261-4293-b606-c5e57b562f7a/600x900",
        year: 2023,
    },
    {
        id: 7,
        name: "Оппенгеймер",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/220x330",
        year: 2023,
    },
    {
        id: 8,
        name: "Кунг-фу жеребец",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b79effc2-518e-4992-8241-fff34eb6f4ca/220x330",
        year: 2023,
    },
    {
        id: 9,
        name: "Человек-паук: Паутина вселенных",
        poster: "https://ru-images-s.kinorium.com/movie/1080/2005077.jpg?1684410495",
        year: 2023,
    },
    {
        id: 10,
        name: "Флеш",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f8bb36c1-e261-4293-b606-c5e57b562f7a/600x900",
        year: 2023,
    },
    {
        id: 11,
        name: "Оппенгеймер",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/220x330",
        year: 2023,
    },
    {
        id: 12,
        name: "Кунг-фу жеребец",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b79effc2-518e-4992-8241-fff34eb6f4ca/220x330",
        year: 2023,
    },
    {
        id: 13,
        name: "Человек-паук: Паутина вселенных",
        poster: "https://ru-images-s.kinorium.com/movie/1080/2005077.jpg?1684410495",
        year: 2023,
    },
    {
        id: 14,
        name: "Флеш",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/f8bb36c1-e261-4293-b606-c5e57b562f7a/600x900",
        year: 2023,
    },
    {
        id: 15,
        name: "Оппенгеймер",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/c5292109-642c-4ab0-894a-cc304e1bcec4/220x330",
        year: 2023,
    },
    {
        id: 16,
        name: "Кунг-фу жеребец",
        poster: "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/b79effc2-518e-4992-8241-fff34eb6f4ca/220x330",
        year: 2023,
    },
];

export const reduxConsts = {
    ADD_FILM: "ADD_FILM",
    GET_FILMS: "GET_FILMS",
    GET_SEARCH_FILMS: "GET_SEARCH_FILMS",
    GET_ONE_FILM: "GET_ONE_FILM",
    ADD_TO_WISH: "ADD_TO_WISH",
    GET_WISH: "GET_WISH",
};
export const filmRef = collection(db, "films");
export const limitFilmRef = query(collection(db, "films"), limit(2));

export const limitPage = 10;

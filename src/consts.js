import { collection, limit, query } from "firebase/firestore";
import { db } from "./fire";

export const sliderdb = [
    {
        name: "Начало",
        desc: "Кобб – талантливый вор, лучший из лучших в опасном искусстве извлечения: он крадет ценные секреты из глубин подсознания во время сна, когда человеческий разум наиболее уязвим. Редкие способности Кобба сделали его ценным игроком в привычном к предательству мире промышленного шпионажа, но они же превратили его в извечного беглеца и лишили всего, что он когда-либо любил. И вот у Кобба появляется шанс исправить ошибки. Его последнее дело может вернуть все назад, но для этого ему нужно совершить невозможное – инициацию. Вместо идеальной кражи Кобб и его команда спецов должны будут провернуть обратное. Теперь их задача – не украсть идею, а внедрить ее. Если у них получится, это и станет идеальным преступлением. Но никакое планирование или мастерство не могут подготовить команду к встрече с опасным противником, который, кажется, предугадывает каждый их ход. Врагом, увидеть которого мог бы лишь Кобб.",
        bigImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.sunhome.ru%2Fi%2Fwallpapers%2F179%2Fnachalo.xxl.jpg&f=1&nofb=1&ipt=6ec93424d8fd02be0ea9d76edb8093ee99e4d8c0e7093ad2cf28555c246b1a6f&ipo=images",
        smallImg:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fst.kinovod.net%2Fstorage%2F360x534%2Fposters%2F2019%2F07%2Fbd8cc31532b0f08a6b2b.jpg&f=1&nofb=1&ipt=232a58f45d27f9bb250f1754732872058547dea69648b017e0a9a8b50267a9a2&ipo=images",
        path: "C5BXU0LqfyMi9zrHWGiT",
        id: 1,
    },
    {
        name: "Интерстеллар",
        desc: "Когда засуха, пыльные бури и вымирание растений приводят человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и найти планету с подходящими для человечества условиями.",
        bigImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fm2vijtILDuk%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=23e1c416386c0ec4f7a8c7fc246a7005c85351fdf04626e3ca898dd10f175dc6&ipo=images",
        smallImg:
            "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fkino24.su%2Fimage%2Foriginal%2FrPrqBqZLl8m6sUQmZCchqW7IEYo.jpg&f=1&nofb=1&ipt=dbddfd8e7458f33278044e6e18b0761cd4cad27e3500d87bded8ca292669a07f&ipo=images",
        path: "CbBUdk4MUtQAQMTKfTjE",
        id: 2,
    },
    {
        name: "Бэтмен: Начало",
        desc: "В детстве юный наследник огромного состояния Брюс Уэйн оказался свидетелем убийства своих родителей, и тогда он решил бороться с преступностью. Спустя годы он отправляется в путешествие по миру, чтобы найти способ восстановить справедливость. Обучение у мудрого наставника боевым искусствам дает ему силу и смелость. Вернувшись в родной город, Уэйн становится Бэтменом и ведет борьбу со злом.",
        bigImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2Frys8jNeaTHFhjj5UkY2Wt0Bu6iI.jpg&f=1&nofb=1&ipt=2b8aa28ff4afe42d1fe4c340569d1bdaac7c399d18e2c3d76db77496ab80f1d9&ipo=images",
        smallImg:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.film.ru%2Fsites%2Fdefault%2Ffiles%2Fmovies%2Fposters%2F1611203-1602470.jpeg&f=1&nofb=1&ipt=0244be30a8fd11a32291aa10da9532f425085269dcc3d121f43aef204fc60f8e&ipo=images",
        path: "HUgyBgbn7pgsTQ8I1q6w",
        id: 3,
    },
    {
        name: "Довод",
        desc: "После теракта в киевском оперном театре агент ЦРУ объединяется с британской разведкой, чтобы противостоять русскому олигарху, который сколотил состояние на торговле оружием. Для этого агенты используют инверсию времени — технологию будущего, позволяющую времени идти вспять.",
        bigImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapi.eric.s3storage.ru%2Fsuper-static%2Fprod%2F5f55f637ad8b22135178bfb9-1900x.jpeg&f=1&nofb=1&ipt=83b412153b6327c8ba4010583bd3eb7d46394e434043f22d89f1f5e482f82108&ipo=images",
        smallImg:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dfs.ivi.ru%2Fstorage38%2Fcontents%2F8%2Ff%2F1404e40e4f69722ab5f0fc2c2d526d.jpg&f=1&nofb=1&ipt=3b77a31fce3bd19282cb126f550e974b65cef85e9d9c89c123a3c5b21729e9fb&ipo=images",
        path: "NOwQP9xrWGlers1aSL4P",
        id: 4,
    },
    {
        name: "Темный рыцарь",
        desc: "Бэтмен поднимает ставки в войне с криминалом. С помощью лейтенанта Джима Гордона и прокурора Харви Дента он намерен очистить улицы Готэма от преступности. Сотрудничество оказывается эффективным, но скоро они обнаружат себя посреди хаоса, развязанного восходящим криминальным гением, известным напуганным горожанам под именем Джокер.",
        bigImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dfs.ivi.ru%2Fstorage23%2Fcontents%2Fd%2F4%2Ff053a83cf1a4ea314a86d3b0d82b33.jpg&f=1&nofb=1&ipt=3fe247a79152854dc3d0bb6ab5fef263e78883adc000a7d3b0bc5788c6f60a49&ipo=images",
        smallImg:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fkinozoom.pw%2Fuploads%2Fposts%2F2018-07%2F1532252322_111543.jpg&f=1&nofb=1&ipt=05fa51c9be75dc7ab5b6b48adf5427f5599b34912726d02ee6aae51e44d26785&ipo=images",
        path: "RB8592sA0YpALC4fPq7X",
        id: 5,
    },
    {
        name: "Престиж",
        desc: "Роберт и Альфред - фокусники-иллюзионисты, которые на рубеже XIX и XX веков соперничали друг с другом в Лондоне. С годами их дружеская конкуренция на профессиональной почве перерастает в настоящую войну.Они готовы на все, чтобы выведать друг у друга секреты фантастических трюков и сорвать их исполнение. Непримиримая вражда, вспыхнувшая между ними, начинает угрожать жизни окружающих их людей…",
        bigImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.kinorium.com%2Fmovie%2Fposter%2F361963%2Fw1500_44947807.jpg&f=1&nofb=1&ipt=81db9aa43af6444c0fc0fc55e632820d733bc1a773fa462e169c58a90c8f8dda&ipo=images",
        smallImg:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdclub.ua%2Ffiles%2Ffilm%2Fbig%2Fbigi4c8d6065076fc.jpg&f=1&nofb=1&ipt=97b0d71da563820213e8774289fec18440492d38760442de8516248a54e0cc24&ipo=images",
        path: "Yp7iQiQhOdBNqd5Lrm93",
        id: 6,
    },
    {
        name: "Мементо",
        desc: "Леонард Шелби изысканно и дорого одет, ездит на новеньком «Ягуаре», но останавливается в дешевых мотелях. Он всеми силами пытается найти убийцу жены. Его проблема — редкая форма амнезии, потеря короткой памяти — помня все до убийства, он не помнит, что было 15 минут назад.",
        bigImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fflixwatch.co%2Fwp-content%2Fuploads%2F60020435.jpg&f=1&nofb=1&ipt=6a1988fba09976a3e8fda99714f345b83e16bb84a246b840f5e557ed88b23f6b&ipo=images",
        smallImg:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdic.academic.ru%2Fpictures%2Fwiki%2Ffiles%2F50%2F200px-memento_poster.jpg&f=1&nofb=1&ipt=3095a7a6271c5dd7e1b3a22ec44465d3e2ca33ee060ba59f222d08522813d7c9&ipo=images",
        path: "y5Bat42qxvnUlpAVVY9J",
        id: 7,
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

export const limitPage = 3;

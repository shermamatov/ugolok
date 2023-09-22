import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToWish, getOneFilm } from "../../store/reducers/filmReducer.js";
import "./Film.scss";
const Film = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const film = useSelector((state) => state.film.film);
    let wishes = useSelector((state) => state.film.wish);

    const [archiveState, setArchiveState] = useState(false);

    useEffect(() => {
        dispatch(getOneFilm(id));
    }, []);

    useEffect(() => {
        if (film) {
            let wishBool = wishes?.some((wish) => wish.id === film.id);
            setArchiveState(wishBool);
        }
    }, [wishes, film]);

    return (
        <div className="text-white content mt-10 film_main_block">
            <div className="flex justify-between flex-col md:flex-row">
                <div className="w-[100%] md:w-[32%] lg:w-[25%]">
                    <img
                        src={film?.big_poster}
                        className="w-[80%] md:w-[100%] md:max-w-[100%] max-w-[350px] m-auto"
                        alt=""
                    />
                    <iframe
                        width="100%"
                        className="aspect-video md:block hidden"
                        src={film?.trailer}
                        title={film?.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="w-full md:w-[65%] lg:w-[72%] md:mt-0 mt-10 relative">
                    <h1 className="text-4xl lg:text-5xl font-bold ">
                        {film?.name}
                    </h1>
                    <p className="mt-2 lg:mt-4 text-xl">{film?.slogan}</p>
                    <a className="block md:hidden" href={film?.trailer}>
                        <button className="trailer_btn">
                            смотреть трейлер
                        </button>
                    </a>
                    <h2 className="text-2xl lg:text-3xl mt-6 font-semibold">
                        О фильме
                    </h2>
                    <table className="text-[rgb(153,153,153)] mt-2 lg:mt-4">
                        <tbody>
                            <tr>
                                <td>Год</td>
                                <td className="table_second_td">
                                    {film?.year}
                                </td>
                            </tr>
                            <tr>
                                <td>Рейтинг</td>
                                <td className="table_second_td">
                                    {film?.rating}
                                </td>
                            </tr>
                            <tr>
                                <td>Тип</td>
                                <td className="table_second_td">
                                    {film?.type}
                                </td>
                            </tr>
                            <tr>
                                <td>Жанр</td>
                                {/* {film?.genre?.map((item, index) => (
                                <td key={index}>{item},</td>
                            ))} */}
                                <td className="table_second_td">
                                    {film?.genre?.toString()}
                                </td>
                            </tr>
                            <tr>
                                <td>Время</td>
                                <td className="table_second_td">
                                    {film?.time}
                                </td>
                            </tr>
                            <tr>
                                <td>Возраст</td>
                                <td className="table_second_td">
                                    {film?.age_restriction}+
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <p className="mt-4">{film?.description}</p>
                    <label
                        className="ui-bookmark2"
                        onChange={(e) => {
                            dispatch(addToWish(film));
                            // e.stopPropagation();
                        }}
                    >
                        {archiveState ? (
                            <input type="checkbox" checked />
                        ) : (
                            <input type="checkbox" />
                        )}
                        <div className="bookmark">
                            <svg viewBox="0 0 32 32">
                                <g>
                                    <path d="M27 4v27a1 1 0 0 1-1.625.781L16 24.281l-9.375 7.5A1 1 0 0 1 5 31V4a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4z"></path>
                                </g>
                            </svg>
                        </div>
                    </label>
                </div>
            </div>
            <iframe
                id="iframe"
                title="film"
                className="w-full aspect-video mt-10"
                src={film?.film}
            ></iframe>
        </div>
    );
};

export default Film;

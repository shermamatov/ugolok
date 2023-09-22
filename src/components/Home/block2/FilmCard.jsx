import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToWish } from "../../../store/reducers/filmReducer";
import { useNavigate } from "react-router-dom";
import "./block2.scss";

const FilmCard = ({ item }) => {
    const [archiveState, setArchiveState] = useState(false);
    const [cardHoverState, setCardHoverState] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let wishes = useSelector((state) => state.film.wish);

    let width = window.innerWidth;

    function checkWish() {
        let wishBool = wishes?.some((wish) => wish.id === item.id);
        setArchiveState(wishBool);
    }

    useEffect(() => {
        checkWish();
    }, [wishes]);

    return (
        <div
            key={item.id}
            className="w-[1fr] film_card"
            onMouseEnter={() => setCardHoverState(true)}
            onMouseLeave={() => setCardHoverState(false)}
            onClick={() => navigate(`/watch/${item.id}`)}
        >
            {width > 785 ? (
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    className={`archiveAdd_block ${
                        cardHoverState ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <label
                        onChange={() => dispatch(addToWish(item))}
                        className="ui-bookmark"
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
            ) : (
                <div
                    onClick={(e) => e.stopPropagation()}
                    className={`archiveAdd_block`}
                >
                    <label
                        className="ui-bookmark"
                        onChange={(e) => {
                            dispatch(addToWish(item));
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
            )}
            {item.small_poster && (
                <img
                    loading="lazy"
                    className="w-full"
                    src={item.small_poster}
                    alt=""
                />
            )}
            <div>
                <h3>{item.name}</h3>
                <p>{item.year}</p>
            </div>
            {/* <button
                className="border-2"
                onClick={(e) => {
                    dispatch(deleteFilm(item.id));
                    e.stopPropagation();
                }}
            >
                delete
            </button>
            <button
                onClick={(e) => {
                    navigate(`/edit/${item.id}`);
                    e.stopPropagation();
                }}
                className="border-2 ml-2"
            >
                edit
            </button> */}
        </div>
    );
};

export default FilmCard;

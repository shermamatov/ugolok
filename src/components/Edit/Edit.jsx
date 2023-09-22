import React, { useEffect, useState } from "react";
import "./Edit.scss";
import { useNavigate, useParams } from "react-router-dom";
import { editFilm, getOneFilm } from "../../store/reducers/filmReducer";
import { useDispatch, useSelector } from "react-redux";

const Edit = () => {
    const filmData = useSelector((state) => state.film.film);
    const [filmObj, setFilmObj] = useState({
        kinopoisk_id: "",
        name: "",
        year: 0,
        rating: 0,
        description: "",
        trailer: "",
        type: "",
        big_poster: "",
        small_poster: "",
        genre: "",
        film: "",
        time: "",
        age_restriction: "",
        slogan: "",
    });

    const dispatch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();

    function handleInput(e) {
        if (e.target.name === "year") {
            let obj = { ...filmObj, [e.target.name]: parseInt(e.target.value) };
            setFilmObj(obj);
        } else {
            let obj = { ...filmObj, [e.target.name]: e.target.value };
            setFilmObj(obj);
        }
    }

    async function changeCheckbox(arr = []) {
        let checkboxArr = document.getElementsByName("jenre");
        for (let i = 0; i < checkboxArr.length; i++) {
            for (let j of arr) {
                if (j === checkboxArr[i].value) {
                    // console.log(checkboxArr[i].value);
                    checkboxArr[i].checked = true;
                }
            }
        }
    }

    function filterHandler() {
        let arr = [];
        let checkboxArr = document.getElementsByName("jenre");
        for (let i = 0; i < checkboxArr.length; i++) {
            if (checkboxArr[i].checked) {
                arr.push(checkboxArr[i].value);
            }
        }
        // setKinoJenre(arr);
        setFilmObj({ ...filmObj, genre: arr });
    }

    function editHandler() {
        dispatch(editFilm(id, filmObj));
    }

    useEffect(() => {
        dispatch(getOneFilm(id));
    }, []);

    useEffect(() => {
        setFilmObj(filmData);
        changeCheckbox(filmData.genre);
    }, [filmData]);

    return (
        <div className="content text-white">
            <div className="edit_block ">
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.name}
                    name="name"
                    type="text"
                    placeholder="name"
                />
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.year}
                    type="text"
                    name="year"
                    placeholder="year"
                />
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.film}
                    type="text"
                    name="film"
                    placeholder="film"
                />
                <div className="flex flex-col items-start w-[100%] max-w-[450px]">
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            onChange={filterHandler}
                            name="jenre"
                            value={"комедия"}
                        />
                        <label htmlFor="jenre">комедия</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            onChange={filterHandler}
                            name="jenre"
                            value={"фэнтези"}
                        />
                        <label htmlFor="jenre">фэнтези</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            onChange={filterHandler}
                            name="jenre"
                            value={"драма"}
                        />
                        <label htmlFor="jenre">драма</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            onChange={filterHandler}
                            name="jenre"
                            value={"биография"}
                        />
                        <label htmlFor="jenre">биография</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            onChange={filterHandler}
                            name="jenre"
                            value={"боевик"}
                        />
                        <label htmlFor="jenre">боевик</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            onChange={filterHandler}
                            name="jenre"
                            value={"триллер"}
                        />
                        <label htmlFor="jenre">триллер</label>
                    </div>
                </div>
                <textarea
                    onChange={(e) => handleInput(e)}
                    value={filmObj.description}
                    type="text"
                    name="description"
                    placeholder="description"
                />
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.kinopoisk_id}
                    type="number"
                    name="kinopoisk_id"
                    placeholder="kinopoisk_id"
                />
                {/* <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.type}
                    type="text"
                    name="type"
                    placeholder="type"
             /> */}
                <select
                    placeholder="тип"
                    onChange={(e) => handleInput(e)}
                    value={filmObj.type}
                    name="type"
                    // defaultValue={"фильм"}
                >
                    <option value="фильм">тип</option>
                    <option value="фильм">фильм</option>
                    <option value="сериал">сериал</option>
                    <option value="мультфильм">мультфильм</option>
                    <option value="аниме">аниме</option>
                </select>
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.trailer}
                    type="text"
                    name="trailer"
                    placeholder="trailer"
                />
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.rating}
                    type="number"
                    name="number"
                    placeholder="rating"
                />
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.small_poster}
                    type="text"
                    name="small_poster"
                    placeholder="small_poster"
                />
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.big_poster}
                    type="text"
                    name="big_poster"
                    placeholder="big_poster"
                />
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.time}
                    type="text"
                    name="time"
                    placeholder="time"
                />
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.age_restriction}
                    type="text"
                    name="age_restriction"
                    placeholder="age_restriction"
                />
                <input
                    onChange={(e) => handleInput(e)}
                    value={filmObj.slogan}
                    type="text"
                    name="slogan"
                    placeholder="slogan"
                />
                <button
                    onClick={() => {
                        editHandler();
                        navigate("/");
                    }}
                >
                    изменить
                </button>
            </div>
        </div>
    );
};

export default Edit;

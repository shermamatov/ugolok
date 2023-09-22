import axios from "axios";
import React, { useEffect, useState } from "react";
import { addData, dataConstructor } from "../../functions";
import "./Admin.scss";

const Admin = () => {
    const [kinoId, setKinoId] = useState();
    const [kinoType, setKinoType] = useState("");
    const [kinoJenre, setKinoJenre] = useState();
    const [pleerId, setPleerId] = useState();
    const [inputChecker, setInputChecker] = useState(false);
    function filterHandler() {
        let arr = [];
        let checkboxArr = document.getElementsByName("jenre");
        for (let i = 0; i < checkboxArr.length; i++) {
            if (checkboxArr[i].checked) {
                arr.push(checkboxArr[i].value);
            }
        }
        setKinoJenre(arr);
    }

    async function createData() {
        if (kinoId && kinoType !== "" && pleerId && kinoJenre.length !== 0) {
            let kinoBd = await dataConstructor(kinoId);
            let obj = {
                kinopoisk_id: kinoBd.kinopoisk_id,
                name: kinoBd.name_russian,
                year: parseInt(kinoBd.year),
                rating: kinoBd.rating_kp,
                description: kinoBd.description,
                trailer: kinoBd.trailer,
                type: kinoType,
                big_poster: kinoBd.big_poster,
                small_poster: kinoBd.small_poster,
                genre: kinoJenre,
                film: `https://api.strvid.ws/embed/movie/${pleerId}`,
                time: kinoBd.time,
                age_restriction: kinoBd.age_restriction,
                slogan: kinoBd.slogan,
            };
            addData(obj);
            setInputChecker(false);
        } else {
            setInputChecker(true);
        }
    }

    return (
        <div className="admin">
            <div className="admin_block">
                <input
                    type="number"
                    placeholder="kinoID"
                    value={kinoId}
                    onChange={(e) => setKinoId(e.target.value)}
                />
                <select
                    placeholder="тип"
                    value={kinoType}
                    // defaultValue={"фильм"}
                    onChange={(e) => setKinoType(e.target.value)}
                >
                    <option value="тип">тип</option>
                    <option value="фильм">фильм</option>
                    <option value="сериал">сериал</option>
                    <option value="мультфильм">мультфильм</option>
                    <option value="аниме">аниме</option>
                </select>
                <input
                    type="number"
                    placeholder="pleerID"
                    value={pleerId}
                    onChange={(e) => setPleerId(e.target.value)}
                />

                <div className="mt-3">
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            name="jenre"
                            value={"комедия"}
                            onChange={filterHandler}
                        />
                        <label htmlFor="jenre">комедия</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            name="jenre"
                            value={"фэнтези"}
                            onChange={filterHandler}
                        />
                        <label htmlFor="jenre">фэнтези</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            name="jenre"
                            value={"драма"}
                            onChange={filterHandler}
                        />
                        <label htmlFor="jenre">драма</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            name="jenre"
                            value={"биография"}
                            onChange={filterHandler}
                        />
                        <label htmlFor="jenre">биография</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            name="jenre"
                            value={"боевик"}
                            onChange={filterHandler}
                        />
                        <label htmlFor="jenre">боевик</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="jenre"
                            name="jenre"
                            value={"триллер"}
                            onChange={filterHandler}
                        />
                        <label htmlFor="jenre">триллер</label>
                    </div>
                </div>
                {inputChecker && (
                    <h2 className="text-2xl text-red-600 text-center">
                        заполните все поля
                    </h2>
                )}
                <button
                    className="mt-5"
                    onClick={() => {
                        createData();
                    }}
                >
                    submit
                </button>
            </div>
        </div>
    );
};

export default Admin;

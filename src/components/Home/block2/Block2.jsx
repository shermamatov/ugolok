import React, { useEffect, useState } from "react";
import "./block2.scss";
import FilmCard from "./FilmCard";
import { useDispatch, useSelector } from "react-redux";
import {
    dataSort,
    filterData,
    filterDataGenre,
    getFilms,
} from "../../../store/reducers/filmReducer";
import {
    FormControl,
    InputLabel,
    MenuItem,
    Pagination,
    Select,
    Stack,
} from "@mui/material";
import { getDocs } from "firebase/firestore";
import { filmRef, limitPage } from "../../../consts";
const Block2 = () => {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.film.films);
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);
    // Initialization for ES Users
    async function getPaginate() {
        let data = await getDocs(filmRef);
        setCount(Math.ceil(data.docs.length / limitPage));
    }

    function paggChange(e, p) {
        setPage(p);
    }

    useEffect(() => {
        getPaginate();
    }, []);

    useEffect(() => {
        dispatch(getFilms(page));
    }, [page]);

    return (
        <div>
            <div className="content text-white mt-8">
                <h2 className="text-3xl sm:text-5xl">Фильмы</h2>
                <div className="grid gap-4 grid-cols-3 mt-5">
                    <FormControl key={1}>
                        <InputLabel sx={{}} id="demo-simple-select-label">
                            тип
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue={"All"}
                            label="Age"
                            onChange={(e) =>
                                dispatch(filterData("type", e.target.value))
                            }
                        >
                            <MenuItem value="All">все</MenuItem>
                            <MenuItem value="фильм">фильм</MenuItem>
                            <MenuItem value="сериал">сериал</MenuItem>
                            <MenuItem value="мультфильм">мультфильм</MenuItem>
                            <MenuItem value="аниме">аниме</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl key={2}>
                        <InputLabel id="demo-simple-select-helper-label">
                            жанр
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            // value={age}
                            defaultValue={"All"}
                            label="Age"
                            onChange={(e) =>
                                dispatch(
                                    filterDataGenre("genre", e.target.value)
                                )
                            }
                        >
                            <MenuItem value="All">все</MenuItem>
                            <MenuItem value="комедия">комедия</MenuItem>
                            <MenuItem value="триллер">триллер</MenuItem>
                            <MenuItem value="фэнтези">фэнтези</MenuItem>
                            <MenuItem value="драма">драма</MenuItem>
                            <MenuItem value="биография">биография</MenuItem>
                            <MenuItem value="боевик">боевик</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl key={3}>
                        <InputLabel id="demo-simple-select-helper-label">
                            сортировать
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            // value={age}
                            defaultValue={"All"}
                            label="Age"
                            onChange={(e) => dispatch(dataSort(e.target.value))}
                        >
                            <MenuItem value="All">свой порядок</MenuItem>
                            <MenuItem value="desc">новые</MenuItem>
                            <MenuItem value="asc">старые</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10 mt-6 sm:mt-10">
                    {films.map((item) => (
                        <FilmCard key={item.id} item={item} />
                    ))}
                </div>
                <div className="mt-16">
                    <Stack>
                        <Pagination
                            color="primary"
                            count={count}
                            page={page}
                            onChange={paggChange}
                            variant="outlined"
                            shape="rounded"
                        />
                    </Stack>
                </div>
            </div>
        </div>
    );
};

export default Block2;

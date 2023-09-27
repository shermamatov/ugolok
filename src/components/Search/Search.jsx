import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilmCard from "../Home/block2/FilmCard";
import { searchData } from "../../store/reducers/filmReducer";
import { useParams } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";
import { limitPage } from "../../consts";

const Search = () => {
    const [page, setPage] = useState(1);
    const [count, setCount] = useState(1);
    const [paginateData, setPaginateData] = useState([]);
    // ---------------------------------------
    let dataSearch = useSelector((state) => state.film.searchFilm);
    let dispatch = useDispatch();
    let { id } = useParams();
    // ----------------------------------------
    function paggChange(e, p) {
        setPage(p);
    }

    async function getPaginate() {
        setCount(Math.ceil(dataSearch?.length / limitPage));
    }

    function getPaginateData() {
        let arr = [...dataSearch];
        let start = (page - 1) * limitPage;
        let end = start + limitPage;
        let slicedArr = arr.slice(start, end);
        setPaginateData(slicedArr);
    }

    useEffect(() => {
        dispatch(searchData(id));
        getPaginate();
    }, []);

    useEffect(() => {
        getPaginateData();
    }, [page]);

    useEffect(() => {
        getPaginate();
        getPaginateData();
    }, [dataSearch]);

    return (
        <div className="content" style={{ minHeight: "50vh" }}>
            <h1 className="text-white text-3xl sm:text-5xl font-bold opacity-80 mt-4 sm:mt-10">
                Результаты поиска ({dataSearch.length})
            </h1>
            {/* <h2 className="text-3xl sm:text-5xl">Фильмы</h2> */}
            {dataSearch.length !== 0 ? (
                <div className="text-white grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10 mt-6 sm:mt-10">
                    {paginateData?.map((item) => (
                        <FilmCard item={item} key={item.id} />
                    ))}
                </div>
            ) : (
                <div>
                    <h2 className="text-orange-500 text-lg sm:text-3xl font-bold opacity-80 mt-10 text-center sm:text-start">
                        К сожалению, по вашему запросу ничего не найдено...
                    </h2>
                </div>
            )}
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
    );
};

export default Search;

import React from "react";
import { useSelector } from "react-redux";
import FilmCard from "../Home/block2/FilmCard";

const Wish = () => {
    const wishes = useSelector((state) => state.film.wish);
    return (
        <div className="content text-white min-h-[70vh]">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-5 gap-y-10 mt-8 sm:mt-14 ">
                {wishes.map((item) => (
                    <FilmCard key={item.id} item={item} />
                ))}
            </div>
            {wishes.length === 0 && (
                <div className="text-center mt-10">
                    <h2 className="sm:text-3xl text-2xl font-bold">
                        Здесь пока ничего нет
                    </h2>
                    <h3 className="sm:text-2xl text-base font-medium opacity-50 mt-5 sm:mt-10">
                        Добавляй фильмы и сериалы в избранное, <br /> чтобы
                        посмотреть их позже
                    </h3>
                </div>
            )}
        </div>
    );
};

export default Wish;

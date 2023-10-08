import React, { useRef, useState } from "react";
// Import Swiper React components

import "./Block1.scss";

export default function Slider({ item }) {
    let width = window.innerWidth;
    console.log(item.name, item.desc.length);
    return (
        <>
            <div
                className={`block1_main`}
                style={{
                    backgroundImage: `url(${
                        width > 620 ? item.bigImg : item.smallImg
                    })`,
                }}
            >
                <div className="content block1">
                    <h1 className="text-3xl md:text-4xl font-bold">
                        {item.name}
                    </h1>
                    <p className="text-sm md:text-xl md:w-[80%]  mt-4">
                        {item.desc.length > 400
                            ? item.desc.slice(0, 400) + "..."
                            : item.desc}
                    </p>
                    <button className="bg-amber-500">смотреть</button>
                </div>
                <div className="background_filter_block"></div>
            </div>
        </>
    );
}

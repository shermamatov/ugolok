import React from "react";
import "./Block1.scss";
const Block1 = () => {
    return (
        <div className="block1_main">
            <div className="content block1">
                <h1 className="text-3xl md:text-4xl font-bold">
                    Человек-паук: Паутина вселенных
                </h1>
                <p className="text-sm md:text-xl md:w-[80%]  mt-4">
                    После воссоединения с Гвен Стейси дружелюбный сосед
                    Человек-Паук попадает из Бруклина в Мультивселенную, где
                    встречает команду Паучков, защищающих само её существование.
                    Пытаясь справиться с новой угрозой, Майлз сталкивается с
                    Пауками из других вселенных. Настаёт момент, когда ему
                    необходимо решить, что значит быть героем, спасающим тех,
                    кого любишь больше всего
                </p>
                <button className="bg-amber-500">смотреть</button>
            </div>
            <div className="background_filter_block"></div>
        </div>
    );
};

export default Block1;

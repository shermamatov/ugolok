import React from "react";
import "./Footer.scss";
import instagramIcon from "../../assets/instagram.svg";
import youtubeIcon from "../../assets/youtube.svg";
import telegramIcon from "../../assets/telegram.svg";
import tiktokIcon from "../../assets/tiktok.svg";
const Footer = () => {
    return (
        <footer className="pb-12 pt-12">
            <hr className="opacity-30 mb-8" />
            <div className="content flex flex-col  sm:items-center">
                <div className="flex">
                    <a href="#">
                        <img
                            className="w-6 opacity-40"
                            src={instagramIcon}
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            className="w-6 opacity-40 ml-6"
                            src={youtubeIcon}
                            alt=""
                        />
                    </a>
                    <a href="#">
                        {" "}
                        <img
                            className="w-6 opacity-40 ml-6"
                            src={telegramIcon}
                            alt=""
                        />
                    </a>
                    <a href="#">
                        <img
                            className="w-6 opacity-40 ml-6"
                            src={tiktokIcon}
                            alt=""
                        />
                    </a>
                </div>
                <p className="text-white text-base max-w-[90%] sm:text-center opacity-40 mt-3">
                    ваш онлайн кинотеатр, где каждый фильм становится уютным и
                    теплым приключением! Мы создали этот уголок специально для
                    вас, чтобы предоставить незабываемые моменты отдыха и
                    развлечения : )
                </p>
                <h2 className="text-white text-2xl opacity-40 mt-3">
                    уютный ugolok
                </h2>
            </div>
        </footer>
    );
};

export default Footer;

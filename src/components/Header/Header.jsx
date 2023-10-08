import React, { useState } from "react";
import "./Header.scss";
import archive from "../../assets/archiveIcon2.svg";
import avatar from "../../assets/avatarIcon.svg";
import search from "../../assets/searchIcon2.svg";
import logo from "../../assets/logoIcon.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import searchIcon from "../../assets/searchIcon.svg";
import { searchData } from "../../store/reducers/filmReducer";

const Header = () => {
    const [searchModal, setSearchModal] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div>
            <div className="content pt-5 pb-5 flex justify-between bg-black z-10 relative">
                <div>
                    <p
                        onClick={() => navigate("/")}
                        className="text-white font-mono ugolok_text flex opacity-80 cursor-pointer"
                    >
                        <img className="w-10" src={logo} alt="" />
                        ugolok
                    </p>
                </div>
                <div className="flex items-center">
                    <div className="search_block md:flex hidden">
                        <input
                            onChange={(e) =>
                                setSearchInputValue(e.target.value)
                            }
                            onKeyDown={() => {
                                dispatch(searchData(searchInputValue));
                                navigate(
                                    `/search/${searchInputValue || "all"}`
                                );
                            }}
                            value={searchInputValue}
                            // onChange={(e) => dispatch(searchData(e.target.value))}
                            className="rounded-lg w-[300px] mr-3 header_search_input h-9"
                            type="text"
                            placeholder="искать..."
                        />
                        <img
                            onClick={() => {
                                dispatch(searchData(searchInputValue));
                                navigate(
                                    `/search/${searchInputValue || "all"}`
                                );
                            }}
                            src={searchIcon}
                            alt=""
                        />
                    </div>
                    <img
                        onClick={() => setSearchModal(!searchModal)}
                        src={search}
                        className="w-[28px] mr-3 block md:hidden "
                        alt=""
                    />
                    <img
                        onClick={() => navigate("/wish")}
                        className="w-8 mr-3 cursor-pointer"
                        src={archive}
                        alt=""
                    />
                    <img className="w-8" src={avatar} alt="" />
                </div>
            </div>
            <div
                className={`${
                    searchModal ? "mt-0" : "-mt-[82px]"
                } duration-500 pb-5 md:hidden block`}
            >
                <div className=" w-[100%] h-[2px] bg-white opacity-40"></div>
                <div className="mt-5 content search_block_adap">
                    <input
                        onChange={(e) => setSearchInputValue(e.target.value)}
                        value={searchInputValue}
                        type="text"
                        className="rounded-lg w-[100%] m-auto header_search_input h-10"
                        placeholder="искать..."
                    />
                    <img
                        onClick={() => {
                            dispatch(searchData(searchInputValue));
                            navigate(`/search/${searchInputValue || "all"}`);
                        }}
                        src={searchIcon}
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;

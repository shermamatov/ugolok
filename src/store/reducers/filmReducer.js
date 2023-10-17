import {
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    query,
    updateDoc,
    where,
} from "firebase/firestore";
import { filmRef, reduxConsts } from "../../consts";
import { db } from "../../fire";

const stater = {
    films: [],
    searchFilm: [],
    film: {},
    wish: JSON.parse(localStorage.getItem("wish")) || [],
};

export const filmReducer = (state = stater, action) => {
    switch (action.type) {
        case reduxConsts.GET_FILMS:
            return { ...state, films: action.payload };
        case reduxConsts.ADD_FILM:
            return {
                ...state,
                films: [...state.films, action.payload],
            };
        case reduxConsts.GET_ONE_FILM:
            return { ...state, film: action.payload };
        case reduxConsts.GET_WISH:
            return { ...state, wish: action.payload };
        case reduxConsts.GET_SEARCH_FILMS:
            return { ...state, searchFilm: action.payload };
        default:
            return state;
    }
};

// ! async functions start

export const getFilms = (page = 1) => {
    return async (dispatch) => {
        try {
            let data = await getDocs(filmRef);
            // let allData = await getDocs(filmRef);
            // let gfd = allData.docs[(page - 1) * limitPage];
            // let q = query(filmRef, limit(limitPage), startAt(gfd));
            // let data = await getDocs(q);
            dispatch({
                type: reduxConsts.GET_FILMS,
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const deleteFilm = (id) => {
    return async (dispatch) => {
        try {
            const productDocRef = doc(db, "films", id);
            await deleteDoc(productDocRef);
            dispatch(getFilms());
        } catch (e) {
            console.log(e);
        }
    };
};

export const getOneFilm = (id) => {
    return async (dispatch) => {
        try {
            const oneFilmRef = doc(db, "films", id);
            const data = await getDoc(oneFilmRef);
            dispatch({
                type: reduxConsts.GET_ONE_FILM,
                payload: {
                    ...data.data(),
                    id: data.id,
                },
            });
        } catch (e) {
            console.log(e);
        }
    };
};

export const editFilm = (id, film) => {
    return async (dispatch) => {
        try {
            const oneFilmRef = doc(db, "films", id);
            await updateDoc(oneFilmRef, film);
            dispatch(getFilms());
        } catch (e) {
            console.log(e);
        }
    };
};

export const filterData = (type) => {
    return async (dispatch) => {
        if (type === "All") {
            const data = await getDocs(filmRef);
            dispatch({
                type: reduxConsts.GET_FILMS,
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            });
        } else {
            const q = query(filmRef, where("type", "==", type));
            let filterArr = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                filterArr.push({ ...doc.data(), id: doc.id });
            });
            dispatch({
                type: reduxConsts.GET_FILMS,
                payload: filterArr,
            });
        }
    };
};

export const filterDataGenre = (filter, type) => {
    return async (dispatch) => {
        if (type === "All" || type === "all") {
            const data = await getDocs(filmRef);
            dispatch({
                type: reduxConsts.GET_FILMS,
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            });
        } else {
            const q = query(filmRef, where(filter, "array-contains", type));
            let filterArr = [];
            const querySnapshot = await getDocs(q);

            querySnapshot.forEach((doc) => {
                filterArr.push({ ...doc.data(), id: doc.id });
            });

            dispatch({
                type: reduxConsts.GET_FILMS,
                payload: filterArr,
            });
        }
    };
};

// export const dataSort = (sorting) => {
//     return async (dispatch) => {
//         console.log(sorting);
//         if (sorting === "All" || sorting === "all") {
//             const data = await getDocs(filmRef);
//             dispatch({
//                 type: reduxConsts.GET_FILMS,
//                 payload: data.docs.map((doc) => ({
//                     ...doc.data(),
//                     id: doc.id,
//                 })),
//             });
//         } else {
//             const q = query(filmRef, orderBy("year", sorting));
//             let sort = [];
//             const querySnapshot = await getDocs(q);
//             querySnapshot.forEach((doc) => {
//                 sort.push(doc.data());
//             });
//             dispatch({
//                 type: reduxConsts.GET_FILMS,
//                 payload: sort.map((doc) => ({
//                     ...doc,
//                     id: doc.id,
//                 })),
//             });
//         }
//     };
// };

// ! async functions end

export function addToWish(film) {
    return (dispatch) => {
        let wish = JSON.parse(localStorage.getItem("wish"));
        if (!wish) {
            localStorage.setItem("wish", JSON.stringify([{ ...film }]));
        } else {
            if (!wish.some((item) => item.id === film.id)) {
                wish.push(film);
                localStorage.setItem("wish", JSON.stringify(wish));
                dispatch({ type: reduxConsts.GET_WISH, payload: wish });
            } else {
                let newWish = wish.filter((item) => item.id !== film.id);
                localStorage.setItem("wish", JSON.stringify(newWish));
                dispatch({ type: reduxConsts.GET_WISH, payload: newWish });
            }
        }
    };
}

export function getWish() {
    return (dispatch) => {
        let wish = JSON.parse(localStorage.getItem("wish")) || [];
        dispatch({ type: reduxConsts.GET_WISH, payload: wish });
    };
}

export function searchData(input) {
    return async (dispatch) => {
        let data = await getDocs(filmRef);
        if (input && input !== "all") {
            let search = data.docs
                .map((doc) => ({ ...doc.data(), id: doc.id }))
                .filter((item) => {
                    if (
                        item.name.toLowerCase().includes(input.toLowerCase()) ==
                        true
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                });
            dispatch({
                type: reduxConsts.GET_SEARCH_FILMS,
                payload: search,
            });
        } else {
            dispatch({
                type: reduxConsts.GET_SEARCH_FILMS,
                payload: data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                })),
            });
        }
    };
}

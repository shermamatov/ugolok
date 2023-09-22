import axios from "axios";
import { filmRef, reduxConsts } from "./consts";
import { addDoc, getDocs } from "firebase/firestore";

export async function dataConstructor(id) {
    let { data } = await axios.get(
        `https://kinobd.net/api/films/search/kp_id?q=${id}`
    );
    return data.data[0];
}

export async function addData(film) {
    await addDoc(filmRef, film);
}

// export function checkFilm(film) {
// }

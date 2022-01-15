import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

export const startNewNote = () => {
    return async (dispatch, getState) => {

        const uid = getState().auth.uid;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        //asi fue como yo pude hacer una inserción
        const doc = await addDoc(collection(db, `${ uid }`, "journal/notes"), newNote);
        console.log("Document written with ID: ", doc);

    }
}
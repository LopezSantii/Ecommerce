import { collection, getDocs,addDoc, getFirestore } from "firebase/firestore"


export const createOrder = (orden) => {
    const db = getFirestore();

    const ordersCollection = collection(db, "orders");

    return addDoc(ordersCollection, orden)
}
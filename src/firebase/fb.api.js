import { db } from "./fb.config";
import {
  query,
  orderBy,
  collection,
  addDoc,
  getDocs,
} from "firebase/firestore";

export const createUser = async (user) => {
  await addDoc(collection(db, "users"), user);
};

export const getUsers = async () => {
  const q = query(collection(db, "users"), orderBy("name"));
  const querySnapshot = await getDocs(q);
  const userList = querySnapshot.docs.map((doc) => {
    const data = {
      id: doc.id,
      ...doc.data(),
    };
    return data;
  });

  return userList;
};

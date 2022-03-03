import { db } from "./fb.config";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const createUser = async (user) => {
  await addDoc(collection(db, "users"), user);
};

export const getUsers = async () => {
  const userSnapshot = await getDocs(collection(db, "users"));
  const userList = userSnapshot.docs.map((doc) => {
    const data = {
      id: doc.id,
      ...doc.data(),
    };
    return data;
  });

  return userList;
};

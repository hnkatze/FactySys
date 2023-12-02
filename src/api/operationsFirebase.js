import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export const  getData = async(collectionName) =>{
  try{
    const docRef = await getDocs(collection(db,collectionName));
    const data = [];
    docRef.forEach((doc) => { data.push({id:doc.id, ...doc.data()}) ; });
    console.log(data)
    return data;

  }catch(e){ console.log(e)}
}
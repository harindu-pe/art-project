import { useState } from "react";
import { useNavigate } from "react-router";
import { db, storage } from "../config/firebase";
import {
  doc,
  collection,
  setDoc,
  query,
  orderBy,
  where,
} from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { HOME } from "../config/routes";
import {
  useCollectionData,
  useDocumentData,
} from "react-firebase-hooks/firestore";

export function useGetUserImages(uid = null) {
  const q = uid
    ? query(
        collection(db, "images"),
        orderBy("date", "desc"),
        where("uid", "==", uid)
      )
    : query(collection(db, "images"), orderBy("date", "desc"));

  const [images, isLoading, error] = useCollectionData(q);

  if (error) throw error;

  return { images, isLoading };
}

export function useGetUser(id) {
  const q = query(doc(db, "users", id));
  const [user, isLoading] = useDocumentData(q);
  return { user, isLoading };
}

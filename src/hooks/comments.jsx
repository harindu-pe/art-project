import { uuidv4 } from "@firebase/util";
import {
  collection,
  deleteDoc,
  doc,
  orderBy,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "../config/firebase";
import { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

export function useAddComment({ imageID, userID }) {
  const [isLoading, setLoading] = useState(false);

  async function addComment(text) {
    setLoading(true);
    const id = uuidv4();
    const date = Date.now();
    const docRef = doc(db, "comments", id);
    await setDoc(docRef, { id, text, date, imageID, userID });
    setLoading(false);
  }

  return { addComment, isLoading };
}

export function useComments(imageID) {
  const q = query(
    collection(db, "comments"),
    where("imageID", "==", imageID),
    orderBy("date", "desc")
  );

  const [comments, isLoading, error] = useCollectionData(q);
  if (error) throw error;

  return { comments, isLoading };
}

export function useDeleteComment(id) {
  const [isLoading, setLoading] = useState(false);

  async function deleteComment() {
    setLoading(true);

    const docRef = doc(db, "comments", id);
    await deleteDoc(docRef);

    setLoading(false);
  }

  return { deleteComment, isLoading };
}

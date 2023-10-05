import { useState } from "react";
import { useNavigate } from "react-router";
import { db, storage } from "../config/firebase";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  getStorage,
  deleteObject,
} from "firebase/storage";
import { HOME } from "../config/routes";

export function useAddImage(user) {
  const [isLoading, SetLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  async function addImage(imageDetails) {
    if (!file) {
      console.log("File does not exist");
      return;
    }

    const dateTime = new Date().getTime();

    const name = dateTime + file.name;

    SetLoading(true);

    const fileRef = ref(storage, name);
    await uploadBytes(fileRef, file);
    const imageURL = await getDownloadURL(fileRef);

    await setDoc(doc(db, "images", name), {
      uid: user.id,
      id: name,
      title: "",
      description: "",
      likes: [],
      imageLink: imageURL,
      date: dateTime,
      ...imageDetails,
    });

    SetLoading(false);

    navigate(HOME);
  }

  return {
    setFile,
    addImage,
    isLoading,
    fileURL: file && URL.createObjectURL(file),
  };
}

export function useDeletePost(id) {
  const [isLoading, setLoading] = useState(false);

  const storage = getStorage();

  // Create a reference to the file to delete
  const storageRef = ref(storage, `${id}`);

  async function deleteImage() {
    setLoading(true);

    // Delete the image link in database
    await deleteDoc(doc(db, "images", id));

    // Delete the file from storage
    deleteObject(storageRef)
      .then(() => {
        // File deleted successfully
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });

    setLoading(false);
  }

  return { deleteImage, isLoading };
}

import { auth } from "@/lib/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";

export default function useAuthPersistence() {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("User is signed in:", user);
      } else {
        console.log("User is not logged in");
      }
    });

    return () => unsubscribe();
  }, []);
}

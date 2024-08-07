import { auth } from "@/lib/firebase.config";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export default function useAuth() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return {
    signInWithGoogle,
    loading,
  };
}

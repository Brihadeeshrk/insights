import { auth } from "@/lib/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Hero() {
  const [user] = useAuthState(auth);
  return (
    <div className="h-1/2 rounded-b-[50px] bg-gradient-to-br from-pink-200 to-emerald-200 px-10 py-16">
      <p>Hi {user?.displayName}</p>
    </div>
  );
}

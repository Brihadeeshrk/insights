import { useEffect } from "react";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { insightsState, InsightsState, Insight } from "../atoms/insightsAtom";
import { auth, firestore } from "@/lib/firebase.config";
import { collection, query, where, orderBy, getDocs } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

export function useInsights() {
  const [user] = useAuthState(auth);
  const setInsightsState = useSetRecoilState(insightsState);
  const currentInsightsState = useRecoilValue(insightsState);

  useEffect(() => {
    async function fetchInsights() {
      if (user) {
        const q = query(
          collection(firestore, "insights"),
          where("userId", "==", user.uid),
          orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        const insights: Insight[] = querySnapshot.docs.map(
          (doc) =>
            ({
              id: doc.id,
              ...doc.data(),
            } as Insight)
        );

        setInsightsState({
          insights,
          insightsAvailable: insights.length > 0,
          lastUpdated: new Date(),
        });
      }
    }

    fetchInsights();
  }, [user, setInsightsState]);

  return currentInsightsState;
}

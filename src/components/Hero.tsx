import { useInsights } from "@/backend/useInsights";
import { auth } from "@/lib/firebase.config";
import { Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "./ui/button";
import UploadBankStatement from "./upload-bank-statement";

export default function Hero() {
  const [user] = useAuthState(auth);
  const { insights, insightsAvailable } = useInsights();

  const latestInsight = insights[0];

  return (
    <div className="h-1/2 rounded-b-[50px] bg-gradient-to-br from-pink-200 to-emerald-200 px-6 py-8 flex-col space-y-5 overflow-y-auto">
      <Image
        src={user?.photoURL!}
        alt="profile picture"
        width={50}
        className="rounded-full"
      />
      {insightsAvailable ? (
        <>
          <p className="text-xl">
            Hi <span className="font-bold">{user?.displayName}</span>,
            here&apos;s an overview of your financials.
          </p>
          <p className="text-lg">Latest Insight Summary:</p>
          <p>Total Spending: ${latestInsight.totalSpending}</p>
          <p>Top Category: {latestInsight.topCategory}</p>
          <Button
            onClick={() => {
              /* Navigate to full insights */
            }}
          >
            View Full Insights
          </Button>
          <Button
            onClick={() => {
              /* Open upload modal/page */
            }}
          >
            Upload New Statement
          </Button>
        </>
      ) : (
        <div className="space-y-5">
          <p className="text-xl">
            Welcome <span className="font-bold">{user?.displayName}</span>!
          </p>
          <p className="text-lg">
            Ready to gain insights into your finances? Upload your first bank
            statement to get started!
          </p>
          <ul className="list-disc list-inside">
            <li>Visualize your spending patterns</li>
            <li>Identify top spending categories</li>
            <li>Predict your expenses based on historical data</li>
            <li>
              Talk to your statement for more information regarding your
              spending
            </li>
          </ul>
          {/* <Button onClick={() => {}} className="mt-4">
            Upload Your First Statement
          </Button> */}
          <UploadBankStatement />
        </div>
      )}
    </div>
  );
}

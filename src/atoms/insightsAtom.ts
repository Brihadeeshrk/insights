import { atom } from "recoil";

export interface Insight {
  id: string;
  createdAt: Date;
  totalSpending: number;
  topCategory: string;
  monthlySummary: {
    [month: string]: {
      totalSpent: number;
      categories: { [category: string]: number };
    };
  };
  // more to be added as we go
}

export interface InsightsState {
  insights: Insight[];
  insightsAvailable: boolean;
  lastUpdated: Date | null;
}

export const insightsState = atom<InsightsState>({
  key: "insightsState",
  default: {
    insights: [],
    insightsAvailable: false,
    lastUpdated: null,
  },
});

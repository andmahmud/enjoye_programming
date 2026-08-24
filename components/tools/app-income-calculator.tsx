"use client";

import { Coins, MousePointerClick, Users } from "lucide-react";
import * as React from "react";

import { ResultCard, ToolField, useNumericState } from "@/components/tools/tool-primitives";
import { Callout } from "@/components/mdx/callout";
import { formatNumber, formatUSD } from "@/lib/format";

export function AppIncomeCalculator() {
  const dailyUsers = useNumericState("1000");
  const adsPerUser = useNumericState("5");
  const ecpm = useNumericState("1.5");

  const { impressions, daily, monthly, yearly } = React.useMemo(() => {
    const impressions = dailyUsers.parsed * adsPerUser.parsed;
    const daily = (impressions * ecpm.parsed) / 1000;
    return {
      impressions,
      daily,
      monthly: daily * 30,
      yearly: daily * 365,
    };
  }, [dailyUsers.parsed, adsPerUser.parsed, ecpm.parsed]);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 rounded-xl border bg-card p-6 shadow-sm sm:grid-cols-3 sm:p-8">
        <ToolField
          id="daily-users"
          label="Daily Users"
          icon={Users}
          value={dailyUsers.value}
          onChangeValue={dailyUsers.setValue}
          min={0}
          step={1}
          hint="How many people open your app each day"
        />
        <ToolField
          id="ads-per-user"
          label="Ads per User"
          icon={MousePointerClick}
          value={adsPerUser.value}
          onChangeValue={adsPerUser.setValue}
          min={0}
          step={0.1}
          hint="Average ad impressions per user per day"
        />
        <ToolField
          id="ecpm"
          label="Estimated eCPM"
          icon={Coins}
          suffix="$"
          value={ecpm.value}
          onChangeValue={ecpm.setValue}
          min={0}
          step={0.01}
          hint="Earnings per 1,000 ad impressions"
        />
      </div>

      <div>
        <div className="grid gap-4 sm:grid-cols-3">
          <ResultCard label="Daily revenue" value={formatUSD(daily)} caption={`${formatNumber(impressions)} impressions/day`} />
          <ResultCard label="Monthly revenue" value={formatUSD(monthly)} emphasis caption="30-day projection" />
          <ResultCard label="Yearly revenue" value={formatUSD(yearly)} caption="365-day projection" />
        </div>

        <Callout type="warning" title="Educational estimate only">
          Estimates are for educational purposes only. Actual earnings vary depending on traffic,
          country, ad demand, engagement and other factors.
        </Callout>
      </div>
    </div>
  );
}

"use client";

import { Coins, MousePointerClick, Smartphone, Users } from "lucide-react";
import * as React from "react";

import { Callout } from "@/components/mdx/callout";
import { ResultCard, ToolField, useNumericState } from "@/components/tools/tool-primitives";
import { formatNumber, formatUSD } from "@/lib/format";

export function AppRevenueEstimator() {
  const dailyUsers = useNumericState("2000");
  const sessions = useNumericState("2");
  const adsPerSession = useNumericState("3");
  const ecpm = useNumericState("1.5");

  const { impressionsPerDay, daily, monthly, yearly, arpuMonthly } = React.useMemo(() => {
    const impressionsPerDay = dailyUsers.parsed * sessions.parsed * adsPerSession.parsed;
    const daily = (impressionsPerDay * ecpm.parsed) / 1000;
    return {
      impressionsPerDay,
      daily,
      monthly: daily * 30,
      yearly: daily * 365,
      arpuMonthly: dailyUsers.parsed > 0 ? (daily * 30) / dailyUsers.parsed : 0,
    };
  }, [dailyUsers.parsed, sessions.parsed, adsPerSession.parsed, ecpm.parsed]);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 rounded-xl border bg-card p-6 shadow-sm sm:grid-cols-2 lg:grid-cols-4 sm:p-8">
        <ToolField
          id="est-daily-users"
          label="Daily Active Users"
          icon={Users}
          value={dailyUsers.value}
          onChangeValue={dailyUsers.setValue}
          min={0}
          step={1}
        />
        <ToolField
          id="est-sessions"
          label="Sessions per User"
          icon={Smartphone}
          value={sessions.value}
          onChangeValue={sessions.setValue}
          min={0}
          step={0.1}
          hint="App opens per user per day"
        />
        <ToolField
          id="est-ads"
          label="Ads per Session"
          icon={MousePointerClick}
          value={adsPerSession.value}
          onChangeValue={adsPerSession.setValue}
          min={0}
          step={0.1}
        />
        <ToolField
          id="est-ecpm"
          label="Average eCPM"
          icon={Coins}
          suffix="$"
          value={ecpm.value}
          onChangeValue={ecpm.setValue}
          min={0}
          step={0.01}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <ResultCard label="Conservative" value={`${formatUSD(monthly * 0.6)}/mo`} caption="Low ad demand months" />
        <ResultCard label="Expected" value={`${formatUSD(monthly)}/mo`} emphasis caption={`${formatUSD(yearly)} per year`} />
        <ResultCard label="Optimistic" value={`${formatUSD(monthly * 1.5)}/mo`} caption="High-demand periods" />
      </div>

      <div className="grid gap-4 text-sm sm:grid-cols-3">
        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Impressions / day</p>
          <p className="mt-1 font-semibold tabular-nums">{formatNumber(impressionsPerDay)}</p>
        </div>
        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">Revenue / day</p>
          <p className="mt-1 font-semibold tabular-nums">{formatUSD(daily)}</p>
        </div>
        <div className="rounded-lg border bg-muted/40 p-4">
          <p className="text-xs tracking-wide text-muted-foreground uppercase">ARPU / month</p>
          <p className="mt-1 font-semibold tabular-nums">{formatUSD(arpuMonthly)}</p>
        </div>
      </div>

      <Callout type="warning" title="Educational estimate only">
        Estimates are for educational purposes only. Actual earnings vary depending on traffic,
        country, ad demand, engagement and other factors.
      </Callout>
    </div>
  );
}

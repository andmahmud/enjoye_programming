"use client";

import { DollarSign, Eye, MousePointerClick } from "lucide-react";
import * as React from "react";

import { Callout } from "@/components/mdx/callout";
import { ResultCard, ToolField, useNumericState } from "@/components/tools/tool-primitives";
import { formatNumber, formatUSD } from "@/lib/format";

export function EcpmCalculator() {
  const earnings = useNumericState("25");
  const impressions = useNumericState("20000");
  const clicks = useNumericState("");

  const { ecpm, ctr, cpc } = React.useMemo(() => {
    const ecpm = impressions.parsed > 0 ? (earnings.parsed / impressions.parsed) * 1000 : 0;
    const ctr = impressions.parsed > 0 && clicks.parsed > 0 ? (clicks.parsed / impressions.parsed) * 100 : null;
    const cpc = clicks.parsed > 0 ? earnings.parsed / clicks.parsed : null;
    return { ecpm, ctr, cpc };
  }, [earnings.parsed, impressions.parsed, clicks.parsed]);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 rounded-xl border bg-card p-6 shadow-sm sm:grid-cols-3 sm:p-8">
        <ToolField
          id="earnings"
          label="Total Earnings"
          icon={DollarSign}
          suffix="$"
          value={earnings.value}
          onChangeValue={earnings.setValue}
          min={0}
          step={0.01}
          hint="Ad revenue for the period"
        />
        <ToolField
          id="impressions"
          label="Ad Impressions"
          icon={Eye}
          value={impressions.value}
          onChangeValue={impressions.setValue}
          min={0}
          step={1}
          hint="How many ads were shown"
        />
        <ToolField
          id="clicks"
          label="Clicks (optional)"
          icon={MousePointerClick}
          value={clicks.value}
          onChangeValue={clicks.setValue}
          min={0}
          step={1}
          hint="Add clicks to also get CTR and CPC"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <ResultCard
          label="eCPM"
          value={formatUSD(ecpm, true)}
          emphasis
          caption="(Earnings ÷ Impressions) × 1,000"
        />
        <ResultCard
          label="CTR"
          value={ctr === null ? "—" : `${formatNumber(ctr)}%`}
          caption={ctr === null ? "Enter clicks to calculate" : "(Clicks ÷ Impressions) × 100"}
        />
        <ResultCard
          label="CPC"
          value={cpc === null ? "—" : formatUSD(cpc)}
          caption={cpc === null ? "Enter clicks to calculate" : "Earnings ÷ Clicks"}
        />
      </div>

      <Callout type="tip" title="What is a good eCPM?">
        eCPM varies widely by country, ad format and season. Rewarded video ads usually earn the
        highest eCPM, while banner ads earn the least. Compare your own numbers over time instead of
        chasing universal benchmarks.
      </Callout>
    </div>
  );
}

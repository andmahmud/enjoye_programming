"use client";

import { Percent } from "lucide-react";
import * as React from "react";

import { ResultCard, ToolField, useNumericState } from "@/components/tools/tool-primitives";
import { formatNumber } from "@/lib/format";

type Mode = "percent-of" | "what-percent" | "change";

const MODES: { id: Mode; label: string; description: string }[] = [
  { id: "percent-of", label: "% of a number", description: "What is X% of Y?" },
  { id: "what-percent", label: "X as % of Y", description: "X is what percent of Y?" },
  { id: "change", label: "% change", description: "Increase or decrease from X to Y" },
];

export function PercentageCalculator() {
  const [mode, setMode] = React.useState<Mode>("percent-of");
  const a = useNumericState("15");
  const b = useNumericState("200");

  const result = React.useMemo(() => {
    if (mode === "percent-of") {
      return (a.parsed / 100) * b.parsed;
    }
    if (mode === "what-percent") {
      return b.parsed === 0 ? null : (a.parsed / b.parsed) * 100;
    }
    return a.parsed === 0 ? null : ((b.parsed - a.parsed) / Math.abs(a.parsed)) * 100;
  }, [mode, a.parsed, b.parsed]);

  const labels: Record<Mode, { first: string; second: string }> = {
    "percent-of": { first: "Percentage (X%)", second: "Of number (Y)" },
    "what-percent": { first: "Value (X)", second: "Out of (Y)" },
    change: { first: "From value (X)", second: "To value (Y)" },
  };

  const formatted =
    result === null
      ? "—"
      : mode === "percent-of"
        ? formatNumber(result)
        : `${result > 0 && mode === "change" ? "+" : ""}${formatNumber(result)}%`;

  return (
    <div className="space-y-8">
      <div className="grid gap-2 sm:grid-cols-3">
        {MODES.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setMode(option.id)}
            aria-pressed={mode === option.id}
            className={`rounded-lg border p-3 text-left transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none ${
              mode === option.id
                ? "border-primary/40 bg-primary/5"
                : "bg-card hover:bg-accent/50"
            }`}
          >
            <span className="flex items-center gap-1.5 text-sm font-semibold">
              <Percent className="size-3.5 text-muted-foreground" aria-hidden="true" />
              {option.label}
            </span>
            <span className="mt-0.5 block text-xs text-muted-foreground">{option.description}</span>
          </button>
        ))}
      </div>

      <div className="grid gap-6 rounded-xl border bg-card p-6 shadow-sm sm:grid-cols-2 sm:p-8">
        <ToolField
          id="value-a"
          label={labels[mode].first}
          suffix={mode === "percent-of" ? "%" : undefined}
          value={a.value}
          onChangeValue={a.setValue}
          step={0.01}
        />
        <ToolField
          id="value-b"
          label={labels[mode].second}
          value={b.value}
          onChangeValue={b.setValue}
          step={0.01}
        />
      </div>

      <ResultCard
        label={
          mode === "percent-of"
            ? `Result — X% of Y`
            : mode === "what-percent"
              ? "Result — X as % of Y"
              : "Result — percentage change"
        }
        value={formatted}
        emphasis
        caption={
          mode === "change" && result !== null
            ? result >= 0
              ? "This is an increase"
              : "This is a decrease"
            : undefined
        }
      />
    </div>
  );
}

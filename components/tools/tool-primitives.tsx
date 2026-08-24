"use client";

import type { LucideIcon } from "lucide-react";
import * as React from "react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ToolField({
  id,
  label,
  icon: Icon,
  suffix,
  hint,
  value,
  onChangeValue,
  min,
  max,
  step,
}: {
  id: string;
  label: string;
  icon?: LucideIcon;
  suffix?: string;
  hint?: string;
  value: string;
  onChangeValue: (value: string) => void;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="flex items-center gap-1.5">
        {Icon ? <Icon className="size-3.5 text-muted-foreground" aria-hidden="true" /> : null}
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(event) => onChangeValue(event.target.value)}
          placeholder="0"
          className={cn(suffix && "pr-14")}
        />
        {suffix ? (
          <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">
            {suffix}
          </span>
        ) : null}
      </div>
      {hint ? <p className="text-xs leading-snug text-muted-foreground">{hint}</p> : null}
    </div>
  );
}

export function ResultCard({
  label,
  value,
  emphasis = false,
  caption,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
  caption?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border p-4",
        emphasis ? "border-primary/25 bg-primary/5" : "bg-muted/40",
      )}
    >
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">{label}</p>
      <p
        className={cn(
          "mt-1.5 font-bold tracking-tight tabular-nums",
          emphasis ? "text-2xl sm:text-3xl" : "text-xl",
        )}
      >
        {value}
      </p>
      {caption ? <p className="mt-1 text-xs text-muted-foreground">{caption}</p> : null}
    </div>
  );
}

export function useNumericState(initial = "") {
  const [value, setValue] = React.useState(initial);
  const parsed = React.useMemo(() => {
    const parsedValue = Number.parseFloat(value.replace(/,/g, ""));
    return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : 0;
  }, [value]);
  return { value, setValue, parsed };
}

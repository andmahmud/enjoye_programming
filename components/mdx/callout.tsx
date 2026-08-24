import { Info, Lightbulb, OctagonAlert, TriangleAlert } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

const calloutVariants = {
  note: {
    label: "Note",
    icon: Info,
    className: "border-blue-500/30 bg-blue-500/5 [&_svg]:text-blue-600 dark:[&_svg]:text-blue-400",
  },
  tip: {
    label: "Tip",
    icon: Lightbulb,
    className: "border-emerald-500/30 bg-emerald-500/5 [&_svg]:text-emerald-600 dark:[&_svg]:text-emerald-400",
  },
  warning: {
    label: "Warning",
    icon: TriangleAlert,
    className: "border-amber-500/30 bg-amber-500/5 [&_svg]:text-amber-600 dark:[&_svg]:text-amber-400",
  },
  danger: {
    label: "Danger",
    icon: OctagonAlert,
    className: "border-red-500/30 bg-red-500/5 [&_svg]:text-red-600 dark:[&_svg]:text-red-400",
  },
} as const;

export interface CalloutProps extends React.ComponentProps<"div"> {
  type?: keyof typeof calloutVariants;
  title?: string;
}

export function Callout({ type = "note", title, className, children, ...props }: CalloutProps) {
  const variant = calloutVariants[type];
  const Icon = variant.icon;

  return (
    <div
      role="note"
      className={cn("my-6 flex gap-3 rounded-lg border p-4", variant.className, className)}
      {...props}
    >
      <Icon className="mt-0.5 size-[1.1rem] shrink-0" aria-hidden="true" />
      <div className="min-w-0 text-sm leading-relaxed">
        <p className="mb-1 font-semibold">{title ?? variant.label}</p>
        <div className="[&_a]:underline-offset-4 [&_code]:mx-0.5 [&_p]:my-0 [&_pre]:my-3">
          {children}
        </div>
      </div>
    </div>
  );
}

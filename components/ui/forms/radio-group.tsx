import type { ReactNode } from "react";

export interface RadioGroupProps {
  readonly title: string;
  readonly children: ReactNode | ReactNode[];
}

export default function RadioGroup({ title, children }: RadioGroupProps) {
  return (
    <div className="text-sm mb-2">
      <p className="mb-2">{title}</p>
      <div className="flex items-center gap-5">{children}</div>
    </div>
  );
}

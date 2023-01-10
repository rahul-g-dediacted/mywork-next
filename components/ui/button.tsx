import type { ReactNode } from "react";

export interface ButtonProps {
  readonly label?: string;
  readonly children?: ReactNode | ReactNode[] | string;
  onClick?(): void;
}

export default function Button(props: ButtonProps) {
  const { label, children, onClick } = props;

  return (
    <button
      className="w-full bg-gradient-to-r from-primary-400 to-primary-500 hover:to-primary-400 text-white tracking-wide py-2"
      onClick={onClick}
    >
      {label || children}
    </button>
  );
}

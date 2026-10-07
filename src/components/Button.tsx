import { useState } from "react";

interface ButtonProps {
  variant?: "primary" | "outline" | "destructive";
  rounded?: boolean;
}

export const Button = ({
  variant = "primary",
  rounded: initialRounded = false,
}: ButtonProps) => {
  const [rounded, setRounded] = useState(initialRounded);

  let className =
    "bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";

  // Estilo outline
  if (variant === "outline") {
    className =
      "bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50";
  } else if (variant === "destructive") {
    className =
      "bg-red-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600";
  }

  if (rounded) {
    className += " rounded-full";
  }

  return (
    <button
      type="button"
      className={className}
      onMouseEnter={() => setRounded(true)}
      onMouseLeave={() => setRounded(initialRounded)}
    >
      Este es un botón redondeado
    </button>
  );
};


import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onPress: () => void;
  className?: string;
}

export default function IconButton({
  icon,
  onPress,
  className = "",
}: IconButtonProps) {
  return (
    <button
      onClick={onPress}
      className={`p-2 bg-secondary rounded-full hover:bg-secondary-dark transition-colors ${className}`}
    >
      {icon}
    </button>
  );
}

import { cn } from "@/utils/cn";

interface ShadowBoxProps {
  children?: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className, ...props }: ShadowBoxProps) => (
  <div
    {...props}
    className={cn(
      className,
      "rounded-md border-[1px] border-zinc-400/50 bg-basis p-4",
    )}
  >
    {children}
  </div>
);

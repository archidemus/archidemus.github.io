import { Card } from "@/components/ui/card";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Content({ children, className = "" }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex items-center justify-center p-4">
      <Card className={`w-full max-w-xl ${className}`}>{children}</Card>
    </div>
  );
}

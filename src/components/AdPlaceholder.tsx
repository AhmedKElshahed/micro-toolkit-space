import { Card } from "@/components/ui/card";

interface AdPlaceholderProps {
  size: "banner" | "rectangle" | "leaderboard";
  className?: string;
}

const AdPlaceholder = ({ size, className = "" }: AdPlaceholderProps) => {
  const dimensions = {
    banner: { width: "300px", height: "250px", label: "Ad 300x250" },
    rectangle: { width: "336px", height: "280px", label: "Ad 336x280" },
    leaderboard: { width: "728px", height: "90px", label: "Ad 728x90" },
  };

  const { width, height, label } = dimensions[size];

  return (
    <Card 
      className={`flex items-center justify-center bg-muted/30 border-2 border-dashed border-border ${className}`}
      style={{ width, height, maxWidth: "100%" }}
      role="region"
      aria-label="Advertisement placeholder"
    >
      <div className="text-center">
        <p className="text-sm text-muted-foreground font-medium">{label}</p>
        <p className="text-xs text-muted-foreground mt-1">Ad Space</p>
      </div>
    </Card>
  );
};

export default AdPlaceholder;

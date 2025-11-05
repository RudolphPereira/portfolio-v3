import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  available?: boolean;
};

function BadgePrimary({ title, available }: Props) {
  return (
    <div className="badgeBox">
      <Badge
        className={`relative flex items-center gap-2 ${
          available
            ? "bg-emerald-600/10 text-emerald-600"
            : "bg-componentBackground/80 text-darkGrey"
        }  border-white py-1.5 px-3 rounded-lg text-sm font-medium border-2 drop-shadow-xs shadow-sm`}
      >
        {available && (
          <div className="relative size-2.5 flex">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-75"></span>
            <span className="relative inline-flex size-2.5 rounded-full bg-emerald-600"></span>
          </div>
        )}
        {title}
      </Badge>
    </div>
  );
}

export default BadgePrimary;

import { Badge } from "@/components/ui/badge";

type Props = {
  title: string;
  additionalBadgeClass?: string;
};

function BadgeSecondary({ title, additionalBadgeClass }: Props) {
  return (
    <div className="badgeBox">
      <Badge
        className={`shadow rounded-sm ${additionalBadgeClass} md:bg-darkGrey md:text-white transition-all duration-200 ease-in-out`}
      >
        {title}
      </Badge>
    </div>
  );
}

export default BadgeSecondary;

import Link from "next/link";
import { Badge } from "./ui/badge";

export default function Tag({
  tag,
  count,
  active,
}: {
  tag: string;
  count?: number;
  active?: boolean;
}) {
  return (
    <Badge variant={"outline"}>
      <span>{tag}</span>
    </Badge>
  );
}

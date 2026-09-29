import type { ReactNode } from "react";
import { GraduationCapIcon } from "./Icons";

type Props = {
  badge: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
  // Use 1 when the heading opens a page.
  level?: 1 | 2;
};

export default function SectionHeading({ badge, title, subtitle, align = "center", level = 2 }: Props) {
  return (
    <div className={align === "left" ? "section-heading section-heading--left" : "section-heading"}>
      <span className="section-badge">
        <GraduationCapIcon />
        {badge}
      </span>
      {level === 1 ? <h1>{title}</h1> : <h2>{title}</h2>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

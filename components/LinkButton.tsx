"use client";

import { useRouter } from "next/navigation";
import ArrowUpRight from "./ArrowUpRight";

type Props = {
  href: string;
  className?: string;
  children: string;
  arrow?: boolean;
};

// The stylesheet targets <button> elements for CTAs, so navigate from a button.
// The label is duplicated via data-text so it can roll on hover.
export default function LinkButton({ href, className, children, arrow = false }: Props) {
  const router = useRouter();
  return (
    <button className={className} onClick={() => router.push(href)}>
      <span className="btn-label" data-text={children}>
        <span>{children}</span>
      </span>
      {arrow && <ArrowUpRight />}
    </button>
  );
}

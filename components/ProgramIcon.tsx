import type { Program } from "@/lib/programs";
import { BookIcon, FlaskIcon, LaptopIcon, PaletteIcon } from "./Icons";

const ICONS = {
  jss: BookIcon,
  ss: FlaskIcon,
  stem: LaptopIcon,
  arts: PaletteIcon,
};

export default function ProgramIcon({ id }: { id: Program["id"] }) {
  const Icon = ICONS[id];
  return <Icon />;
}

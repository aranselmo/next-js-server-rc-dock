import { DockLayoutClient } from "../app/_components/dock-layout-client";
import { DockLayoutProvider } from "../app/_providers/dock-layout-context";


export default function Home() {
  return <div className="h-full w-full"><DockLayoutProvider><DockLayoutClient /></DockLayoutProvider></div>;
}

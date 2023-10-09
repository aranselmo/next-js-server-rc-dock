import { DockLayoutClientDynamic } from '../_components/dock-layout-client-dynamic';
import { DockLayoutProvider } from '../_providers/dock-layout-context';

export default function Home() {
  return <DockLayoutProvider><DockLayoutClientDynamic /></DockLayoutProvider>;
}

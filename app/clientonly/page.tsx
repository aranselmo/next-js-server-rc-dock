'use client';
import { DockLayoutClient } from '../_components/dock-layout-client';
import { DockLayoutProvider } from '../_providers/dock-layout-context';

export default function Home() {
  return <DockLayoutProvider><DockLayoutClient /></DockLayoutProvider>;
}

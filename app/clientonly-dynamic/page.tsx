'use client';
import dynamic from 'next/dynamic';
import { DockLayoutProvider } from '../_providers/dock-layout-context';

const DockLayoutClient = dynamic(() => import('../_components/dock-layout-client').then(layoutClient=>layoutClient.DockLayoutClient), { ssr: false });

export default function Home() {
  return <DockLayoutProvider><DockLayoutClient /></DockLayoutProvider>;
}

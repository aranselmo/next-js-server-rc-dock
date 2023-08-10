import { LayoutBase } from 'rc-dock';
import { DockLayoutClient } from './dock-layout-client';
import { DockLayoutProvider } from '../_providers/dock-layout-context';

async function getDefaultLayout() {
  const defaultLayoutRes = await fetch(
    `http://localhost:3000/api/layout`
    // {
    //   cache: 'no-store',
    // },
  );
  return defaultLayoutRes.json();
}

export async function DockLayoutServer() {
  const defaultLayoutData = getDefaultLayout();

  const [defaultLayout] = await Promise.all([defaultLayoutData]);

  return (
    <DockLayoutProvider defaultDockLayout={defaultLayout}>
      <DockLayoutClient/>
    </DockLayoutProvider>
    );
}

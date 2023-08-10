import { LayoutBase } from 'rc-dock';
import { DockLayoutClient } from './dock-layout-client';

async function getDefaultLayout() {
  const defaultLayoutRes = await fetch(
    `/api/layout`
    // {
    //   cache: 'no-store',
    // },
  );
  return defaultLayoutRes.json();
}

export async function DockLayoutServer() {
  const defaultLayoutData = getDefaultLayout();

  const [defaultLayout] = await Promise.all([defaultLayoutData]);

  return <DockLayoutClient defaultDockLayout={defaultLayout} />;
}

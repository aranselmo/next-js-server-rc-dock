'use client';
import React, { useEffect, useState } from 'react';
import 'rc-dock/dist/rc-dock-dark.css';
import {
  DockLayout,
  LayoutBase,
  DropDirection,
  TabBase,
  TabData,
} from 'rc-dock';
import { useDockLayoutContext } from '../_providers/dock-layout-context';

const DockLayoutClient = () => {
  const [dockLayoutContext, setDockLayoutContext] = useDockLayoutContext();

  let currDockLayout: DockLayout;
  const getRef = (r: any) => {
    currDockLayout = r;
    if (currDockLayout) {
      const currBase = currDockLayout.saveLayout();
      if (!dockLayoutContext?.layoutRef) {
        setDockLayoutContext({
          layoutBase: dockLayoutContext?.layoutBase,
          layoutRef: currDockLayout,
        });
      }
    }
  };

  const loadTabData = (data: TabBase): TabData => {
    console.log(data);
    return {
      ...data,
      title: <span title="Loading tab">Loading</span>,
      content: <span>Loading...</span>,
      closable: true,
    };
  };

  const onLayoutChange = (
    newLayout: LayoutBase,
    currentTabId: string,
    direction: DropDirection
  ) => {
    console.log(newLayout, currentTabId, direction);

    setDockLayoutContext({ layoutBase: newLayout, layoutRef: currDockLayout });
  };

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => setDomLoaded(true), []);

  return (
    <div className="flex flex-auto bg-gray-700 h-full w-full">
      {domLoaded && <DockLayout
        ref={getRef}
        onLayoutChange={onLayoutChange}
        layout={dockLayoutContext?.layoutBase}
        loadTab={loadTabData}
        style={{
          flex: '1 1 auto',
          height: '100%',
          width: '100%',
        }}
      ></DockLayout>}
    </div>
  );
};

export { DockLayoutClient };

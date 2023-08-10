'use client';
import React, { useEffect, useState } from 'react';
import DockLayout, { LayoutBase, LayoutData } from 'rc-dock';

export type DockLayoutContextType = {
  layoutBase?: LayoutBase;
  layoutRef?: DockLayout;
};

const DockLayoutContext = React.createContext<
  | [
      DockLayoutContextType | undefined,
      React.Dispatch<React.SetStateAction<DockLayoutContextType | undefined>>
    ]
  | undefined
>(undefined);

export function DockLayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const tab = {
    content: <div>Tab Content</div>,
    closable: true,
  };

  const [dockLayout, setDockLayout] = useState<
    DockLayoutContextType | undefined
  >({
    layoutBase: {
      dockbox: {
        mode: 'horizontal',
        children: [
          {
            tabs: [{ ...tab, id: 't1' }],
          },
          {
            tabs: [{ ...tab, id: 't2' }],
          },
        ],
      },
    },
  });

  return (
    <DockLayoutContext.Provider value={[dockLayout, setDockLayout]}>
      {children}
    </DockLayoutContext.Provider>
  );
}

export function useDockLayoutContext() {
  const context = React.useContext(DockLayoutContext);
  if (context === undefined) {
    throw new Error('useDockLayout must be used within a DockLayoutProvider');
  }
  return context;
}

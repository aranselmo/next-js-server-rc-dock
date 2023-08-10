'use client';
import React, { useEffect, useState } from 'react';
import DockLayout, { LayoutBase, LayoutData } from 'rc-dock';

export type DockLayoutContextType = {
  layoutBase?: LayoutBase;
  layoutRef?: DockLayout;
};

export type DockLayoutContextTypePartial = Partial<DockLayoutContextType>;

const DockLayoutContext = React.createContext<
  | [
      DockLayoutContextType,
      (valuesToSet: DockLayoutContextTypePartial) => void
    ]
  | undefined
>(undefined);

export function DockLayoutProvider({
  children,
  defaultDockLayout
}: {
  children: React.ReactNode;
  defaultDockLayout?: LayoutBase;
}) {
  const tab = {
    content: <div>Tab Content</div>,
    closable: true,
  };

  const [dockLayoutState, setDockLayout] = useState<
    DockLayoutContextType | undefined
  >({
    layoutBase: defaultDockLayout ? defaultDockLayout : {
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
    <DockLayoutContext.Provider value={[dockLayoutState, (valuesToSet: DockLayoutContextTypePartial) => {
      console.log(valuesToSet);
      setDockLayout({
        ...dockLayoutState,
        ...valuesToSet,
      });
    }]}>
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

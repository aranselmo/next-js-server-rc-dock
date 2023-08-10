import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const tab = {
    title: 'Loading...',
    content: 'Loading...',
    closable: true,
    cached: true,
  };

  let box = {
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
  };

  return NextResponse.json(box);
}

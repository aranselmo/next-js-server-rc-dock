import { DockLayoutProvider } from './_providers/dock-layout-context';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <DockLayoutProvider>{children}</DockLayoutProvider>
      </body>
    </html>
  );
}

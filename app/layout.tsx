import { DockLayoutProvider } from './_providers/dock-layout-context';
import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="test">
        {children}
      </body>
    </html>
  );
}

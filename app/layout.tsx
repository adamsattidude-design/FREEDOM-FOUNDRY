import './globals.css';
import type { Metadata } from 'next';
import Botpress from './components/Botpress';
import Nav from './components/Nav';

export const metadata: Metadata = { title: 'Freedom Foundry by Gideon', description: 'Courses, agency platforms and ATTITUDE automation for Ghanaian beginners and SMEs.' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><Nav />{children}<Botpress /><footer className="footer"><b>Freedom Foundry</b><span>Accra, Ghana • Courses • Agency • ATTITUDE AI</span></footer></body></html>;
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open NRI Demat & Trading Account | SBI Securities',
  description:
    'Open your NRI 3-in-1 Account with SBI Securities. PIS + Demat + Trading account for seamless investing in Indian markets from anywhere in the world.',
  keywords: [
    'NRI demat account',
    'NRI trading account',
    'SBI Securities NRI',
    'PIS account',
    'NRI investment India',
    'NRI 3-in-1 account',
  ],
};

export default function NRILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

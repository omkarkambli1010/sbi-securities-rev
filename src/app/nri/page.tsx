'use client';

import { ScrollProgress } from '@/components/animations/ScrollProgress/ScrollProgress';
import {
  NRIHero,
  TrustedGateway,
  WhyNRI,
  AccountProcess,
  QuickGuide,
  DocumentsRequired,
  ChargesTable,
  OpenAccountForm,
  ContactUs,
  FAQs,
} from '@/components/sections/NRI';

export default function NRIPage() {
  return (
    <>
      <ScrollProgress />
      <NRIHero />
      <TrustedGateway />
      <WhyNRI />
      <AccountProcess />
      <QuickGuide />
      <DocumentsRequired />
      <ChargesTable />
      <OpenAccountForm />
      <ContactUs />
      <FAQs />
    </>
  );
}

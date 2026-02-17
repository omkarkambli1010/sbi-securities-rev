'use client';

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { NRI_CONTACTS } from '@/data/nri';
import styles from './ContactUs.module.scss';

const iconMap: Record<string, React.ReactNode> = {
  Phone: <Phone size={24} />,
  Mail: <Mail size={24} />,
  MapPin: <MapPin size={24} />,
};

export function ContactUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.heading}>Contact Us</h2>
          <p className={styles.subtitle}>
            We are available from 9:30 AM to 6:30 PM IST (Monday to Saturday,
            excluding 2nd &amp; 4th Saturdays). You can also give us a missed
            call anytime, and our team will get back to you.
          </p>
        </FadeIn>
        <div className={styles.grid}>
          {NRI_CONTACTS.map((contact, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div className={styles.contactCard}>
                <div className={styles.iconCircle}>
                  {iconMap[contact.icon]}
                </div>
                <h3 className={styles.contactTitle}>{contact.title}</h3>
                <p className={styles.contactDetail}>{contact.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

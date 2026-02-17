'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import { NRI_ACCOUNT_TYPES } from '@/data/nri';
import styles from './NRIHero.module.scss';

export function NRIHero() {
  const [formData, setFormData] = useState({
    countryCode: '+91',
    mobile: '',
    email: '',
    accountType: '',
    termsAccepted: false,
    rmAssisted: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === 'checkbox'
        ? target.checked
        : target.value;
    setFormData((prev) => ({ ...prev, [target.name]: value }));
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image
          src="/images/nri/hero-bg.png"
          alt="NRI family at airport"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 60vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <FadeIn direction="left">
            <h1 className={styles.heading}>
              Open an NRI
              <br />
              3-in-1 Account
            </h1>
            <p className={styles.subtitle}>PIS + Demat + Trading a/c</p>
            <p className={styles.tagline}>
              Investing in Indian Markets,
              <br />
              Now Just a Tap Away
            </p>
            <div className={styles.ctas}>
              <button className={styles.ctaButton}>Get a Call Back</button>
              <button className={styles.ctaButton}>
                Account opening Documents
              </button>
            </div>
          </FadeIn>
        </div>

        <div className={styles.formWrapper}>
          <FadeIn direction="right">
            <div className={styles.formCard}>
              <h2 className={styles.formTitle}>Open Your NRI Account Now!</h2>
              <form onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Code*</label>
                    <select
                      name="countryCode"
                      className={`${styles.formInput} ${styles.codeSelect}`}
                      value={formData.countryCode}
                      onChange={handleChange}
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+971">+971</option>
                      <option value="+65">+65</option>
                      <option value="+61">+61</option>
                    </select>
                  </div>
                  <div className={styles.formGroup} style={{ flex: 2 }}>
                    <label className={styles.formLabel}>Mobile Number *</label>
                    <input
                      type="tel"
                      name="mobile"
                      className={styles.formInput}
                      placeholder="Enter mobile number"
                      value={formData.mobile}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.formGroup} style={{ marginBottom: '1rem' }}>
                  <label className={styles.formLabel}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    className={styles.formInput}
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.accountTypeSection}>
                  <span className={styles.accountTypeLabel}>
                    Choose Account Type :
                  </span>
                  <div className={styles.radioGroup}>
                    {NRI_ACCOUNT_TYPES.map((type) => (
                      <label key={type.value} className={styles.radioLabel}>
                        <input
                          type="radio"
                          name="accountType"
                          value={type.value}
                          checked={formData.accountType === type.value}
                          onChange={handleChange}
                        />
                        {type.label}
                      </label>
                    ))}
                  </div>
                </div>

                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                  />
                  By submitting this, I accept all the Terms &amp; Conditions &amp;
                  also confirming that I am not resident of FATF Sanction Country
                  list.
                </label>

                <label className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    name="rmAssisted"
                    checked={formData.rmAssisted}
                    onChange={handleChange}
                  />
                  Are you being assisted by a RM?
                </label>

                <p className={styles.resumeLink}>Resume Application</p>

                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

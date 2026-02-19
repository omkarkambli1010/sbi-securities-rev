'use client';

import React, { useState } from 'react';
import Image from 'next/image';
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
      {/* Airport terminal background */}
      <div className={styles.heroBg}>
        <Image
          src="/images/nri/hero-bg.png"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
        />
        <div className={styles.heroGradient} />
      </div>

      {/* NRI family photo — centered between text and form, bottom-anchored */}
      <div className={styles.familyImageWrap}>
        <Image
          src="/images/nri/nri-family.png"
          alt="NRI family"
          width={397}
          height={438}
          priority
          style={{ objectFit: 'contain', objectPosition: 'bottom center', width: '100%', height: '100%' }}
        />
      </div>

      {/* Two-column container: text (left) + form card (right) */}
      <div className={styles.container}>
        {/* LEFT: Text + buttons */}
        <div className={styles.content}>
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
        </div>

        {/* RIGHT: Form card */}
        <div className={styles.formWrapper}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Open Your NRI Account Now!</h2>

            <form onSubmit={handleSubmit}>
              {/* Phone: Code + Mobile in one row */}
              <div className={styles.phoneRow}>
                <div className={styles.codeGroup}>
                  <label className={styles.fieldLabel}>Code*</label>
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
                <div className={styles.mobileGroup}>
                  <label className={styles.fieldLabel}>Mobile Number *</label>
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

              {/* Email */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel}>Email *</label>
                <input
                  type="email"
                  name="email"
                  className={styles.formInput}
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Account type — label left, radios right */}
              <div className={styles.accountTypeRow}>
                <span className={styles.accountTypeLabel}>
                  Choose Account
                  <br />
                  Type :
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
                      <span>{type.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Checkboxes */}
              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                />
                <span>
                  By submitting this, I accept all the Terms &amp; Conditions
                  &amp; also confirming that I am not resident of FATF Sanction
                  Country list.
                </span>
              </label>

              <label className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  name="rmAssisted"
                  checked={formData.rmAssisted}
                  onChange={handleChange}
                />
                <span>Are you being assisted by a RM?</span>
              </label>

              <p className={styles.resumeLink}>Resume Application</p>

              <div className={styles.submitRow}>
                <button type="submit" className={styles.submitButton}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

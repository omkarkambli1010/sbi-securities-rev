'use client';

import React, { useState } from 'react';
import { FadeIn } from '@/components/animations/FadeIn/FadeIn';
import styles from './OpenAccountForm.module.scss';

export function OpenAccountForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    overseasLocation: '',
    countryCode: '+91',
    mobile: '',
    email: '',
    preferredProduct: '',
    termsAccepted: false,
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
    <section className={styles.section}>
      <div className={styles.container}>
        <FadeIn>
          <h2 className={styles.heading}>Open NRI Account</h2>
          <p className={styles.subtitle}>
            Fill in your details and relax. We&apos;ll call you back soon.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Full Name <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  className={styles.formInput}
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Overseas Location <span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  name="overseasLocation"
                  className={styles.formInput}
                  value={formData.overseasLocation}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Mobile Number <span className={styles.required}>*</span>
                </label>
                <div className={styles.mobileRow}>
                  <select
                    name="countryCode"
                    className={`${styles.formSelect} ${styles.codeSelect}`}
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
                  <input
                    type="tel"
                    name="mobile"
                    className={styles.formInput}
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>

            <div className={styles.formRowTwo}>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>
                  Email ID<span className={styles.required}>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className={styles.formInput}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.formLabel}>Preferred Product</label>
                <select
                  name="preferredProduct"
                  className={styles.formSelect}
                  value={formData.preferredProduct}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="equity">Equity Trading</option>
                  <option value="mutual-funds">Mutual Funds</option>
                  <option value="ipo">IPO</option>
                  <option value="bonds">Bonds</option>
                  <option value="etf">ETFs</option>
                </select>
              </div>
            </div>

            <label className={styles.checkboxLabel}>
              <input
                type="checkbox"
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
                required
              />
              By submitting this, I accept all the{' '}
              <a href="#terms">terms and conditions</a>
            </label>

            <div className={styles.submitWrapper}>
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

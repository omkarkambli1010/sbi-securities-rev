import React from 'react';
import { cn } from '@/lib/utils';
import { ButtonProps } from '@/types';
import styles from './Button.module.scss';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          styles.button,
          styles[variant],
          styles[size],
          isLoading && styles.loading,
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className={styles.spinner} aria-label="Loading..." />
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

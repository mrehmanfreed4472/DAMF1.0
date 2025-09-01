import React from 'react'

import { useTranslation } from '@/hooks/use-translation';

interface Props {
  value: number | string
  className?: string
}

export function CurrencyAED({ value, className }: Props) {
  const { language } = useTranslation();
  const text = typeof value === 'number' ? value.toLocaleString() : value;
  const label = language === 'ar' ? 'د.إ' : 'AED';
  return (
    <span className={`inline-flex items-center gap-1 ${className || ''}`}>
      <span className="opacity-80 font-medium">{label}</span>
      <span>{text}</span>
    </span>
  )
}

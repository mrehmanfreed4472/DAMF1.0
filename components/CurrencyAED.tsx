import React from 'react'

interface Props {
  value: number | string
  className?: string
}

export function CurrencyAED({ value, className }: Props) {
  const text = typeof value === 'number' ? value.toLocaleString() : value
  return (
    <span className={`inline-flex items-center gap-1 ${className || ''}`}>
      <span>{text}</span>
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2F1f92479787d647a5873d822973f760c7%2Fe6e68374926d438599be94ad2ae86788?format=webp&width=800"
        alt="AED"
        className="h-3 w-auto inline-block align-middle"
      />
    </span>
  )
}

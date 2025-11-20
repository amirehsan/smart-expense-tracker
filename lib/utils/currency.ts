import { CURRENCIES } from '@/lib/constants'

export function formatCurrency(
  amount: number,
  currency: keyof typeof CURRENCIES = 'USD'
): string {
  const config = CURRENCIES[currency]

  return new Intl.NumberFormat(config.locale, {
    style: 'currency',
    currency: currency,
  }).format(amount)
}

export function parseCurrency(value: string): number {
  // Remove all non-numeric characters except decimal point and minus sign
  const cleaned = value.replace(/[^0-9.-]/g, '')
  return parseFloat(cleaned) || 0
}

export function getCurrencySymbol(currency: keyof typeof CURRENCIES = 'USD'): string {
  return CURRENCIES[currency].symbol
}

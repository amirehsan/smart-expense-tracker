// Default categories for new users
export const DEFAULT_CATEGORIES = [
  { name: 'Food & Dining', icon: 'utensils', color: '#FF6B6B' },
  { name: 'Transportation', icon: 'car', color: '#4ECDC4' },
  { name: 'Shopping', icon: 'shopping-bag', color: '#95E1D3' },
  { name: 'Entertainment', icon: 'tv', color: '#F38181' },
  { name: 'Bills & Utilities', icon: 'file-text', color: '#AA96DA' },
  { name: 'Healthcare', icon: 'heart', color: '#FCBAD3' },
  { name: 'Education', icon: 'book', color: '#A8E6CF' },
  { name: 'Travel', icon: 'plane', color: '#FFD3B6' },
  { name: 'Income', icon: 'dollar-sign', color: '#52B788' },
  { name: 'Other', icon: 'more-horizontal', color: '#9E9E9E' },
] as const

// Account type configurations
export const ACCOUNT_TYPES = {
  checking: { label: 'Checking', icon: 'wallet', color: '#3B82F6' },
  savings: { label: 'Savings', icon: 'piggy-bank', color: '#10B981' },
  credit: { label: 'Credit Card', icon: 'credit-card', color: '#EF4444' },
  loan: { label: 'Loan', icon: 'landmark', color: '#F59E0B' },
  investment: { label: 'Investment', icon: 'trending-up', color: '#8B5CF6' },
  cash: { label: 'Cash', icon: 'banknote', color: '#6B7280' },
} as const

// Currency formats
export const CURRENCIES = {
  USD: { symbol: '$', name: 'US Dollar', locale: 'en-US' },
  EUR: { symbol: '€', name: 'Euro', locale: 'de-DE' },
  GBP: { symbol: '£', name: 'British Pound', locale: 'en-GB' },
  JPY: { symbol: '¥', name: 'Japanese Yen', locale: 'ja-JP' },
  CAD: { symbol: 'C$', name: 'Canadian Dollar', locale: 'en-CA' },
} as const

// Budget periods
export const BUDGET_PERIODS = {
  weekly: { label: 'Weekly', days: 7 },
  monthly: { label: 'Monthly', days: 30 },
  yearly: { label: 'Yearly', days: 365 },
} as const

// Date ranges for filters
export const DATE_RANGES = {
  'last-7-days': { label: 'Last 7 days', days: 7 },
  'last-30-days': { label: 'Last 30 days', days: 30 },
  'last-90-days': { label: 'Last 90 days', days: 90 },
  'this-month': { label: 'This month', type: 'month-current' },
  'last-month': { label: 'Last month', type: 'month-previous' },
  'this-year': { label: 'This year', type: 'year-current' },
  custom: { label: 'Custom range', type: 'custom' },
} as const

// Plaid configuration
export const PLAID_PRODUCTS = ['transactions'] as const
export const PLAID_COUNTRY_CODES = ['US'] as const

// App configuration
export const APP_CONFIG = {
  name: 'Smart Expense Tracker',
  description: 'Track your expenses and manage your finances',
  maxTransactionsPerPage: 100,
  maxReceiptSize: 5 * 1024 * 1024, // 5MB
  syncInterval: 24 * 60 * 60 * 1000, // 24 hours
} as const

import { Database } from './database'

// Helper types from database
export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type Enums<T extends keyof Database['public']['Enums']> = Database['public']['Enums'][T]

// Domain types
export type Profile = Tables<'profiles'>
export type PlaidItem = Tables<'plaid_items'>
export type Account = Tables<'accounts'>
export type Transaction = Tables<'transactions'>
export type Category = Tables<'categories'>
export type Budget = Tables<'budgets'>
export type Goal = Tables<'goals'>

// Account types
export type AccountType = 'checking' | 'savings' | 'credit' | 'loan' | 'investment' | 'cash'

// Goal types
export type GoalType = 'savings' | 'debt_payoff'

// Budget period types
export type BudgetPeriod = 'weekly' | 'monthly' | 'yearly'

// Transaction with related data
export interface TransactionWithDetails extends Transaction {
  account?: Account
  category?: Category
}

// Account with related data
export interface AccountWithDetails extends Account {
  plaid_item?: PlaidItem
  _count?: {
    transactions: number
  }
}

// Category with subcategories
export interface CategoryWithChildren extends Category {
  children?: Category[]
}

// Budget with progress
export interface BudgetWithProgress extends Budget {
  category?: Category
  spent: number
  remaining: number
  percentage: number
}

// Goal with progress
export interface GoalWithProgress extends Goal {
  progress_percentage: number
  estimated_completion_date: string | null
}

// Net worth snapshot
export interface NetWorthSnapshot {
  date: string
  total_assets: number
  total_liabilities: number
  net_worth: number
}

// Analytics types
export interface CategorySpending {
  category_id: string
  category_name: string
  amount: number
  transaction_count: number
  percentage: number
}

export interface MonthlyTrend {
  month: string
  income: number
  expenses: number
  net: number
}

export interface SpendingByMerchant {
  merchant_name: string
  amount: number
  transaction_count: number
}

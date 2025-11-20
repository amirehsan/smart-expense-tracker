export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string | null
          full_name: string | null
          avatar_url: string | null
          currency: string
          timezone: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          currency?: string
          timezone?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          full_name?: string | null
          avatar_url?: string | null
          currency?: string
          timezone?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      plaid_items: {
        Row: {
          id: string
          user_id: string
          item_id: string
          access_token: string
          institution_id: string | null
          institution_name: string | null
          status: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          item_id: string
          access_token: string
          institution_id?: string | null
          institution_name?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          item_id?: string
          access_token?: string
          institution_id?: string | null
          institution_name?: string | null
          status?: string
          created_at?: string
          updated_at?: string
        }
      }
      accounts: {
        Row: {
          id: string
          user_id: string
          plaid_item_id: string | null
          plaid_account_id: string | null
          name: string
          official_name: string | null
          type: string
          subtype: string | null
          balance: number
          currency: string
          is_manual: boolean
          is_active: boolean
          color: string | null
          icon: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          plaid_item_id?: string | null
          plaid_account_id?: string | null
          name: string
          official_name?: string | null
          type: string
          subtype?: string | null
          balance?: number
          currency?: string
          is_manual?: boolean
          is_active?: boolean
          color?: string | null
          icon?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          plaid_item_id?: string | null
          plaid_account_id?: string | null
          name?: string
          official_name?: string | null
          type?: string
          subtype?: string | null
          balance?: number
          currency?: string
          is_manual?: boolean
          is_active?: boolean
          color?: string | null
          icon?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      transactions: {
        Row: {
          id: string
          user_id: string
          account_id: string
          plaid_transaction_id: string | null
          date: string
          amount: number
          description: string
          merchant_name: string | null
          category_id: string | null
          is_pending: boolean
          is_income: boolean
          notes: string | null
          tags: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          account_id: string
          plaid_transaction_id?: string | null
          date: string
          amount: number
          description: string
          merchant_name?: string | null
          category_id?: string | null
          is_pending?: boolean
          is_income?: boolean
          notes?: string | null
          tags?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          account_id?: string
          plaid_transaction_id?: string | null
          date?: string
          amount?: number
          description?: string
          merchant_name?: string | null
          category_id?: string | null
          is_pending?: boolean
          is_income?: boolean
          notes?: string | null
          tags?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          user_id: string
          name: string
          parent_id: string | null
          color: string | null
          icon: string | null
          is_system: boolean
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          name: string
          parent_id?: string | null
          color?: string | null
          icon?: string | null
          is_system?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          name?: string
          parent_id?: string | null
          color?: string | null
          icon?: string | null
          is_system?: boolean
          created_at?: string
        }
      }
      budgets: {
        Row: {
          id: string
          user_id: string
          category_id: string
          amount: number
          period: string
          start_date: string
          end_date: string | null
          rollover: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          category_id: string
          amount: number
          period?: string
          start_date: string
          end_date?: string | null
          rollover?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          category_id?: string
          amount?: number
          period?: string
          start_date?: string
          end_date?: string | null
          rollover?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      goals: {
        Row: {
          id: string
          user_id: string
          type: string
          name: string
          target_amount: number
          current_amount: number
          target_date: string | null
          priority: number
          is_completed: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          type: string
          name: string
          target_amount: number
          current_amount?: number
          target_date?: string | null
          priority?: number
          is_completed?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          type?: string
          name?: string
          target_amount?: number
          current_amount?: number
          target_date?: string | null
          priority?: number
          is_completed?: boolean
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

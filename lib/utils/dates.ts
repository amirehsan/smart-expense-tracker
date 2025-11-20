import { format, formatDistanceToNow, subDays, startOfMonth, endOfMonth, startOfYear, endOfYear } from 'date-fns'

export function formatDate(date: Date | string, formatStr: string = 'MMM dd, yyyy'): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return format(dateObj, formatStr)
}

export function formatRelativeDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  return formatDistanceToNow(dateObj, { addSuffix: true })
}

export function getDateRange(range: string): { start: Date; end: Date } {
  const now = new Date()

  switch (range) {
    case 'last-7-days':
      return { start: subDays(now, 7), end: now }
    case 'last-30-days':
      return { start: subDays(now, 30), end: now }
    case 'last-90-days':
      return { start: subDays(now, 90), end: now }
    case 'this-month':
      return { start: startOfMonth(now), end: endOfMonth(now) }
    case 'last-month': {
      const lastMonth = subDays(startOfMonth(now), 1)
      return { start: startOfMonth(lastMonth), end: endOfMonth(lastMonth) }
    }
    case 'this-year':
      return { start: startOfYear(now), end: endOfYear(now) }
    default:
      return { start: subDays(now, 30), end: now }
  }
}

export function groupTransactionsByDate(transactions: any[]): Record<string, any[]> {
  const groups: Record<string, any[]> = {}

  transactions.forEach((transaction) => {
    const dateKey = formatDate(transaction.date, 'yyyy-MM-dd')
    if (!groups[dateKey]) {
      groups[dateKey] = []
    }
    groups[dateKey].push(transaction)
  })

  return groups
}

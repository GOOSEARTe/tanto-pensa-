import { format, formatDistanceToNow } from 'date-fns'

export const formatDate = (date: Date): string => {
  return format(date, 'PPP')
}

export const formatTime = (date: Date): string => {
  return format(date, 'p')
}

export const getRelativeTime = (date: Date): string => {
  return formatDistanceToNow(date, { addSuffix: true })
}
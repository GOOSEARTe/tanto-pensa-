import { format, formatDistance } from 'date-fns';

export const DateFormatter = {
  formatDate(date, formatString = 'PP') {
    return format(date, formatString);
  },

  formatTime(date, formatString = 'p') {
    return format(date, formatString);
  },

  formatDateTime(date, formatString = 'PPp') {
    return format(date, formatString);
  },

  getRelativeTime(date) {
    return formatDistance(date, new Date(), { addSuffix: true });
  }
};
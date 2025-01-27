export const formatNumber = (
  value: number,
  options: Intl.NumberFormatOptions = {}
): string => {
  return new Intl.NumberFormat('en-US', options).format(value)
}

export const formatCurrency = (
  value: number,
  currency = 'USD'
): string => {
  return formatNumber(value, {
    style: 'currency',
    currency
  })
}

export const formatPercent = (
  value: number,
  decimals = 0
): string => {
  return formatNumber(value, {
    style: 'percent',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  })
}
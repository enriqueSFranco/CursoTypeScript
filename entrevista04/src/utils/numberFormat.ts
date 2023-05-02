export function numberFormat(value: number): string {
  const options = {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
    roundingIncrement: 5
  }
  const nf = new Intl.NumberFormat('en-US', options)

  return nf.format(value)
}
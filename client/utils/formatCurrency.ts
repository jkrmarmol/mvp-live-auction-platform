export const formatCurrency = (amount: number, currency: string = "PHP") =>
  new Intl.NumberFormat("en-PH", { style: "currency", currency }).format(amount);

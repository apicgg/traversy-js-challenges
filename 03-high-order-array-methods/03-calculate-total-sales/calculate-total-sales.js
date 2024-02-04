function calculateTotalSalesWithTax(products, taxRate) {
  const total = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const tax = (total * taxRate) / 100;
  return tax + total;
}

module.exports = calculateTotalSalesWithTax;

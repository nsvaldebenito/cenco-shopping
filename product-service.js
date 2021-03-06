const products = [
  { code: "BT", name: "blue t-shit", price: 100, discount: 20 },
  { code: "RT", name: "red t-shit", price: 100, discount: 0 },
  { code: "BJX", name: "blue jeans X", price: 100, discount: 5 },
  { code: "BJY", name: "blue jeans Y", price: 100, discount: 30 },
  { code: "BJZ", name: "blue jeans Z", price: 100, discount: 0 },
];


const getAllProduct = () => products;
const getProductByCode = (code) =>
  products.find((product) => product.code == req.params.code);

const getCheckout = () => {
  const simpleProduct = products.map(product => { return { code: product.code } })

  const total = products.reduce((a, b) => ({ price: a.price + b.price }));

  const totalDiscount = products.reduce((a, b) => ({ discount: a.discount + b.discount }));

  const result = {
    total: total.price,
    totalDiscount: totalDiscount.discount,
    totalToPay: total.price - totalDiscount.discount,
    product: simpleProduct,
  };

  return result;

}

module.exports = { getAllProduct, getProductByCode, getCheckout };

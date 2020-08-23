const { getAllProduct, getProductByCode, getCheckout } = require("./product-service");

describe("product-service", () => {
  it("should return all products", () => {
    expect(getAllProduct().length).toBe(5);
  });

  it.skip("should return a product by code", () => {
    const p = getProductByCode("123");
  });

  it("should return a checkout ", () => {
    let data = {
      total: 500,
      totalDiscount: 55,
      totalToPay: 445,
      product: [
        { code: "BT" },
        { code: "RT" },
        { code: "BJX" },
        { code: "BJY" },
        { code: "BJZ" }
      ],
    };
    expect(getCheckout()).toEqual(data);
  });
});

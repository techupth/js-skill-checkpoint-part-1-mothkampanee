// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = ["SALE50", "SALE20", ""];
// เริ่มเขียนโค้ดตรงนี้
const calculateTotalPrice = (products, promotionCode) => {
  let total = 0;
  for (let item of products) {
    total += item.price * item.quantity;
  }

  if (promotionCode.includes("SALE50")) {
    total = total - total * 0.5;
  } else if (promotionCode.includes("SALE20")) {
    total = total - total * 0.2;
  } else {
    total;
  }

  return total;
};

let result = calculateTotalPrice(products, promotionCode[2]);
console.log(result);

result = calculateTotalPrice(products, promotionCode[1]);
console.log(result);

result = calculateTotalPrice(products, promotionCode[0]);
console.log(result);

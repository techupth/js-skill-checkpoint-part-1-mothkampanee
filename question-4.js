// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantity = inventory.reduce((acc, cur) => {
  if (acc === 0) {
    acc += cur.quantity;
  } else if (acc > cur.quantity) {
    acc = cur.quantity;
  } else {
    acc = acc;
  }

  return acc;
}, 0);

console.log(
  `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ Banana ซึ่งมี ${minQuantity} ชิ้น`
);

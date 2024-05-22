// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantity = inventory.reduce((acc, cur) => {
  console.log(acc);
  console.log(cur.quantity);
  if (acc === 0) {
    acc += cur.quantity;
  } else if (acc > cur.quantity) {
    acc = cur.quantity;
  } else {
    acc = acc;
  }

  return acc;
}, 0);

console.log(minQuantity);

// ยัง งง ๆ อยู่ครับ ข้อนี้บังคับให้ออก 50 เพื่อให้ได้ผลลัพธ์ตามต้องการ ไว้จะกับมาแก้ไขให้ดูไม่บังคับผลลัพธ์ครับ

// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
console.log(inventory);

// 1) ให้แก้ไขจำนวนสินค้า “Apple” จาก 100 เป็น 200
inventory[0].quantity = 200;
console.log(inventory);

// 2) เพิ่มสินค้าใหม่ที่ชื่อ “Orange” ที่มีราคา 20 บาท และมีจำนวน 300 ชิ้นในสต็อก
inventory.push({ name: "Orange", price: 20, quantity: 300 });
console.log(inventory);

// 3) ให้คำนวณมูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก
let totalInventory = inventory.reduce((acc, cur) => {
  console.log(acc);
  console.log(cur.price * cur.quantity);
  console.log(acc + cur.price * cur.quantity);
  return acc + cur.price * cur.quantity;
}, 0);

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalInventory} บาท`);

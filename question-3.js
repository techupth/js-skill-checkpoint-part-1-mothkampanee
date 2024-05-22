// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
// ให้เขียนฟังก์ชัน checkPasswordStrength ซึ่งรับ userPassword เป็น Argument และ Return ผลลัพธ์ออกมาเป็น String ตามเงื่อนไขต่อไปนี้ : ตัวอักษร < 6 = "Weak", ตัวอักษร >= 6 = “Medium”, ตัวอักษร >= 10 = “Strong”
const checkPasswordStrength = (userPassword) => {
  let message = "";
  if (userPassword.length >= 10) {
    message = "Strong";
  } else if (userPassword.length >= 6) {
    message = "Medium";
  } else {
    message = "Weak";
  }

  return message;
};

userPassword = checkPasswordStrength("swnalWadqQ");
console.log(userPassword);

userPassword = checkPasswordStrength("TechUp");
console.log(userPassword);

userPassword = checkPasswordStrength("abcde");
console.log(userPassword);

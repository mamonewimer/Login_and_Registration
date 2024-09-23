function Validation(values) {
    let error = {};
  
    // نمط البريد الإلكتروني الصحيح
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // نمط كلمة المرور الصحيح: على الأقل 8 أحرف، تحتوي على حرف كبير وصغير ورقم
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;
  
    // التحقق من البريد الإلكتروني
    if (values.email === "") {
      error.email = "Email should not be empty";
    } else if (!email_pattern.test(values.email)) {
      error.email = "Email format is invalid";
    } else {
      error.email = ""; // إزالة التحذير عند الإدخال الصحيح
    }
  
    // التحقق من كلمة المرور
    if (values.password === "") {
      error.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
      error.password = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number";
    } else {
      error.password = ""; // إزالة التحذير عند الإدخال الصحيح
    }
  
    return error;
  }
  
  export default Validation;
  
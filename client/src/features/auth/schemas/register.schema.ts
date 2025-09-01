import * as yup from 'yup';

export const registerSchema = yup.object({
  username: yup
    .string()
    .trim()
    .required('กรุณากรอกชื่อผู้ใช้งาน')
    .min(3, 'ชื่อผู้ใช้งานต้องมีอย่างน้อย 3 ตัวอักษร'),

  email: yup
    .string()
    .trim()
    .required('กรุณากรอกอีเมล')
    .email('รูปแบบอีเมลไม่ถูกต้อง'),

  password: yup
    .string()
    .trim()
    .required('กรุณากรอกรหัสผ่าน')
    .min(8, 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
      'รหัสผ่านต้องมีอย่างน้อย 1 ตัวพิมพ์ใหญ่, 1 ตัวพิมพ์เล็ก, 1 ตัวเลข และ 1 สัญลักษณ์'
    ),

  confirmPassword: yup
    .string()
    .required('กรุณายืนยันรหัสผ่าน')
    .oneOf([yup.ref('password')], 'รหัสผ่านและการยืนยันรหัสผ่านต้องตรงกัน'),
});

export type RegisterSchemaType = yup.InferType<typeof registerSchema>;
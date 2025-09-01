import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup
    .string()
    .trim()
    .required("กรุณากรอกชื่อผู้ใช้งาน")
    .min(3, "ชื่อผู้ใช้งานต้องมีอย่างน้อย 3 ตัวอักษร"),

  password: yup
    .string()
    .required("กรุณากรอกรหัสผ่าน")
    .min(8, "รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร"),
});

export type LoginSchemaType = yup.InferType<typeof loginSchema>;

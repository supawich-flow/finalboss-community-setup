import * as yup from "yup";

export const editProfileSchema = yup.object({
  displayName: yup.string().optional(),
  nickname: yup.string().optional(),
  title: yup.string().max(50).optional(),
  rank: yup
    .string()
    .oneOf([
      "Iron",
      "Bronze",
      "Silver",
      "Gold",
      "Platinum",
      "Diamond",
      "Immortal",
      "Radiant",
    ])
    .optional(),
  bio: yup.string().max(500).optional(),
  avatarUrl: yup.string().url().optional(),
});

export type editProfileSchemaType = yup.InferType<typeof editProfileSchema>;

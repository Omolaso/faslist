export type PasswordType = {
  password: boolean;
  confirmPassword: boolean;
};

export type SignupFormData = {
  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

export type LoginFormData = { email: string; password: string };

export type UserProfileData = {
  username: string;
  email: string;
  phone: string;
};

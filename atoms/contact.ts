import { atom } from "recoil";

export const IS_FORM_CONTACT_SENT = atom<boolean>({
  key: "isFormContactSent",
  default: false,
});

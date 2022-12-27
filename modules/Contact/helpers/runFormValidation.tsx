const EMAIL_FIELDS = ["email"];
const NOT_REQUIRED_FIELDS = ["more"];
const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const runFormValidation = (formData: Contact.FormData): Contact.FormError[] => {
  const errors: Contact.FormError[] = [];

  for (const attr in formData) {
    const value = (formData as any)[attr];

    if (NOT_REQUIRED_FIELDS.includes(attr)) {
      continue;
    }

    if (EMAIL_FIELDS.includes(attr)) {
      if (!EMAIL_REGEX.test(value)) {
        errors.push({ field: attr, error: "invalid-email" });
        continue;
      }
    }

    if (!value || value === "") {
      errors.push({ field: attr, error: "empty" });
      continue;
    }
  }

  return errors;
};

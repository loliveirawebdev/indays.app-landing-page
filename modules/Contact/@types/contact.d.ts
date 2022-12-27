namespace Contact {
  interface FormQuestion {
    key: any;
    legend: string;
    options?: string[];
    type: "premade-options" | "user-input";
  }

  interface FormData {
    name: string;
    email: string;
    youAre: string;
    applicationType: string;
    start: string;
    budget: string;
    more?: string;
  }

  interface FormError {
    field: string;
    error: "empty" | "invalid-email";
  }
}

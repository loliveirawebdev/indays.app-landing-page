namespace Contact {
  interface FormQuestion {
    key: any;
    legend: string;
    options?: string[];
    type: "premade-options" | "user-input";
  }
}

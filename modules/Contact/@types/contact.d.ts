namespace Contact {
  interface FormQuestion {
    legend: string;
    options?: string[];
    otherStrings?: PremadeOtherStrings;
    type: "premade-options" | "user-input";
  }

  interface PremadeOtherStrings {
    checkbox: string;
    input: string;
  }
}

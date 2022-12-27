export const buildHeaderMenuItems = (menu: any): Header.MenuItem[] => {
  return [
    {
      label: menu.howWeWork,
      action: "how-we-work",
    },
    {
      label: menu.solutions,
      action: "solutions",
    },
    {
      label: menu.contact,
      action: "contact",
    },
  ];
};

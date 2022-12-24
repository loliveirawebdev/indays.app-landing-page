export const buildHeaderMenuItems = (menu: any): Header.MenuItem[] => {
  return [
    {
      label: menu.howWeWork,
      action: "#",
    },
    {
      label: menu.solutions,
      action: "#",
    },
    {
      label: menu.contact,
      action: "#",
    },
  ];
};

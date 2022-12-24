export const buildHeaderMenuItems = (strings: any): Header.MenuItem[] => {
  return [
    {
      label: strings.blocks.header.menu.howWeWork,
      action: "#",
    },
    {
      label: strings.blocks.header.menu.solutions,
      action: "#",
    },
    {
      label: strings.blocks.header.menu.contact,
      action: "#",
    },
  ];
};

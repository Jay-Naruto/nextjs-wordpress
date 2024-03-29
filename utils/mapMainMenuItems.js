import { v4 as uuid } from "uuid";

export const mapMainMenuItems = (menuItems) => {
  return menuItems?.map((menuItem) => ({
    id: uuid(),
    destination:menuItem.menuItem.destinations?.uri || null,
    label: menuItem.menuItem.label,
    subMenuItems: (menuItem.items || []).map((subMenuItem) => ({
      id: uuid(),
       destination: subMenuItem.destination?.uri || null,
      label: subMenuItem.label,
    })),
  }));
};
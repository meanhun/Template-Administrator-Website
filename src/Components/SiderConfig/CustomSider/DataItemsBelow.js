export function DataItemsBelow() {
  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };

  const items = [getItem("About us", "About-us", null, null)];

  return items;
}

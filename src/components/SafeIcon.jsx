import React from "react";
// Render icon components defensively. This prevents a bad/dynamic icon reference
// from crashing the entire React tree in a production build.
export function SafeIcon({ icon: Icon, ...props }) {
  const type = typeof Icon;
  if (!Icon || (type !== "function" && type !== "object")) return null;
  return React.createElement(Icon, props);
}

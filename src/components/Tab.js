import React from "react";

export const Tab = ({ className, data = [], value, onChange = () => {} }) => {
  return (
    <div className={`tab-container ${className}`}>
      {data.map((item, index) => (
        <div
          className={`tab-container-control ${
            item.id === value ? "active" : ""
          }`}
          key={item.id}
          onClick={() => onChange(item.id)}
          style={{ zIndex: item.id === value ? 99 : 9 - index }}
        >
          {item.title}
        </div>
      ))}
    </div>
  );
};

import React from "react";

const FormsItem = (value) => {
  const { name, age } = value.value;
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};

export default FormsItem;

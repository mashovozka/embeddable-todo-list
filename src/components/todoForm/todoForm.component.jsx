import { useState } from "react";

export default function TodoForm() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return <input required type="text" value={value} onChange={handleChange} />;
}

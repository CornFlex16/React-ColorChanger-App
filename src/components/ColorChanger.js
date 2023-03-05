import React, { useState } from "react";
import Form from "react-bootstrap/Form";

function ColorChanger() {
  const [color, setColor] = useState("");

  function handleChange(event) {
    setColor(event.target.value);
  }

  return (
    <div className="bg-light p-3">
      <Form.Group controlId="formBasicColor">
        <Form.Label>Enter a color name:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Color name"
          value={color}
          onChange={handleChange}
        />
      </Form.Group>
      <div className="p-3 mb-3" style={{ backgroundColor: color }}>
        This div's background color will change based on your input.
      </div>
    </div>
  );
}

export default ColorChanger;

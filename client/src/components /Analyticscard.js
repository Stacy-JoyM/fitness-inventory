
// src/components/DashboardCard.js
import React from "react";
import { Card, Button } from "react-bootstrap";

function Analyticscard({ title, text, buttonText, onClick }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        {buttonText && (
          <Button variant="primary" onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default Analyticscard;

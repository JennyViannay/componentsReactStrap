import React from 'react'
import { Badge } from 'reactstrap'

const ContextualVariations = (props) => {
  return (
    <div>
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="light">Light</Badge>
      <Badge color="dark">Dark</Badge>

      <br/>

      <Badge color="primary" pill>Primary</Badge>
      <Badge color="secondary" pill>Secondary</Badge>
      <Badge color="success" pill>Success</Badge>
      <Badge color="danger" pill>Danger</Badge>
      <Badge color="warning" pill>Warning</Badge>
      <Badge color="info" pill>Info</Badge>
      <Badge color="light" pill>Light</Badge>
      <Badge color="dark" pill>Dark</Badge>

      <br/>
      <h3 className="my-5">Links variations</h3>
      <Badge href="#" color="primary">Primary</Badge>
      <Badge href="#" color="secondary">Secondary</Badge>
      <Badge href="#" color="success">Success</Badge>
      <Badge href="#" color="danger">Danger</Badge>
      <Badge href="#" color="warning">Warning</Badge>
      <Badge href="#" color="info">Info</Badge>
      <Badge href="#" color="light">Light</Badge>
      <Badge href="#" color="dark">Dark</Badge>
    </div>
  );

}

export default ContextualVariations
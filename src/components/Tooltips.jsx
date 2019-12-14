import React, { useState } from 'react';
import { Tooltip } from 'reactstrap';

const Example = (props) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <div>
      <p>Somewhere in here is a <span style={{textDecoration: "underline", color:"blue"}} href="#" id="TooltipExample">tooltip</span>.</p>
      <Tooltip placement="right" isOpen={tooltipOpen} target="TooltipExample" toggle={toggle}>
        Hello world!
      </Tooltip>
    </div>
  );
}

export default Example;
import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import Cart from "../components/cart/";

const Popoverr = (props) => {
    const [popoverOpen, setPopoverOpen] = useState(false);

    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
        <button id="Popover1" type="button">
        Giỏ hàng
    </button>
    <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
        <PopoverHeader>Giỏ hàng</PopoverHeader>
    <PopoverBody><Cart/></PopoverBody>
    </Popover>
    </div>
);
}
export default Popoverr;
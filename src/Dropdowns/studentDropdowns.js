import React from "react";
import { createPopper } from "@popperjs/core";
import { Icon } from '@iconify/react';

const StudetAction = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <Icon icon="icon-park-outline:more-one" />
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-primary text-left rounded shadow-lg"
        }
      >
        <a
          href="#pablo"
          className={
            "text-sm py-2 hover:bg-sky-100 items-center flex px-4 font-normal block w-full whitespace-nowrap bg-transparent "
          }
          onClick={(e) => e.preventDefault()}
        >
            <i className='mr-2'><Icon icon="ep:view" /></i>
          View
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 hover:bg-sky-100 items-center flex px-4 font-normal block w-full whitespace-nowrap bg-transparent "
          }
          onClick={(e) => e.preventDefault()}
        >
            <i className='mr-2'><Icon icon="la:edit" /></i>
          Edit
        </a>
        <a
          href="#pablo"
          className={
            "text-sm py-2 hover:bg-sky-100 items-center flex px-4 font-normal block w-full whitespace-nowrap bg-transparent"
          }
          onClick={(e) => e.preventDefault()}
        >
            <i className='mr-2'><Icon icon="mdi-light:delete" /></i>
          Delete
        </a>
      </div>
    </>
  );
};

export default StudetAction;

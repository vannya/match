import React from "react";

const LinkButton = ({className, link, children}) => {
  return (
    <a className={className} href={link}>
      {children}
    </a>
  );
};

export default LinkButton;

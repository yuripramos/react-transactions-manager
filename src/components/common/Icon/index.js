import React from "react";
import { string } from "prop-types";

/*ICONS*/
import Transactions from "./Transactions";
import NotFound from "./NotFound";
import Wallet from "./Wallet";
import Menu from "./Menu";
import MenuClose from "./MenuClose";
import To from "./To";

const IconGenerator = props => {
  switch (props.name) {
    case "NotFound":
      return <NotFound {...props} />;
    case "Transactions":
      return <Transactions {...props} />;
    case "Wallet":
      return <Wallet {...props} />;
    case "Menu":
      return <Menu {...props} />;
    case "MenuClose":
      return <MenuClose {...props} />;
    case "To":
      return <To {...props} />;
    default:
      return;
  }
};

IconGenerator.propTypes = {
  name: string
};

export default IconGenerator;

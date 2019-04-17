import React from "react";
import { string } from "prop-types";

/*ICONS*/
import Flag from "./Flag";
import Star from "./Star";
import NotFound from "./NotFound";
import Truck from "./Truck";
import To from "./To";
import Airport from "./Airport";
import Cfs from "./Cfs";
import LiftGate from "./LiftGate";
import PalletJack from "./PalletJack";
import Lumper from "./Lumper";
import Menu from "./Menu";
import MenuClose from "./MenuClose";

const IconGenerator = props => {
  switch (props.name) {
    case "Flag":
      return <Flag {...props} />;
    case "Star":
      return <Star {...props} />;
    case "NotFound":
      return <NotFound {...props} />;
    case "Truck":
      return <Truck {...props} />;
    case "To":
      return <To {...props} />;
    case "airport":
      return <Airport {...props} />;
    case "cfs":
      return <Cfs {...props} />;
    case "lift_gate":
      return <LiftGate {...props} />;
    case "pallet_jack":
      return <PalletJack {...props} />;
    case "lumper":
      return <Lumper {...props} />;
    case "Menu":
      return <Menu {...props} />;
    case "MenuClose":
      return <MenuClose {...props} />;
    default:
      return;
  }
};

IconGenerator.propTypes = {
  name: string
};

export default IconGenerator;

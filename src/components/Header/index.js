import Header from "./Header";
import { connect } from "redux-zero/react";
import { withRouter } from "react-router-dom";

import transactionsActions from "../../actions/Transactions";

export default connect(
  ({ transfers }) => ({ transfers }),
  transactionsActions
)(withRouter(Header));

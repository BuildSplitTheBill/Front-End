import { combineActions } from "redux-actions";
import { userLogin, userRegistration, userLogout } from "./credentialsActions";

export default combineActions({
  userLogin,
  userRegistration,
  userLogout
});

import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { signIn, signOut } from "../../actions";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";

const Auth0Wrapper = ({ signIn, signOut, isSignedIn, className }) => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  useEffect(() => {
    //request to auth0 server
    if (isAuthenticated) {
      signIn(user);
    } else {
      signOut();
    }
  }, [isAuthenticated, user, signIn, signOut]);

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    }
    if (isSignedIn) {
      return <LogoutButton />;
    }

    return <LoginButton />;
  };

  return <div className={className}>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(Auth0Wrapper);

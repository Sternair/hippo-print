import React, { useEffect } from "react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Hub } from "aws-amplify";
import Router from "next/router";
import "./login.scss";

const LogIn: React.FC = (props) => {
  useEffect(() => {
    Hub.listen("auth", ({ payload: { event, data } }) => {
      switch (event) {
        case "signIn":
        case "signOut":
          Router.push("/");
      }
    });
  }, [props]);

  return <div>Login</div>;
};

export default withAuthenticator(LogIn, {
  usernameAlias: "email",
});

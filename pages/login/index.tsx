import React from "react";
import LogIn from "../../components/LogIn/LogIn";
import Layout from "../../components/Layout/Layout";

const LoginPage: React.FC = () => {
  return (
    <Layout>
      <div className="loginForm">
        <LogIn />
      </div>
    </Layout>
  );
};

export default LoginPage;

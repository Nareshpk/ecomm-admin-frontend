import React, { useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { useSelector, useStore } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import HomePage from "../component/HomePage";

export default function AuthenticatedRoutes() {
  const auth = localStorage.getItem("auth");
  const parsedAuth = auth ? JSON.parse(auth) : null;
  const navigateTo = useNavigate();
  const posthog = usePostHog();

  const store_ = useStore();

  function redirectToLogin() {
    navigateTo("/");
  }

  useEffect(() => {
    if (!parsedAuth || !parsedAuth?.isAuthenticated) {
      redirectToLogin();
    }
  }, [auth]);

  return (
    <div>
      <HomePage>
        <Outlet />
      </HomePage>
    </div>
  );
}

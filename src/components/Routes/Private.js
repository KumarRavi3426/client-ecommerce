import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import axios from "axios";
import { Outlet } from "react-router-dom";
import Spinner from "../Spinner";

const PrivateRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/auth/user-auth`,
          {
            headers: {
              //set headers in context
              Authorization: auth?.token,
            },
          }
        );
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.log("Admin auth check failed:", error);
        setOk(false);
      }
    };
    if (auth?.token) {
      authCheck();
    }
  }, [auth?.token]);

  return ok ? <Outlet /> : <Spinner />;
};

export default PrivateRoute;

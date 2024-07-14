import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children, title, description, author, keywords }) => {
  return (
    <div>
      <ToastContainer />
      <Helmet>
        <meta charSet="UTF-8" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
      </Helmet>
      <Header />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "website",
  description: "mern stack project",
  author: "ravi",
  keywords: "mern, react, node, mongodb",
};

export default Layout;

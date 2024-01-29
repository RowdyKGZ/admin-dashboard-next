import React from "react";

import styles from "../_ui/dashboard/dashboard.module.css";
import Sidebar from "../_ui/dashboard/sidebar/sidebar";
import Navbar from "../_ui/dashboard/navbar/navbar";
import Footer from "../_ui/dashboard/footer/footer";

const DashboardLayout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>

      <div className={styles.content}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;

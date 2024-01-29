import Card from "../_ui/dashboard/card/card";
import styles from "../_ui/dashboard/dashboard.module.css";
import Rightbar from "../_ui/dashboard/rightbar/rightbar";
import Transactions from "../_ui/dashboard/transactions/transactions";
import Chart from "../_ui/dashboard/chart/chart";

const DashboardPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>

        <Transactions />
        <Chart />
      </div>

      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;

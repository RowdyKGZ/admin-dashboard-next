import Link from "next/link";
import Image from "next/image";

import Search from "@/app/_ui/dashboard/search/search";
import Pagination from "@/app/_ui/dashboard/pagination/pagination";
import styles from "../../_ui/dashboard/products/products.module.css";

const ProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for products..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Phone
              </div>
            </td>

            <td>desc</td>
            <td>300$</td>
            <td>2020.20.20</td>
            <td>70</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  alt="product"
                  width={40}
                  height={40}
                  className={styles.productImage}
                />
                Phone
              </div>
            </td>

            <td>desc</td>
            <td>300$</td>
            <td>2020.20.20</td>
            <td>70</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/">
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default ProductPage;

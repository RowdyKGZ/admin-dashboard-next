import Image from "next/image";

import styles from "../../../_ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="image" fill />
        </div>
        Phone
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Title</label>
          <input type="text" name="title" placeholder="Phone" />
          <label>Price</label>
          <input type="text" name="price" placeholder="999$" />
          <label>Stock</label>
          <input type="number" name="stock" placeholder="23" />
          <label>Color</label>
          <input type="text" name="color" placeholder="red" />
          <label>Size</label>
          <input type="text" name="size" placeholder="240X450" />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder="  Description"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;

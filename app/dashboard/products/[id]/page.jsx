import Image from "next/image";

import { fetchProduct } from "@/app/lib/data";
import { updateProduct } from "@/app/lib/actions";
import styles from "@/app/_ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = async ({ params }) => {
  const { id } = params;

  const product = await fetchProduct(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="image" fill />
        </div>
        {product.title}
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form} action={updateProduct}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="text" name="price" placeholder={`${product.price}$`} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input type="text" name="color" placeholder={product.color} />
          <label>Size</label>
          <input type="text" name="size" placeholder={product.size} />
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
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;

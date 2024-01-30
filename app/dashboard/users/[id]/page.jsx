import Image from "next/image";

import styles from "../../../_ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noavatar.png" alt="image" fill />
        </div>
        Jon Doe
      </div>

      <div className={styles.formContainer}>
        <form className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Jon Doe" />

          <label>Email</label>
          <input type="email" name="email" placeholder="johndoe@mail.ru" />

          <label>Password</label>
          <input type="password" name="password" />

          <label>Phone</label>
          <input type="text" name="phone" placeholder="123 123 444" />

          <label>Address</label>
          <input type="text" name="address" placeholder="st. Abc" />

          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <label>Is active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;

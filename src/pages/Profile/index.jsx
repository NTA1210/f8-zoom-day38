import classNames from "classnames/bind";
import { useState, useEffect } from "react";

//scss
import styles from "./Profile.module.scss";

//Images
import defaultImage from "@/assets/images/user-logo.png";

const cx = classNames.bind(styles);

function Profile() {
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  const handleChange = (e) => {
    const file = e.target.files[0];
    const preViewURL = URL.createObjectURL(file);
    console.log(preViewURL);

    setPreviewUrl(preViewURL);
  };

  return (
    <div className={cx("wrapper")}>
      <label>
        <input type="file" hidden onChange={handleChange} />
        <img
          src={previewUrl || defaultImage}
          alt="avatar"
          className={cx("avatar")}
        />
      </label>
    </div>
  );
}

export default Profile;

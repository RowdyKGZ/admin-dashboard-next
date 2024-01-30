"use client";

import { MdSearch } from "react-icons/md";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useThrottledCallback } from "use-debounce";

import styles from "./search.module.css";

const Search = ({ placeholder }) => {
  const { replace } = useRouter();
  const serachParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useThrottledCallback((e) => {
    e.preventDefault();

    const params = new URLSearchParams(serachParams);

    if (e.target.value) {
      e.target.value.length > 2 && params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathname}?${params}`);
  }, 300);

  return (
    <div className={styles.container}>
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className={styles.input}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;

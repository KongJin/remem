import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [books, setBooks] = useState<any>([]);
  const [title, setTitle] = useState<any>("");

  const getBook = async () => {
    const { data } = await axios.get("http://localhost:4000/book");

    setBooks(data);
  };

  useEffect(() => {
    getBook();
  }, []);

  const postBook = async () => {
    const { data } = await axios.post("http://localhost:4000/book", { title });
    setTitle("");
    setBooks([...books, data]);
  };

  return (
    <div>
      {books.map((el: any, idx: any) => {
        return (
          <h1 className={styles.title} key={idx}>
            {el.title}
          </h1>
        );
      })}
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <button className={styles.button} onClick={postBook}>
        button
      </button>
    </div>
  );
};

export default Home;

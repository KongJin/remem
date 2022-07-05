import type { NextPage } from "next";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [books, setBooks] = useState<any>([]);
  const getBook = async () => {
    const { data } = await axios.get("http://localhost:4000/book");

    setBooks(data);
  };

  useEffect(() => {
    getBook();
  }, []);

  const postBook = async () => {
    const data = await axios.post("http://localhost:4000/book");
    console.log(data);
  };

  return (
    <div>
      {books.map((el: any) => {
        return <h1 className={styles.title}>{el.title}</h1>;
      })}
      <input type="text" />
      <button className={styles.button} onClick={postBook}>
        button
      </button>
    </div>
  );
};

export default Home;

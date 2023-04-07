import React from 'react';
import styles from './css/accordion.module.css';
import { MdKeyboardArrowDown } from 'react-icons/md';

const Accordion = () => {
  return (
    <div className={styles.body}>
      <div className={styles.accordion}>
        <div className={styles.item}>
          <p className={styles.number}>01</p>
          <p className={styles.text}>How logn do I have to return my chair?</p>
          <MdKeyboardArrowDown size={24} />
          <div className={styles.hidden_box}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              dolor inventore! Vitae adipisci alias dicta saepe et natus. Minus
              corporis nam hic neque, fuga aspernatur asperiores a porro magnam
              quae.
            </p>
            <ul>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Minus corporis nam hic neque, fuga aspernatur asperiores</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.item} ${styles.open}`}>
          <p className={styles.number}>02</p>
          <p className={styles.text}>How logn do I have to return my chair?</p>
          {/* icon MdKeyboardArrowDown */}
          <MdKeyboardArrowDown size={24} />

          <div className={styles.hidden_box}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              dolor inventore! Vitae adipisci alias dicta saepe et natus. Minus
              corporis nam hic neque, fuga aspernatur asperiores a porro magnam
              quae.
            </p>
            <ul>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Minus corporis nam hic neque, fuga aspernatur asperiores</li>
            </ul>
          </div>
        </div>
        <div className={styles.item}>
          <p className={styles.number}>03</p>
          <p className={styles.text}>Do you ship to countries outside EU?</p>
          <MdKeyboardArrowDown size={24} />
          <div className={styles.hidden_box}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
              dolor inventore! Vitae adipisci alias dicta saepe et natus. Minus
              corporis nam hic neque, fuga aspernatur asperiores a porro magnam
              quae.
            </p>
            <ul>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Minus corporis nam hic neque, fuga aspernatur asperiores</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

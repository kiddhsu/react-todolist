import React from 'react';
import ReactDom from 'react-dom';
import styles from './index.scss';

function Main() {
  return <h1>Hi JSX！</h1>
}

function Main2() {
  return <h1 className={styles.main}>Hi JSX！添加CSS</h1>
}

function HelloWorld() {
  return (
    <div
      className={`${styles.HelloWordColor} ${styles.HelloWordSize}`}
      style={{
        fontWeight: 600,
        'font-style': 'italic',
      }}
    >
      Hello World!
    </div>
  )
}
// 自帶傳入 props 參數
const SayHello = (props) => {
  // 接收 Props
  const { names } = props;

  const isEmpty = (value) => value === '';

  return names.map((name) => (
    // 1.以 map 讀取 names 裡的每一個值。
    // 2.將讀到的值以 name 送入要 Return 的 DOM 裡。
    // 3.最後再將產生的 DOM 陣列整包回傳。
    <div
      key={name}
      className={
        `${styles.mainBackground}
         ${isEmpty(name) ? '' : styles.main}`
      }
      style={{
        'font-size': 28,
      }}
    >
      {`Hello ${isEmpty(name) ? 'world' : name}`}
    </div>
  ));
};

ReactDom.render(<Main />, document.getElementById('root'));

ReactDom.render(<Main2 />, document.getElementById('root2'));

ReactDom.render(<HelloWorld />, document.getElementById('root3'));

ReactDom.render(
  <SayHello names={['World', 'Air', '', 'Sun', 'Water']} />,
  document.getElementById('root4'),
);

// 如果要同時有多個 ClassName 得這麼做：
// const Main = () => <div className={`${styles.main} ${styles.other_class}`}/>;
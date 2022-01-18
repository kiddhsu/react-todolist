import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

import styles from './index.scss';

const Counter = () => {
  useEffect(() => {
    console.log('Component Render 後執行');
    return () => {
      console.log('Component 移除執行');
    }
  }, []);

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`State 改變前 ${count}`)
    return () => {
      console.log(`State 改變後 ${count}`);
    };
  }, [count]);

  return (
    <>
      <h1 className={styles.main}>{count}</h1>
      <button type="button" onClick={() => { setCount(count + 1); }}>
        點我加壹
      </button>
    </>
  )
}
const Main = () => {
  const [hiddenCounter, setHiddenCounter] = useState(false);
  return (
    <>
      <button type="button" onClick={() => { setHiddenCounter(!hiddenCounter); }}>
        開啟、關閉計數器
      </button>
      {
        hiddenCounter ? null : <Counter />
      }
    </>
  );
};

// 自帶傳入 props 參數
const SayHello = (props) => {
  // 接收 Props
  const { names } = props;
  const isEmpty = (value) => value === '';
  return (
    <div
      className={styles.mainBackground}
      style={{ fontSize: 28 }}
    >
      {names.map(name => (
        <div
          key={name}
          className={isEmpty(name) ? '' : styles.main}
        >
          {`Hi ${isEmpty(name) ? 'Taiwanese' : name}`}
        </div>
      ))}
    </div>
  );
};

SayHello.propTypes = {
  // 定義型別為陣列，且型別的內容為字串 string
  names: PropTypes.arrayOf(PropTypes.string),
};
SayHello.defaultProps = {
  names: ['Default string'],
};

ReactDom.render(<Main />, document.getElementById('root'));

ReactDom.render(
  // 故意放錯誤資料型別,提醒誤放入不正確的 Props
  <SayHello names={[1, 2, 3]} />,
  document.getElementById('root4'),
);

// 如果要同時有多個 ClassName 得這麼做：
// const Main = () => <div className={`${styles.main} ${styles.other_class}`}/>;
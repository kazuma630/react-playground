import { memo } from "react";

const style = {
  width: "100%",
  height: "100px",
  backgroundColor: "green"
};

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("子コンポーネントのレンダリング");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

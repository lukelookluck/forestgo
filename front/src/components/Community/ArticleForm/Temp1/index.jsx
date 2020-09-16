import React, { useEffect, useState } from "react";

export default function (props) {
  const [myNum, setMyNum] = useState(3);

  useEffect(() => {
    if (props.articleFormData.ingredient4) {
      setMyNum(4);
    }
    if (
      props.articleFormData.ingredient4 &&
      props.articleFormData.ingredient5
    ) {
      setMyNum(5);
    }
    if (
      props.articleFormData.ingredient4 &&
      props.articleFormData.ingredient5 &&
      props.articleFormData.ingredient6
    ) {
      setMyNum(6);
    }
  }, []);

  function moreInput(data) {
    data.preventDefault();
    if (myNum > 5) {
      alert("재료는 6개를 초과할 수 없습니다.");
    } else {
      setMyNum(myNum + 1);
    }
  }

  let ingredient4 = null;
  let ingredient5 = null;
  let ingredient6 = null;

  if (myNum >= 4) {
    ingredient4 = (
      <div class="form-row mb-2">
        <div className="col">
          <input
            class="form-control"
            placeholder="재료명"
            value={props.articleFormData.ingredient4}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                ingredient4: value,
              });
            }}
          ></input>
          {/* {a} */}
        </div>
        <div className="col">
          <input
            class="form-control"
            placeholder="용량(ml)"
            value={props.articleFormData.measure4}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                measure4: value,
              });
            }}
          ></input>
        </div>
      </div>
    );
  }
  if (myNum >= 5) {
    ingredient5 = (
      <div class="form-row mb-2">
        <div className="col">
          <input
            class="form-control"
            placeholder="재료명"
            value={props.articleFormData.ingredient5}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                ingredient5: value,
              });
            }}
          ></input>
          {/* {a} */}
        </div>
        <div className="col">
          <input
            class="form-control"
            placeholder="용량(ml)"
            value={props.articleFormData.measure5}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                measure5: value,
              });
            }}
          ></input>
        </div>
      </div>
    );
  }
  if (myNum >= 6) {
    ingredient6 = (
      <div class="form-row mb-2">
        <div className="col">
          <input
            class="form-control"
            placeholder="재료명"
            value={props.articleFormData.ingredient6}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                ingredient6: value,
              });
            }}
          ></input>
          {/* {a} */}
        </div>
        <div className="col">
          <input
            class="form-control"
            placeholder="용량(ml)"
            value={props.articleFormData.measure6}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                measure6: value,
              });
            }}
          ></input>
        </div>
      </div>
    );
  }

  let listInput = (
    <div>
      <div class="form-row mb-2">
        <div className="col">
          <input
            class="form-control"
            placeholder="재료명"
            value={props.articleFormData.ingredient1}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                ingredient1: value,
              });
            }}
          ></input>
          {/* {a} */}
        </div>
        <div className="col">
          <input
            class="form-control"
            placeholder="용량(ml)"
            value={props.articleFormData.measure1}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                measure1: value,
              });
            }}
          ></input>
        </div>
      </div>
      <div class="form-row mb-2">
        <div className="col">
          <input
            class="form-control"
            placeholder="재료명"
            value={props.articleFormData.ingredient2}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                ingredient2: value,
              });
            }}
          ></input>
          {/* {a} */}
        </div>
        <div className="col">
          <input
            class="form-control"
            placeholder="용량(ml)"
            value={props.articleFormData.measure2}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                measure2: value,
              });
            }}
          ></input>
        </div>
      </div>
      <div class="form-row mb-2">
        <div className="col">
          <input
            class="form-control"
            placeholder="재료명"
            value={props.articleFormData.ingredient3}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                ingredient3: value,
              });
            }}
          ></input>
          {/* {a} */}
        </div>
        <div className="col">
          <input
            class="form-control"
            placeholder="용량(ml)"
            value={props.articleFormData.measure3}
            onChange={({ target: { value } }) => {
              props.setArticleFormData({
                ...props.articleFormData,
                measure3: value,
              });
            }}
          ></input>
        </div>
      </div>
      {ingredient4}
      {ingredient5}
      {ingredient6}
    </div>
  );
  return (
    <div>
      <div>{listInput}</div>
      <div>
        <button onClick={moreInput}>추가</button>
      </div>
      {/* {this.state.num} */}
    </div>
  );
}

import React from "react";
import styled from "styled-components";

const PUIWrap = styled.div`
  width: 280px;
  color: #946e23;
  margin: 0 auto;
`;

const FormPUI = styled.form`
  margin: 0 auto;
  .pui-form {
    padding-top: 12px;

    h2 {
      margin-bottom: 8px;
    }

    p {
      padding-top: 8px;
      font-size: 12px;
    }
  }
  .pui-form-m {
    margin-top: 12px;
  }
`;

const InputJpanese = styled.input`
  width: 280px;
`;

const TextAreaPUI = styled.textarea`
  width: 280px;
`;

const ButtonPUI = styled.button`
  display: block;
  width: 140px;
  height: 40px;
  background-color: #946e23;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin: 0 auto;
  margin-top: 16px;
`;

const ButtonTwitter = styled.button`
  display: block;
  width: 260px;
  height: 40px;
  background-color: #00acee;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  margin: 0 auto;
  margin-top: 16px;
  a {
    color: #fff;
    text-decoration: none;
  }
`;

const getMoleChars = (moleChar) => {
  if (moleChar === "") return "";
  const moleChars = moleChar.map((molCharArr) => {
    const molChar = molCharArr.signal;
    const concatChar = molChar.join("");

    return `${concatChar}  `;
  });
  const moleText = moleChars.join("");
  return moleText;
};

const PUI = ({ handleSubmit, handleInputChange, char, moleChar }) => {
  const moleChars = getMoleChars(moleChar);
  const msg = moleChars !== "" ? moleChars : "PUIPUIモルカー信号";
  const URL = window.location.href;
  const HashTag = "PUIPUIモールス信号";
  const tweetMsg = `https://twitter.com/intent/tweet?text=${msg}&url=${URL}&hashtags=${HashTag}`;

  return (
    <PUIWrap>
      <FormPUI onSubmit={(e) => handleSubmit(e)}>
        <div className="pui-form">
          <h2>ひらカナで文章を入力する</h2>
          <InputJpanese
            onChange={(e) => handleInputChange(e)}
            type="textarea"
            placeholder="文章を入力する"
            value={char}
          />
          <p>※漢字、英文字（外国語）は変換できません</p>
        </div>
        <div className="pui-form pui-form-m">
          <h2>PUIPUIモールス信号</h2>
          <TextAreaPUI
            name="PUIPUIモールス信号のテキストエリア"
            rows={6}
            defaultValue={moleChars}
          />
        </div>
        <ButtonPUI type="submit">
          <span aria-label="audio" role="img">
            🔈
          </span>
          音を鳴らす
        </ButtonPUI>
        <ButtonTwitter>
          <a href={tweetMsg} rel="nofollow noopener noreferrer">
            <span aria-label="twitter" role="img">
              🦢
            </span>
            PUIPUIモールス信号で呟く
          </a>
        </ButtonTwitter>
      </FormPUI>
    </PUIWrap>
  );
};

export default PUI;

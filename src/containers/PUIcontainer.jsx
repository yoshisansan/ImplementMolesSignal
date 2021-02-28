import PUI from "../components/PUI.jsx";
import React, { useState, useEffect } from "react";
import PAudio from "../sounds/PUIPUI-P-good.wav";
import PUIAudio from "../sounds/PUIPUI-PUI-good.wav";
import kanaToMolesObj from "../data/KanaToMoles";
import ganaToKanaObj from "../data/GanaToKana";

// エラー処理、U、PUI PUI文字のテキストフィールド、validteのUI処理

const Pwav = new Audio(PAudio);
const PUIwav = new Audio(PUIAudio);
const wavObj = {
  P: Pwav,
  PUI: PUIwav
};

const hiraToKANA = (text) => {
  const validate = /^[ぁ-んーァ-ンヴー0-9、。!-/-@¥[-`{-~]*$/;
  const isValidate = validate.test(text);

  if (!isValidate) {
    return "IncludeNG";
  }

  const hiraMatch = /[\u3041-\u3096]/g;
  const isHira = hiraMatch.test(text);

  if (isHira) {
    // ひらがなのみカタカナに変換する処理
    const kana = text.replace(hiraMatch, (ch) =>
      String.fromCharCode(ch.charCodeAt(0) + 96)
    );

    return kana;
  }

  return text;
};

const ganaToKANA = (kanaText) => {
  let kanaDevideArr = [];
  for (const text of kanaText) {
    const transedKanaArr = ganaToKanaObj[text];
    if (transedKanaArr === undefined) {
      kanaDevideArr.push(text);
    } else {
      const kana = transedKanaArr[0];
      const dakuten = transedKanaArr[1];
      kanaDevideArr.push(kana);
      kanaDevideArr.push(dakuten);
    }
  }
  return kanaDevideArr;
};

const kanaToMolesStr = (splitedStrArr) => {
  const molesStrArr = splitedStrArr.map((char) => {
    const molChar = kanaToMolesObj[char];

    if (molChar === undefined) {
      return console.log("使えない文字が含まれています");
    }
    return molChar;
  });
  return molesStrArr;
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callMoleVoice(moleCharArr) {
  console.log(moleCharArr);
  for (const mole of moleCharArr) {
    const oneCharMol = mole.signal;
    let count = 0;
    for (const m of oneCharMol) {
      count++;
      console.log(count);
      const audio = wavObj[m];
      await new Promise(async (resolve, reject) => {
        if (audio) {
          audio.playbackRate = 1.2;
          audio.play();
          audio.addEventListener("ended", async () => {
            if (oneCharMol.length === count) {
              await sleep(600);
              count = 0;
            }
            resolve();
          });
        } else {
          reject("undefinedです");
        }
      });
    }
  }
  return;
}

const PUIcontainer = () => {
  const [char, setChar] = useState("モルカー");
  const [moleChar, setMoleChar] = useState("");

  const handleInputChange = (e) => {
    e.preventDefault();
    setChar(e.target.value);
  };

  const analysisInputStr = () => {
    const kanaStr = hiraToKANA(char);
    if (kanaStr === "IncludeNG") {
      return "NoMoleChar";
    }
    const splited = Array.from(kanaStr.split(""));
    const ganaToKANAarr = ganaToKANA(splited);

    return ganaToKANAarr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    callMoleVoice(moleChar);
  };

  useEffect(() => {
    const splitedStrArr = analysisInputStr();
    if (splitedStrArr === "NoMoleChar") {
      setMoleChar("");
      return;
    }
    const kanaCharArr = kanaToMolesStr(splitedStrArr);
    setMoleChar(kanaCharArr);
  }, [char]);

  return (
    <div>
      <PUI
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        char={char}
        moleChar={moleChar}
      />
    </div>
  );
};

export default PUIcontainer;

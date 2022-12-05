import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Bar from "../../components/Bar/Bar";
import ResponsiveAppBar from "../../components/ResponsiveAppBar";
import "./Board.css";

function generateRandomIntegerInRange(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface BarObj {
  id: number;
  text: number;
}

function Board() {
  useEffect(() => {
    console.log("object");
    generateArr();
  }, []);

  const [bars, setBars] = useState<any[]>([]);

  const [bars2, setBars2] = useState<any[]>([]);

  const generateArr = () => {
    const myArr = [];

    for (let i = 1; i <= 7; i++) {
      let value = generateRandomIntegerInRange(-1000, 1000);
      const myObj = {
        id: i,
        text: value,
      };
      myArr.push(myObj);
    }
    setBars(myArr);
  };

  const heapSort = async (arr: BarObj[]) => {
    const valueArr = arr.map((e) => {
      return e["text"];
    });
    console.log("first");
    console.log(valueArr);
    let firstArr: number[] = [];
    firstArr = [...valueArr];

    let secArr: number[] = [];
    secArr = [...valueArr];

    for (let i = 1; i < firstArr.length; i++) {
      let max: number;
      max = secArr.reduce((a, b) => Math.max(a, b), -Infinity);
      let maxIndexArr: number;

      maxIndexArr = firstArr.indexOf(max);
      firstArr[maxIndexArr] = firstArr[firstArr.length - i];
      firstArr[firstArr.length - i] = max;

      let maxIndexSecArr: number;
      maxIndexSecArr = secArr.indexOf(max);
      secArr.splice(maxIndexSecArr, 1);
    }
    console.log("final:");
    console.log(firstArr);

    const tempArr = [];
    for (let i = 0; i < firstArr.length; i++) {
      const myObj = arr.filter((e) => e["text"] == firstArr[i]);

      tempArr.push(myObj);
    }
    const finalArr = tempArr.flat();
    console.log("final objects:");
    console.log(finalArr);

    finalArr.reverse();

    console.log(bars2);

    for (let i = 0; i < finalArr.length; i++) {
      await sleep(500);
      setBars2((prev) => [...prev, finalArr[i]]);
    }
  };

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  return (
    <Box sx={{display:"flex", flexDirection:"column"}}>
      <div className="responsiveAppBar">
        <ResponsiveAppBar/>
      </div>
      <div className="boardContainer">
        {bars.map((bar) => (
          <Bar key={bar.id} id={bar.id} barValue={bar.text} />
        ))}
      </div>

      <div className="button">
        <button onClick={() => heapSort(bars)}>heap sort</button>
      </div>

      <div className="boardContainer2">
        {bars2
          ? bars2.map((bar) => (
              <Bar key={"result " + bar.id} id={bar.id} barValue={bar.text} />
            ))
          : null}
      </div>
    </Box>
  );
}

export default Board;

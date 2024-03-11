import React from 'react';
import './App.css';
import { Practice1 } from './practices/Practice1';
import { Practice2 } from './practices/Practice2';

function App() {
  return (
    <>
      <Practice1 />
      <Practice2 />
    </>
  );
}

export default App;

const sample = () => {

  let bool: boolean = true;

  let num: number = 0;

  let str: string = "hoge";

  let arr1: Array<number> = [1, 2, 3];
  let arr2: number[] = [1, 2, 3];

  let tuple: [number, string] = [1, "hoge"];

  let any1: any = false;

  const funcA = (): void => {
      const hoge = "hoge";
  }

  let null1: null = null;

  let undefine1: undefined = undefined;

  let ojb1: object = {};
  let obj2: { id: number, name: string } = { id: 1, name: "Max" };

};
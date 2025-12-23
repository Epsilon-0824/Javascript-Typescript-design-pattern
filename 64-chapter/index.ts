// bad
// declare function fn(x: unknown): unknown;
// declare function fn(x: HTMLElement): number;
// declare function fn(x: HTMLDivElement): string;

// let myEle: HTMLDivElement;
// const y = fn(myEle);

// good
// bad
declare function fn(x: HTMLDivElement): string;
declare function fn(x: HTMLElement): number;
declare function fn(x: unknown): unknown;

let myEle: HTMLDivElement;
const y = fn(myEle);

let myEle2: HTMLDivElement;
const z = fn(myEle2);


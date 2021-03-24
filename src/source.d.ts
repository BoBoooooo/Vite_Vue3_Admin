declare const React: string;
declare module '*.json';
declare module '*.png';
declare module '*.jpg';
declare module '*.scss' {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res: any;
    export default res;
}
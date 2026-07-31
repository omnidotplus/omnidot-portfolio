// Side-effect CSS imports (`import "./globals.css"`) need a module declaration.
// Next ships one in next/types/global.d.ts, but TypeScript 6 does not pick it up
// for side-effect imports, so it is declared explicitly here.
declare module "*.css";

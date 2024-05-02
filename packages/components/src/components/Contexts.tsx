import { createContext, ReactNode } from 'react';

const defaultParser = (markup: any, parserOptions: object = {}) => <>{markup}</>;
export type RichTextParserProps = (markup: any, parserOptions: object) => ReactNode
export const RichTextParser = createContext<RichTextParserProps>(defaultParser);

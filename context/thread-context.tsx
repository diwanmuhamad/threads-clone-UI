import * as React from "react";
import { Thread } from "../types/threads";
import { generateThreads } from "../utils/generate-dummy-data";

export const ThreadsContext = React.createContext<Thread[]>([]);

export const ThreadProvider = (): JSX.Element => {
  return <></>;
};

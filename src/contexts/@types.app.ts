/*
export interface AppContextInterface {
  name: string,
  isOfAge: boolean,
}
*/
export type AppContextType = {
  name: string,
  setName: (name: string) => void,
};

/*
export interface AppContextInterface {
  name: string,
  isOfAge: boolean,
}
*/
export type AppContextType = {
  name: string,
  isOfAge: boolean,
  setName: (name: string) => void,
  setIsOfAge: (isOfAge: boolean) => void,
};

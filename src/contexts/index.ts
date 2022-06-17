import { createContext } from 'react';
import { AppContextType } from './@types.app';

const AppContext = createContext(<AppContextType | null>(null));

export default AppContext;

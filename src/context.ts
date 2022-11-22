import { createContext } from  'react'

interface ContextProps{
  theme: string
  onChangeTheme: () => void
}

export const Context = createContext({} as ContextProps)

export const ContextProvider = Context.Provider
export const ContextConsumer = Context.Consumer


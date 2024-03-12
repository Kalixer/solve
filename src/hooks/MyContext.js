import React from 'react'

const MyContext = React.createContext()

function MyContextProvider({children}) {
    const [language, setLanguage] = React.useState('es')
    
  return (
    <MyContext.Provider value={{language, setLanguage}}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, MyContextProvider }
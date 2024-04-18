import React from 'react'

const MyContext = React.createContext()

function MyContextProvider({children}) {
    const [language, setLanguage] = React.useState('es')
    const [typeProject, setTypeProject] = React.useState('Engineering')
    
  return (
    <MyContext.Provider value={{language, setLanguage, typeProject, setTypeProject}}>
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, MyContextProvider }
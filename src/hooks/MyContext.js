import React from 'react'

const MyContext = React.createContext()

function MyContextProvider({children}) {
    const [language, setLanguage] = React.useState('es')
    const [typeProject, setTypeProject] = React.useState('Engineering')
    const [typeChanges, setTypeChanges] = React.useState(0)
    const [selected, setSelected] = React.useState('true')
    const [unselected, setUnselected] = React.useState('false')
    
  return (
    <MyContext.Provider value=
      {
        {
          language, 
          setLanguage, 
          typeProject, 
          setTypeProject,
          typeChanges,
          setTypeChanges,
          selected,
          setSelected,
          unselected,
          setUnselected,
        }
      }
    >
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, MyContextProvider }
import React from 'react'

const MyContext = React.createContext()

function MyContextProvider({children}) {
    const [languageEs, setLanguageEs] = React.useState(true)
    const [typeProject, setTypeProject] = React.useState('Engineering')
    const [typeChanges, setTypeChanges] = React.useState(0)
    const [selected, setSelected] = React.useState('true')
    const [unselected, setUnselected] = React.useState('false')
    const [e_projectIndex, setE_ProjectIndex] = React.useState(0)
    const [c_projectIndex, setC_ProjectIndex] = React.useState(0)
    const [blogIndex, setBlogIndex] = React.useState(0)
    
  return (
    <MyContext.Provider value=
      {
        {
          languageEs, 
          setLanguageEs, 
          typeProject, 
          setTypeProject,
          typeChanges,
          setTypeChanges,
          selected,
          setSelected,
          unselected,
          setUnselected,
          c_projectIndex, 
          setC_ProjectIndex, 
          e_projectIndex, 
          setE_ProjectIndex,
          blogIndex, 
          setBlogIndex,
        }
      }
    >
      {children}
    </MyContext.Provider>
  )
}

export { MyContext, MyContextProvider }
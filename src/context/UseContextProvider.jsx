'use client'
import useLocalStorage from 'use-local-storage'
import { useState } from 'react'
import UseContext from './UseContext'
const UseContextProvider = ({ children }) => {
  const [testData, setTestData] = useLocalStorage('testData', [])



  return (
    <UseContext.Provider
      value={{
        testData,
        setTestData,
      }}
    >
      {children}
    </UseContext.Provider>
  )
}
export default UseContextProvider

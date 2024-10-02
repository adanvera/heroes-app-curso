//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import { HooksApp } from './HooksApp'
//import { CounterApp } from './01-useState/CounterApp'
//import CustomHook from './02-customHook/CustomHook'
//import { SimpleForm } from './03-useEffect/SimpleForm'
//import { FormCustom } from './03-useEffect/FormCustom'
//import { MultipleCustomHooks } from './04-examples/MultipleCustomHooks'
//import { FocusScreen } from './05-useRef/FocusScreen'
//import { LayoutEffect } from './06-useLayoutEffect/LayoutEffect'
//import { Memorize } from './07-memos/Memorize'
//import { MemoHook } from './08-useMemo/MemoHook'
//import { CallbackHook } from './09-useCallback/CallbackHook'
import { ReducerHook } from './10-useReducer/ReducerHook'
import { HooksApp } from './HooksApp'
import { MainApp } from './11-useContext/MainApp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider } from './12-context/UserProvider'


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <UserProvider>
      <Routes>
        <Route path="/main" element={<MainApp />} />
        <Route path="/hooks" element={<HooksApp />} />
        <Route path="/reducer" element={<ReducerHook />} />
      </Routes>
    </UserProvider>
  </BrowserRouter>,
)

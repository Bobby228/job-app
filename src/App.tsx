import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import './App.css'
import {Navigate, Route, Routes} from "react-router";
import JobsPage from "./pages/JobsPage.tsx";
import JobPage from "./pages/JobPage.tsx";
import Header from "./Components/Header/Header.tsx";

function App() {

  return (
    <MantineProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Navigate to="/vacancies" replace />}></Route>
        <Route path='/vacancies' element={<JobsPage />}></Route>
        <Route path="/vacancies/:id" element={<JobPage />} />
      </Routes>
    </MantineProvider>
  )
}

export default App

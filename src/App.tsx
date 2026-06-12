import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Container } from '@mantine/core'
import Header from "./Components/Header/Header.tsx";
import './App.css'
import SearchInput from "./Components/SearchInput/SearchInput.tsx";
import JobsList from "./Components/JobsList/JobsList.tsx";

function App() {

  return (
    <MantineProvider>
      <Header />
      <Container p={0} strategy="block" size={1000}>
        <SearchInput />
      </Container>
      <hr className='divider' />
      <Container p={0} strategy="block" size={1000}>
        <JobsList/>
      </Container>
    </MantineProvider>
  )
}

export default App

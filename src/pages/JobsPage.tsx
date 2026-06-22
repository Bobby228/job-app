import {Container} from "@mantine/core";
import SearchInput from "../Components/SearchInput/SearchInput.tsx";
import JobsList from "../Components/JobsList/JobsList.tsx";

import '../App.css'

const JobsPage = () => {
  return (
    <>
      <Container p={0} strategy="block" size={1000}>
        <SearchInput />
      </Container>

      <hr className="divider" />

      <Container p={0} strategy="block" size={1000}>
        <JobsList />
      </Container>
    </>
  );
};

export default JobsPage;
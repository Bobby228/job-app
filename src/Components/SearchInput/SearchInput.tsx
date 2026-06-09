import { Box, Flex, Title, Text, Input, Button } from "@mantine/core";
import { useTypedDispatch, useTypedSelector } from "../../hooks/hooks";
import { setSearch } from "../../reducers/JobSlice";
import Search from "../../img/search.svg";
import { useState } from "react";

const SearchInput = () => {
  const dispatch = useTypedDispatch();

  const search = useTypedSelector(state => state.jobs.search);

  const [localSearch, setLocalSearch] = useState(search);

  const handleSearch = () => {
    dispatch(setSearch(localSearch));
  };

  return (
    <Flex pt={24} pb={24} align="center" justify="space-between">
      <Box>
        <Title order={1}>Список вакансий</Title>
        <Text c="gray">по профессии Frontend-разработчик</Text>
      </Box>

      <Flex gap={12}>
        <Input
          value={localSearch}
          onChange={(e) => setLocalSearch(e.currentTarget.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          styles={{
            input: {
              background: "#f6f6f7",
            },
          }}
          w={403}
          placeholder="Должность или название компании"
          leftSection={<img src={Search} alt="search" />}
        />

        <Button bg="#364fc7" onClick={handleSearch}>
          Найти
        </Button>
      </Flex>
    </Flex>
  );
};

export default SearchInput;
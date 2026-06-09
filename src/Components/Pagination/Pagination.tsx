import { Group, Pagination } from "@mantine/core";
import { useTypedDispatch, useTypedSelector } from "../../hooks/hooks";
import { setPage } from "../../reducers/JobSlice";

const Pag = () => {
  const dispatch = useTypedDispatch();

  const page = useTypedSelector(state => state.jobs.page);
  const totalPages = useTypedSelector(
    state => state.jobs.pagination?.totalPages || 1
  );

  return (
    <Pagination.Root
      total={totalPages}
      value={page}
      onChange={(p) => dispatch(setPage(p))}
    >
      <Group gap={5} justify="center">
        <Pagination.First />
        <Pagination.Previous />
        <Pagination.Items />
        <Pagination.Next />
        <Pagination.Last />
      </Group>
    </Pagination.Root>
  );
};

export default Pag;
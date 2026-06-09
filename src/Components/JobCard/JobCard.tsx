import {Card, Text, Group, Button, Badge, Title, Box} from '@mantine/core';
import type {Job} from "../../types.ts";

export const JobCard = ({ job }: { job: Job }) => {

  return (
    <Card w={659} padding="lg" radius="md" mb="md">
      <Box mb={16}>
        <Title order={2} mb={10} fw={600} fz={20} c='rgba(54, 79, 199, 1)'>{job.name}</Title>
        <Group>
          <Text fz={16}>{job.salary} ₽</Text>
          <Text fz={14} c='rgba(15, 15, 16, 0.5)'>Опыт: {job.experience}</Text>
        </Group>
      </Box>
      <Box mb={16}>
        <Text fz={14} mb={8} c='rgba(15, 15, 16, 0.5)'>{job.company_name}</Text>
        {job.space === 'remote' ? <Badge mb={8} px={6} py={1} radius={3} bg='rgba(66, 99, 235, 1)' c='white'>можно удалённо</Badge> : null}
        {job.space === 'office' ? <Badge mb={8} px={6} py={1} radius={3} bg='rgba(15, 15, 16, 0.1)' c='rgba(15, 15, 16, 0.5)'>офис</Badge> : null}
        {job.space === 'hybrid' ? <Badge mb={8} px={6} py={1} radius={3} bg='black' c='white'>гибрид</Badge> : null}
        <Text>{job.city}</Text>
      </Box>
      <Group>
        <Button fz={14} fw={400} bg='black'>Смотреть вакансию</Button>
      </Group>
    </Card>
  );
};
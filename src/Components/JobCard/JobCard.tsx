import { Group, Button } from '@mantine/core';
import type {Job} from "../../types.ts";
import {Link} from "react-router";

import styles from './JobCard.module.css'
import JobCardTemplate from "../JobCardTemplate/JobCardTemplate.tsx";

export const JobCard = ({ job }: { job: Job }) => {
  return (
    <JobCardTemplate job={job}>
      <Group>
        <Button fz={14} fw={400} bg='black'><Link className={styles.jobLink} to={`/vacancies/${job.id}`}>Смотреть вакансию</Link></Button>
      </Group>
    </JobCardTemplate>
  );
};
import SkillsInput from "../SkillsInput/SkillsInput.tsx";
import CityInput from "../CityInput/CityInput.tsx";
import {Flex, Title} from "@mantine/core";
import { useEffect } from "react";
import { JobCard } from "../JobCard/JobCard.tsx";
import styles from "./JobsList.module.css";
import { useTypedDispatch, useTypedSelector } from "../../hooks/hooks.ts";
import { fetchJobs } from "../../reducers/JobThunks.ts";
import Pag from "../Pagination/Pagination.tsx";
import { setCity } from "../../reducers/JobSlice.ts";

const JobsList = () => {
  const dispatch = useTypedDispatch();

  const {
    search,
    city,
    page,
    jobsList,
    skills,
    isLoading
  } = useTypedSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs({ search, city, page, skills }));
  }, [search, city, page, skills]);

  return (
    <Flex mih="100vh" pt={24} pb={84} gap={24}>
      <Flex direction="column" gap={28}>
        <SkillsInput />

        <CityInput
          value={city}
          onChange={(value) => dispatch(setCity(value))}
        />
      </Flex>

      <Flex direction="column" gap={24}>
        {isLoading ?
          <Title>Загрузка...</Title>
          :
          <>
            <ul>
              {jobsList.map((job) => (
                <li key={job.id} className={styles.liItem}>
                  <JobCard job={job}/>
                </li>
              ))}
            </ul>
            <Pag/>
          </>
        }
      </Flex>
    </Flex>
  );
};

export default JobsList;
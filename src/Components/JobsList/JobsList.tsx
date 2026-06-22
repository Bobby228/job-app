import SkillsInput from "../SkillsInput/SkillsInput.tsx";
import CityInput from "../CityInput/CityInput.tsx";
import {Flex, Title} from "@mantine/core";
import { useEffect } from "react";
import { JobCard } from "../JobCard/JobCard.tsx";
import styles from "./JobsList.module.css";
import { useTypedDispatch, useTypedSelector } from "../../hooks/hooks.ts";
import { fetchJobs } from "../../reducers/JobThunks.ts";
import Pag from "../Pagination/Pagination.tsx";
import { setSearch, setCity, setSkills, setPage } from "../../reducers/JobSlice";
import {useSearchParams} from "react-router";

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

  const [params, setParams] = useSearchParams();

  useEffect(() => {
    dispatch(setSearch(params.get("search") || ""));
    dispatch(setCity(params.get("city") || ""));
    dispatch(setPage(Number(params.get("page") || 1)));

    const skillsParam = params.get('skills');

    if (skillsParam) {
      dispatch(setSkills(skillsParam.split(',')));
    }
  }, []);

  useEffect(() => {
    dispatch(fetchJobs({ search, city, page, skills }));
  }, [search, city, page, skills]);

  useEffect(() => {
    const obj: Record<string, string> = {};

    if (search) obj.search = search;
    if (city) obj.city = city;
    if (skills.length) obj.skills = skills.join(",");
    if (page) obj.page = String(page);

    setParams(obj);
  }, [search, city, skills, page]);

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
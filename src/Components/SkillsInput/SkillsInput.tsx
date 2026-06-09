import {Box, Button, Group, Pill, TextInput, Title} from "@mantine/core";
import {useState} from "react";
import {useTypedDispatch, useTypedSelector} from "../../hooks/hooks.ts";
import {setSkill, removeSkill} from "../../reducers/JobSlice.ts";
import styles from './SkillsInput.module.css'


const SkillsInput = () => {
  const [value, setValue] = useState('')
  const skills = useTypedSelector(state => state.jobs.skills)
  const dispatch = useTypedDispatch();

  const handleAdd = () => {
    if (value.trim()) {
      dispatch(setSkill(value))
      setValue('');
    }
  }

  const handleRemove = (tarSkill: string) => {
    dispatch(removeSkill(tarSkill));
  }

  return (
    <Box className={styles.skillsInput} w={317} p={24}>
      <Title mb={12} order={4}>Ключевые навыки</Title>
      <Group mb={12}>
        <TextInput
          placeholder="Навык"
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          style={{ flex: 1 }}
        />
        <Button onClick={handleAdd}>+</Button>
      </Group>

      <Group gap={8}>
        {skills.map((skill) => (
          <Pill
            key={skill}
            withRemoveButton
            onRemove={() => handleRemove(skill)}
          >
            {skill}
          </Pill>
        ))}
      </Group>
    </Box>
  );
};

export default SkillsInput;
import {Flex, Select} from "@mantine/core";
import styles from "./CityInput.module.css";
import Location from "../../img/loc.svg";
import Arrows from "../../img/arrows.svg";

type CityInputProps = {
  value: string;
  onChange: (value: string) => void;
};

const CityInput = ({ value, onChange }: CityInputProps) => {
  return (
    <Flex className={styles.cityInput} w={317} justify="center" p={24}>
      <Select
        value={value}
        onChange={(value) => onChange(value || '')}
        placeholder="Все города"
        data={[
          { value: '', label: 'Все города' },
          { value: 'Москва', label: 'Москва' },
          { value: 'Санкт-Петербург', label: 'Санкт-Петербург' },
        ]}
        leftSection={<img src={Location} alt="location" />}
        rightSection={<img src={Arrows} alt="arrows" />}
        style={{ width: 269 }}
      />
    </Flex>
  );
};

export default CityInput;
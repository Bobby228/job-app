import { useState } from 'react';
import { Anchor, Flex, Image, Text, Group, ThemeIcon } from '@mantine/core';
import headerImg from '../../img/hh.svg';
import IconUser from "../../img/user.svg";
import styles from './Header.module.css';
import {Link} from "react-router";

const Header = () => {
  const [active, setActive] = useState<'vacancies' | 'about'>('vacancies');

  return (
    <header className={styles.header}>
      <Link to='/' className={styles.headerLink}>
        <Flex align="center" gap={10}>
          <Image src={headerImg} w={30} h={30} alt="logo" />
          <Text fw={600} size="xl" c="black">.FrontEnd</Text>
        </Flex>
      </Link>

      <Group className={styles.centerNav}>
        <Anchor
          href="#"
          underline="never"
          onClick={() => setActive('vacancies')}
        >
          <Group gap={12} align="center">
            <Text
              size="xl"
              fw={500}
              c={active === 'vacancies' ? 'black' : 'gray'}
            >
              Вакансии FE
            </Text>
            <ThemeIcon
              size={12}
              radius="xl"
              color="blue"
              className={`${styles.navIcon} ${active === 'vacancies' ? '' : styles.hidden}`}
            >
              <div />
            </ThemeIcon>
          </Group>
        </Anchor>

        <Anchor
          href="#"
          underline="never"
          onClick={() => setActive('about')}
        >
          <Group gap={12} align="center">
            <Image src={IconUser} w={18} h={18} />
            <Text
              size="xl"
              fw={500}
              c={active === 'about' ? 'black' : 'gray'}
            >
              Обо мне
            </Text>
            <ThemeIcon
              size={12}
              radius="xl"
              color="blue"
              className={`${styles.navIcon} ${active === 'about' ? '' : styles.hidden}`}
            >
              <div />
            </ThemeIcon>
          </Group>
        </Anchor>
      </Group>

      <div style={{ width: 120 }} />
    </header>
  );
};

export default Header;
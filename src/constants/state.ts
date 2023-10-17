import { StoreInterface } from '../interfaces/store.interface.ts';
import { BaseSkillsIncrements } from './base-skills.ts';

export const initialState: StoreInterface = {
  name: 'Пендальф Синий',
  baseSkills: {
    strength: {
      title: 'Сила',
      editable: true,
      level: 0,
    },
    agility: {
      title: 'Ловкость',
      editable: true,
      level: 0,
    },
    intelligence: {
      title: 'Интелект',
      editable: true,
      level: 0,
    },
    charm: {
      title: 'Харизма',
      editable: true,
      level: 0,
    },
    vitality: {
      title: 'Жизненная сила',
      editable: false,
      level: BaseSkillsIncrements.VITALITY,
    },
    evasion: {
      title: 'Уклонение',
      editable: false,
      level: BaseSkillsIncrements.EVASION,
    },
    vigor: {
      title: 'Энергичность',
      editable: false,
      level: 0,
    },
  },
  additionalSkills: {
    attack: {
      title: 'Атака',
      editable: true,
      level: 0,
    },
    stealth: {
      title: 'Скрытность',
      editable: true,
      level: 0,
    },
    archery: {
      title: 'Стрельба из лука',
      editable: true,
      level: 0,
    },
    teachability: {
      title: 'Обучаемость',
      editable: true,
      level: 0,
    },
    survival: {
      title: 'Выживание',
      editable: true,
      level: 0,
    },
    medicine: {
      title: 'Медицина',
      editable: true,
      level: 0,
    },
    intimidation: {
      title: 'Запугивание',
      editable: true,
      level: 0,
    },
    insight: {
      title: 'Проницательность',
      editable: true,
      level: 0,
    },
    appearance: {
      title: 'Внешность',
      editable: true,
      level: 0,
    },
    manipulation: {
      title: 'Манипуляции',
      editable: true,
      level: 0,
    },
  }
};

import { LevelNumbers, LevelDescription, LevelsType } from '../../types/levels.type.ts';

const LEVELS: LevelsType = {
  0: 'Нетренированный',
  1: 'Новичок',
  2: 'Ученик',
  3: 'Адепт',
  4: 'Эксперт',
  5: 'Мастер',
}
export const getLevelDescription = (level: LevelNumbers): LevelDescription => {
  return LEVELS[level];
}

export type LevelsType = {
  0: 'Нетренированный',
  1: 'Новичок',
  2: 'Ученик',
  3: 'Адепт',
  4: 'Эксперт',
  5: 'Мастер',
}

export type LevelNumbers = keyof LevelsType

export type LevelDescription = LevelsType[LevelNumbers];

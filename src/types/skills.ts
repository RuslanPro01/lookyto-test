import { StoreInterface } from '../interfaces/store.interface.ts';

type Skills = StoreInterface['baseSkills'] & StoreInterface['additionalSkills'];

export type SkillActionName = keyof Skills;

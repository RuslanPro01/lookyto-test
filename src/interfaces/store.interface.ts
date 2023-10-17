import { SkillInterface } from './skill.interface.ts';

export interface StoreInterface {
  name: string;
  baseSkills: {
    strength: SkillInterface;
    agility: SkillInterface;
    intelligence: SkillInterface;
    charm: SkillInterface;
    vitality: SkillInterface;
    evasion: SkillInterface;
    vigor: SkillInterface;
  },
  additionalSkills: {
    attack: SkillInterface;
    stealth: SkillInterface;
    archery: SkillInterface;
    teachability: SkillInterface;
    survival: SkillInterface;
    medicine: SkillInterface;
    intimidation: SkillInterface;
    insight: SkillInterface;
    appearance: SkillInterface;
    manipulation: SkillInterface;
  }
}

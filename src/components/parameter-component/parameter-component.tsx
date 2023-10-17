import './parameter-component.scss';
import { useState } from 'react';
import { BaseSkillLevel } from '../../constants/base-skills.ts';
import { SkillInterface } from '../../interfaces/skill.interface.ts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { UserProcess } from '../../store/user-process.ts';
import { SkillActionName } from '../../types/skills.ts';
import { getAdditionalSkills } from '../../store/selectors.ts';
import { getLevelDescription } from './utils.ts';
import { LevelNumbers } from '../../types/levels.type.ts';

const {
  changeStrength,
  changeAgility,
  changeIntelligence,
  changeCharm,
  changeVitality,
  changeEvasion,
  changeAttack,
  changeStealth,
  changeArchery,
  changeTeachability,
  changeSurvival,
  changeMedicine,
  changeIntimidation,
  changeInsight,
  changeAppearance,
  changeManipulation,
  changeVigor
} = UserProcess.actions;

const actionMap = {
  strength: changeStrength,
  agility: changeAgility,
  intelligence: changeIntelligence,
  charm: changeCharm,
  vitality: changeVitality,
  evasion: changeEvasion,
  attack: changeAttack,
  stealth: changeStealth,
  archery: changeArchery,
  teachability: changeTeachability,
  survival: changeSurvival,
  medicine: changeMedicine,
  intimidation: changeIntimidation,
  insight: changeInsight,
  appearance: changeAppearance,
  manipulation: changeManipulation,
}

type ParameterComponentProps = SkillInterface & { skillName: SkillActionName, isAdditional?: boolean };
export default function ParameterComponent({ title, editable, level, skillName, isAdditional }: ParameterComponentProps) {
  const additionalSkills = useAppSelector(getAdditionalSkills);
  const [ levelNumber, setLevel ] = useState(level);
  const dispatch = useAppDispatch();
  let isIncrement = true;
  const updateLevel = (level: number) => {
    if (skillName !== 'vigor') {
      const action = actionMap[skillName];
      if (action) {
        dispatch(action(level));
      }

      if (skillName === 'strength') {
        if (isIncrement) {
          dispatch(changeVitality(1));
        }
        if (!isIncrement) {
          dispatch(changeVitality(-1));
        }
      }

      if (skillName === 'agility') {
        dispatch(changeEvasion(level));
        dispatch(changeVigor());
      }

      if (skillName === 'intelligence') {
        dispatch(changeVigor());
      }
    }
  }

  const updateAdditionalLevel = (level: number) => {
    if (skillName === 'strength') {
      if (additionalSkills.attack.level >= level) {
        dispatch(changeAttack(level));
      }
    }

    if (skillName === 'agility') {
      if (additionalSkills.stealth.level >= level) {
        dispatch(changeStealth(level));
      }
      if (additionalSkills.archery.level >= level) {
        dispatch(changeArchery(level));
      }
    }

    if (skillName === 'intelligence') {
      if (additionalSkills.survival.level >= level) {
        dispatch(changeSurvival(level));
      }
      if (additionalSkills.medicine.level >= level) {
        dispatch(changeMedicine(level));
      }
      if (additionalSkills.teachability.level >= level) {
        dispatch(changeTeachability(level));
      }
    }

    if (skillName === 'charm') {
      if (additionalSkills.intimidation.level >= level) {
        dispatch(changeIntimidation(level));
      }
      if (additionalSkills.insight.level >= level) {
        dispatch(changeInsight(level));
      }
      if (additionalSkills.appearance.level >= level) {
        dispatch(changeAppearance(level));
      }
      if (additionalSkills.manipulation.level >= level) {
        dispatch(changeManipulation(level));
      }
    }
  }

  const increaseLevel = () => {
    if (level < BaseSkillLevel.MAX) {
      isIncrement = true;
      const newValue  = levelNumber + 1;
      setLevel(newValue);
      updateLevel(newValue);
    }
  };

  const decreaseLevel = () => {
    if (level > BaseSkillLevel.MIN) {
      isIncrement = false;
      const newValue = levelNumber - 1;
      setLevel(newValue);
      updateLevel(newValue);
      updateAdditionalLevel(newValue);
    }
  };

  return (
    <section className="parameter-component">
      <header className="title">{title}</header>
      <div className="controls" style={{ display: 'flex' }}>
        {editable && !isAdditional && <button onClick={decreaseLevel} disabled={level === BaseSkillLevel.MIN}>Снизить</button>}
        <input type="text" min={BaseSkillLevel.MIN} value={`${level} ${isAdditional ? getLevelDescription(level as LevelNumbers) : ''}`} disabled/>
        {editable && <button onClick={increaseLevel} disabled={level === BaseSkillLevel.MAX}>Прокачать</button>}
      </div>
    </section>
  );
}

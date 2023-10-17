import './tabs.scss';
import ParameterComponent from '../parameter-component/parameter-component.tsx';
import { useAppSelector } from '../../hooks';
import { getAdditionalSkills, getBaseSkills } from '../../store/selectors.ts';
import { SkillInterface } from '../../interfaces/skill.interface.ts';
import { SkillActionName } from '../../types/skills.ts';
import { ChangeEvent, useCallback, useState } from 'react';

export default function Tabs() {
  const baseSkills = Object.entries(useAppSelector(getBaseSkills)) as [SkillActionName, SkillInterface][];
  const additionalSkills = Object.entries(useAppSelector(getAdditionalSkills)) as [SkillActionName, SkillInterface][];

  const [isTabBase, setIsTabBase] = useState<boolean>(true);

  const handlerTabBase = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setIsTabBase(evt.target.id === 'base-scills');
  }, []);


  return (
    <div className="tabs">
      <div className="tabs__controllers">
        <label className={`tabs__label ${isTabBase ? 'tabs_active' : ''}`} htmlFor="base-scills">Базовые скиллы</label>
        <label className={`tabs__label ${!isTabBase ? 'tabs_active' : ''}`} htmlFor="additional-scills">Дополнительные скиллы</label>
      </div>
      <input className="tabs__controller controller-base" type="radio" name="tabs" id="base-scills" checked={isTabBase} onChange={handlerTabBase}/>
      <div className="tab tab-base">
        {baseSkills.map(([skill, { title, editable, level }]) => (
          <ParameterComponent title={title} level={level} editable={editable} skillName={skill} key={skill}/>))
        }
      </div>
      <input className="tabs__controller controller-skills" type="radio" name="tabs" id="additional-scills" checked={!isTabBase} onChange={handlerTabBase}/>
      <div className="tab tab-skills">
        {additionalSkills.map(([skill, { title, editable, level }]) => (
          <ParameterComponent title={title} level={level} editable={editable} skillName={skill} isAdditional={true} key={skill}/>))
        }
      </div>
    </div>
  );
}

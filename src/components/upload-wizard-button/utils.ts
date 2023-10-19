import { StoreInterface } from '../../interfaces/store.interface.ts';
import * as Joi from 'joi';
import { initialState } from '../../constants/state.ts';
import { BaseSkillLevel, BaseSkillsIncrements } from '../../constants/base-skills.ts';

export function getWizardDataValidateErrors(data: StoreInterface) {
  const baseSkills = data.baseSkills;
  const initBaseSkills = initialState.baseSkills
  const initAdditionalSkills = initialState.additionalSkills

  const schema = Joi.object<StoreInterface>({
    name: Joi.string().default(''),
    baseSkills: Joi.object({
      strength: Joi.object({
        title: Joi.string().valid(initBaseSkills.strength.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(BaseSkillLevel.MAX),
        editable: Joi.boolean().valid(initBaseSkills.strength.editable),
      }),
      agility: Joi.object({
        title: Joi.string().valid(initBaseSkills.agility.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(BaseSkillLevel.MAX),
        editable: Joi.boolean().valid(initBaseSkills.agility.editable),
      }),
      intelligence: Joi.object({
        title: Joi.string().valid(initBaseSkills.intelligence.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(BaseSkillLevel.MAX),
        editable: Joi.boolean().valid(initBaseSkills.intelligence.editable),
      }),
      charm: Joi.object({
        title: Joi.string().valid(initBaseSkills.charm.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(BaseSkillLevel.MAX),
        editable: Joi.boolean().valid(initBaseSkills.charm.editable),
      }),
      vitality: Joi.object({
        title: Joi.string().valid(initBaseSkills.vitality.title),
        level: Joi.number().min(BaseSkillLevel.MIN).max(baseSkills.strength.level + BaseSkillsIncrements.VITALITY),
        editable: Joi.boolean().valid(initBaseSkills.vitality.editable),
      }),
      evasion: Joi.object({
        title: Joi.string().valid(initBaseSkills.evasion.title),
        level: Joi.number().min(BaseSkillLevel.MIN).max(baseSkills.strength.level + BaseSkillsIncrements.EVASION),
        editable: Joi.boolean().valid(initBaseSkills.evasion.editable),
      }),
      vigor: Joi.object({
        title: Joi.string().valid(initBaseSkills.vigor.title),
        level: Joi.number().valid(baseSkills.agility.level + baseSkills.intelligence.level),
        editable: Joi.boolean().valid(initBaseSkills.vigor.editable),
      }),
    }),
    additionalSkills: Joi.object({
      attack: Joi.object({
        title: Joi.string().valid(initAdditionalSkills.attack.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(baseSkills.strength.level),
        editable: Joi.boolean().valid(initAdditionalSkills.attack.editable),
      }),
      stealth: Joi.object({
        title: Joi.string().valid(initAdditionalSkills.stealth.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(baseSkills.agility.level),
        editable: Joi.boolean().valid(initAdditionalSkills.stealth.editable),
      }),
      archery: Joi.object({
        title: Joi.string().valid(initAdditionalSkills.archery.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(baseSkills.agility.level),
        editable: Joi.boolean().valid(initAdditionalSkills.archery.editable),
      }),
      teachability: Joi.object({
        title: Joi.string().valid(initAdditionalSkills.teachability.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(baseSkills.intelligence.level),
        editable: Joi.boolean().valid(initAdditionalSkills.teachability.editable),
      }),
      survival: Joi.object({
        title: Joi.string().valid(initAdditionalSkills.survival.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(baseSkills.intelligence.level),
        editable: Joi.boolean().valid(initAdditionalSkills.survival.editable),
      }),
      medicine: Joi.object({
        title: Joi.string().valid(initAdditionalSkills.medicine.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(baseSkills.intelligence.level),
        editable: Joi.boolean().valid(initAdditionalSkills.medicine.editable),
      }),
      intimidation: Joi.object({
        title: Joi.string().valid(initAdditionalSkills.intimidation.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(baseSkills.charm.level),
        editable: Joi.boolean().valid(initAdditionalSkills.intimidation.editable),
      }),
      insight: Joi.object({
        title: Joi.string().valid(initAdditionalSkills.insight.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(baseSkills.charm.level),
        editable: Joi.boolean().valid(initAdditionalSkills.insight.editable),
      }),
      appearance: Joi.object({
        title: Joi.string().valid(initAdditionalSkills.appearance.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(baseSkills.charm.level),
        editable: Joi.boolean().valid(initAdditionalSkills.appearance.editable),
      }),
      manipulation: Joi.object({
        title: Joi.string().valid(initAdditionalSkills.manipulation.title),
        level: Joi.number().default(0).min(BaseSkillLevel.MIN).max(baseSkills.charm.level),
        editable: Joi.boolean().valid(initAdditionalSkills.manipulation.editable),
      })
    })
  });

  const { error } = schema.validate(data, { abortEarly: false });

  return error ?? null;
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../constants/state.ts';
import { BaseSkillsIncrements } from '../constants/base-skills.ts';
import { StoreInterface } from '../interfaces/store.interface.ts';
import { merge } from 'lodash';

export const UserProcess = createSlice({
  name: 'userProcess',
  initialState: initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    changeStrength(state, action: PayloadAction<number>) {
      state.baseSkills.strength.level = action.payload;
    },
    changeAgility(state, action: PayloadAction<number>) {
      state.baseSkills.agility.level = action.payload;
    },
    changeIntelligence(state, action: PayloadAction<number>) {
      state.baseSkills.intelligence.level = action.payload;
    },
    changeCharm(state, action: PayloadAction<number>) {
      state.baseSkills.charm.level = action.payload;
    },
    changeVitality(state, action: PayloadAction<number>) {
      state.baseSkills.vitality.level  += action.payload > 1 ? 1 : action.payload;
    },
    damageVitality(state, action: PayloadAction<number>) {
      state.baseSkills.vitality.level -= action.payload;
    },
    changeEvasion(state, action: PayloadAction<number>) {
      state.baseSkills.evasion.level = BaseSkillsIncrements.EVASION + action.payload;
    },
    changeVigor(state) {
      state.baseSkills.vigor.level = state.baseSkills.agility.level + state.baseSkills.intelligence.level;
    },
    changeAttack(state, action: PayloadAction<number>) {
      state.additionalSkills.attack.level = action.payload >= state.baseSkills.strength.level ? state.baseSkills.strength.level : action.payload;
    },
    changeStealth(state, action: PayloadAction<number>) {
      state.additionalSkills.stealth.level = action.payload > state.baseSkills.agility.level ? state.baseSkills.agility.level : action.payload;
    },
    changeArchery(state, action: PayloadAction<number>) {
      state.additionalSkills.archery.level = action.payload > state.baseSkills.agility.level ? state.baseSkills.agility.level : action.payload;
    },
    changeTeachability(state, action: PayloadAction<number>) {
      state.additionalSkills.teachability.level = action.payload > state.baseSkills.intelligence.level ? state.baseSkills.intelligence.level : action.payload;
    },
    changeSurvival(state, action: PayloadAction<number>) {
      state.additionalSkills.survival.level = action.payload > state.baseSkills.intelligence.level ? state.baseSkills.intelligence.level : action.payload;
    },
    changeMedicine(state, action: PayloadAction<number>) {
      state.additionalSkills.medicine.level = action.payload > state.baseSkills.intelligence.level ? state.baseSkills.intelligence.level : action.payload;
    },
    changeIntimidation(state, action: PayloadAction<number>) {
      state.additionalSkills.intimidation.level = action.payload > state.baseSkills.charm.level ? state.baseSkills.charm.level : action.payload;
    },
    changeInsight(state, action: PayloadAction<number>) {
      state.additionalSkills.insight.level = action.payload > state.baseSkills.charm.level ? state.baseSkills.charm.level : action.payload;
    },
    changeAppearance(state, action: PayloadAction<number>) {
      state.additionalSkills.appearance.level = action.payload > state.baseSkills.charm.level ? state.baseSkills.charm.level : action.payload;
    },
    changeManipulation(state, action: PayloadAction<number>) {
      state.additionalSkills.manipulation.level = action.payload > state.baseSkills.charm.level ? state.baseSkills.charm.level : action.payload;
    },
    updateAllData(state, action: PayloadAction<StoreInterface>) {
      merge(state, action.payload);
    }
  }
});

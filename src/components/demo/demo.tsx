import './demo.scss';
import { Wizard, WizardScaleX } from '../../constants/wizard.ts';
import { useCallback, useEffect, useState } from 'react';
import { DemoPolygon } from '../../constants/demo-polygon.ts';
import ParametersButton from '../parametrs-button/parameters-button.tsx';
import Overlay from '../overlay/overlay.tsx';
import Lives from '../lives/lives.tsx';
import DamageButton from '../damage-button/damage-button.tsx';
import { useAppSelector } from '../../hooks';
import { getVitality } from '../../store/selectors.ts';
import { BaseSkillLevel } from '../../constants/base-skills.ts';

export default function Demo() {
  const lives = useAppSelector(getVitality);

  const [ wizardLeft, setWizardLeft ] = useState(0);
  const [ wizardScaleX, setWizardScaleX ] = useState<1 | -1>(WizardScaleX.RIGHT);

  const handlerArrowRightLeftClick = useCallback((evt: KeyboardEvent) => {
    const STEP = 10;

    if (evt.key === 'ArrowRight') {
      setWizardLeft(prevWizardLeft => {
        const newWizardLeft = prevWizardLeft + STEP;
        return (newWizardLeft >= DemoPolygon.WIDTH - Wizard.WIDTH) ? DemoPolygon.WIDTH - Wizard.WIDTH : newWizardLeft;
      });
      if (wizardScaleX === WizardScaleX.LEFT) {
        setWizardScaleX(WizardScaleX.RIGHT);
      }
    }
    if (evt.key === 'ArrowLeft') {
      setWizardLeft(prevWizardLeft => {
        const newWizardLeft = prevWizardLeft - STEP;
        return (newWizardLeft <= 0) ? 0 : newWizardLeft;
      });
      if (wizardScaleX === WizardScaleX.RIGHT) {
        setWizardScaleX(WizardScaleX.LEFT);
      }
    }

  }, [ wizardScaleX ]);

  useEffect(() => {
    window.addEventListener('keydown', handlerArrowRightLeftClick);
    return () => {
      window.removeEventListener('keydown', handlerArrowRightLeftClick);
    };
  }, [ handlerArrowRightLeftClick ]);

  const [ isPopupVisible, setPopupVisibility ] = useState(false);
  const handlerParametersButtonClick = useCallback(() => {
    setPopupVisibility(!isPopupVisible);
  }, [ isPopupVisible ]);

  return (
    <>
      {isPopupVisible && (
        <Overlay onCloseButtonClick={handlerParametersButtonClick}/>
      )}
      <section className="demo">
        <Lives lives={lives}/>
        <ParametersButton onButtonClick={handlerParametersButtonClick}/>
        {lives > BaseSkillLevel.MIN && (<img className="wizard" src="./img/wizard.gif" alt="wizzard" height={`${Wizard.HEIGHT}px`}
                                             width={`${Wizard.WIDTH}px`} style={{ left: `${wizardLeft}px`, transform: `scaleX(${wizardScaleX})` }}/>)}
        <DamageButton lives={lives}/>
      </section>
    </>
  );
}

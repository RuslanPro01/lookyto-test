import { UserProcess } from '../../store/user-process.ts';
import { useAppDispatch } from '../../hooks';
import { useCallback, useState } from 'react';

type DamageButtonProps = {
  lives: number;
}
export default function DamageButton({lives}: DamageButtonProps) {
  const { damageVitality, changeVitality } = UserProcess.actions;
  const dispatch = useAppDispatch();
  const [ livesCounter, setLivesCounter ] = useState(lives);

  const handlerDamageButtonClick = useCallback(() => {
    if (livesCounter > 0) {
      setLivesCounter(livesCounter - 1);
      dispatch(damageVitality(1));
    }
    if (livesCounter === 0) {
      changeVitality(1);
      setLivesCounter(lives);
    }
  }, [changeVitality, damageVitality, dispatch, lives, livesCounter])

  return (
    lives > 0 && <button className="damage-button" onClick={handlerDamageButtonClick}>Авада кедавра!</button>
  );
}

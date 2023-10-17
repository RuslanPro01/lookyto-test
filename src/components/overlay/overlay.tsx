import './overlay.scss';
import Tabs from '../tabs/tabs.tsx';
import { ChangeEvent, useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getName } from '../../store/selectors.ts';
import { UserProcess } from '../../store/user-process.ts';
import SaveWizardButton from '../save-wizard-button/save-wizard-button.tsx';
import UploadWizardButton from '../upload-wizard-button/upload-wizard-button.tsx';

type OverlayProps = {
  onCloseButtonClick: () => void
}

const { changeName } = UserProcess.actions;

export default function Overlay({ onCloseButtonClick }: OverlayProps) {
  const handlerEscapeButtonClick = useCallback((evt: KeyboardEvent) => {
    if (evt.key === 'Escape') {
      onCloseButtonClick();
    }
  }, [onCloseButtonClick])

  useEffect(() => {
    window.addEventListener('keydown', handlerEscapeButtonClick);
    return () => {
      window.removeEventListener('keydown', handlerEscapeButtonClick);
    }
  })

  const userName = useAppSelector(getName);
  const dispatch = useAppDispatch();
  const handlerNameChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    const newName = evt.target.value;
    dispatch(changeName(newName));
  }, [dispatch])

  return (
    <section className="overlay">
      <div className="overlay__main">
        <input type="text" className="overlay__name" placeholder="Имя" value={userName} onChange={handlerNameChange}/>
        <button className="overlay__close" title="Закрыть парметры персонажа" onClick={onCloseButtonClick}>х</button>
      </div>
      <div className="overlay__other">
        <img src="./img/wizard.svg" alt="wizard" className="overlay__image" width="180px" height="245px"/>
        <Tabs/>
      </div>
      <footer className="overlay__footer">
        <UploadWizardButton/>
        <SaveWizardButton/>
      </footer>
    </section>
  );
}


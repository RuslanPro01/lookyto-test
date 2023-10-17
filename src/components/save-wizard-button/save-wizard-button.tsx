import { getAllData } from '../../store/selectors.ts';
import { useAppSelector } from '../../hooks';
import { useCallback, useState } from 'react';
import './save-wizard-button.scss';

const JSON_MIME_TYPE = 'application/json';

export default function SaveWizardButton() {
  const [isCreating, setIsCreating] = useState(false);
  const state = useAppSelector(getAllData);

  const handlerSaveButtonClick = useCallback(() => {
    setIsCreating(true);
    const json = JSON.stringify(state, null, 2);
    const blob = new Blob([json], { type: JSON_MIME_TYPE });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${state.name}.json`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    setIsCreating(false);
  }, [state]);

  return (<button className="overlay__save" onClick={handlerSaveButtonClick} disabled={isCreating}>{isCreating ? 'Сохранение...' : 'Сохранить волшебника'}</button>);
}

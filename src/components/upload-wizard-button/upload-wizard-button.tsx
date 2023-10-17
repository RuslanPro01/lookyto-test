import './upload-wizard-button.scss';
import { ChangeEvent, useCallback } from 'react';
import { toast } from 'react-toastify';
import { getWizardDataValidateErrors } from './utils.ts';
import { useAppDispatch } from '../../hooks';
import { UserProcess } from '../../store/user-process.ts';

export default function UploadWizardButton() {
  const dispatch = useAppDispatch();
  const { updateAllData } = UserProcess.actions;
  const handlerFileInputChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    if (!evt.target.files) {
      toast.error('Файл не выбран');
      return;
    }
    const file = evt.target.files[0];
    if (!file.name.endsWith('.json')) {
      toast.error('Неверный формат файла');
      return;
    }
    const reader = new FileReader();
    reader.onload = function (event) {
      const fileContent = event.target!.result;
      try {
        const data = JSON.parse(fileContent as string);
        const errors = getWizardDataValidateErrors(data);
        if (errors) {
          toast.error(`${errors}`);
          return;
        }
        dispatch(updateAllData(data));
        toast.success('Данные загружены');
      } catch {
        toast.error('Синтаксическая ошибка в файле, проверьте его содержимое');
      }
    };
    reader.readAsText(file);

  }, [ dispatch, updateAllData ]);

  return (
    <>
      <label htmlFor="file" className="overlay__upload">
        <span style={{ alignSelf: 'center' }}>Загрузить своего персонажа</span>
      </label>
      <input type="file" id="file" style={{ display: 'none' }} accept="application/json"
             onChange={handlerFileInputChange}/>
    </>
  );
}

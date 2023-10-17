import './parametrs-button.scss';

type ParametersButtonProps = {
  onButtonClick: () => void;
}
export default function ParametersButton({ onButtonClick }: ParametersButtonProps) {
  return (
    <button className="parametersButton" title="Параметры персонажа" onClick={onButtonClick}></button>
  );
}

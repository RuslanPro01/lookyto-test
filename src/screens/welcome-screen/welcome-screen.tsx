import './welcome-screen.scss';
import Demo from '../../components/demo/demo.tsx';
import { getName } from '../../store/selectors.ts';
import { useAppSelector } from '../../hooks';

export default function WelcomeScreen() {
  const wizardName = useAppSelector(getName);
  return (
    <header className="header">
      <div className="header-clouds"></div>
      <div className="header-fence"></div>
      <div className="header-tree"></div>
      <h1 className="header-title section-title">
        Code and Magick
        <img src="./img/title-site.png" alt="Code and magick"/>
      </h1>
      <p className="header-description">
        Это игра, где главного героя, которым вам предстоит управлять и изменять заклинаниями окружающий мир зовут
        {` ${wizardName.trim()}`}.
        Вместе с ним вас ждет увлекательное приключение…
      </p>
      <Demo/>
    </header>
  );
}

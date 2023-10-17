import './lives.scss';

type LivesProps = {
  lives: number;
}

export default function Lives({ lives }: LivesProps) {
  return (
    <div className="lives">
      <span className="lives__counter" title="Жизненная сила">{lives}</span>
    </div>
  );
}

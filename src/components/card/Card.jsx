import Illustration from '../illustration/Illustration';
import Stats from '../stats/Stats';
import c from './Card.module.scss'

const Card = () => {
  return (
    <article className={c.card}>
      <Illustration />
      <Stats />
    </article>
  );
}

export default Card;
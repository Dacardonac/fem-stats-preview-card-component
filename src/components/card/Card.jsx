import Illustration from '../illustration/Illustration';
import Stats from '../stats/Stats';
import s from '../stats/Stats.module.scss';
import c from './Card.module.scss';

const Card = () => {
  return (
    <article className={c.card}>
      <Illustration description={'Header Illustration'} />
      <Stats
        title={
          <>
            Get <span className={s['stats__title--violet']}>insights</span> that
            help your business grow.
          </>
        }
        paragraph={
          'Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.'
        }
        companies={'10K+'}
        templates={'314'}
        queries={'12M+'}
      />
    </article>
  );
};

export default Card;

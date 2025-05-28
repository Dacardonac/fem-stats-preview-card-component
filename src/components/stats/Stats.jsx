import s from './Stats.module.scss';

const Stats = ({ title, paragraph, companies, templates, queries }) => {
  return (
    <section className={s.stats}>
      <h1 className={s['stats__title']}>{title}</h1>
      <p className={s['stats__paragraph']}>{paragraph}</p>
      <div className={s['stats__numbers']}>
        <div className={s['stats__numbers--stats']}>
          <span className={s['stats__numbers--strong']}>{companies}</span>{' '}
          <span className={s['stats__numbers--light']}>companies</span>
        </div>
        <div className={s['stats__numbers--stats']}>
          <span className={s['stats__numbers--strong']}>{templates}</span>{' '}
          <span className={s['stats__numbers--light']}>templates</span>
        </div>
        <div className={s['stats__numbers--stats']}>
          <span className={s['stats__numbers--strong']}>{queries}</span>{' '}
          <span className={s['stats__numbers--light']}>queries</span>
        </div>
      </div>
    </section>
  );
};

export default Stats;

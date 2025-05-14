import s from './Stats.module.scss'

const Stats = () => {
  return (
    <section className={s.stats}>
      <h1 className={s["stats__title"]}>Get <span className={s["stats__title--violet"]}>insights</span> that help your business grow.</h1>
      <p className={s["stats__paragraph"]}>Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.</p>
      <div className={s["stats__numbers"]}>
        <div className={s["stats__numbers--stats"]}><span className={s["stats__numbers--strong"]}>10k+</span> <span className={s["stats__numbers--light"]}>companies</span></div>
        <div className={s["stats__numbers--stats"]}><span className={s["stats__numbers--strong"]}>314</span> <span className={s["stats__numbers--light"]}>templates</span></div>
        <div className={s["stats__numbers--stats"]}><span className={s["stats__numbers--strong"]}>12m+</span> <span className={s["stats__numbers--light"]}>queries</span></div>
      </div>
    </section>
  );
}

export default Stats;
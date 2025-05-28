import f from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={f.attribution}>
      Challenge by{' '}
      <a
        className={f['attribution__links']}
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
      >
        Frontend Mentor
      </a>
      . Coded by{' '}
      <a
        className={f['attribution__links']}
        href="https://github.com/Dacardonac"
        target="_blank"
      >
        Daniel Alejandro Cano Cardona
      </a>
      .
    </footer>
  );
};

export default Footer;

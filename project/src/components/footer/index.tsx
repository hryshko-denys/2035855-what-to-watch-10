import {MainLogo} from '../index';

type FooterComponentProps = {
  isLight?: boolean;
}

function Footer({ isLight = false }: FooterComponentProps): JSX.Element {
  return (
    <footer className="page-footer">
      <MainLogo isLight={isLight} />

      <div className="copyright">
        <p>© 2022 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

export default Footer;

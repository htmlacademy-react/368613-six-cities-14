import Header from '../../components/header';
import Logo from '../../components/logo';
import HeaderNav from '../../components/header-nav';
import { Offer } from '../../types/offer';
import Citties from '../../components/cities';

type MainOffersScreenProps = {
  offers: Offer[];
}
function MainScreen({offers}: MainOffersScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header>
        <Logo />
        <HeaderNav />
      </Header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Paris</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Cologne</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Brussels</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item tabs__item--active">
                  <span>Amsterdam</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Hamburg</span>
                </a>
              </li>
              <li className="locations__item">
                <a className="locations__item-link tabs__item" href="#">
                  <span>Dusseldorf</span>
                </a>
              </li>
            </ul>
          </section>
        </div>
        <Citties offers={offers} />
      </main>
    </div>
  );
}

export default MainScreen;

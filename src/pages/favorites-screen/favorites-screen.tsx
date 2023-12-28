import Header from '../../components/header';
import Logo from '../../components/logo';
import HeaderNav from '../../components/header-nav';
import Footer from '../../components/footer';
import { Offer } from '../../types/offer';
import PlaceCard from '../../components/place-card';

type FavoritesScreenProps = {
  offers: Offer[];
}

function getFavoritesByCity(favorites: Offer[]) {
  return favorites.reduce<{[key: string]: Offer[]}>((acc, offer) => {
    if (!acc[offer.city.name]) {
      acc[offer.city.name] = [];
    }
    acc[offer.city.name].push(offer);
    return acc;
  }, {});
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  const favoritesByCity = getFavoritesByCity(offers);
  return (
    <div className="page">
      <Header>
        <Logo />
        <HeaderNav />
      </Header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(favoritesByCity).map(([city, groupedFavorites]) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places">
                    {groupedFavorites.map((offer) => (
                      <PlaceCard offer={offer} key={offer.id} width="150" height="110" />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default FavoritesScreen;

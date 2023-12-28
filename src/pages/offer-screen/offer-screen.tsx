import Header from '../../components/header';
import Logo from '../../components/logo';
import HeaderNav from '../../components/header-nav';
import PlaceCard from '../../components/place-card';
import { Offer } from '../../types/offer';
import { AppRoute } from '../../const';
import { useParams, Navigate } from 'react-router-dom';
import OfferDetails from '../../components/offer-details';

type OfferScreenProps = {
  offers: Offer[];
}

function OfferScreen({offers}: OfferScreenProps): JSX.Element {
  const {id} = useParams();
  const offer = offers.find((item) => item.id === id);

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  const nearbyOffers = offers.filter((item) => item.id !== id).slice(0, 3);

  return (
    <div className="page">
      <Header>
        <Logo />
        <HeaderNav />
      </Header>

      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDetails offer={offer} />
          <section className="offer__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearbyOffer) => (
                <PlaceCard offer={nearbyOffer} key={nearbyOffer.id} />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default OfferScreen;

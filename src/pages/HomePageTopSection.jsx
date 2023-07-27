import Logo1 from "../images/hero/bitcoin.png";
import Logo2 from "../images/hero/ethereum.png";
import { getCoins } from "../api";
import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { Suspense, useState } from "react";
import Loading from "../components/Loading";

export function loader() {
  return defer({ cryptoData: getCoins() });
}

function HomePageTopSection() {
  const [openTopPriced, setOpenTopPriced] = useState(false);
  const dataPromise = useLoaderData();

  function renderAPI(data) {
    const render = data.slice(0, 4).map((coin) => {
      const priceChanged = coin.market_data.price_change_percentage_24h;
      const currentPrice = coin.market_data.current_price.usd;
      const transformPriceToCurrency = currentPrice.toLocaleString(`en-US`, {
        style: "currency",
        currency: "USD",
      });

      return (
        <Link to={`coin/${coin.id}`} key={coin.id}>
          <div className="header-coins">
            <div className="img">
              <img src={coin.image.large} />
            </div>
            <h1>
              {coin.name}{" "}
              <span
                className={`price-changed ${
                  priceChanged > 0 ? "green" : "red"
                }`}
              >
                {priceChanged.toFixed(2)}%
              </span>
            </h1>
            <h1>{transformPriceToCurrency}</h1>
          </div>
        </Link>
      );
    });

    const topPricedCoinsSorted = data
      .slice()
      .sort(
        (a, b) =>
          b.market_data.current_price.usd - a.market_data.current_price.usd
      );

    const renderTopPriced = topPricedCoinsSorted.slice(0, 5).map((coin) => {
      const priceChanged = coin.market_data.price_change_percentage_24h;
      const currentPrice = coin.market_data.current_price.usd;
      const transformPriceToCurrency = currentPrice.toLocaleString(`en-US`, {
        style: "currency",
        currency: "USD",
      });

      return (
        <Link to={`coin/${coin.id}`} key={coin.id}>
          <div className="header-coin">
            <div className="left-side">
              <img src={coin.image.large} />
            </div>
            <div className="right-side">
              <h1>
                {coin.name}{" "}
                <span
                  className={`price-changed ${
                    priceChanged > 0 ? "green" : "red"
                  }`}
                >
                  {priceChanged.toFixed(2)}%
                </span>
              </h1>
              <h1>{transformPriceToCurrency}</h1>
            </div>
          </div>
        </Link>
      );
    });

    return (
      <>
        <div className="mid-side">{render}</div>
        <div className="top-prices">
          <button
            onClick={() => setOpenTopPriced((oldToggle) => !oldToggle)}
            className="see-top-prices-btn"
          >
            {openTopPriced ? (
              <>Hide top priced coins &uarr;</>
            ) : (
              <>Show top priced coins &darr;</>
            )}
          </button>
          {openTopPriced && renderTopPriced}
        </div>
      </>
    );
  }
  return (
    <section className="top-section">
      <div className="title">
        <img className="btc" src={Logo1} />
        <div className="text">
          <h1>track and trade</h1>
          <h1>crypto currencies</h1>
        </div>
        <img className="eth" src={Logo2} />
      </div>
      <Suspense fallback={<Loading />}>
        <Await resolve={dataPromise.cryptoData}>{renderAPI}</Await>
      </Suspense>
    </section>
  );
}

export default HomePageTopSection;

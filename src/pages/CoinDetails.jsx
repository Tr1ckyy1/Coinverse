import { Await, defer, useLoaderData } from "react-router-dom";
import { getCoins } from "../api";
import { Suspense } from "react";
import DOMPurify from "dompurify";
import Loading from "../components/Loading";
import "./CoinDetail.css";

export function loader({ params }) {
  return defer({ currentCoin: getCoins(params.id) });
}

function CoinDetails() {
  const coinPromise = useLoaderData();

  function renderCurrentCoin(coin) {
    const priceChanged = coin.market_data.price_change_percentage_24h;
    const currentPrice = coin.market_data.current_price.usd;
    const transformPriceToCurrency = currentPrice.toLocaleString(`en-US`, {
      style: "currency",
      currency: "USD",
    });

    console.log(coin);

    return (
      <>
        <div className="coin-detail-left">
          <img src={coin.image.large} />
          <h1>{coin.name}</h1>
          <h1>Rank: #{coin.coingecko_rank}</h1>
        </div>
        <div className="coin-detail-right">
          <div className="details">
            <h1>
              24h Change:{" "}
              <span className={`${priceChanged > 0 ? "green" : "red"}`}>
                {priceChanged.toFixed(2)}%
              </span>
            </h1>
            <h1>
              Price:{" "}
              <span className={`${currentPrice > 0 ? "green" : "red"}`}>
                {transformPriceToCurrency}
              </span>
            </h1>
            <h1>Symbol: {coin.symbol}</h1>
          </div>
          <div>
            <p
              className="description"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </>
    );
  }

  return (
    <section className="current-coin-details">
      <Suspense fallback={<Loading />}>
        <Await resolve={coinPromise.currentCoin}>{renderCurrentCoin}</Await>
      </Suspense>
    </section>
  );
}

export default CoinDetails;

import { Await, Link, defer, useLoaderData } from "react-router-dom";
import { getCoins } from "../api";
import { Suspense, useState } from "react";
import Loading from "../components/Loading";
import Pagination from "./Pagination";
import { useSection } from "../Context";

export function loader() {
  return defer({ cryptoData: getCoins() });
}
function HomeMarket() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const dataPromise = useLoaderData();
  const { scrollToSection, marketRef } = useSection();

  function renderAllCoins(coins) {
    // Pagination
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = coins.slice(indexOfFirstPost, indexOfLastPost);

    const renderCoins = currentPosts.map((item) => {
      const priceChanged = item.market_data.price_change_percentage_24h;
      const currentPrice = item.market_data.current_price.usd;
      const transformPriceToCurrency = currentPrice.toLocaleString(`en-US`, {
        style: "currency",
        currency: "USD",
      });
      const marketCap = item.market_data.market_cap.usd.toLocaleString(
        `en-US`,
        {
          style: "currency",
          currency: "USD",
        }
      );

      return (
        <Link key={item.id} to={`coin/${item.id}`}>
          <div className="market-coins-display">
            <div className="img-title">
              <img className="small-image" src={item.image.small} />
              <h2>{item.name}</h2>
            </div>
            <h2>{transformPriceToCurrency}</h2>
            <h2 className={`${priceChanged > 0 ? "green" : "red"}`}>
              {priceChanged.toFixed(2)}%
            </h2>
            <h2 className="cap">{marketCap}</h2>
          </div>
        </Link>
      );
    });

    function paginate(pageNumber) {
      if (pageNumber === currentPage) return;
      scrollToSection(marketRef);
      setCurrentPage(pageNumber);
    }

    function nextPage() {
      if (currentPage === coins.length / postsPerPage) return;
      setCurrentPage((oldPage) => oldPage + 1);
      scrollToSection(marketRef);
    }

    function previousPage() {
      if (currentPage === 1) return;
      setCurrentPage((oldPage) => oldPage - 1);
      scrollToSection(marketRef);
    }

    return (
      <>
        <div className="market-bot-section">{renderCoins}</div>
        <Pagination
          paginate={paginate}
          totalAmount={coins}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      </>
    );
  }

  return (
    <section ref={marketRef} className="market">
      <h1>Market Update</h1>

      <div className="market-top-section">
        <p>Coin</p>
        <p>Price</p>
        <p>24h Change</p>
        <p className="cap">Market Cap</p>
      </div>
      <Suspense fallback={<Loading />}>
        <Await resolve={dataPromise.cryptoData}>{renderAllCoins}</Await>
      </Suspense>
    </section>
  );
}

export default HomeMarket;

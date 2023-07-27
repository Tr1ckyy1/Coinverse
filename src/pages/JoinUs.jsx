import { useSection } from "../Context";
import Logo1 from "../images/hero/bitcoin.png";
import Logo2 from "../images/hero/ethereum.png";
function JoinUs() {
  const { joinRef } = useSection();
  return (
    <section ref={joinRef} className="joinus-section">
      <div className="title">
        <img className="btc" src={Logo1} />
        <div className="text">
          <h1>join us via</h1>
          <h1>discord</h1>
          <p>Invest and manage all your crypto at one place.</p>
        </div>
        <img className="eth" src={Logo2} />
      </div>
      <button className="join-btn">Join via Discord</button>
    </section>
  );
}

export default JoinUs;

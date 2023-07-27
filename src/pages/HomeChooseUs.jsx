import ChooseBox from "./ChooseBox";
import ChooseImg from "../images/chooseus/choose-main.png";
import { FaWallet } from "react-icons/fa";
import { FaPencilRuler } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa";
import { FaChessKnight } from "react-icons/fa";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { useSection } from "../Context";

function HomeChooseUs() {
  const { chooseUsRef } = useSection();
  return (
    <section ref={chooseUsRef} className="choose-us-container">
      <h1>
        why <span>choose us</span>
      </h1>
      <div className="choose-content-container">
        <div className="left-section">
          <ChooseBox
            icon={<FaWallet />}
            title="CONNECT YOUR WALLET"
            text="Use Trust Wallet, Metamask or to connect to the app."
          />
          <ChooseBox
            icon={<FaPencilRuler />}
            title="SELECT YOUR QUANTITY"
            text="Upload your crypto and set a title, description and price."
          />
          <ChooseBox
            icon={<FaBolt />}
            title="CONFIRM TRANSACTION"
            text="Earn by selling your crypto on our marketplace."
          />
        </div>
        <div className="mid-section">
          <img src={ChooseImg} />
        </div>
        <div className="right-section">
          <ChooseBox
            icon={<FaSatelliteDish />}
            title="RECEIVE YOUR OWN NFTS"
            text="Invest all your crypto at one place on one platform."
          />
          <ChooseBox
            icon={<FaChessKnight />}
            title="TAKE A MARKET
            TO SELL"
            text="Discover, collect the right crypto collections to buy or sell."
          />
          <ChooseBox
            icon={<MdOutlineStackedBarChart />}
            title="DRIVE YOUR COLLECTION"
            text="We make it easy to Discover, Invest and manage."
          />
        </div>
      </div>
    </section>
  );
}

export default HomeChooseUs;

import React from "react";
import "./account.scss";
import master from "../../assets/img/card/master card.png";
import chip from "../../assets/img/card/card chip.png";
import btc from "../../assets/img/card/BTC.png";

const Account = () => {
  return (
    <div className="account">
      <h1>Accounts and Cards</h1>
      <div className="body">
        {/* top */}
        <div className="top">
          <div className="head">
            <span>My accounts</span>
          </div>
          <div className="info">
            <div className="box">
              <div className="account">
                <p>Checking Account</p>
                <span>Balance</span>
                <h1>₹ 10,000.00</h1>
                <div className="line"></div>
                <div className="bank">
                  <div className="ifsc">
                    <h3>IFSCE</h3>
                    <h2>AB11 0000 000 1111 1111</h2>
                  </div>
                  <div className="owner">
                    <h3>Account Owner</h3>
                    <h2>Aravinthan M</h2>
                  </div>
                </div>
              </div>
              <div className="share">
                <p>See details</p>
              </div>
            </div>
            <div className="box">
              <div className="account">
                <p>Checking Account</p>
                <span>Balance</span>
                <h1>₹ 10,000.00</h1>
                <div className="line"></div>
                <div className="bank">
                  <div className="ifsc">
                    <h3>IFSCE</h3>
                    <h2>AB11 0000 000 1111 1111</h2>
                  </div>
                  <div className="owner">
                    <h3>Account Owner</h3>
                    <h2>Aravinthan M</h2>
                  </div>
                </div>
              </div>
              <div className="share">
                <p>See details</p>
              </div>
            </div>
            <div className="box">
              <div className="account">
                <p>Checking Account</p>
                <span>Balance</span>
                <h1>₹ 10,000.00</h1>
                <div className="line"></div>
                <div className="bank">
                  <div className="ifsc">
                    <h3>IFSCE</h3>
                    <h2>AB11 0000 000 1111 1111</h2>
                  </div>
                  <div className="owner">
                    <h3>Account Owner</h3>
                    <h2>Aravinthan M</h2>
                  </div>
                </div>
              </div>
              <div className="share">
                <p>See details</p>
              </div>
            </div>
          </div>
        </div>

        {/* bottom */}
        {/* <div className="bottom">
          <div className="head_card">
            <span>My accounts</span>
          </div>
          <div className="info_card">
          <div className="card">
      <div className="top">
        <div className="left">
          <img src={btc} alt="BTC" />
          <h2>BTC</h2>
        </div>
        <img src={master} className="right" alt="Visa" />
      </div>
      <div className="middle">
        <h1>$543,106</h1>
        <div className="chip">
          <img src={chip} alt="Card Chip" />
        </div>
      </div>
      <div className="bottom_card">
        <div className="left">
          <small>Card Holder</small>
          <h5>WILLIAM PI</h5>
        </div>
        <div className="right">
          <div className="expiry">
            <small>Expiry</small>
            <h5>06/24</h5>
          </div>
          <div className="cvv">
            <small>CVV</small>
            <h5>123</h5>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Account;

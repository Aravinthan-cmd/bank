import React from "react";
import "./transfer.scss";
import Share from "../../components/share/Share";
import person2 from "../../assets/img/person/person2.jpg";
import person3 from "../../assets/img/person/person3.jpg";
import person4 from "../../assets/img/person/person4.jpg";
import person5 from "../../assets/img/person/person5.jpg";

const Transfer = () => {
  return (
    <div className="transfer">
      <h1>Transfer</h1>
      <div className="body">
        {/* left */}
        <div className="left">
          <div className="top">
            <h2>Select Payer</h2>
            <select name="cars" id="cars">
              <option value="volvo">Checking Account</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
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
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M280-360v-240q0-33 23.5-56.5T360-680h326L583-783l57-57 200 200-200 200-57-56 103-104H360v240h-80Zm-80 240q-33 0-56.5-23.5T120-200v-600h80v600h480v-160h80v160q0 33-23.5 56.5T680-120H200Z"/></svg>
                    <p>Share IFSCE</p>
                </div>
                <div className="request">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440h80q0 117 81.5 198.5T480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720h-6l62 62-56 58-160-160 160-160 56 58-62 62h6q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Z"/></svg>
                    <p>Request payment</p>
                </div>
            </div>
          </div>
          <div className="bottom">
          <div className="head_share">
            <p>Quick Transfer</p>
            <div className="scroll-share">
                <span>{'<'}</span>
                <span>{'>'}</span>
              </div>
          </div>
          <div className="share_profile_list">
            <div className="add">
              +
            </div>
            <Share context={
              <img src={person2} alt="person1"/>
            }/>
            <Share context={
              <img src={person3} alt="person1"/>
            }/>
            <Share context={
              <img src={person4} alt="person1"/>
            }/>
            <Share context={
              <img src={person5} alt="person1"/>
            }/>
          </div>
        </div>
        </div>
        
        {/* right */}
        <div className="right">
        <div className="transfer-form">
      <h2>Transfer to</h2>
      <div className="tabs">
        <button className="tab active">Own account</button>
        <button className="tab">Other account</button>
      </div>
      <form>
        <div className="form-group">
          <label htmlFor="iban">IBAN *</label>
          <input type="text" id="iban" name="iban" required />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount *</label>
          <input type="number" id="amount" name="amount" required />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date *</label>
          <input type="date" id="date" name="date" required />
        </div>
        <div className="other-data">
          <h3>Other data</h3>
          <div className="form-group">
            <label htmlFor="purpose">Transfer purpose</label>
            <input type="text" id="purpose" name="purpose" />
          </div>
          <div className="form-group">
            <label htmlFor="beneficiary-name">Beneficiary's name</label>
            <input type="text" id="beneficiary-name" name="beneficiary-name" />
          </div>
          <div className="form-group">
            <label htmlFor="beneficiary-email">Beneficiary's email</label>
            <input type="email" id="beneficiary-email" name="beneficiary-email" />
          </div>
          <div className="form-group">
            <label htmlFor="payer-reference">Payer's reference</label>
            <input type="text" id="payer-reference" name="payer-reference" />
          </div>
          <div className="form-group">
            <label htmlFor="beneficiary-info">Information for beneficiary</label>
            <textarea id="beneficiary-info" name="beneficiary-info"></textarea>
          </div>
        </div>
        <button type="submit" className="continue-button">Continue</button>
      </form>
    </div>
        </div>
      </div>
    </div>
  );
};

export default Transfer;

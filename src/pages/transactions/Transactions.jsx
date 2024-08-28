import { useState, useEffect } from "react";
import "./transactions.scss";
import master from "../../assets/img/card/master card.png";
import chip from "../../assets/img/card/card chip.png";
import ChartTransaction from "./ChartTransaction";
import Card from "../../components/card/Card";

const Transactions = () => {
  const [account, setAccount] = useState([]);
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      var url;
      try {
        url = "http://localhost:8080/account/1";
        const response = await fetch(url);
        const datafetchVal = await response.json();
        setAccount(datafetchVal);
      } catch (error) {
        console.log("error", error);
      }
    };
    const fetchDataTransaction = async () => {
      var url;
      try {
        url = "http://localhost:8080/transaction/getalltransaction";
        const response = await fetch(url);
        const datafetchVal = await response.json();
        setTransaction(datafetchVal);
      } catch (error) {
        console.log("error", error);
      }
    };
    const interval = setInterval(async() => {
      await fetchData();
      await fetchDataTransaction();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
    {transaction.length !== 0 ? (
      <div className="transactions">
      <h1>Transactions</h1>
      
      <div className="body">

        {/* left */}
        <div className="left">
          <div className="top">
            <div className="head">
              <select name="cars" id="cars">
                <option value="volvo">Checking Account</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="content">
              <div className="box">
                <div className="account">
                  <p>Checking Account</p>
                  <span>Balance</span>
                  <h1>₹ {account.account_balance}</h1>
                  <div className="line"></div>
                  <div className="bank">
                    <div className="ifsc">
                      <h3>IFSCE</h3>
                      <h2>AB11 0000 000 1111 1111</h2>
                    </div>
                    <div className="owner">
                      <h3>Account Owner</h3>
                      <h2>{account.account_holder_name}</h2>
                    </div>
                  </div>
                </div>
              </div>
              <div className="balance-card">
                <div className="card-icons">
                  <div className="chip-icon">
                    <img src={master} alt="master-logo" />
                  </div>
                  <div className="network-icon">
                    <img src={chip} alt="chip" />
                  </div>
                </div>
                <div className="balance-info">
                  <p className="balance-label">Available Balance</p>
                  <p className="balance-amount">₹ {account.account_balance}</p>
                </div>
                <div className="card-details">
                  <p className="card-number">1111 **** **** 0000</p>
                  <div className="card-footer">
                    <p className="card-holder">{account.account_holder_name}</p>
                    <p className="expiry-date">12/24</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="middle">
            <div className="head">
              <h1>Spending Overview</h1>
              <div className="scroll-share">
                <span>{"<"}</span>
                <span>{">"}</span>
              </div>
            </div>
            {/* center */}
            <div className="center">
              <div className="chart">
                <ChartTransaction />
              </div>
            </div>
          </div>
          <div className="bottom"></div>
        </div>

        {/* right */}
        <div className="right">
          <div className="top">
            <div className="head">
              <h1>Transactions</h1>
              <span>View all</span>
            </div>
            <div className="title">
              <p>All</p>
              <span>Expenses</span>
              <span>Income</span>
            </div>
            <div className="content">
            <Card price={transaction[0].amount} description={transaction[0].description} categories={<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H390v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z"/></svg>}/>
            <Card price={transaction[1].amount} description={transaction[1].description} categories={<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg>}/>
            <Card price={transaction[0].amount} description={transaction[0].description} categories={<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="m168.33-120-46.66-46.67 416.66-416.66q-20.66-46-8.33-98t57-96q47.67-47 112-58.34Q763.33-847 804.33-806 846-764.33 834-700.67 822-637 773-587.33q-41.33 42.66-92.67 55.66-51.33 13-94.66-5.66L524.33-476l309.34 309.33L787-120 477.67-428.67 168.33-120ZM291-468 171.67-587.33q-52-52-53.34-123.67Q117-782.67 167-836.67L413-590 291-468Z"/></svg>}/>
            <Card price={transaction[1].amount} description={transaction[1].description} categories={<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="M146.67-120q-27.5 0-47.09-19.58Q80-159.17 80-186.67V-312h800v125.33q0 27.5-19.58 47.09Q840.83-120 813.33-120H146.67Zm0-125.33v58.66h666.66v-58.66H146.67ZM480-424q-39.33 0-59.33 21.33-20 21.34-74.67 21.34t-73-21.34Q254.67-424 215.33-424q-39.33 0-59.9 21.33-20.57 21.34-75.43 21.34V-448q34 0 57.33-21.33 23.34-21.34 78-21.34 54.67 0 73 21.34Q306.67-448 346-448t59.33-21.33q20-21.34 74.67-21.34t74.67 21.34Q574.67-448 614-448t57.67-21.33q18.33-21.34 73-21.34 54.66 0 78.66 21.34Q847.33-448 880-448v66.67q-54.67 0-74.67-21.34Q785.33-424 746-424t-58.33 21.33q-19 21.34-73.67 21.34t-74.67-21.34Q519.33-424 480-424ZM80-558.67v-40q0-111 106.17-176.16Q292.33-840 480-840t293.83 65.17Q880-709.67 880-598.67v40H80Zm400-214.66q-140 0-230.83 41.33-90.84 41.33-99.17 106.67h660q-9.67-65.34-99.83-106.67Q620-773.33 480-773.33Zm0 528Zm0-380Z"/></svg>}/>
            <Card price={transaction[0].amount} description={transaction[0].description} categories={<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="M160-120v-653.33q0-27 19.83-46.84Q199.67-840 226.67-840H486q27 0 46.83 19.83 19.84 19.84 19.84 46.84V-488h56.66q24.75 0 42.38 17.62 17.62 17.63 17.62 42.38v206q0 20.12 14.17 33.73 14.17 13.6 34.5 13.6t34.5-13.6q14.17-13.61 14.17-33.73v-292.67Q756.33-509 745-506.5q-11.33 2.5-23 2.5-40.32 0-68.16-27.84Q626-559.68 626-600q0-31.74 17.83-57.04 17.84-25.29 47.5-34.29L600-782.67 638-820l151.33 150q14.34 14.33 22.5 32 8.17 17.67 8.17 38v378q0 42.84-29.54 72.42Q760.91-120 718.12-120q-42.79 0-72.45-29.58Q616-179.16 616-222v-212.67h-63.33V-120H160Zm66.67-434.67H486v-218.66H226.67v218.66ZM722-557.33q17.67 0 30.17-12.5t12.5-30.17q0-17.67-12.5-30.17T722-642.67q-17.67 0-30.17 12.5T679.33-600q0 17.67 12.5 30.17t30.17 12.5ZM226.67-186.67H486V-488H226.67v301.33Zm259.33 0H226.67 486Z"/></svg>}/>
            <Card price={transaction[0].amount} description={transaction[0].description} categories={<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="M220-80q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h110v-10q0-63 43.5-106.5T480-880q63 0 106.5 43.5T630-730v10h110q24 0 42 18t18 42v520q0 24-18 42t-42 18H220Zm0-60h520v-520H630v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H390v90q0 12.75-8.68 21.37-8.67 8.63-21.5 8.63-12.82 0-21.32-8.63-8.5-8.62-8.5-21.37v-90H220v520Zm170-580h180v-10q0-38-26-64t-64-26q-38 0-64 26t-26 64v10ZM220-140v-520 520Z"/></svg>}/>
            <Card price={transaction[1].amount} description={transaction[1].description} categories={<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg>}/>
            <Card price={transaction[0].amount} description={transaction[0].description} categories={<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="m168.33-120-46.66-46.67 416.66-416.66q-20.66-46-8.33-98t57-96q47.67-47 112-58.34Q763.33-847 804.33-806 846-764.33 834-700.67 822-637 773-587.33q-41.33 42.66-92.67 55.66-51.33 13-94.66-5.66L524.33-476l309.34 309.33L787-120 477.67-428.67 168.33-120ZM291-468 171.67-587.33q-52-52-53.34-123.67Q117-782.67 167-836.67L413-590 291-468Z"/></svg>}/>
            <Card price={transaction[1].amount} description={transaction[1].description} categories={<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="M146.67-120q-27.5 0-47.09-19.58Q80-159.17 80-186.67V-312h800v125.33q0 27.5-19.58 47.09Q840.83-120 813.33-120H146.67Zm0-125.33v58.66h666.66v-58.66H146.67ZM480-424q-39.33 0-59.33 21.33-20 21.34-74.67 21.34t-73-21.34Q254.67-424 215.33-424q-39.33 0-59.9 21.33-20.57 21.34-75.43 21.34V-448q34 0 57.33-21.33 23.34-21.34 78-21.34 54.67 0 73 21.34Q306.67-448 346-448t59.33-21.33q20-21.34 74.67-21.34t74.67 21.34Q574.67-448 614-448t57.67-21.33q18.33-21.34 73-21.34 54.66 0 78.66 21.34Q847.33-448 880-448v66.67q-54.67 0-74.67-21.34Q785.33-424 746-424t-58.33 21.33q-19 21.34-73.67 21.34t-74.67-21.34Q519.33-424 480-424ZM80-558.67v-40q0-111 106.17-176.16Q292.33-840 480-840t293.83 65.17Q880-709.67 880-598.67v40H80Zm400-214.66q-140 0-230.83 41.33-90.84 41.33-99.17 106.67h660q-9.67-65.34-99.83-106.67Q620-773.33 480-773.33Zm0 528Zm0-380Z"/></svg>}/>
            <Card price={transaction[0].amount} description={transaction[0].description} categories={<svg xmlns="http://www.w3.org/2000/svg" height="38px" viewBox="0 -960 960 960" width="38px" fill="#e8eaed"><path d="M160-120v-653.33q0-27 19.83-46.84Q199.67-840 226.67-840H486q27 0 46.83 19.83 19.84 19.84 19.84 46.84V-488h56.66q24.75 0 42.38 17.62 17.62 17.63 17.62 42.38v206q0 20.12 14.17 33.73 14.17 13.6 34.5 13.6t34.5-13.6q14.17-13.61 14.17-33.73v-292.67Q756.33-509 745-506.5q-11.33 2.5-23 2.5-40.32 0-68.16-27.84Q626-559.68 626-600q0-31.74 17.83-57.04 17.84-25.29 47.5-34.29L600-782.67 638-820l151.33 150q14.34 14.33 22.5 32 8.17 17.67 8.17 38v378q0 42.84-29.54 72.42Q760.91-120 718.12-120q-42.79 0-72.45-29.58Q616-179.16 616-222v-212.67h-63.33V-120H160Zm66.67-434.67H486v-218.66H226.67v218.66ZM722-557.33q17.67 0 30.17-12.5t12.5-30.17q0-17.67-12.5-30.17T722-642.67q-17.67 0-30.17 12.5T679.33-600q0 17.67 12.5 30.17t30.17 12.5ZM226.67-186.67H486V-488H226.67v301.33Zm259.33 0H226.67 486Z"/></svg>}/>
          </div>
          </div>
        </div>

      </div>
    </div>
    ):(
      <div>
        <h1>Loading....</h1>
      </div>
    ) }
    </>
  );
};

export default Transactions;

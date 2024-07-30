import React from 'react';
import '../sidebar/sidebar.scss';

const Sidebar = () => {
    return (
        <aside className="sidebar-container">
            <button id="close-btn">
                <span className="material-icons-sharp">close</span>
            </button>
            <div className="sidebar">
                <a href="/" className="active">
                    <span className="material-icons-sharp">dashboard</span>
                    <h4>Dashboard</h4>
                </a>
                <a href="/transfer">
                    <span className="material-icons-sharp">currency_exchange</span>
                    <h4>Transfer</h4>
                </a>
                <a href="/transactions">
                    <span className="material-icons-sharp">account_balance_wallet</span>
                    <h4>Transactions</h4>
                </a>
                <a href="/account">
                    <span className="material-icons-sharp">payment</span>
                    <h4>Account</h4>
                </a>
            </div>
            <div className="updates">
                <span className="material-icons-sharp">update</span>
                <h4>Updates Available</h4>
                <small>Security Updates</small>
                <small>General Updates</small>
                <a href="#">Update Now</a>
            </div>
        </aside>
    );
};

export default Sidebar;

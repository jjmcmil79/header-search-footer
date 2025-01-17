import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import Menu from "./Menu";
import StoreLocator from "./StoreLocator";
import Cart from "./Cart";
import BottomNav from "./BottomNav";
import SearchPage from "./SearchPage";

function Header() {

  const [searchData, setSearch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [searchPage, setSearchPage] = useState(false);

  useEffect(() => {
    loadOnce();
  }, []);



  function loadOnce() {
    setSearchPage(true);
    setLoading(true);
    setLoadingMessage("App is Loading");
    fetch("http://localhost:3012/api/all")
      .then((response) => response.json())
      .then((data) => setSearch(data));
    setLoading(false);
    setSearchPage(false);
 
  }
 
  return (
    <div className="Header">
      <header>
        <div className="top-container">
          <div className="top-nav">
            <a
              href="https://www.bestbuy.com"
              title="BestBuy.com"
              data-lid="hdr_lgo"
              data-t="header-primary-logo"
            >
              <svg
                aria-label="BestBuy.com"
                role="img"
                className="block"
                height="40"
                width="68"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 160 92"
              >
                <path
                  d="M127.6 66.66h31.33v25.09h-31.34l-7.8-7.34V74.06l7.81-7.4z"
                  fill="#fff200"
                ></path>
                <path
                  d="M126.03 79.19c0 .86-.69 1.55-1.55 1.55-.86 0-1.55-.69-1.55-1.55 0-.86.69-1.55 1.55-1.55.85 0 1.55.7 1.55 1.55z"
                  fill="#1d252c"
                ></path>
                <path
                  d="M127.2 57.76c0-1.17.94-2.12 2.12-2.12 1.2 0 2.12.94 2.12 2.11 0 1.19-.93 2.11-2.12 2.11-1.17 0-2.12-.9-2.12-2.1zm3.96-.01c0-1.07-.78-1.85-1.84-1.85-1.05 0-1.83.79-1.83 1.86 0 1.08.81 1.84 1.83 1.84 1.04 0 1.84-.77 1.84-1.85zm-2.55-1.13h.71c.48 0 .79.21.79.64v.01c0 .33-.21.51-.51.57l.64.97h-.35l-.61-.92h-.33v.92h-.33l-.01-2.19zm.72 1.03c.31 0 .46-.12.46-.37v-.01c0-.28-.16-.37-.46-.37h-.38v.75h.38zM30.21 19.81l.61-.22c5.92-3.18 6.93-11.05 1.16-15.36-2.58-2.06-6.09-3.09-10.55-3.09H2.1v39.61h20.47c5.25 0 16.12-.98 16.12-11.33-.01-7.91-8.29-9.54-8.48-9.61zM14.9 10.42h4.72c1.74-.04 3.23 1.18 3.21 2.9.02 1.73-1.48 2.94-3.21 2.9H14.9v-5.8zm8.82 20.12c-.74.7-1.67 1.04-2.78 1.04H14.9v-7.11h6.03c3.28-.18 5.27 3.8 2.79 6.07zM40.39 63.65l.61-.22c5.92-3.18 6.93-11.05 1.16-15.36-2.58-2.06-6.1-3.09-10.55-3.09h-19.3v39.61h20.43c5.25 0 16.12-.98 16.12-11.33 0-7.91-8.28-9.53-8.47-9.61zm-15.27-9.39h4.68c1.74-.04 3.23 1.18 3.22 2.9.01 1.73-1.48 2.94-3.22 2.9h-4.68v-5.8zm8.78 20.13c-.74.7-1.67 1.04-2.78 1.04h-6v-7.11h6c3.27-.18 5.26 3.8 2.78 6.07zM71.48 31.13H52.33v-6.21h15.63v-9.06H52.33v-5.08h19.19V1.13h-32v39.61h31.96v-9.61zM104.23 1.13v9.64h10.47v29.97h12.73V10.77h10.47V1.13h-33.67z"
                  fill="#fff"
                ></path>
                <path
                  d="M89.75 30.5c-2.8 2.33-8.08-.25-10.16-2.38l-7.56 7.18.48.48c6.71 6.62 20.86 8.59 27.98 2.21 5.84-4.61 6.03-14.52-.04-18.59-2.29-1.46-5.4-2.86-7.97-3.52-1.31-.3-2.64-.73-3.53-1.25-2.85-1.53-.43-4.43 2.13-4.16 2.59 0 4.17 1.16 4.99 2l7.58-7.2-.14-.16C97.4-.99 84.27-1.92 77.89 3.77c-2.9 2.51-4.35 5.47-4.35 8.85-.16 8.34 7.15 11.23 13.83 13.19 1.42.6 3.28.97 3.44 2.47-.01.87-.36 1.61-1.06 2.22zM71.52 68.52c-.19 6.29-9.33 6.29-9.52 0V44.99H49.18v22.93c-.03 9.76 8.2 17.54 17.92 17.12 9.46 0 17.12-7.66 17.12-17.12V45h-12.7v23.52zM106.13 58.47 97.73 45H84.89l14.83 25.47v14.14h12.81V70.46L127.36 45h-12.84l-8.39 13.47z"
                  fill="#fff"
                ></path>
              </svg>
            </a>
            <Menu />
            <Search
              searchData={searchData} setSearchPage={setSearchPage} searchPage={searchPage}
            />
            <StoreLocator />
            <Cart />
          </div>
          <BottomNav />
        </div>
      </header>
    </div>
  );
}

export default Header;

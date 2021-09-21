/* eslint-disable */
import React, { useEffect, useState } from "react";
import Select from "react-select";
import InfiniteScroll from "react-infinite-scroll-component";
import { HideScroll } from "react-hide-on-scroll";
import classNames from "classnames";

function Inventories() {
  const [show, setShow] = useState(false);

  const controlShow = () => {
    if (window.scrollY <= 1) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  console.log(window.scrollY);

  useEffect(() => {
    window.addEventListener("scroll", controlShow);
    return () => {
      window.removeEventListener("scroll", controlShow);
    };
  }, []);

  let [searchFilter, setSearchFilter] = useState("");

  const options = [
    { value: "Main Inventory", label: "Main Inventory" },
    { value: "Storage A", label: "Storage A" },
    { value: "Storage B", label: "Storage B" },
  ];

  const userInventory = [
    {
      productName: "Kurkure",
      expiryDate1: "23 May 2021",
      quntity1: "10 packtes",
      totalValue1: "330,00 kr",
      label1: "Expired",
    },
    {
      productName: "Coca-Cola",
      expiryDate1: "Multiple",
      expiryDate2: "Not Specified",
      expiryDate3: "15Apr 2021",
      quntity1: "20 packets",
      quntity2: "10 packets",
      quntity3: "10 packets",
      totalValue1: "1440,00 kr",
      totalValue2: "720,00 kr",
      totalValue3: "720,00 kr",
      label1: "expired",
    },
    {
      productName: "Balaji",
      expiryDate1: "Not Specified",
      quntity1: "15 baskets",
      totalValue1: "1057,50 kr",
      label1: "-----",
    },
    {
      productName: "Lays",
      expiryDate1: "Not specified",
      quntity1: "50 packtes",
      totalValue1: "94,00 kr",
      label1: "Expired",
    },
    {
      productName: "Lays",
      expiryDate1: "Not specified",
      quntity1: "50 packtes",
      totalValue1: "94,00 kr",
      label1: "Expired",
    },
    {
      productName: "Lays",
      expiryDate1: "Not specified",
      quntity1: "50 packtes",
      totalValue1: "94,00 kr",
      label1: "Expired",
    },
  ];

  function customTheme(theme) {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#EAF7EE",
        primary: "#23A956",
        primary50: "#23A956",
        neutral20: "#D7D8E0",
      },
    };
  }

  function handleChange(event) {
    setSearchFilter(event.target.value);
  }

  return (
    <div className="main-container-inventery">
      <div className="slim-mainpanel-inventory">
        <div className="order-info-inventory">
          <div className="left-sec">
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <h2>Inventories</h2>
            </div>
          </div>
          <div className="right-sec">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#212121"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-moon svg-img"
              style={{ display: "flex", marginLeft: "50px" }}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg> */}
            <div className="select-sec">
              <Select
                components={{
                  IndicatorSeparator: () => null,
                }}
                options={options}
                theme={customTheme}
                styles={{
                  menuList: (styles) => ({
                    ...styles,
                    paddingTop: "12px",
                    paddingBottom: "12px",
                  }),
                  option: (base, state) => ({
                    ...base,
                    backgroundColor: state.isSelected
                      ? "EAF7EE"
                      : "transparent",
                    color: "inherit",
                    ":hover": {
                      backgroundColor: "#F1F1F5",
                    },
                  }),
                  indicatorSeparator: (base) => ({ ...base, display: "none" }),
                }}
                defaultValue={options[0]}
              />
            </div>
          </div>
        </div>
        <div className="col-12 border-bottom"></div>
        <div
          className="order-info-inv"
          style={show ? { margin: "14px auto 0px auto" } : {}}
        >
          <div className="left-sec" id="showdiv">
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <h2>Main Inventory</h2>
            </div>
            {/* <HideScroll
              variant="down"
              showOnPageInit={false}
              style={{ transition: "all .5s linear" }}
            > */}
            <div className={`${show && "hideControll"}`}>
              <div className="order-detail">
                <label className="label-med">Products</label>
                <label className="label-num">262</label>
              </div>
              <div className="order-detail">
                <label className="label-med">Total Stock Value</label>
                <label className="label-num">838 474,51 kr</label>
              </div>
              <div className="order-detail">
                <tr>
                  <td style={{ height: "24px", width: "24px" }}>
                    <div>
                      <img src="./Image/edit.svg" alt="Pen" />
                    </div>
                  </td>
                  <td style={{ textAlign: "left" }}>
                    <div
                      style={{
                        textTransform: "uppercase",
                        fontSize: "12px",
                        height: "32px",
                        lineHeight: "16px",
                        width: "100%",
                        paddingLeft: "12px",
                      }}
                    >
                      <label
                        className="label-med"
                        style={{ color: "rgb(25,25,28)" }}
                      >
                        You can edit <br />
                        this inventory
                      </label>
                    </div>
                  </td>
                </tr>
              </div>
            </div>
            {/* </HideScroll> */}
          </div>
          <div className="right-sec" style={{ transition: "all .5s linear" }}>
            <button className="download-btn" variant="warning">
              <img src="./Image/download.svg" alt="Download Icon" />
              <span>Download</span>
            </button>
            <button className="download-btn" variant="warning">
              <img src="./Image/swap-horizontal.svg" alt="Swap" />
              <span>Transfer</span>
            </button>
            <button type="submit" className="add-product">
              <div>
                <img src="./Image/plus_icon.png" alt="Plus Icon" />
                <span>Add Product</span>
              </div>
            </button>
          </div>
        </div>
        <div style={{ display: "flex", width: "95%", margin: "0px auto" }}>
          <div className="form-element-group">
            <div className="dd-wrapper common">
              <div className="dd-header">
                <div className="dd-header-title">All Suppliers</div>
                <img src="./Image/chevron-down-small.svg" alt="Drop-Down" />
              </div>
            </div>
          </div>
          <div className="form-element-group">
            <div className="dd-wrapper common" style={{ width: "280px" }}>
              <div className="dd-header" style={{ width: "280px" }}>
                <div className="dd-header-title">
                  Show all (in and out of stock)
                </div>
                <img src="./Image/chevron-down-small.svg" alt="Drop-Down" />
              </div>
            </div>
          </div>
          <div className="form-element-group" style={{ width: "100%" }}>
            <i
              className="fas fa-search search-frm"
              style={{ color: "#d7d8e0" }}
            ></i>
            <input
              type="text"
              placeholder="Search main inventory..."
              className="small"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="invCard inv-card-table">
          <div
            style={{
              borderBottom: "1px solid rgb(230,230,237)",
              borderTop: "1px solid rgb(230,230,237)",
              backgroundColor: "rgb(248,249,250)",
            }}
          >
            <table className="inventory-table">
              <thead>
                <tr className>
                  <th style={{ width: "32%" }}>Product Name</th>
                  <th style={{ width: "24%" }}>Expiration Date</th>
                  <th style={{ width: "14%" }}>Quntity</th>
                  <th style={{ width: "11%", textAlign: "right" }}>
                    Total Value
                  </th>
                  <th style={{ width: "19%", textAlign: "right" }}></th>
                </tr>
              </thead>
            </table>
          </div>
          <div id="scrollableInventory">
            <div>
              <InfiniteScroll
                dataLength={userInventory.length}
                // style={{overflowY: "scroll !important", height: "calc(100% - 291px) !important", position: "fixed", width: "calc(100% - 200px)"}}
                scrollableTarget="scrollableInventory"
              >
                <table className="userInventoryTable">
                  <tbody>
                    {userInventory
                      .filter((val) => {
                        if (searchFilter === "") {
                          return val;
                        } else if (
                          val.productName
                            .toLowerCase()
                            .includes(searchFilter.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((e, index) => (
                        <tr>
                          <td style={{ width: "32%" }}>
                            <span className="dark-font">{e.productName}</span>
                          </td>
                          <td style={{ width: "24%" }}>
                            {e.productName === "Coca-Cola" ? (
                              <div>
                                <div className="multiple">
                                  <span className="dark-font">
                                    {e.expiryDate1}
                                  </span>
                                  <label className="dark-font">-----</label>
                                </div>
                                <div className="multiple-col">
                                  <span className="gray-font">
                                    {e.expiryDate2}
                                  </span>
                                </div>
                                <div className="multiple-col">
                                  <span className="gray-font">
                                    {e.expiryDate3}
                                  </span>
                                  <label className="neutral-lbl highlighted">
                                    {e.label1}
                                  </label>
                                </div>
                              </div>
                            ) : (
                              <div className="multiple">
                                <span className="dark-font">
                                  {e.expiryDate1}
                                </span>
                                <label className="neutral-lbl highlighted">
                                  {e.label1}
                                </label>
                              </div>
                            )}
                            {/* <div className="multiple">
                              <span className="dark-font">{e.expiryDate1}</span>
                              <label className="neutral-lbl highlighted">
                                {e.label1}
                              </label>
                            </div> */}
                          </td>
                          <td style={{ width: "14%" }}>
                            <span className="dark-font">{e.quntity1}</span>
                          </td>
                          <td style={{ width: "11%", textAlign: "right" }}>
                            <span className="dark-font">{e.totalValue1}</span>
                          </td>
                          <td style={{ width: "19%", textAlign: "right" }}>
                            <div>
                              <img
                                src="../Image/pencil.png"
                                alt="Pencil"
                                style={{
                                  padding: "2px 2px 3px 3px",
                                  cursor: "pointer",
                                  opacity: "1",
                                }}
                              />
                              <img
                                src="../Image/more_verticle_icon.png"
                                alt="More Option Vertical Icon"
                                style={{
                                  marginLeft: "16px",
                                  padding: "4px 10px",
                                  cursor: "pointer",
                                  opacity: "1",
                                }}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inventories;

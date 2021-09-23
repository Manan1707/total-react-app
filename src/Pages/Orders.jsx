/* eslint-disable */
import React from "react";
import Select from "react-select";

function Orders() {
  const options = [
    { value: "Main Inventory", label: "Main Inventory" },
    { value: "Storage A", label: "Storage A" },
    { value: "Storage B", label: "Storage B" },
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

  return (
    <div className="order-main-contrainer">
      <div className="order-slim-header order-with-sidebar">
        <div className="order-contrainer-fluid">
          <div className="order-slim-header-right">
            <div className="order-header-breadcrumbs">
              <span>Orders</span>
            </div>
            <div className="order-d-flex">
              <div className="order-d-inline-block">
                <div className="order-form-element-group-select">
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
                      indicatorSeparator: (base) => ({
                        ...base,
                        display: "none",
                      }),
                    }}
                    defaultValue={options[0]}
                  />
                </div>
              </div>
              <div className="order-dropdown">
                <button className="order-btn-transparent">
                  <img src="../Image/color_plus_icon.svg" alt="Plus Icon" />
                  <span>Add Order manually</span>
                </button>
              </div>
              <div className="order-dropdown">
                <a href="#" className="order-green-btn">
                  <img src="../Image/upload_icon.svg" alt="upload icon" />
                  <span>Add order with receipt</span>
                </a>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="order-slim-mainpanel">
        <div className="order-content-area">
          <div className="order-orders-block">
            <div className="order-block-title">Scheduled</div>
            <div className="order-card-block" id="scrollableDiv">
              <div>
                <a href="#">
                  <div className="orders-card">
                    <div className="card-inner-left card-inner-left-right">
                      <h2 className="date-number">11</h2>
                      <span className="month">Nov</span>
                      <span className="day">Saturday</span>
                    </div>
                    <div className="card-inner-right card-inner-left-right">
                      <h2 className="product-name">Asko Storhusholding</h2>
                      <span className="product-description">#</span>
                      <span className="product-description">
                        8 item | 1444,50 kr
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="orders-card">
                    <div className="card-inner-left card-inner-left-right">
                      <h2 className="date-number">11</h2>
                      <span className="month">Nov</span>
                      <span className="day">Saturday</span>
                    </div>
                    <div className="card-inner-right card-inner-left-right">
                      <h2 className="product-name">Asko Storhusholding</h2>
                      <span className="product-description">#</span>
                      <span className="product-description">
                        8 item | 1444,50 kr
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="orders-card">
                    <div className="card-inner-left card-inner-left-right">
                      <h2 className="date-number">11</h2>
                      <span className="month">Nov</span>
                      <span className="day">Saturday</span>
                    </div>
                    <div className="card-inner-right card-inner-left-right">
                      <h2 className="product-name">Asko Storhusholding</h2>
                      <span className="product-description">#</span>
                      <span className="product-description">
                        8 item | 1444,50 kr
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="orders-card">
                    <div className="card-inner-left card-inner-left-right">
                      <h2 className="date-number">11</h2>
                      <span className="month">Nov</span>
                      <span className="day">Saturday</span>
                    </div>
                    <div className="card-inner-right card-inner-left-right">
                      <h2 className="product-name">Asko Storhusholding</h2>
                      <span className="product-description">#</span>
                      <span className="product-description">
                        8 item | 1444,50 kr
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="orders-card">
                    <div className="card-inner-left card-inner-left-right">
                      <h2 className="date-number">11</h2>
                      <span className="month">Nov</span>
                      <span className="day">Saturday</span>
                    </div>
                    <div className="card-inner-right card-inner-left-right">
                      <h2 className="product-name">Asko Storhusholding</h2>
                      <span className="product-description">#</span>
                      <span className="product-description">
                        8 item | 1444,50 kr
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="orders-card">
                    <div className="card-inner-left card-inner-left-right">
                      <h2 className="date-number">11</h2>
                      <span className="month">Nov</span>
                      <span className="day">Saturday</span>
                    </div>
                    <div className="card-inner-right card-inner-left-right">
                      <h2 className="product-name">Asko Storhusholding</h2>
                      <span className="product-description">#</span>
                      <span className="product-description">
                        8 item | 1444,50 kr
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="orders-card">
                    <div className="card-inner-left card-inner-left-right">
                      <h2 className="date-number">11</h2>
                      <span className="month">Nov</span>
                      <span className="day">Saturday</span>
                    </div>
                    <div className="card-inner-right card-inner-left-right">
                      <h2 className="product-name">Asko Storhusholding</h2>
                      <span className="product-description">#</span>
                      <span className="product-description">
                        8 item | 1444,50 kr
                      </span>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div className="orders-card">
                    <div className="card-inner-left card-inner-left-right">
                      <h2 className="date-number">11</h2>
                      <span className="month">Nov</span>
                      <span className="day">Saturday</span>
                    </div>
                    <div className="card-inner-right card-inner-left-right">
                      <h2 className="product-name">Asko Storhusholding</h2>
                      <span className="product-description">#</span>
                      <span className="product-description">
                        8 item | 1444,50 kr
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="block-footer">
              <h4 className="more-btn">Add order with receipt</h4>
            </div>
          </div>
          <div className="order-orders-block">
            <div className="order-block-title">Delivered</div>
            <div className="order-card-block">
              <a href="#">
                <div className="orders-card">
                  <div>
                    <h2 className="product-name">Marx1</h2>
                    <span className="product-description"># 111</span>
                    <span className="product-description">
                      2 items | 2398,75 kr
                    </span>
                    <div>
                      <label className="neutral-lbl">
                        Delivered Mon, 19 Jul 2021
                      </label>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="orders-card">
                  <div>
                    <h2 className="product-name">Asko Storhusholding</h2>
                    <span className="product-description"># 721927</span>
                    <span className="product-description">
                      13 items | 7955,78 kr
                    </span>
                    <div>
                      <label className="neutral-lbl">
                        Delivered Tue, 06 Jul 2021
                      </label>
                      <label className="bad-lbl">Issues Found</label>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="orders-card">
                  <div>
                    <h2 className="product-name">Marx1</h2>
                    <span className="product-description"># 111</span>
                    <span className="product-description">
                      2 items | 2398,75 kr
                    </span>
                    <div>
                      <label className="neutral-lbl">
                        Delivered Mon, 19 Jul 2021
                      </label>
                    </div>
                  </div>
                </div>
              </a>
              <a href="#">
                <div className="orders-card">
                  <div>
                    <h2 className="product-name">Asko Storhusholding</h2>
                    <span className="product-description"># 721927</span>
                    <span className="product-description">
                      13 items | 7955,78 kr
                    </span>
                    <div>
                      <label className="neutral-lbl">
                        Delivered Tue, 06 Jul 2021
                      </label>
                      <label className="bad-lbl">Issues Found</label>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="block-footer">
              <a href="#" style={{ textDecoration: "none" }}>
                <h4 className="more-btn">See more</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Orders;

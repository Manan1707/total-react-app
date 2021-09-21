/* eslint-disable */
import React, { useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactTooltip from "react-tooltip";
import Avatar from "react-avatar";
import * as AiIcons from "react-icons/ai";

import EditUserInfo from "./Pop-Up-Pages/EditUserInfo";
import AddNewUser from "./Pop-Up-Pages/AddNewUser";

function ManageUser() {
  const ref = useRef();

  const [showModal, setShowModal] = useState(false);

  const [showAddUser, setShowAddUser] = useState(false);

  let [searchFilter, setSearchFilter] = useState("");

  const userList = [
    {
      id: "1",
      firstName: "Manan",
      lastName: "Patel",
      jobTitle: "Manager",
      eMail: "manan@gmail.com",
      userRole: "Admin",
      status: "1",
    },
    {
      id: "2",
      firstName: "Hetul",
      lastName: "Patel",
      jobTitle: "Employee",
      eMail: "hetul@gmail.com",
      userRole: "User",
      status: "2",
    },
    {
      id: "3",
      firstName: "Utsav",
      lastName: "Shah",
      jobTitle: "Test",
      eMail: "utsav@gmail.com",
      userRole: "Admin",
      status: "1",
    },
    {
      id: "4",
      firstName: "Tapan",
      lastName: "Dandawala",
      jobTitle: "User",
      eMail: "tapan@gmail.com",
      userRole: "User",
      status: "2",
    },
    {
      id: "5",
      firstName: "Harsh",
      lastName: "Patel",
      jobTitle: "Admin",
      eMail: "harsh@gmail.com",
      userRole: "Admin",
      status: "1",
    },
    {
      id: "6",
      firstName: "Yashvi",
      lastName: "Patel",
      jobTitle: "Manager",
      eMail: "yashvi@gmail.com",
      userRole: "User",
      status: "4",
    },
    {
      id: "7",
      firstName: "Chandan",
      lastName: "Patel",
      jobTitle: "Developer",
      eMail: "chandan@gmail.com",
      userRole: "Admin",
      status: "2",
    },
    {
      id: "8",
      firstName: "Prabath",
      lastName: "Nair",
      jobTitle: "User",
      eMail: "prabath@gmail.com",
      userRole: "User",
      status: "5",
    },
    {
      id: "9",
      firstName: "Dhrumi",
      lastName: "Patel",
      jobTitle: "Manager",
      eMail: "dhrumi@gmail.com",
      userRole: "User",
      status: "5",
    },
    {
      id: "10",
      firstName: "Kabaro",
      lastName: "Patel",
      jobTitle: "Manager",
      eMail: "kabaro@gmail.com",
      userRole: "User",
      status: "2",
    },
  ];

  function handleChange(event) {
    setSearchFilter(event.target.value);
  }

  return (
    <div className="manageuser-main">
      <div className="manageuser-div">
        <nav className="navbar navbar-light navbar-fixed-top border-bottom">
          <div className="container">
            <h1 className="navbar-brand">Manage Users</h1>
            <form className="d-flex manageUser-form search-frm">
              <span class="fa fa-search search-icon"></span>
              <input
                id="searchField"
                type="text"
                onChange={handleChange}
                className="me-2"
                placeholder="Search Users..."
              />
              <button
                type="button"
                className="me-2"
                onClick={() => setShowAddUser(true)}
              >
                <AiIcons.AiOutlinePlus size={20} /> Add new user
              </button>
            </form>
          </div>
        </nav>
        {/* </div>
                <div className="fixedHeader"> */}
        <table>
          <thead>
            <tr className="table-first-row bg-light border-bottom">
              <th style={{ width: "17%" }}>FULL NAME</th>
              <th style={{ width: "20%" }}>E-Mail</th>
              <th style={{ width: "10%" }}>USER ROLE</th>
              <th style={{ width: "11%" }}>STATUS</th>
              <th style={{ width: "13%" }}></th>
            </tr>
          </thead>
        </table>
        <AddNewUser trigger={showAddUser} setTrigger={setShowAddUser} />
      </div>
      <div id="scrollableDiv">
        <InfiniteScroll
          dataLength={userList.length}
          hasMore={false}
          loader={
            <p style={{ textAlign: "center" }}>
              <b>Loading...</b>
            </p>
          }
          endMessage={
            <h2 style={{ textAlign: "center" }}>
              <br />
              <br />
              <br />
              {userList.length > 0 ? "" : "No Result Found"}
            </h2>
          }
          scrollableTarget="scrollableDiv"
        >
          <table style={{ marginTop: "130px" }} className="inventoryTbl">
            <tbody>
              {userList
                .filter((val) => {
                  if (searchFilter === "") {
                    return val;
                  } else if (
                    val.firstName
                      .toLowerCase()
                      .includes(searchFilter.toLowerCase()) ||
                    val.lastName
                      .toLowerCase()
                      .includes(searchFilter.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((e, index) => (
                  <tr height="72px">
                    <td
                      className="border-bottom"
                      style={{ width: "16%", paddingTop: "30px" }}
                    >
                      <div style={{ display: "-webkit-flex" }}>
                        <div className="avatar-user">
                          <Avatar
                            size={32}
                            round="20px"
                            color={e.status === "2" ? "#939397" : e.avatarColor}
                            style={{
                              fontWeight: "600",
                              border: "1px solid white",
                            }}
                            maxInitials={2}
                            name={e.firstName + " " + e.lastName}
                            textMarginRatio="0"
                          />
                        </div>
                        <div style={{ marginLeft: "12" }} className="multiple">
                          <span
                            className="dark-text text-capitalize"
                            style={{
                              width: "100%",
                              fontWeight: "bold",
                              color: e.status === "2" ? "#939397" : "",
                            }}
                          >
                            {e.firstName} {e.lastName + " "}
                            <label
                              className="grey-text"
                              style={{
                                fontWeight: "lighter",
                                color: e.status === "2" ? "#939397" : "#6B6B6F",
                              }}
                            >
                              {e.id === "2" && `(${"You"})`}
                            </label>
                          </span>
                          <span
                            className="grey-text text-capitalize"
                            style={{ color: e.status === "2" ? "#939397" : "" }}
                          >
                            {e.jobTitle ? e.jobTitle : "--"}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td
                      className="border-bottom"
                      style={{ width: "21%", paddingTop: "30px" }}
                    >
                      <span
                        className="dark-text"
                        style={{ color: e.status === "2" ? "#939397" : "" }}
                      >
                        {e.eMail}
                      </span>
                    </td>
                    <td
                      className="border-bottom"
                      style={{ width: "10%", paddingTop: "35px" }}
                    >
                      <span
                        className="dark-text text-capitalize"
                        style={{ color: e.status === "2" ? "#939397" : "" }}
                      >
                        {e.userRole}
                      </span>
                    </td>
                    <td
                      className="border-bottom"
                      style={{ width: "12%", paddingTop: "35px" }}
                    >
                      <label
                        style={{
                          backgroundColor: `${
                            e.status === "1"
                              ? "#DCF1E3"
                              : e.status === "2"
                              ? "#E7E7EC"
                              : "#FFF4BE"
                          }`,
                          color: `${
                            e.status === "1"
                              ? "#0F6F36"
                              : e.status === "2"
                              ? "#57575B"
                              : "#A08700"
                          }`,
                        }}
                        className="neutral-lbl"
                      >
                        {e.status === "1"
                          ? "Active"
                          : e.status === "2"
                          ? "Deactivated"
                          : "Pending"}
                      </label>
                    </td>
                    <td
                      className="border-bottom"
                      style={{ width: "2%", paddingTop: "35px" }}
                    >
                      <img
                        src="./Image/more_verticle_icon.png"
                        alt="Vertical Dots"
                        width="4"
                        data-tip={JSON.stringify(e)}
                        data-for={`more${e.id}`}
                        data-event="click"
                        ref={ref}
                        className="verticalDot"
                      />
                      <ReactTooltip
                        className="customToolTip"
                        id={`more${e.id}`}
                        clickable={true}
                        ref={ref}
                        globalEventOff="click"
                        place={
                          userList.length > 5 && userList.length === index + 1
                            ? "top"
                            : "bottom"
                        }
                        effect="float"
                        type="light"
                        getContent={(datumAsText) => {
                          if (datumAsText === null) {
                            return;
                          }
                          let d = JSON.parse(datumAsText);

                          return (
                            <div
                              className="tableToolPicker"
                              style={{
                                backgroundColor: "white",
                                listStyle: "none",
                              }}
                            >
                              <ul>
                                <li
                                  onClick={() => setShowModal(true)}
                                  onMouseLeave={() => {
                                    ReactTooltip.hide(ref);
                                  }}
                                >
                                  Edit User Info
                                </li>
                                <li
                                  onClick={() =>
                                    this.showStorageAaccessModalHandler(d)
                                  }
                                  onMouseLeave={() => {
                                    ReactTooltip.hide(ref);
                                  }}
                                >
                                  Manage Permission
                                </li>
                                <li
                                  onClick={() => this.resendInvite(d.id)}
                                  onMouseLeave={() => {
                                    ReactTooltip.hide(ref);
                                  }}
                                >
                                  Resend Invitation
                                </li>
                                <li
                                  onClick={() =>
                                    this.showDeleteModalHandler(d, "Status")
                                  }
                                  onMouseLeave={() => {
                                    ReactTooltip.hide(ref);
                                  }}
                                >
                                  {d.status === "1"
                                    ? "Deactivate"
                                    : "Activate User"}
                                </li>
                                <li
                                  onClick={() =>
                                    this.showDeleteModalHandler(d, "Delete")
                                  }
                                  onMouseLeave={() => {
                                    ReactTooltip.hide(ref);
                                  }}
                                >
                                  Delete User
                                </li>
                              </ul>
                            </div>
                          );
                        }}
                        scrollHide={true}
                        isCapture={true}
                        offset={{ left: 58 }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
            <EditUserInfo trigger={showModal} setTrigger={setShowModal} />
          </table>
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default ManageUser;

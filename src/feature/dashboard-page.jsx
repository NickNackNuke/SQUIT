import React, { useEffect } from 'react';
import $ from 'jquery';
import '../feature/dashboard.css';

function Dashboard() {
  useEffect(() => {
    $(document).ready(function() {
      $('[data-toggle="offcanvas"]').click(function() {
        $("#navigation").toggleClass("hidden-xs");
      });
    });
  }, []);
  return (
    <>
    <link
      href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    {/*---- Include the above in your HEAD tag --------*/}
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"
      rel="stylesheet"
      integrity="sha384-T8Gy5hrqNKT+hzMclPo118YTQO6cYprQmhrYwIiQ/3axmI1hQomh7Ud2hPOy8SP1"
      crossOrigin="anonymous"
    />
    <div className="container-fluid display-table">
      <div className="row display-table-row">
        <div
          className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
          id="navigation"
        >
          <div className="logo">
            <a hef="home.html">
              <img
                src="../assets/img/User_Icon.jpg"
                alt="User Icon"
                className="hidden-xs hidden-sm"
              />
              <img
                src="http://jskrishna.com/work/merkury/images/circle-logo.png"
                alt="merkery_logo"
                className="visible-xs visible-sm circle-logo"
              />
            </a>
          </div>
          <div className="navi">
            <ul>
              <li className="active">
                <a href="#">
                  <i className="fa fa-home" aria-hidden="true" />
                  <span className="hidden-xs hidden-sm">Home</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-tasks" aria-hidden="true" />
                  <span className="hidden-xs hidden-sm">Products</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-user" aria-hidden="true" />
                  <span className="hidden-xs hidden-sm">Users</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-10 col-sm-11 display-table-cell v-align">
          {/*<button type="button" class="slide-toggle">Slide Toggle</button> */}
          <div className="row">
            <header>
              <div className="col-md-7">
                <nav className="navbar-default pull-left">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="offcanvas"
                      data-target="#side-menu"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  </div>
                </nav>
                <div className="search hidden-xs hidden-sm">
                  <input type="text" placeholder="Search" id="search" />
                </div>
              </div>
              <div className="col-md-5">
                <div className="header-rightside">
                  <ul className="list-inline header-top pull-right">
                    <li className="hidden-xs">
                      <a
                        href="#"
                        className="add-project"
                        data-toggle="modal"
                        data-target="#add_project"
                      >
                        Add Product
                        
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="icon-info">
                        <i className="fa fa-bell" aria-hidden="true" />
                        <span className="label label-primary">3</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>
          </div>
          <div className="user-dashboard">
            <h1>SQUIT Home Page</h1>
          </div>
        </div>
      </div>
    </div>
  </>
  
  );
}

export default Dashboard;
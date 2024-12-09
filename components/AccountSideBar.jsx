"use client";

import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

const AccountSideBar = () => {
  return (
    <section className="flat-spacing-11">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="wrap-sidebar-account">
              <ul className="my-account-nav">
                <li>
                  <Link href="/account/" className="my-account-nav-item active">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href="/account/orders" className="my-account-nav-item">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="/account/address" className="my-account-nav-item">
                    Address
                  </Link>
                </li>
                <li>
                  <Link href="/account/edit" className="my-account-nav-item">
                    Account Details
                  </Link>
                </li>
                <li>
                  <SignOutButton>
                    <span className="my-account-nav-item cursor-pointer">
                      Logout
                    </span>
                  </SignOutButton>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="my-account-content account-dashboard">
              <div className="mb_60">
                <h5 className="fw-5 mb_20">Hello {user?.username}</h5>
                <p>
                  From your account dashboard you can view your{" "}
                  <a className="text_primary" href="my-account-orders.html">
                    recent orders
                  </a>
                  , manage your{" "}
                  <a className="text_primary" href="my-account-address.html">
                    shipping and billing address
                  </a>
                  , and{" "}
                  <a className="text_primary" href="my-account-edit.html">
                    edit your password and account details
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AccountSideBar
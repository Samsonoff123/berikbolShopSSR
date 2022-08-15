import React from "react";
import Container from "../../Container";
import A from "../../A";
import {
    FacebookOutlined,
    InstagramOutlined,
    TwitterOutlined,
    YoutubeOutlined, 
    MailOutlined,
    LinkedinOutlined
  } from '@ant-design/icons';

export default function index() {
  return (
    <footer>
      <Container>
        <div className="footer__main">
        <div className="group">
          <div>
            <h2 className="logo">
              <A href="/" text="Berikbol shop" />
            </h2>
            <span className="tagline">Your game with a bet on success</span>
          </div>
          <div className="social__icons">
            <FacebookOutlined />
            <InstagramOutlined />
            <TwitterOutlined />
            <YoutubeOutlined />
            <MailOutlined />
            <LinkedinOutlined />
          </div>
        </div>
        <div className="group">
            <h2 className="title">more BShop</h2>
            <A href="/posts" text="All posts" />
            <A href="/posts" text="All posts" />
            <A href="/posts" text="All posts" />
            <A href="/posts" text="All posts" />
        </div>
        <div className="group">
            <h2 className="title">more BShop</h2>
            <A href="/posts" text="All posts" />
            <A href="/posts" text="All posts" />
            <A href="/posts" text="All posts" />
            <A href="/posts" text="All posts" />
        </div>
        <div className="group">
            <h2 className="title">more BShop</h2>
            <A href="/posts" text="All posts" />
            <A href="/posts" text="All posts" />
            <A href="/posts" text="All posts" />
            <A href="/posts" text="All posts" />
        </div>
        </div>
      </Container>
      <span className="copyright">Copyright © 2019 Berikbol Shop Inc - All Rights Reserved. - P.IVA 01287901217</span>
    </footer>
  );
}

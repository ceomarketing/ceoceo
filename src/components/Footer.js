import React, { Component } from "react";
import s from '../css/footer.module.css';
import classNames from 'classnames';

class Footer extends Component {
  render() {
    return (
      <div className={s.footer}>
        <div className={s.copyright}>
            <div className={classNames(s.text, "col-sm-10")}>
              <p className="sm">Chinese Entrepreneurs Organization is not endorsed by, involved with or otherwide affiliated with Stanford University.</p>
              <p className="sm">Chinese Entrepreneurs is an independent, non-profit organization that is unrelated to the activities or missions of Stanford University.</p>
              <p>Copyright CEO</p>
            </div>
            <div className={classNames(s.logo, "col-sm-2")}>
              <div className={s.imgleft}>
                <div className={s.imgrow1} src="./images/">
                  <div className={s.item1}></div>
                  <div id="item2">
                    <img src="./images/linkedin.png" width="100%" className={s.item2}></img>
                  </div>
                </div>
                <div className={s.imgrow2}>
                  <div id="item3">
                    <img src="./images/facebook.png" width="100%" className={s.item3}></img>
                  </div>
                  <div id="item4">
                    <img src="./images/gmail.png" width="100%" className={s.item4}></img>
                  </div>
                </div>
              </div>
              <div className={classNames(s.imgright)}>
                <img className={classNames(s.wechat)} src="./images/wechat.jpg" width="80" height="80"></img>
              </div>
            </div>
        </div>
        <div className={s.socialMedia}>
        </div>
      </div>
    );
  }
}
 
export default Footer;
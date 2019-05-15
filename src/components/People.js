import React, { Component } from "react";
import s from '../css/People.module.css';
import classNames from 'classnames';


class People extends Component {
  render() {
    return (
    <div>

      <div className={s.containersm}>
        <div className={s.pageintro}>
          <div className={s.container}>
          <h1 className={s.pagetitle}>华人创业者协会</h1>
          <h1 className={s.pagetitle}>Chinese Entrepreneur Organziation</h1>
          <p className={s.lead}>
          CEO organizes in-depth small-group entrepreneurial talks, brainstorm sessions, etc.
          </p>
          </div>  
        </div>
      </div>

      <div className={classNames(s.pagecontent, s.containersm)}>
        <div className={classNames(s.section, s.highlight)} id="team-section">
          <div className={s.container}>
            <h2>Executive Team</h2>
                <div className={classNames(s.row, s.aboutorganisers)}>
                <div className={classNames(s.colsmthree, s.colmdtwo, "col-sm-3", "col-md-2")}/>
                  <div className={classNames(s.colsmthree, s.colmdfour, "col-sm-3", "col-md-4")}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrapper}>
                          <img src="./images/organiser-xty.jpg" alt="Co-President" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organiser_name}>
                              <a href="" target="_blank">谢天宇</a>
                          </h4>
                          <p class={s.organisertwitter}>人类学博士</p>
                          <p class="mv-o">Co-President</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classNames("col-sm-3", "col-md-4", s.colmdthree, s.colmdfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrapper}>
                          <img src="./images/organiser-april.jpg" alt="CEO leaders - XXX" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                            <a href="" target="_blank">王博闻(April）</a>
                          </h4>
                          <p className={s.organisertwitter}>MBA</p>
                          <p className="mv-o">Co-President</p>
                        </div>
                      </div>
                    </div>
                    <div className={classNames("col-sm-3", "col-md-2", s.colsmthree, s.colmdtwo)}/>
                  </div>
                </div>
                <div className={classNames(s.row, s.aboutorganisers)}>
                  <div className={classNames("col-sm-3", "col-md-4", s.colsmthree, s.colmdfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrapper}>
                          <img src="./images/organiser-eric.jpg" alt="CFO" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                              <a href="" target="_blank">Eric Zhang</a>
                          </h4>
                          <p className={s.organiser_twitter}>MBA</p>
                          <p className="mv-o">CFO</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classNames("col-sm-3", "col-md-4", s.colsmthree, s.colmdfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrapper}>
                          <img src="./images/organiser-alice.jpg" alt="VP(Marketing)" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                              <a href="" target="_blank">郑怡（Alice）</a>
                          </h4>
                          <p className={s.organisertwitter}>Product Design & Computer Science</p>
                          <p className="mv-o">VP（Marketing）</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classNames("col-sm-3", "col-md-4", s.colsmthree, s.colmdfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrapper}>
                          <img src="./images/organiser-yanyan.jpg" alt="VP(Operations)" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                              <a href="" target="_blank">Yanyan Tong</a>
                          </h4>
                          <p className={s.organisertwitter}>MS in Computer Science</p>
                          <p className="mv-o">VP (Operations)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classNames(s.row, s.aboutorganisers)}>
                <div className={classNames("col-sm-3, col-md-2", s.colsmthree, s.colmdtwo)}/>
                  <div className={classNames("col-sm-3", "col-sm-4", s.colsmthree, s.colsmfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrapper}>
                          <img src="./images/organiser-zx.jpg" alt="CFO" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                              <a href="" target="_blank">张霄</a>
                          </h4>
                          <p className={s.organisertwitter}>Applied Physics PhD</p>
                          <p className="mv-o">VP (Innovation Mixer)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classNames("col-sm-3", "col-sm-4", s.colsmthree, s.colsmfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrapper}>
                          <img src="./images/organiser-fx.jpg" alt="VP(Marketing)" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                              <a href="" target="_blank">沙扬贺</a>
                          </h4>
                          <p className={s.organisertwitter}>MS in East Asian Studies</p>
                          <p className="mv-o">VP (BD)</p>
                        </div>
                      </div>
                    </div>
                    <div className={classNames("col-sm-3", "col-md-2", s.colsmthree, s.colmdtwo)}/>
                  </div>
                </div>
              </div>
        </div>
        <div className={classNames(s.section, s.highlight)} id="guest-section">
          <div className={s.container}>
           <h2>Guest & Speakers</h2>
                <div className={classNames(s.row, s.aboutorganisers)}>
                  <div className={classNames("col-sm-3", "col-md-4", s.colsmthree, s.colmdfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrapper}>
                          <img src="./images/ceo_logo.png" alt="CFO" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                              <a href="" target="_blank">Placeholder</a>
                          </h4>
                          <p className={s.organisertwitter}>Placeholder</p>
                          <p className="mv-o">Placeholder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classNames("col-sm-3", "col-md-4", s.colsmthree, s.colmdfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrapper}>
                          <img src="./images/ceo_logo.png" alt="VP(Marketing)" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                              <a href="" target="_blank">Placeholder</a>
                          </h4>
                          <p className={s.organisertwitter}>Placeholder</p>
                          <p className="mv-o">Placeholder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classNames("col-sm-3", "col-md-4", s.colsmthree, s.colmdfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrapper}>
                          <img src="./images/ceo_logo.png" alt="VP(Operations)" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                              <a href="" target="_blank">Placeholder</a>
                          </h4>
                          <p className={s.organisertwitter}>Placeholder</p>
                          <p className="mv-o">Placeholder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        <div className={classNames(s.section, s.highlight)} id="community-section">
          <div className={s.container}>
            <h2>Community</h2>
            <div className={classNames(s.row, s.aboutorganisers)}>
                  <div className={classNames("col-sm-3", "col-md-4", s.colsmthree, s.colmdfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrappe}>
                          <img src="./images/ceo_logo.png" alt="CFO" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                              <a href="" target="_blank">Placeholder</a>
                          </h4>
                          <p className={s.organisertwitter}>Placeholder</p>
                          <p className="mv-o">Placeholder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classNames("col-sm-3", "col-md-4", s.colsmthree, s.colmdfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrappe}>
                          <img src="./images/ceo_logo.png" alt="VP(Marketing)" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 className={s.organisername}>
                              <a href="" target="_blank">Placeholder</a>
                          </h4>
                          <p className={s.organisertwitter}>Placeholder</p>
                          <p className="mv-o">Placeholder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={classNames("col-sm-3", "col-md-4", s.colsmthree, s.colmdfour)}>
                    <div className={s.organiser}>
                      <div className={s.organiserheader}>
                        <div className={s.imgwrappe}>
                          <img src="./images/ceo_logo.png" alt="VP(Operations)" width="80" height="80" className="img-circle"></img>
                        </div>
                        <div className={s.textwrapper}>
                          <h4 class={s.organisername}>
                              <a href="" target="_blank">Placeholder</a>
                          </h4>
                          <p class={s.organisertwitter}>Placeholder</p>
                          <p className="mv-o">Placeholder</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>  
          </div>
        </div>
      </div>
    </div> 
    );
  }
}
 
export default People;



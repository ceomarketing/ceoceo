import React, { Component } from "react";
import '../css/About.css';
 
class About extends Component {
  render() {
    return (
      <div className="container-sm">
        <div className="page-intro">
          <div className="container">
          <h1 className="page-title">华人创业者协会</h1>
          <h1 className="page-title">Chinese Entrepreneur Organziation</h1>
          <p className="lead">
           CEO organizes in-depth small-group entrepreneurial talks, brainstorm sessions, etc.
          </p>
          </div>  
        </div>

        <div className="page-content">       
          <div className="section">
            <div className="container-sm">
              <h2>ABOUT CEO</h2>
              <h5 id='p1'>To build the best educational and communicational platform of entrepreneurship for all Chinese entrepreneurs and investors around the globe.</h5>
              <p>
                CEO (Chinese Entrepreneur Organization, www.ceoceo.org) 华人者创业协会由斯坦福大学学生和校友于2008年在美国硅谷创办，旨在沟通工程师及商务人士，连接正在和准备创业的华人。CEO成员先后创立了聚美优品 (陈欧)、出门问问 (朱祎舟)、Hover Cam (王孟秋）、Alohar Mobile (王辰宇)、小红书 (毛文超)、丹华资本（谷安佳）等优秀企业或创投基金；也有部分成员加入金沙江创投、 IDG、 FreeS、真格基金等知名投资机构；或者进入Google, Twitter, Coursera等硅谷大型科技企业或新兴科技公司。自成立以来，CEO多次举办创业投资讲座，线下创业者聚会等活动，讨论科技趋势和创业想法。也曾邀请雷军、周鸿祎等百余名成功华人创业家与大家面对面分享经验。今年，CEO更是联合硅谷知名投资机构，举办专业技术的闭门讨论，针对最尖端科技的商业化进行头脑风暴。为促进国内外华人创业者之间的交流，CEO Startup Trek每年夏天带领斯坦福校友以及硅谷杰出人才与创业者回国，就新兴技术和商业动向与国内创业者进行交流学习。如今，CEO已有超过4000名会员，其中不仅凝聚了斯坦福大学的学生和校友，还吸引了硅谷及全球的华人创业者的加入。
              </p>
              <p>
                Chinese Entrepreneurs Organization 华人创业者协会（CEO) 是一个正式注册的非营利组织。CEO与斯坦福大学之间不存在隶属关系，不是斯坦福大学的附属单位或延伸机构。
              </p>
              <p>
                CEO - Chinese Entrepreneur Organization (www.ceoceo.org) was founded in 2008 by a group of business-minded students and talented Engineering students at Stanford. The organization serves as a platform to connect Chinese entrepreneurs and people who are interested in entrepreneurship in Silicon Valley. Since our inception, we have been hosting in-depth talks by top investors and outstanding entrepreneurs, facilitating exchange of brilliant ideas among the rich talent pool in our membership base. Many of our members have successfully formed new ventures including 聚美优品 (Ou Chen), 出门问问 (Yizhou Zhu), Hover Cam (Mengqiu Wang), Alohar Mobile (Larry Wang), Xiaohongshu (Charlwin Mao), Danhua Capital(Andrew Gu), or joined top tech companies and VCs, such as. GSR VC, IDG, FreeS, and Google. CEO has also organized summer trip - CEO Startup Trek, to visit outstanding startup companies in China. CEO Startup Trek aims to help Chinese entrepreneurs or talented Engineers in Silicon Valley communicate in person with successful Chinese entrepreneurs and learn from their experience. CEO is dedicated to creating a supportive community for Chinese entrepreneurs, and building the best educational and communicational platform of entrepreneurship for Chinese entrepreneurs and investors around the globe. Currently, CEO has more than 4000 subscribers, including current Stanford students, alumni and young professionals in the Valley.
              </p>
              <p>
                Chinese Entrepreneurs Organization is not endorsed by, involved with or otherwise affiliated with Stanford University. Chinese Entrepreneurs Organization is an independent, non-profit organization that is unrelated to the activities or mission of Stanford University
              </p>
              <hr class="mv-3"></hr>
              <h5>Join us</h5>
              <p>
                If you are passionate about promoting entrepreneurship and creating a supportive community for Chinese entrepreneurs in the valley and around the world.
              </p>
            </div>
          </div>  
          <hr class="mv-3"></hr>
          <div className="section">
            <div className="container-sm">
              <h2>Our Sponsors</h2>
              <div className="row">
                <div className="column col-sm-3">
                  <div className="img-wrapper">
                    <img src={'images/sponsor_6.png'} alt="ZhenFund" width="90%"></img>
                  </div>
                </div>
                <div className="column col-sm-3">
                  <div className="img-wrapper">
                    <img src={'images/sponsor_2.png'} alt="Sequoia" width="90%"></img>
                  </div>
                </div>
                <div className="column col-sm-3">
                  <div className="img-wrapper">
                    <img src={'images/sponsor_3.png'} alt="GGV" width="90%"></img>
                  </div>
                </div>
                <div className="column col-sm-3">
                  <div className="img-wrapper">
                    <img src={'images/sponsor_4.png'} alt="Fenwick" width="90%"></img>
                  </div>
                </div>
                <div className="column col-sm-3">
                  <div className="img-wrapper">
                    <img src={'images/sponsor_1.png'} alt="GSR" width="90%"></img>
                  </div>
                </div>
                <div className="column col-sm-3">
                  <div className="img-wrapper">
                    <img src={'images/sponsor_5.png'} alt="BAI" width="90%"></img>
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
 
export default About;
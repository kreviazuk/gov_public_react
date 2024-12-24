import { Card } from 'antd';
import './Home.scss';
import bannerImg from '@/assets/banner.jpg';
// import news1Img from '@/assets/news1.jpg';
// import news2Img from '@/assets/news2.jpg';
import bantuIcon from '@/assets/images/index/icon-wybt.svg';
import rutuIcon from '@/assets/images/index/icon-wyrt.svg';
import tijianIcon from '@/assets/images/index/icon-rttj.svg';
import searchIcon from '@/assets/images/index/icon-yjrt.svg';
import vrIcon from '@/assets/images/index/icon-vrykt.svg';
import yangyuIcon from '@/assets/images/index/icon-yyzhhd.svg';
import zixunIcon from '@/assets/images/index/icon-yyzx.svg';
import rencaiIcon from '@/assets/images/index/icon-zhrc.svg';
import jigouIcon from '@/assets/images/index/icon-jgjg.svg';
import peixunIcon from '@/assets/images/index/icon-rcpx.svg';
import ziyuanIcon from '@/assets/images/index/icon-jgsp.svg';
import jiatingIcon from '@/assets/images/index/icon-jygy.svg';

const Home = () => {
  const menuItems = [
    { icon: bantuIcon, text: '我要办托' },
    { icon: rutuIcon, text: '我要入托' },
    { icon: tijianIcon, text: '入托体检' },
    { icon: searchIcon, text: '一键查托' },
    { icon: vrIcon, text: 'VR云看托' },
    { icon: yangyuIcon, text: '养育顾问活动' },
    { icon: zixunIcon, text: '养育资讯' },
    { icon: rencaiIcon, text: '顾护人才' },
    { icon: jigouIcon, text: '机构咨询' },
    { icon: peixunIcon, text: '人才培训' },
    { icon: ziyuanIcon, text: '机构资源' },
    { icon: jiatingIcon, text: '家庭共育' }
  ];

  return (
    <div className="home-container">
      {/* Banner */}
      <div className="banner">
        <img 
          src={bannerImg}
          alt="疫苗接种贴士"
          className="banner"
        />
      </div>

      {/* Grid Menu */}
      <div className="menu-grid">
        <div className="menu-items">
          {menuItems.map((item, index) => (
            <div key={index} className="menu-item">
              <div className="menu-icon">
                <img src={item.icon} alt={item.text} />
              </div>
              <div className="menu-text">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      {/* <div className="news-section">
        <h3>新闻资讯</h3>
        <Card className="news-card">
          <div className="news-item">
            <img 
              src={news1Img}
              alt="新闻图片"
              className="news-image"
            />
            <div className="news-content">
              <h4>托育服务机构达218家，看东营如何让家长放心托、托得起</h4>
              <div className="news-source">大众日报</div>
              <div className="news-time">2024-12-16 12:07</div>
            </div>
          </div>
        </Card>
        <Card className="news-card">
          <div className="news-item">
            <img 
              src={news2Img}
              alt="新闻图片"
              className="news-image"
            />
            <div className="news-content">
              <h4>加快健全普惠托育体系</h4>
              <div className="news-source">大众日报</div>
              <div className="news-time">2024-12-16 11:30</div>
            </div>
          </div>
        </Card>
      </div> */}
    </div>
  );
};

export default Home;

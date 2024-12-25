import React from 'react';
import './Home.scss';
import bannerImg from '@/assets/banner.jpg';
import SectionTitle from '@/components/SectionTitle';

interface MenuItem {
  icon: string;
  text: string;
}

interface NewsItem {
  image: string;
  title: string;
  source: string;
  time: string;
}

const Home: React.FC = () => {
  const menuItems: MenuItem[] = [
    { icon: '/src/assets/images/index/icon-wybt.svg', text: '我要办托' },
    { icon: '/src/assets/images/index/icon-wyrt.svg', text: '我要入托' },
    { icon: '/src/assets/images/index/icon-rttj.svg', text: '入托体检' },
    { icon: '/src/assets/images/index/icon-yjrt.svg', text: '一键查托' },
    { icon: '/src/assets/images/index/icon-vrykt.svg', text: 'VR云看托' },
    { icon: '/src/assets/images/index/icon-yyzhhd.svg', text: '养育顾问活动' },
    { icon: '/src/assets/images/index/icon-yyzx.svg', text: '养育资讯' },
    { icon: '/src/assets/images/index/icon-zhrc.svg', text: '顾护人才' },
    { icon: '/src/assets/images/index/icon-jgjg.svg', text: '机构咨询' },
    { icon: '/src/assets/images/index/icon-rcpx.svg', text: '人才培训' },
    { icon: '/src/assets/images/index/icon-jgsp.svg', text: '机构资源' },
    { icon: '/src/assets/images/index/icon-jygy.svg', text: '家庭共育' }
  ];

  const newsItems: NewsItem[] = [
    {
      image: '/src/assets/banner.jpg',
      title: '托育服务机构达218家，看东营如何让家长放心托、托得起',
      source: '大众日报',
      time: '2024-12-16 15:07'
    },
    {
      image: '/src/assets/banner.jpg',
      title: '加快健全普惠托育体系',
      source: '大众日报',
      time: '2024-12-16 11:30'
    }
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error('Image load failed:', e.currentTarget.src);
    e.currentTarget.src = ''; // 可以设置一个默认图片
  };

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
                <img 
                  src={item.icon} 
                  alt={item.text}
                  onError={handleImageError}
                />
              </div>
              <div className="menu-text">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      <SectionTitle title="新闻资讯" />
      <div className="news-section">
        {newsItems.map((news, index) => (
          <div key={index} className="news-card">
            <div className="news-item">
              <img 
                src={news.image}
                alt={news.title}
                className="news-image"
              />
              <div className="news-content">
                <h4>{news.title}</h4>
                <div className="news-source">{news.source}</div>
                <div className="news-time">{news.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 
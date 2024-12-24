import { Grid } from 'antd-mobile';
import { 
  FileTextOutlined,
  BookOutlined,
  IdcardOutlined,
  ScanOutlined,
  VideoCameraOutlined,
  FlagOutlined,
  ReadOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  BuildOutlined,
  ApartmentOutlined,
  HomeOutlined
} from '@ant-design/icons';

interface MenuItem {
  icon: React.ReactNode;
  text: string;
  path: string;
}

const Home = () => {
  const menuItems: MenuItem[] = [
    { icon: <FileTextOutlined />, text: '我是力托', path: '/force' },
    { icon: <BookOutlined />, text: '我要入托', path: '/enroll' },
    { icon: <IdcardOutlined />, text: '入托体检', path: '/checkup' },
    { icon: <ScanOutlined />, text: '一键进托', path: '/quickstart' },
    { icon: <VideoCameraOutlined />, text: 'VR云看托', path: '/vr' },
    { icon: <FlagOutlined />, text: '养育照护活动', path: '/activities' },
    { icon: <ReadOutlined />, text: '养育资讯', path: '/news' },
    { icon: <TeamOutlined />, text: '照护人才', path: '/caregivers' },
    { icon: <QuestionCircleOutlined />, text: '机构咨询', path: '/consult' },
    { icon: <BuildOutlined />, text: '人才培训', path: '/training' },
    { icon: <ApartmentOutlined />, text: '机构管理', path: '/management' },
    { icon: <HomeOutlined />, text: '家园共育', path: '/family' },
  ];

  const newsList = [
    {
      id: 1,
      title: '托育服务机构达218家，看东营如何让长放心托、托得起',
      date: '2024-12-16 15:07',
      image: '/news1.jpg'
    },
    // 添加更多新闻项...
  ];

  return (
    <div className="pb-12">
      {/* Banner */}
      <div className="bg-blue-100 p-4 mb-4">
        <h2 className="text-xl font-bold text-blue-600">疫苗接种贴士</h2>
        <p className="text-blue-500">点击查看</p>
      </div>

      {/* Grid Menu */}
      <Grid columns={4} gap={8} className="bg-white p-4">
        {menuItems.map((item, index) => (
          <Grid.Item key={index}>
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 flex items-center justify-center text-blue-500">
                {item.icon}
              </div>
              <span className="text-xs mt-1">{item.text}</span>
            </div>
          </Grid.Item>
        ))}
      </Grid>

      {/* News Section */}
      <div className="mt-4 bg-white p-4">
        <h3 className="text-lg font-bold mb-4 border-l-4 border-blue-500 pl-2">新闻���讯</h3>
        {newsList.map(news => (
          <div key={news.id} className="flex mb-4 border-b pb-4">
            <div className="flex-1">
              <h4 className="text-base font-medium">{news.title}</h4>
              <p className="text-gray-500 text-xs mt-2">{news.date}</p>
            </div>
            <div className="w-24 h-16 ml-4">
              <img src={news.image} alt={news.title} className="w-full h-full object-cover rounded" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home; 
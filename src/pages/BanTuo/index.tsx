import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '@/components/SectionTitle';
import ApplyButton from '@/components/ApplyButton';
import './index.scss';

const BanTuo: React.FC = () => {
  const navigate = useNavigate();

  const handleApply = () => {
    // 处理申请逻辑
    console.log('申请办托');
  };

  return (
    <div className="bantuo-container">
      {/* 申请办托流程 */}
      <div className="process-section">
        <SectionTitle title="申请办托流程" />
        <div className="process-list">
          <div className="process-item">
            <div className="process-icon">01</div>
            <div className="process-text">电话咨询</div>
          </div>
          <div className="process-item">
            <div className="process-icon">02</div>
            <div className="process-text">相关部门沟通</div>
          </div>
          <div className="process-item">
            <div className="process-icon">03</div>
            <div className="process-text">办托材料准备</div>
          </div>
          <div className="process-item">
            <div className="process-icon">04</div>
            <div className="process-text">办托申请等等</div>
          </div>
          <div className="process-item">
            <div className="process-icon">05</div>
            <div className="process-text">高地卫康检查</div>
          </div>
        </div>
      </div>

      {/* 机构所在区域 */}
      <div className="area-section">
        <SectionTitle title="机构所在区域" />
        <div className="area-select">
          <span className="area-label">选择地区</span>
          <span className="area-value">东营区</span>
        </div>
      </div>

      {/* 办托所需材料 */}
      <div className="materials-section">
        <SectionTitle title="办托所需材料" />
        <div className="materials-list">
          <div className="materials-group">
            <div className="group-title">托育机构准备材料（三个）</div>
            <div className="group-items">
              <div className="material-item">民办非企业单位登记证书（民政局）</div>
              <div className="material-item">卫生许可证（市场监督管理局）</div>
              <div className="material-item">事业单位法人证书（机构编制管理局）</div>
            </div>
          </div>
          <div className="materials-group">
            <div className="group-title">托育机构市场准入（三个）</div>
            <div className="group-items">
              <div className="material-item">房产证</div>
              <div className="material-item">租赁合同</div>
            </div>
          </div>
          <div className="materials-group">
            <div className="group-title">托育机构审批流程（四个）</div>
            <div className="group-items">
              <div className="material-item">托育服务许可证（市托育服务管理局）</div>
              <div className="material-item">托育机构备案登记表（托育服务管理局）</div>
              <div className="material-item">不动产不动产权证明</div>
            </div>
          </div>
          <div className="materials-group">
            <div className="group-title">必要材料</div>
            <div className="group-items">
              <div className="material-item">托育机构设立报告</div>
              <div className="material-item">卫生评价报告</div>
              <div className="material-item">个人身份及工作证明</div>
              <div className="material-item">消防安全检查合格证明（应急和��防救援支队）</div>
              <div className="material-item">备案申请书</div>
            </div>
          </div>
        </div>
      </div>

      {/* 申请按钮 */}
      <div className="apply-section">
        <ApplyButton text="申请办托" onClick={handleApply} />
      </div>
    </div>
  );
};

export default BanTuo; 
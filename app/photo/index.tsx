import React from 'react';

const ImageGrid: React.FC = () => {
  return (
    <div 
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // 两列
        gap: '20px', // 图片间距
        padding: '20px',
      }}
    >
      <div style={{ position: 'relative' }}>
        <img 
          src="https://b0.bdstatic.com/747d0709d704b24153fd24d11f100e82.jpg@h_1280" 
          alt="图片 1" 
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>

      <div style={{ position: 'relative' }}>
  <img 
    src="https://img1.baidu.com/it/u=665263196,2172464288&fm=253&fmt=auto&app=138&f=JPEG?w=800&h=804"
    alt="图片 2" 
    style={{
      width: '800px', // 设置固定宽度
      height: '440px', // 设置固定高度
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    }}
  />
</div>


      <div style={{ position: 'relative' }}>
        <img 
          src="https://img1.baidu.com/it/u=2272999114,3915316932&fm=253&fmt=auto&app=120&f=JPEG?w=667&h=500" 
          alt="图片 3" 
          style={{
            width: '100%',
            height: '440px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>

      <div style={{ position: 'relative' }}>
        <img 
          src="https://img1.baidu.com/it/u=983032739,3652685533&fm=253&fmt=auto&app=138&f=JPEG?w=1128&h=800" 
          alt="图片 4" 
          style={{
            width: '100%',
            height: '440px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
          }}
        />
      </div>
    </div>
  );
};

export default ImageGrid;
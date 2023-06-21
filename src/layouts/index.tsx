
import { ProLayout } from '@ant-design/pro-components';
import { Outlet, useAppData, useLocation } from 'umi';

import { App } from "antd";


// 配置式路由能显示，但是希望用约定式路由
// import defaultProps from "./_defaultProps"

export default function Layout(props:any){
  const { clientRoutes } = useAppData();
  // console.log(clientRoutes);

  const location = useLocation();
  // console.log(location);
  return (
    <App>
      <ProLayout
        location={location}
        route={clientRoutes[0]}
        title={'ProLayout · title'}
        fixSiderbar
      >
       <Outlet />
      </ProLayout>
    </App>
  );
}


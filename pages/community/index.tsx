import React, { FC } from 'react';
import Layout from '../../components/Layout/Layout';
import Table from '../../components/Table/Table';
import ViewTabs from '../../components/ViewTabs/ViewTabs';
import { mockCommunity } from '../../mocks/mockCommunity';

import './Community.scss';

const tableData = {
  cols: [
    'Project Name',
    'Review',
    'Likes',
    'Clarity level'
  ],
  data: mockCommunity
}

const Community: FC = () => {
  return (
    <Layout>
      <div className="community-page container-fluid">
        <div className="row tabs-row">
          <div className="container">
          <ViewTabs />
          </div>
        </div>
        <div className="data-info container">
          <Table {...tableData} />
        </div>
      </div>
    </Layout>

  );
}

export default Community

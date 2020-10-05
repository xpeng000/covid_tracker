import React, { useState, useEffect } from 'react';
import {Table} from 'antd';
import { fetchDailyData } from '../../api';
import styles from './Table.module.css';

const dataSource = ({ data: { confirmed, recovered, deaths }, country }) => {
    const [dailyData, setDailyData] = useState({});
    useEffect(() => {
      const fetchMyAPI = async () => {
        const initialDailyData = await fetchDailyData();
        setDailyData(initialDailyData);
      };
      fetchMyAPI();
    }, []);
    const columns = [
    {
      title: 'Country',
      dataIndex: 'name',
      key: 'country',
    },
    {
      title: 'Confirmed Cases',
      dataIndex: 'confirmed_cases',
      key: 'confirmed_cases',
      sorter: {
        compare: (a, b) => a.confirmed_cases - b.confirmed_cases,
        multiple: 3,
      },
    },
    {
      title: 'Deaths',
      dataIndex: 'death',
      key: 'death',
      sorter: {
        compare: (a, b) => a.death - b.death,
        multiple: 3,
      },
    },
    {
      title: 'Recovered',
      dataIndex: 'recovered',
      key: 'recovered',
      sorter: {
        compare: (a, b) => a.recovered - b.recovered,
        multiple: 3,
      },
    },
  ];
  // <Table dataSource={dataSource} columns={columns} />;
  ReactDOM.render(
    <Table dataSource={data}>
      <ColumnGroup title="Name">
        <Column title="First Name" dataIndex="firstName" key="firstName" />
        <Column title="Last Name" dataIndex="lastName" key="lastName" />
      </ColumnGroup>
      <Column title="Age" dataIndex="age" key="age" />
      <Column title="Address" dataIndex="address" key="address" />
      <Column
        title="Tags"
        dataIndex="tags"
        key="tags"
        render={tags => (
          <>
            {tags.map(tag => (
              <Tag color="blue" key={tag}>
                {tag}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <a>Invite {record.lastName}</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>,
    mountNode,
  );
};
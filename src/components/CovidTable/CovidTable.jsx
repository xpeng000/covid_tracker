import React, { useState, useEffect } from 'react';
import {Table} from 'antd';
import { fetchDailyData } from '../../api';
import styles from './CovidTable.module.css';
// { data: { confirmed, recovered, deaths }, country }
const CovidTable = ({countryData}) => {
    const [dailyData, setDailyData] = useState({});
    useEffect(() => {
      const fetchData = async () => {
        console.log(countryData);
        // setLoading(true);
        // const initialDailyData = await fetchDailyData();
        // console.log("fetching data:", initialDailyData);
        // setDailyData(initialDailyData);
        // setLoading(false);
      }
      fetchData();
    }, []);

  //   const columns = [
  //   {
  //     title: 'Country',
  //     dataIndex: 'name',
  //     key: 'country',
  //   },
  //   {
  //     title: 'Confirmed Cases',
  //     dataIndex: 'confirmed_cases',
  //     key: 'confirmed_cases',
  //     sorter: {
  //       compare: (a, b) => a.confirmed_cases - b.confirmed_cases,
  //       multiple: 3,
  //     },
  //   },
  //   {
  //     title: 'Deaths',
  //     dataIndex: 'death',
  //     key: 'death',
  //     sorter: {
  //       compare: (a, b) => a.death - b.death,
  //       multiple: 3,
  //     },
  //   },
  //   {
  //     title: 'Recovered',
  //     dataIndex: 'recovered',
  //     key: 'recovered',
  //     sorter: {
  //       compare: (a, b) => a.recovered - b.recovered,
  //       multiple: 3,
  //     },
  //   },
  // ];
  // <Table dataSource={dataSource} columns={columns} />;
  if(true){
    return <h1>Loading...</h1>
  } else {
    if(dailyData.message) {
      return <h1>{dailyData.message}</h1>
      } else {
        return <h1>Table</h1>
      }
  }
  
  // return(

    // {data.message ? <h1>Bad</h1> : <h1>Good</h1>}
    // <Table dataSource={data}>
    //   <ColumnGroup title="Name">
    //     <Column title="First Name" dataIndex="firstName" key="firstName" />
    //     <Column title="Last Name" dataIndex="lastName" key="lastName" />
    //   </ColumnGroup>
    //   <Column title="Age" dataIndex="age" key="age" />
    //   <Column title="Address" dataIndex="address" key="address" />
    //   <Column
    //     title="Tags"
    //     dataIndex="tags"
    //     key="tags"
    //     render={tags => (
    //       <>
    //         {tags.map(tag => (
    //           <Tag color="blue" key={tag}>
    //             {tag}
    //           </Tag>
    //         ))}
    //       </>
    //     )}
    //   />
    //   <Column
    //     title="Action"
    //     key="action"
    //     render={(text, record) => (
    //       <Space size="middle">
    //         <a>Invite {record.lastName}</a>
    //         <a>Delete</a>
    //       </Space>
    //     )}
    //   />
    // </Table>
  // );
};
export default CovidTable;
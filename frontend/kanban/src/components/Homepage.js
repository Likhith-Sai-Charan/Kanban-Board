import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box1 } from './Box1';

export  const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/tasks')
      .then((response) => {
        const responseData = response.data.tasks || [];
        setData(responseData);
        console.log(responseData);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  const startedData = data.filter((item) => item.status === 'To-Do');
  const onProgressData = data.filter((item) => item.status === 'In-Progress');
  const completedData = data.filter((item) => item.status === 'Done');

  return (
    <div className="homepage">
      <Box1 title="To-Do" data={startedData} />
      <Box1 title="In-Progress" data={onProgressData} />
      <Box1 title="Done" data={completedData} />
    </div>
  );
};


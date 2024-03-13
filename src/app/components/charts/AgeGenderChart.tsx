'use client';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const StackedBarChart = ({ data }: any) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      let chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: data.labels,
          datasets: data.datasets
        },
        options: {
          plugins: {
            legend: {
              position: 'right'
            }
          },
          indexAxis: 'y',
          scales: {
            x: {
              display: false,
              grid: {
                display: false
              },
              stacked: true
            },
            y: {
              grid: {
                display: false
              },
              stacked: true
            }
          }
        }
      });
      return () => {
        chart.destroy();
      };
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartRef} />
    </div>
  );
};

export default StackedBarChart;

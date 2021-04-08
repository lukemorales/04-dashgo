import { theme } from '@chakra-ui/react';

export const CHART_SETUP = {
  options: {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: theme.colors.gray[500],
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime',
      axisBorder: {
        color: theme.colors.gray[600],
      },
      axisTicks: {
        color: theme.colors.gray[600],
      },
      categories: [
        '2021-04-01T00:00:00.000Z',
        '2021-04-02T00:00:00.000Z',
        '2021-04-03T00:00:00.000Z',
        '2021-04-04T00:00:00.000Z',
        '2021-04-05T00:00:00.000Z',
        '2021-04-06T00:00:00.000Z',
        '2021-04-07T00:00:00.000Z',
      ],
    },
    fill: {
      opacity: 0.3,
      type: 'gradient',
      gradient: {
        shade: 'dark',
        opacityFrom: 0.7,
        opacityTo: 0.3,
      },
    },
  },
  series: [
    {
      name: 'series1',
      data: [31, 120, 10, 28, 61, 18, 109],
    },
  ],
};

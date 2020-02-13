import { addParameters } from '@storybook/react'; // <- or your storybook framework

addParameters({
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'black', value: '#000' },
    { name: 'grey', value: '#ddd' },
    { name: 'splash', value: '#013c5d' },
    { name: 'channel', value: '#0e5680' },
    { name: 'message', value: '#00274b' },
    { name: 'sea', value: '#8ec7e8' },
    { name: 'land', value: '#d9b86c' },
  ],
});
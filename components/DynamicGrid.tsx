// components/DynamicGrid.tsx
import dynamic from 'next/dynamic';

const Grid = dynamic(() => import('./Grid'), {
  ssr: false,
});

export default Grid;

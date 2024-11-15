import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import OpireCard from './components/card/card';

function App() {
  return (
    <MantineProvider>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center', // Horizontally center the card
          alignItems: 'center', // Vertically center the card
          height: '100vh', // Ensure full height of the viewport
          width: '100vw', // Ensure full width of the viewport
          background: 'linear-gradient(135deg, rgba(36, 36, 36, 0.9), rgba(58, 58, 58, 0.9))',
        }}
      >
        <OpireCard />
      </div>
    </MantineProvider>
  );
}

export default App;

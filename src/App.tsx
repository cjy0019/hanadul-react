import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';
import { theme } from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

export default App;

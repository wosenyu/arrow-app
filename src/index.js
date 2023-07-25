import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>

        <BrowserRouter>
            <App />
        </BrowserRouter>

    </ChakraProvider>
);

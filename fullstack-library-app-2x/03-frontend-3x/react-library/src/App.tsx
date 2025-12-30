import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Counter from './redux/features/counter/Counter';

function App() {
    return (
        <Provider store={store}>
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
                <h1>Redux Counter Example</h1>
                <Counter />
            </div>
        </Provider>
    );
}

export default App;
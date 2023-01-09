import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Frame11 } from './components/js/Frame11';
import { Frame4 } from './components/js/Frame4';
import { Frame104 } from './components/js/Frame104';

function App() {
    return (
        <>
            <div>
                <Frame4 />
            </div>
            <div>
                <Frame11 />
            </div>
            <div>
                <Frame104 />
            </div>
        </>
    );
}

export default App;

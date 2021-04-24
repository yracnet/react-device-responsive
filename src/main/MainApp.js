import './MainApp.scss';
import "jquery/dist/jquery.js"
import "popper.js/dist/popper.js"
import "bootstrap/dist/js/bootstrap.js"

import { DeviceSupport } from './part/DeviceSupport';
//import { DeviceScreen } from './part/DeviceScreen';
import { DeviceIFrame } from './part/DeviceIFrame';

function MainApp() {
  return (
    <div className="device-expand grid-responsive">
      <footer className="text-copy bg-dark">
        <a href="https://www.hiskasoft.com">HiskaSoft@2021</a>
        - <a href="https://github.com/yracnet">GitHub</a>
      </footer>
      <header className="p-1 bg-light">
        <DeviceSupport />
      </header>
      <main>

        <DeviceIFrame src="https://yracnet.github.io/react-grid/">
          <DeviceSupport />
        </DeviceIFrame>
      </main>
    </div>
  );
}

export default MainApp;

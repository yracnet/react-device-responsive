import './MainApp.scss';
import "jquery/dist/jquery.js"
import "popper.js/dist/popper.js"
import "bootstrap/dist/js/bootstrap.js"

import { useToggle } from '_/hooks/useToggle';
import { DeviceSupport } from './part/DeviceSupport';
import { DeviceScreen } from './part/DeviceScreen';

function MainApp() {
  const [left, onLeft] = useToggle({ direction: 'Left' });
  const [right, onRight] = useToggle({ direction: 'Right' });
  return (
    <div className="expand-view grid-responsive">
      <footer className="text-copy bg-dark">
        <a href="https://www.hiskasoft.com">HiskaSoft@2021</a>
        - <a href="https://github.com/yracnet">GitHub</a>
      </footer>
      <header className="p-1 bg-light">
        <a className="header-left btn btn-sm btn-outline-primary" onClick={onLeft}>
          <i className="la la-cog" />
        </a>
        <a className="header-right btn btn-sm btn-outline-primary" onClick={onRight}>
          <i className="la la-code" />
        </a>
        <div class="header-content">
          <DeviceSupport />
        </div>
      </header>
      <main>
        <div className="main-left" ref={left}>
          <div className="card card-sm expand-content">
            <h5 className="card-header">Content</h5>
            <div className="card-body">
              cccccccc
            </div>
          </div>
        </div>
        <div className="main-right" ref={right}>
          xxx
        </div>
        <div className="main-content">
          <DeviceScreen>
            <h1>Device</h1>
          </DeviceScreen>
        </div>
      </main>
    </div>
  );
}

export default MainApp;

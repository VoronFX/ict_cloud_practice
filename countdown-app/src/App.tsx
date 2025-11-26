import React from 'react';
import Countdown from './countdown/Countdown';

export default function App(): JSX.Element {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm countdown">
            <div className="card-body text-center">
              <h1 className="card-title mb-3">Countdown to Next Saturday</h1>
              <p className="text-muted mb-4">
                Showing time remaining until the next Saturday (local time).
              </p>
              <Countdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

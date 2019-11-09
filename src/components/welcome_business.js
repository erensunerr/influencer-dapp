import React from 'react'
import ReactDOM from 'react-dom'
import './welcome_business.css'
import ProgressBar from '@bit/nexxtway.react-rainbow.progress-bar';

export default function Welcome() {
  return (
    <div className="welcome">
      <h3>Welcome, {props.name}!</h3>
      <ProgressBar value={props.value} />
      {{
        props.log.forEach((log) => (

          <p className="log">{log}</p>

        ))
      }}
    </div>
  );
}

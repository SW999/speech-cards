import * as React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { isMobileDevice } from '../../../utils';
import qr from '../../../img/qr.png';

export const Home: FunctionComponent = () => (
  <>
    <h1>Simple speech cards</h1>
    <h2>How it works?</h2>
    {!isMobileDevice() && (
      <figure className="qr-code-figure">
        <img src={qr} alt="QR Code link" />
        <figcaption>QR Code link for mobile</figcaption>
      </figure>
    )}
    <p>
      After you have prepared well your speech, you may need a little helper in
      order not to lose the thread and be more confident.
    </p>
    <p>
      You may prepare such helper in some pieces of paper by pen{' '}
      <strong>or</strong> using this simple app. In the latter case,{' '}
      <em>your mobile phone will be your assistant</em>!
    </p>
    <p>This app has some advantages:</p>
    <ul className="advantages">
      <li>
        - could be easily used on a mobile phone to{' '}
        <Link to="/new">create</Link>, store and{' '}
        <Link to="/demo">use speech cards</Link>.
      </li>
      <li>
        - no way to lose or forget{' '}
        <Link to="/my-speeches">your speech cards</Link>, because your mobile
        phone is always with you. Am I right?
      </li>
      <li>
        - you may easily share prepared speech cards in JSON format with someone
        or to open it in a different device.
      </li>
    </ul>

    <h3>Tips</h3>
    <ul>
      <li>- Each card should be as simple as possible,</li>
      <li>- Should contain short clear heading,</li>
      <li>- Should contain main idea/ideas of current part of speech.</li>
    </ul>
  </>
);

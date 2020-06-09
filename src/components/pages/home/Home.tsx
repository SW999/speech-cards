import * as React from 'react';
import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { isMobileDevice } from '../../../utils';
import qr from '../../../img/qr.png';

export const Home: FunctionComponent = () => (
  <>
    <h1>Simple speech cards</h1>
    <h2>Problem</h2>
    {!isMobileDevice() && (
      <figure className="qr-code-figure">
        <img src={qr} alt="QR Code link" />
        <figcaption>QR Code link for mobile</figcaption>
      </figure>
    )}
    <p>
      Many people, like me, experience anxiety or even fear when preparing for
      public speaking. The reasons can be different and there are many ways to
      defeat such a fear.
    </p>
    <p>
      Moreover, I noticed that from excitement I can forget part of the report
      that I had learned and practised well before.{' '}
    </p>
    <p>
      There are many simple techniques to deal with this problem. The easiest
      way is to prepare cards with a sequence of words or phrases that
      correspond to the main sections of the report.{' '}
      <strong>Speech cards</strong>.
    </p>
    <h2>How it works?</h2>
    <p>
      After you have prepared well your speech, you may need a little helper in
      order not to lose the thread and be more confident.
    </p>
    <p>
      You may prepare such helper in some pieces of paper by pen{' '}
      <strong>or</strong> using this simple app. In the latter case,{' '}
      <em>
        <strong>your mobile phone will be your assistant!</strong>
      </em>
    </p>
    <p>To do this you need create a new speech and save it.</p>
    <p>
      Now it will be available in 2 versions: in the{' '}
      <Link to="/my-speeches">My speeches</Link> section from the browser local
      storage and as a separate file with the JSON extension.
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

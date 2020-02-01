import * as React from 'react';
import { FunctionComponent, useEffect } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { downloadFile, checkTouch, addSwipeEvent } from './utils';
import './scss/style.scss';
import { Card } from './components/Card';
import { Header } from './components/Header';
import { ProjectStorage } from './components/ProjectStorage';
import { ProjectJSON } from './components/ProjectJSON';
import { CreateNew } from './components/CreateNew';
import demo from './how_to_write_efficient_emails.json';

const efficientEmails = {
  name: 'How to write efficient emails',
  speech: [
    {
      title: 'Foreword',
      content:
        '* First email by Ray Tomlinson in 1971\n* How many time office workers spend on email correspondence\n* Common mistakes and their cost\n* Tips for writing efficient emails',
    },
    {
      title: 'Subject',
      content: '* Use clear, searchable subject lines\n* How it can help?',
    },
    {
      title: 'Highlight the main idea at the very beginning',
      content:
        '* Journalists technique called the five Ws\n* Military technique called Bottom Line Up Front\n* Highlight key facts up top\n* Add any necessary background or context\n* Label each section',
    },
    {
      title: 'Provide specific dates and times',
      content:
        '* Avoid using inaccurate dates like **tomorrow**, **next week** or **yesterday**',
    },
    {
      title: 'Highlight and specify your requests',
      content:
        '* **@** tag anyone in a group thread who needs to take action\n* Put the request in a separate paragraph',
    },
    {
      title: 'The best emails are simple',
      content:
        '* Many people write more formally than they speak\n* In most cases, this is unnecessarily',
    },
    {
      title: 'Stay active, not passive',
      content:
        '* Active voice writing is clear and straightforward\n* It’s more compelling to read',
    },
    {
      title: 'Format for clarity',
      content:
        '* Avoid huge text blocks\n* Use headlines, bullets, and numbers\n* Highlight any sections that demand special attention, or use colors to indicate new headings or topics',
    },
    {
      title: 'Include images whenever possible',
      content:
        '* Screenshots, photos, and drawings can replace hundreds of words\n* Tables and spreadsheets can be helpful\n* It’s relevant and allows you to cut down on the text',
    },
    {
      title: 'Squeeze out excess words',
      content:
        '* Emails should be edited\n* Practice making your emails as short as possible',
    },
    {
      title: 'Remember that email isn’t chat',
      content:
        '* Try not to slip into text and chat habits when you’re writing emails',
    },
    {
      title: 'Don’t send when you’re stressed',
      content:
        '* Or angry. Or confused and emotional\n* You might see the situation differently a few hours\n* Leave the recipient’s name off the email when you’re drafting a difficult message\n* Share it with a trusted friend or colleague who can offer some outside perspective',
    },
  ],
};

const App: FunctionComponent = () => {
  const saveToJSON = () => downloadFile(efficientEmails, efficientEmails.name);

  useEffect(() => {
    const isTouchExist = checkTouch();
    if (isTouchExist) {
      const touch = addSwipeEvent(isTouchExist);

      for (const swipeEvent in touch) {
        document.addEventListener(swipeEvent, touch[swipeEvent], false);
      }

      return () => {
        for (const swipeEvent in touch) {
          document.removeEventListener(swipeEvent, touch[swipeEvent], false);
        }
      };
    }
  }, []);

  return (
    <Router basename="/">
      <Header />
      <main>
        <Route exact path="/">
          <h1>Simple speech cards</h1>
          <h2>How it works?</h2>
          <p>Some text</p>
          <br />
          <button className="btn btn-green" type="button" onClick={saveToJSON}>
            Save data as JSON
          </button>
        </Route>
        <Route path="/demo">
          <Card {...demo} />
        </Route>
        <Route path="/from-storage" component={ProjectStorage} />
        <Route path="/from-json" component={ProjectJSON} />
        <Route path="/new" component={CreateNew} />
      </main>
    </Router>
  );
};

render(<App />, document.getElementById('app'));

import * as React from 'react';
import { FunctionComponent } from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { downloadFile } from './utils';
import './scss/style.scss';
import { Demo } from './components/Demo';
import { Header } from './components/Header';
import { ProjectStorage } from './components/ProjectStorage';
import { ProjectJSON } from './components/ProjectJSON';
import { CreateNew } from './components/CreateNew';

const efficientEmails = {
  name: 'How to write efficient emails',
  speech: {
    page1: {
      title: 'Foreword',
      content:
        '* First email by Ray Tomlinson in 1871 * How many time office workers spend on email correspondence * Common mistakes and their cost * Tips for writing efficient emails',
    },
    page2: {
      title: 'Subject',
      content: '* Use clear, searchable subject lines * How it can help?',
    },
    page3: {
      title: 'Highlight the main idea at the very beginning',
      content:
        '* Journalists technique called the five Ws * Military technique called Bottom Line Up Front * Highlight key facts up top * Add any necessary background or context * Label each section',
    },
    page4: {
      title: 'Provide specific dates and times',
      content:
        '* Avoid using inaccurate dates like **tomorrow**, **next week** or **yesterday**',
    },
    page5: {
      title: 'Highlight and specify your requests',
      content:
        '* @ tag anyone in a group thread who needs to take action * Put the request in a separate paragraph',
    },
    page6: {
      title: 'The best emails are simple',
      content:
        '* Many people write more formally than they speak * In most cases, this is unnecessarily',
    },
    page7: {
      title: 'Stay active, not passive',
      content:
        '* Active voice writing is clear and straightforward * It’s more compelling to read',
    },
    page8: {
      title: 'Format for clarity',
      content:
        '* Avoid huge text blocks * Use headlines, bullets, and numbers * Highlight any sections that demand special attention, or use colors to indicate new headings or topics',
    },
    page9: {
      title: 'Include images whenever possible',
      content:
        '* Screenshots, photos, and drawings can replace hundreds of words * Tables and spreadsheets can be helpful * It’s relevant and allows you to cut down on the text',
    },
    page10: {
      title: 'Squeeze out excess words',
      content:
        '* Emails should be edited * Practice making your emails as short as possible',
    },
    page11: {
      title: 'Remember that email isn’t chat',
      content:
        '* Try not to slip into text and chat habits when you’re writing emails',
    },
    page12: {
      title: 'Don’t send when you’re stressed',
      content:
        '* Or angry. Or confused and emotional * You might see the situation differently a few hours * Leave the recipient’s name off the email when you’re drafting a difficult message * Share it with a trusted friend or colleague who can offer some outside perspective',
    },
  },
};

const App: FunctionComponent = () => {
  const saveToJSON = () => downloadFile(efficientEmails, efficientEmails.name);

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
        <Route path="/demo" component={Demo} />
        <Route path="/from-storage" component={ProjectStorage} />
        <Route path="/from-json" component={ProjectJSON} />
        <Route path="/new" component={CreateNew} />
      </main>
    </Router>
  );
};

render(<App />, document.getElementById('app'));

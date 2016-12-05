import React from 'react';
import LatestPost from '../components/LatestPost';
import Testimonial from '../components/Testimonial';
import SocialLinks from '../components/SocialLinks';

const Index = ({ section }) => (
  <div className='frontpage'>
    <div className='front__heading'>
      <div className='front-heading-content-wrapper'>
        <div className='front-header-wrapper'>
          <div className='front-name'>
            <span className='first'>Survive</span>
            <span className='second'>JS</span>
          </div>

          <h1 className='front-header'>Learn Webpack and React</h1>
          <h3 className='front-motto'>SurviveJS will take you from apprentice to master</h3>

          <div className='front-button-wrapper'>
            <a className='btn btn--buy-main'
              href='https://leanpub.com/survivejs-react'>Become a React master</a>
            <span className='buy-or'>or</span>
            <a className='btn btn--buy-main'
              href='https://leanpub.com/survivejs-webpack'>Become a Webpack master</a>
            <span className='buy-or'>(or <a href='https://leanpub.com/b/survivejs-webpack-react'>both</a>!)</span>
          </div>

          <div className='front-button-wrapper'>
            <div className='read-free-note'>There are also free versions available!</div>
            <span className='read-free'>
              <a href='/react/introduction'>Read the free version of the React book</a> or <a href='/webpack/introduction'>read the free version of the Webpack book</a>
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className='front__testimonials'>
      <Testimonial
        text='SurviveJS connects the dots and fills the gaps left by the latest JavaScript tools and their documentation. With its detailed step-by-step tutorial approach, SurviveJS gives practical examples of code and configuration while providing context for choosing one method over another.'
        image={'/assets/img/testimonials/steve.jpg'}
        name='Steve Piercy'
        title=''
        url='http://www.StevePiercy.com'
        />

      <Testimonial
        text='Webpack is powerful but configuring it can be painful. Same goes with React. There are so many ways of configuring React with asset compilation, minification etc that it is easy to get lost. This book provides practical tips on how to get configure Webpack to make it work with React and other modern JavaScript tools like Babel.'
        image={'/assets/img/testimonials/raj.jpg'}
        name='Neeraj Singh'
        title='Founder of BigBinary'
        url='http://bigbinary.com/'
        />

      <Testimonial
        text='Setting up a cutting-edge frontend development environment with React takes time. What sets SurviveJS apart is that it does not only show you exactly how to do it, it evolves, preventing JS fatigue, hence the name.'
        image={'/assets/img/testimonials/omar.jpg'}
        name='Omar van Galen'
        title='Intrasoft'
        url='http://www.intrasoft.nl/'
        />

      <Testimonial
        text='This is the most useful book I’ve read this year. Apart from React itself it gives you a headstart into Webpack which is gaining traction as the weapon of choice for deploying Javascript apps and Flux architecture pattern. Well-written, full of annotated code, what’s not to like? Yes, I would recommend it to a friend.'
        image={'/assets/img/testimonials/nick.jpg'}
        name='Nick Ostrovsky'
        title=''
        url='http://firedev.com/'
        />

      <Testimonial
        text="I originally got this book to learn React, but I found quickly that the instruction on Webpack alone was worth the price of admission. I have followed this book's iteration from very early on, and it gets better every time. It is very useful, and to this day I keep going back to it as a good way to get new projects up and running."
        image={'/assets/img/testimonials/phil.jpg'}
        name='Phil Ledgerwood'
        title='Integrity Inspired Solutions'
        url='http://www.integrityinspired.com/'
        />
    </div>

    <div className='post post--front'>
      <section className='post__content'>
        <LatestPost sectionPages={section.pages} />
        <div dangerouslySetInnerHTML={{__html: require('raw!markdown!./index.md')}} />

        <SocialLinks />

        <LatestPost sectionPages={section.pages} />
      </section>
    </div>
  </div>
);
Index.description = 'Want to learn Webpack or React? Get started for free and build a Kanban board by following the example project.';

module.exports = Index;

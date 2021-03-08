/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Nav from '../components/tailwind-ui/nav';
import Button from '../components/tailwind-ui/button';

const Home = () => (
  // <!-- This example requires Tailwind CSS v2.0+ -->
  <div className="min-h-screen bg-white">
    <Nav />
    <Button size="lg" color="indigo">
      This is a super foool
    </Button>
    <div className="py-10">
      <header>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold leading-tight text-gray-900">
            Dashboard
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          {/* <!-- Replace with your content --> */}
          <div className="px-4 py-8 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          </div>
          {/* <!-- /End replace --> */}
        </div>
      </main>
    </div>
  </div>
);

export default Home;

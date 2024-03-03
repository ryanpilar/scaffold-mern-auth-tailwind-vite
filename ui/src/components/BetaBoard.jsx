import React from 'react'
// Project Imports
import Navbar from './Navbar';

/** ================================|| Beta Board ||=================================== **/

const BetaBoard = (props) => {
  return (
    <>
      <div className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Beta Board
          </h1>
        </div>
      </div>

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">

          {/* PUT BETABOARD DATA HERE */}
          <MainStats />

        </div>
      </main>

    </>
  );
};

export const MainStats = (props) => {

  const sectionClass = "bg-white";
  const containerClass = "mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8";
  const contentClass = "mx-auto max-w-3xl text-center";
  const headingClass = "text-3xl font-bold text-gray-900 sm:text-4xl";
  const paragraphClass = "mt-4 text-gray-500 sm:text-xl";
  const statsContainerClass = "mt-8 sm:mt-12";
  const statsGridClass = "grid grid-cols-1 gap-4 sm:grid-cols-3";
  const statItemClass = "flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center";
  const statTitleClass = "order-last text-lg font-medium text-gray-500";
  const statValueClass = "text-4xl font-extrabold text-blue-600 md:text-5xl";
  
    return (
      <section className={sectionClass}>
        <div className={containerClass}>
          <div className={contentClass}>
            <h2 className={headingClass}>Trusted by eCommerce Businesses</h2>
            <p className={paragraphClass}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
              provident impedit esse recusandae facere libero harum sequi.
            </p>
          </div>
  
          <div className={statsContainerClass}>
            <dl className={statsGridClass}>
              <div className={statItemClass}>
                <dt className={statTitleClass}>Routes</dt>
                <dd className={statValueClass}>$4.8m</dd>
              </div>
  
              <div className={statItemClass}>
                <dt className={statTitleClass}>Urgents</dt>
                <dd className={statValueClass}>24</dd>
              </div>
  
              <div className={statItemClass}>
                <dt className={statTitleClass}>Total Addons</dt>
                <dd className={statValueClass}>86</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    );
  };
  





export default BetaBoard;
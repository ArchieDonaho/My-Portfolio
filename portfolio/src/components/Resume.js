import React from 'react';

function Resume() {
  return (
    <div id='resume'>
      <h2 className='text-center'>Resume</h2>
      <p className='text-center'>
        Download the full resume{' '}
        <a
          target='_blank'
          rel='noreferrer'
          href='https://docs.google.com/document/d/1tX3UE3MrXlJ3mjJg0S2-rtER7YJH6JotCXAZSkDImYI/edit?usp=sharing'
        >
          HERE
        </a>
      </p>

      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h3 className='accordion-header' id='headingOne'>
            <button
              className='accordion-button'
              type='button'
              data-mdb-toggle='collapse'
              data-mdb-target='#collapseOne'
              aria-expanded='true'
              aria-controls='collapseOne'
            >
              Education
            </button>
          </h3>
          <div
            id='collapseOne'
            className='accordion-collapse collapse show'
            aria-labelledby='headingOne'
            data-mdb-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <ul>
                <li>
                  <p>
                    <strong>2017</strong>-Diploma, Byron P. Steele II High
                    School
                  </p>
                </li>
                <li>
                  <p>
                    <strong>June 2019</strong>-Associate of Arts, San Antonio
                    College
                  </p>
                </li>
                <li>
                  <p>
                    <strong>August-December 2019</strong>-Worked on Bachelors
                    for Mechanical Engineering, Texas State University
                  </p>
                </li>
                <li>
                  <p>
                    <strong>January 2022-Current</strong>- Full Stack Web
                    Developer course, UTSA
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-mdb-toggle='collapse'
              data-mdb-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Skills
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-mdb-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <ul>
                <li>Great leadership and teamwork skills</li>
                <br />
                <li>Ability to problem-solve</li>
                <br />
                <li>
                  Great understanding of others, always willing to help however
                  I can
                </li>
                <br />
                <li>
                  Always willing to learn new techniques and technologies to
                  improve my workflow/quality
                </li>
                <br />
                <li>
                  Languages:
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>HTML</li>
                    <li>HTML</li>
                    <li>HTML</li>
                  </ul>
                </li>
                <br />
                <li>
                  Technologies:
                  <ul>
                    <li>Git</li>
                    <li>Node</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>React</li>
                    <li>Handlebars</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-mdb-toggle='collapse'
              data-mdb-target='#collapseThree'
              aria-expanded='false'
              aria-controls='collapseThree'
            >
              Work History
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse'
            aria-labelledby='headingThree'
            data-mdb-parent='#accordionExample'
          >
            <div className='accordion-body'>
              <ul>
                <li>
                  NOVEMBER 2017 - OCTOBER 2018: BACKROOM WORKER, SILVERS PET AND
                  FEED
                </li>
                <div>
                  Kept up with the inventory of the warehouse, loaded animal
                  feed and hay bales onto customers vehicles, helped organize
                  and clean the warehouse. Very physically demanding work.
                </div>
                <br />
                <li>OCTOBER 2018 - FEBUARY 2019: CASHIER, WALART</li>
                <div>
                  Cash out customers, keep the cash register lanes clean and
                  neat, restock bags and candy.
                </div>
                <br />
                <li>
                  FEBUARY 2019 - MAY 2019: AUTOMOTIVE SALES FLOOR ASSOCIATE/
                  SERVICE WRITER, WALMART
                </li>
                <div>
                  Stocked items and kept up with inventory for automotive. Also
                  wrote up customers for services, helping them decide the best
                  course of action to help maintain their vehicle. I helped them
                  decide on batteries, tires, and oil changes that best suited
                  the customers needs. Also was the first person that a customer
                  would talk to for any additional help. Also, I was tasked to
                  watch over the sales floor and check customers out at the
                  service counter.
                </div>
                <br />
                <li>MAY 2019 - APRIL 2020: AUTOMOTIVE TECHNICIAN, WALMART</li>
                <div>
                  Performed oil changes, battery changes, install new tires and
                  wheels, repair tires, complete balance/ rotations, replaced
                  bulbs, restored headlights, vacuumed/cleaned windshields, also
                  helped service write when needed. I was a closer, and in
                  charge of the closing crew composed of 2-3 additional
                  associates. If needed, I would also watch the service counter
                  to help the service writers if things got crowded.
                  Additionally, I would help customers on the sales floor find
                  the product they were looking for.
                </div>
                <br />
                <li>JULY 2020 - APRIL 2021: DEALERSHIP SERVICE ADVISOR</li>
                <div>
                  I was to write up cars for service, whether it would be
                  matinence or repairs. I was to keep up with the customer and
                  inform them with updates on their service. I was the face of
                  the Mazda service center.
                </div>
                <br />
                <li>
                  APRIL 2021 - MARCH 2022: DEALERSHIP PARTS COUNTER ASSOCIATE
                </li>
                <div>
                  I was to look up and bill out parts for customers and
                  techncians. I had to keep up with maintaining inventory,
                  pricing, and backorders. As the backbone of service, we had a
                  responsibility to do things right and quickly with little room
                  for error.
                </div>
                <br />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

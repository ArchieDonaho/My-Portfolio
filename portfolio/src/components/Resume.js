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
          href='https://docs.google.com/document/d/18SdyeukV53NS-ftW9Z6IJFaT7-g6I7J2EcQs7SzCwis/edit?usp=sharing'
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
              <h6>UTSA Boot Camps</h6>
              <p>Certificate - Full Stack Web Development - 2022</p>

              <h6>San Antonio College</h6>
              <p>
                Associate of Arts With Focus In Mechanical Engineering, San
                Antonio College - 2019
              </p>

              <h6>Byron P. Steele II High School</h6>
              <p>Diploma - 2017</p>
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
                <h6>Soft Skills:</h6>
                <li>Great leadership and teamwork skills</li>
                <li>Ability to problem-solve</li>
                <li>
                  Great understanding of others, always willing to help however
                  I can
                </li>
                <li>
                  Always willing to learn new techniques and technologies to
                  improve my workflow/quality
                </li>
                <br />
                <h6>Technical Skills:</h6>
                <li>
                  <p className='text-center'>
                    HTML | CSS | Javascript | Bootstrap | MySQL with Sequelize |
                    MongoDB with Mongoose & Apollo GraphQL | RESTful API’s |
                    Express | 3rd Party APi’s | REACT | Handlebars | Node | Git
                    | JWT | PWA’s | Heroku Application Deployment |
                    ServiceWorkers & Web Manifest | MVC File Organization |
                    Test-Driven-Development | Cloud Based Storage
                  </p>
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
              <h4>Parts Sales Specialist - New braunfels, Texas</h4>
              <h6>
                World Car Mazda/Kia New Braunfels - Apr 2021 - Mar 2022 (1 year)
              </h6>
              <p>
                Responsible for supplying customers and technicians with the
                correct parts, whether it be OEM or aftermarket. Learn the parts
                catalog for both Mazda and Kia, and all the ins & outs of the
                vehicles to help give customers guidance on vehicle repairs.
                Check-in and place parts in appropriate spots for ease of
                access. Process warranty and claims to earn money back for
                faulty products.
              </p>
              <ul>
                <li>
                  Optimized search criteria of the parts catalog to find parts
                  much more quickly.
                </li>
                <li>
                  Organized parts room to decrease the time it takes finding a
                  part.
                </li>
                <li>
                  Increased sales by upcharging on cheaper but higher quantities
                  of parts.
                </li>
              </ul>
              <br />
              <h4>Service Advisor - New braunfels, Texas</h4>
              <h6>
                World Car Mazda New Braunfels- Jul 2020 - Apr 2021 (10 months)
              </h6>
              <p>
                Responsible for building professional relationships with the
                customers and ensuring they get the service they need to have a
                properly maintained vehicle. Build a bond with the technicians
                to help give the customer a smooth service. Had sole decision
                over the cost of services, but was also responsible for how much
                I and the tech got paid for a job, so it was critical for me to
                crunch the numbers and convey an accurate quote to the customer.
              </p>
              <ul>
                <li>
                  Improved sales numbers by upselling additional services.
                </li>
                <li>
                  Sourced aftermarket options or cheaper parts for customers low
                  on cash.
                </li>
                <li>
                  Increased the payment plans sold to customers looking to not
                  pay for everything up-front.
                </li>
                <li>
                  Diminished the previously toxic advisor-technician
                  relationship by having open communication with all technicians
                  and turning our job into a teamwork-focused job.
                </li>
              </ul>
              <br />
              <h4>Service Writer/Lube Technician - Cibolo, Texas</h4>
              <h6>Walmart - Feb 2019 - Apr 2020 (1 year 3 months)</h6>
              <p>
                Maintained vehicle health by performing critical maintenance
                like oil changes, tire patching/replacement/balancing, filter
                changes, battery charging/replacement, and more. Learn about the
                multiple oil options to help customers make the right decision.
                Was the go-to person for my manager anytime he needed help with
                customer questions relating to their service due to my knowledge
                of vehicles.
              </p>
              <ul>
                <li>
                  Decreased the time it took to complete an oil change service
                  from 20 minutes to 10-15 minutes, and improved tire change
                  times by implementing tactics to get tires on/off the rim much
                  quicker.
                </li>
                <li>
                  Improved customer experience and reduced blowback from
                  uninformed customers by fully explaining what a service
                  entails and any potential extra costs involved with a service
                  before we work on their vehicle.
                </li>
                <li>
                  Reorganized the tire storage to make finding tires a much
                  quicker task, and helped us have an accurate inventory count
                  to more easily quote a customer on the length of service.
                </li>
                <li>Upsold additional services to increase monthly profit.</li>
                <li>
                  Learned and helped with other positions, like stocking and
                  unloading freight, after the Auto center shut down during
                  Covid.
                </li>
              </ul>
              <br />
              <h4>Cashier - Cibolo, Texas</h4>
              <h6>Walmart - Oct 2018 - Feb 2019 (5 months)</h6>
              <p>
                Gave customers an easy and quick checkout at the end of their
                shopping trip. Optimized the checkout process to make it easy
                for both me and the customer. Learned about Walmart products and
                placement of goods and who to ask if there was something I
                didn't know to help a customer solve their issue. Helped
                management with additional tasks, like stocking or cart pushing,
                to help underperforming areas of the store.
              </p>
              <ul>
                <li>
                  Increased sales-per-hour by having a quick and efficient
                  checkout process.
                </li>
                <li>
                  Improved the rate of impulse-purchases by having a clean and
                  organized checkout lane.
                </li>
                <li>
                  Mentored new employees due to my ability to teach in a way
                  that was easy to understand.
                </li>
                <li>
                  Memorized product codes to decrease time that customers spent
                  checking out.
                </li>
              </ul>
              <br />
              <h4>Backroom Associate - Cibolo, Texas</h4>
              <h6>Silver's Pet and Feed - Nov 2017 - Oct 2018 (1 year)</h6>
              <p>
                Managed inventory to keep an efficient backroom process and
                maintained stock for the front shelfs to ensure products were
                always available for customers. Delivered heavy bags of animal
                feed to customer’s vehicles for those who couldn’t. Loaded and
                unloaded feed off of delivery trucks in a safe manner to reduce
                damaged goods.
              </p>
              <ul>
                <li>
                  Researched the types of feed to help customers with making
                  decisions on what was best for their animals.
                </li>
                <li>
                  Made lasting relationships with the local community and helped
                  increase the number of loyal customers.
                </li>
                <li>
                  Went on delivery trips to help quicken the process to reduce
                  time away from the store.
                </li>
              </ul>

              {/* <ul>
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
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;

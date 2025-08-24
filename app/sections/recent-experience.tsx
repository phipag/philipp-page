"use client";

import { faAws } from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faArrowUp, faChalkboardTeacher, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { ExternalLink } from "../components/external-link";
import Timeline, { TimelineEntry } from "../components/timeline";

export default function RecentExperience() {
  return (
    <Timeline className="mt-6">
      <TimelineEntry
        title="SA Engineer, Amazon Web Services"
        date="December, 2024 - Today"
        icon={<FontAwesomeIcon className="text-gray-50" icon={faAws} size="xs" />}
        current
      >
        <p className="leading-relaxed text-gray-800">
          Building on my experience as a software engineer, I decided to focus my work on open-source technologies in
          the Serverless space. In the{" "}
          <ExternalLink href="https://github.com/aws-powertools" text="Powertools for AWS Lambda team" />, I focus on
          creating a great developer experience for everyone building on Serverless technologies like AWS Lambda.
        </p>
      </TimelineEntry>

      <TimelineEntry
        className="mt-4"
        title="Software Development Engineer II, Amazon Web Services"
        date="September, 2022 - December 2024"
        icon={<FontAwesomeIcon className="text-gray-50" icon={faAws} size="xs" />}
      >
        <p className="leading-relaxed text-gray-800">
          After completing two internships during my master studies in Information Systems, I was hired as a full-time
          Software Development Engineer I (SDE I) at AWS in September, 2022. Within my first year after joining, I got
          promoted to SDE II. As a member of the Frontier Networking organization, I worked together with amazing
          colleagues on the newest edge-networking technologies leveraged in products like AWS Outposts.
        </p>
        <Disclosure>
          {({ open }) => (
            <div>
              <DisclosurePanel>
                <p className="mt-1 leading-relaxed text-gray-800">
                  My responsibilities involved developing the software that establishes connectivity between Amazon data
                  centers and non-standard edge networks, specifically, the customer data center in the case of
                  Outposts.
                </p>
                <p className="mt-1 leading-relaxed text-gray-800">
                  In my day-to-day tasks, I frequently interacted with AWS Services like Lambda, ECS, SQS, and
                  CloudWatch, implementing DevOps best practices by utilizing infrastructure-as-code tools such as AWS
                  CDK. I regularly wrote code in multiple programming languages including Python, TypeScript, Java, and
                  Rust.
                </p>
              </DisclosurePanel>

              <DisclosureButton className="mt-1 font-medium ring-0 hover:cursor-pointer hover:text-sky-700">
                {open ? (
                  <>
                    Read less <FontAwesomeIcon icon={faArrowUp} />
                  </>
                ) : (
                  <>
                    Read more <FontAwesomeIcon icon={faArrowDown} />
                  </>
                )}
              </DisclosureButton>
            </div>
          )}
        </Disclosure>
      </TimelineEntry>

      <TimelineEntry
        className="mt-4"
        title="Student Research Assistant, University of Cologne"
        date="February, 2022 - August, 2022"
        icon={<FontAwesomeIcon className="text-gray-50" icon={faUniversity} size="xs" />}
      >
        <p className="leading-relaxed text-gray-800">
          As a research and development assistant at the University of Cologne I contributed to different projects
          ranging from smart mobility research to energy market simulations. Read my latest publication{" "}
          <ExternalLink
            href="https://doi.org/10.1007/978-3-031-39707-3_2"
            text='"Modeling a Customer Population in Power TAC: Electric Vehicle Chargers"'
          />
          .
        </p>
        <Disclosure>
          {({ open }) => (
            <div>
              <DisclosurePanel>
                <p className="mt-1 leading-relaxed text-gray-800">
                  One of my most significant contributions in this role was the development of the above mentioned
                  publication where I contributed a new electric vehicle (EV) charger model to the{" "}
                  <ExternalLink href="https://powertac.org/" text="Power TAC platform" />. Power TAC is an event-based
                  simulation to model electricity markets in a decentralized future. My EV charger model is able to
                  generate charging sessions of electric vehicles based on the hour of the day. Implementation-wise, I
                  leveraged open-source data to fit a conditional Gaussian Mixture Model (GMM) to modeling the
                  probability distribution of charging duration and energy demand given the hour of the day. In a smart
                  grid world, this information can then be used to intelligently charge the vehicles at times of low
                  demand and provide flexibility to the overall grid.
                </p>
                <p className="mt-1 leading-relaxed text-gray-800">
                  A key reason for choosing a GMM were scalability concerns since the Power TAC platform has strict
                  performance requirements on the duration to generate market events. To meet these requirements, I
                  leveraged the fact that the multivariate normal distribution allows to analytically calculate its
                  conditionals. Based on this property, I brought the model to production by implementing it in Java
                  (Spring). It was successfully used in the 2022 Power TAC competition to model a population of 10,000
                  EV chargers.
                </p>
              </DisclosurePanel>
              <DisclosureButton className="mt-1 font-medium ring-0 hover:cursor-pointer hover:text-sky-700">
                {open ? (
                  <>
                    Read less <FontAwesomeIcon icon={faArrowUp} />
                  </>
                ) : (
                  <>
                    Read more <FontAwesomeIcon icon={faArrowDown} />
                  </>
                )}
              </DisclosureButton>
            </div>
          )}
        </Disclosure>
      </TimelineEntry>

      <TimelineEntry
        className="mt-4"
        title="Consultant and Product Owner, Hanseatic Consulting"
        date="March, 2018 - November, 2021"
        icon={<FontAwesomeIcon className="text-gray-50" icon={faChalkboardTeacher} size="xs" />}
      >
        <p className="leading-relaxed text-gray-800">
          During my time at <ExternalLink href="https://hanseaticconsulting.de" text="Hanseatic Consulting" /> I
          contributed to diverse agile software engineering projects. I started as a consultant and quickly progressed
          to team lead and product owner roles.
        </p>
        <Disclosure>
          {({ open }) => (
            <div>
              <DisclosurePanel>
                <p className="mt-1 leading-relaxed text-gray-800">
                  As a lead software engineer, I designed and implemented a Software-as-a-Service (SaaS) e-learning
                  platform using React and PHP (Laravel) for a client of the aerospace industry. The platform is now in
                  production, serving nearly 10,000 customers. In addition to software development, I applied my
                  extensive DevOps and distributed systems knowledge to scale the platform for growing customer traffic.
                  To do that, I established an automated CI/CD process to deploy and scale the application in Google
                  Cloud leveraging cloud services such as Google Kubernetes Engine (GKE).
                </p>
              </DisclosurePanel>
              <DisclosureButton className="mt-1 font-medium ring-0 hover:cursor-pointer hover:text-sky-700">
                {open ? (
                  <>
                    Read less <FontAwesomeIcon icon={faArrowUp} />
                  </>
                ) : (
                  <>
                    Read more <FontAwesomeIcon icon={faArrowDown} />
                  </>
                )}
              </DisclosureButton>
            </div>
          )}
        </Disclosure>
      </TimelineEntry>
    </Timeline>
  );
}

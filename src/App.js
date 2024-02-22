import React, { useState } from 'react';
import './App.css'
import LessonOne from './sec_components/LessonOne'
import LessonTwo from './sec_components/LessonTwo'
import LessonThree from './sec_components/LessonThree'
import LessonFour from './sec_components/LessonFive'
import LessonFive from './sec_components/LessonSix'
import LessonSix from './sec_components/LessonSix'
import LessonSeven from './sec_components/LessonSeven'
import LessonEight from './sec_components/LessonEight'
import LessonNine from './sec_components/LessonNine'
import LessonTen from './sec_components/LessonTen'
import LessonEleven from './sec_components/LessonEleven'
import LessonTwelve from './sec_components/LessonTwelve'
import LessonThirteen from './sec_components/LessonThirteen'
import LessonFourteen from './sec_components/LessonFourteen'
import LessonFifteen from './sec_components/LessonFifteen'
import LessonSixteen from './sec_components/LessonSixteen'
import LessonSeventeen from './sec_components/LessonSeventeen'
import LessonEighteen from './sec_components/LessonEighteen'
import LessonNineteen from './sec_components/LessonNineteen'
import LessonTwenty from './sec_components/LessonTwenty'
import LessonTwentyOne from './sec_components/LessonTwentyone'
import Ports from './net_components/Ports'
import LessonOneX from './net_components/LessonOne'
import LessonTwoX from './net_components/LessonTwo'
import LessonThreeX from './net_components/LessonThree'
import LessonFourX from './net_components/LessonFive'
import LessonFiveX from './net_components/LessonSix'
import LessonSixX from './net_components/LessonSix'
import LessonSevenX from './net_components/LessonSeven'
import LessonEightX from './net_components/LessonEight'
import LessonNineX from './net_components/LessonNine'
import LessonTenX from './net_components/LessonTen'
import LessonElevenX from './net_components/LessonEleven'
import LessonTwelveX from './net_components/LessonTwelve'
import LessonThirteenX from './net_components/LessonThirteen'
import LessonFourteenX from './net_components/LessonFourteen'
import LessonFifteenX from './net_components/LessonFifteen'
import LessonSixteenX from './net_components/LessonSixteen'
import LessonSeventeenX from './net_components/LessonSeventeen'
import LessonEighteenX from './net_components/LessonEighteen'
import LessonNineteenX from './net_components/LessonNineteen'
import LessonTwentyX from './net_components/LessonTwenty'
import NetworkImage from './img/netplus.png'
import SecurityImage from './img/secplus.png'

function App() {

  const [flashcards, setFlashcards] = useState('')
  const [netFlashcards, setNetFlashcards] = useState('')

  const myComponents = {
    'empty': '',
    'one': <LessonOne flashcards={one} />,
    'two': <LessonTwo flashcards={two} />,
    'three': <LessonThree flashcards={three} />,
    'four': <LessonFour flashcards={four} />,
    'five': <LessonFive flashcards={five} />,
    'six': <LessonSix flashcards={six} />,
    'seven': <LessonSeven flashcards={seven} />,
    'eight': <LessonEight flashcards={eight} />,
    'nine': <LessonNine flashcards={nine} />,
    'ten': <LessonTen flashcards={ten} />,
    'eleven': <LessonEleven flashcards={eleven} />,
    'twelve': <LessonTwelve flashcards={twelve} />,
    'thirteen': <LessonThirteen flashcards={thirteen} />,
    'fourteen': <LessonFourteen flashcards={fourteen} />,
    'fifteen': <LessonFifteen flashcards={fifteen} />,
    'sixteen': <LessonSixteen flashcards={sixteen} />,
    'seventeen': <LessonSeventeen flashcards={seventeen} />,
    'eighteen': <LessonEighteen flashcards={eighteen} />,
    'nineteen': <LessonNineteen flashcards={nineteen} />,
    'twenty': <LessonTwenty flashcards={twenty} />,
    'twentyone': <LessonTwentyOne flashcards={twentyone} />,
  }
  const myNetComponents = {
    'empty': '',
    'ports': <Ports flashcards={ports} />,
    'one_net': <LessonOneX flashcards={net_one} />,
    'two_net': <LessonTwoX flashcards={net_two} />,
    'three_net': <LessonThreeX flashcards={net_three} />,
    'four_net': <LessonFourX flashcards={net_four} />,
    'five_net': <LessonFiveX flashcards={net_five} />,
    'six_net': <LessonSixX flashcards={net_six} />,
    'seven_net': <LessonSevenX flashcards={net_seven} />,
    'eight_net': <LessonEightX flashcards={net_eight} />,
    'nine_net': <LessonNineX flashcards={net_nine} />,
    'ten_net': <LessonTenX flashcards={net_ten} />,
    'eleven_net': <LessonElevenX flashcards={net_eleven} />,
    'twelve_net': <LessonTwelveX flashcards={net_twelve} />,
    'thirteen_net': <LessonThirteenX flashcards={net_thirteen} />,
    'fourteen_net': <LessonFourteenX flashcards={net_fourteen} />,
    'fifteen_net': <LessonFifteenX flashcards={net_fifteen} />,
    'sixteen_net': <LessonSixteenX flashcards={net_sixteen} />,
    'seventeen_net': <LessonSeventeenX flashcards={net_seventeen} />,
    'eighteen_net': <LessonEighteenX flashcards={net_eighteen} />,
    'nineteen_net': <LessonNineteenX flashcards={net_nineteen} />,
    'twenty_net': <LessonTwentyX flashcards={net_twenty} />,
  }

  const [networkTrigger, setNetworkTrigger] = useState(0)
  const networkPlus = () => {
    setNetworkTrigger(networkTrigger + 1)
    if (securityTrigger % 2 !== 0 ) {
      setSecurityTrigger(securityTrigger + 1)
      setFlashcards('')
      myComponents('empty')
    }
  }
  const [securityTrigger, setSecurityTrigger] = useState(0)
  const securityPlus = () => {
    setSecurityTrigger(securityTrigger + 1)
    if (networkTrigger % 2 !== 0) {
      setNetworkTrigger(networkTrigger + 1)
      setNetFlashcards('')
      myNetComponents('empty')
    }
  }

  return (
    <>
      <div className='flex justify-center text-lg font-bold mt-12 mx-8 md:mx-28 lg:mx-40 xl:mx-80'>
      CompTIA Network+ and CompTIA Security+ Exam Preparation Flashcards
      </div>
      <div className='flex justify-center text-sm pt-10 mx-8 md:mx-28 lg:mx-48 xl:mx-80'> CompTIA (Computing Technology Industry Association) is a non-profit trade association that issues vendor-neutral professional certifications for the information technology industry. 
      </div>
      <div className='flex justify-center mt-16'>
        Choose your exam flashcards:
      </div>

      <div className='flex flex-wrap justify-around my-10'>

        <div onClick={() => securityPlus()} className='flex-col border-solid border-2 border-black rounded-lg hover:border-white hover:shadow-2xl lg:ml-28 xl:ml-56 cursor-pointer mb-6' style={ securityTrigger % 2 !== 0  ? {'backgroundColor': '#1e1e1e', 'color': '#faf7f7'} : {'backgroundColor': '#d4d4d4', 'color': 'black'} }>
          <div className='p-8'>
            <div className='font-bold text-lg'>Security+ SY0-601</div>
            <div className='text-md mb-2 ml-3'>launched Nov 2020</div>
            <div><img src={SecurityImage} alt="Security+ 006" className='w-32 ml-4 mt-4' /></div>
          </div> 
        </div>

        <div onClick={() => networkPlus()} className='flex-col border-solid border-2 border-black rounded-lg hover:border-white hover:shadow-2xl lg:mr-28 xl:mr-56 cursor-pointer mb-6' style={ networkTrigger % 2 !== 0  ? {'backgroundColor': '#1e1e1e', 'color': '#faf7f7'} : {'backgroundColor': '#d4d4d4', 'color': 'black'} }>
          <div className='p-8'>
            <div className='font-bold text-lg'>Network+ N10-008</div>
            <div className='text-md mb-4 ml-3'>launched Sept 2021</div>
            <div><img src={NetworkImage} alt="Network+ 008" className='w-32 ml-5 mt-2' /></div>
          </div> 
        </div>

      </div>
      
      {
      securityTrigger % 2 !== 0 
      ? 
      <>
        <form className='mt-12 flex md:justify-center ml-3 md:ml-0'>
          <select className='text-gray-800 bg-white px-2 py-1 border-solid border-2 border-gray-800' onChange={(e) => setFlashcards(e.target.value)}>
            <option value="empty">Security+ Lesson to Review:</option>
            {/* <option value="ports">Ports</option> */}
            <option value="one" className="text-sm">Lesson 1 - Comparing Security Roles and Security Controls</option>
            <option value="two" className="text-sm">Lesson 2 - Explaining Threat Actors and Threat Intelligence</option>
            <option value="three" className="text-sm">Lesson 3 - Performing Security Assessments</option>
            <option value="four" className="text-sm">Lesson 4 - Identifying Social Engineering and Malware</option>
            <option value="five" className="text-sm">Lesson 5 - Summarizing Basic Cryptographic Concepts</option>
            <option value="six" className="text-sm">Lesson 6 - Implementing Public Key Infrastructure</option>
            <option value="seven" className="text-sm">Lesson 7 - Implementing Authentication Controls</option>
            <option value="eight" className="text-sm">Lesson 8 - Implementing Identity and Account Mgmt Controls</option>
            <option value="nine" className="text-sm">Lesson 9 - Implementing Secure Network Designs</option>
            <option value="ten" className="text-sm">Lesson 10 - Implementing Network Security Appliances</option>
            <option value="eleven" className="text-sm">Lesson 11 - Implementing Secure Network Protocols</option>
            <option value="twelve" className="text-sm">Lesson 12 - Implementing Host Security Solutions</option>
            <option value="thirteen" className="text-sm">Lesson 13 - Implementing Secure Mobile Solutions</option>
            <option value="fourteen" className="text-sm">Lesson 14 - Implementing Secure Application Concepts</option>
            <option value="fifteen" className="text-sm">Lesson 15 - Implementing Secure Cloud Solutions</option>
            <option value="sixteen" className="text-sm">Lesson 16 - Explaining Data Privacy and Protection Concepts</option>
            <option value="seventeen" className="text-sm">Lesson 17 - Performing Incident Response</option>
            <option value="eighteen" className="text-sm">Lesson 18 - Explaining Digital Forensics</option>
            <option value="nineteen" className="text-sm">Lesson 19 - Summarizing Risk Management Concepts</option>
            <option value="twenty" className="text-sm">Lesson 20 - Implementing Cybersecurity Resilience</option>
            <option value="twentyone" className="text-sm">Lesson 21 - Explaining Physical Security</option>
          </select>
        </form> 
        {myComponents[flashcards]}
      </>
      : 
      ''
      }

      {
      networkTrigger % 2 !== 0
      ? 
      <>
        {/* <div className="pl-20 pr-20">
          XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
        </div> */}
        <form className='mt-12 flex md:justify-center ml-3 md:ml-0'>
          <select className='text-gray-800 bg-white px-2 py-1 border-solid border-2 border-gray-800' onChange={(e) => setNetFlashcards(e.target.value)}>
            <option value="empty">Network+ Lesson to Review</option>
            <option value="ports" className="text-sm">Ports</option>
            <option value="one_net" className="text-sm">Lesson 1 - OSI Model</option>
            <option value="two_net" className="text-sm">Lesson 2 - Ethernet Cabling</option>
            <option value="three_net" className="text-sm">Lesson 3 - Ethernet Switching</option>
            <option value="four_net" className="text-sm">Lesson 4 - Troubleshooting Ethernet Networks</option>
            <option value="five_net" className="text-sm">Lesson 5 - IPv4 Addressing</option>
            <option value="six_net" className="text-sm">Lesson 6 - IPv4 and IPv6 Networks</option>
            <option value="seven_net" className="text-sm">Lesson 7 - Routers</option>
            <option value="eight_net" className="text-sm">Lesson 8 - Network Topologies</option>
            <option value="nine_net" className="text-sm">Lesson 9 - Transport Layer</option>
            <option value="ten_net" className="text-sm">Lesson 10 - Explaining Network Services</option>
            <option value="eleven_net" className="text-sm">Lesson 11 - Network Applications</option>
            <option value="twelve_net" className="text-sm">Lesson 12 - Network Availability</option>
            <option value="thirteen_net" className="text-sm">Lesson 13 - Common Security Concepts</option>
            <option value="fourteen_net" className="text-sm">Lesson 14 - Secure Networks</option>
            <option value="fourteen_net" className="text-sm">Lesson 15 - Wireless Networks</option>
            <option value="fourteen_net" className="text-sm">Lesson 16 - WAN and Remote Access Methods</option>
            <option value="fourteen_net" className="text-sm">Lesson 17 - Organizational and Physical Security Concepts</option>
            <option value="fourteen_net" className="text-sm">Lesson 18 - Disaster Recovery and High Availability</option>
            <option value="fourteen_net" className="text-sm">Lesson 19 - Network Hardening Techniques</option>
            <option value="fourteen_net" className="text-sm">Lesson 20 - Cloud and Data Architecture</option>
          </select>
        </form>
        {myNetComponents[netFlashcards]}
      </>
      : 
      ''
      }
      

      <div className='text-sm flex justify-center mt-20 mb-6'>
        React.js & TailwindCSS 2022 by Adam Taylor Smith
      </div>
    </>
  );
}

const one = [
  {
    id: 1.00,
    question: 'LESSON 1 - Comparing Security Roles and Security Controls',
  },
  {
    id: 1.01,
    question: 'Confidentiality',
    answer: 'Certain information should only be known to certain people',
  },
  {
    id: 1.02,
    question: 'Integrity',
    answer: 'Data is stored and transferred as intended; any modification is authorized',
  },
  {
    id: 1.03,
    question: 'Availability',
    answer: 'Information is accessible to those authorized to view/modify it',
  },
  {
    id: 1.04,
    question: 'Non-repudiation',
    answer: 'Security principle wherein a subject cant deny doing something; like creating, modifying, sending a resource',
  },
  {
    id: 1.05,
    question: 'NIST - National Institute of Standards and Technology',
    answer: '',
  },
  {
    id: 1.06,
    question: 'NIST Cyber Framework Five Functions',
    answer: 'Identify, Protect, Detect, Respond, Recover',
  },
  {
    id: 1.07,
    question: 'CISO - Chief Information Security Officer',
    answer: 'Responsible for overall internal security',
  },
  {
    id: 1.08,
    question: 'ISSO - Information Systems Security Officer',
    answer: 'Responsible for implementing, maintaining, and monitoring security policy',
  },
  {
    id: 1.09,
    question: 'SOC - Security Operations Center',
    answer: 'Location where sec professionals monitor and protect critical assets',
  },
  {
    id: 1.10,
    question: 'DevOps',
    answer: 'Cultural shift within an organization to encourage more collaboration between developers and system admins',
  },
  {
    id: 1.11,
    question: 'DevSecOps',
    answer: 'Extension of DevOps that includes security specialists and has security as a primary consideration at every stage of software development',
  },
  {
    id: 1.12,
    question: 'CIRT / CERT',
    answer: 'Cyber Incident / Emergency Response Team. Dedicated response team working as a single point-of-contact for notification of security incidents',
  },
  {
    id: 1.13,
    question: 'Security Control',
    answer: 'Something designed to give a system or asset the properties of CIA (and non-repudiation)',
  },
  {
    id: 1.14,
    question: 'Technical Control',
    answer: 'Control implemented as hardware, software, or firmware. Ex: Firewalls, anti-virus software',
  },
  {
    id: 1.15,
    question: 'Operational Control',
    answer: 'Implemented primarily by people instead of systems. Ex: Security guards, training programs',
  },
  {
    id: 1.16,
    question: 'Managerial Control',
    answer: 'Gives oversight of the information system. Ex: Audits, tools allowing for evaluation of other controls',
  },
  {
    id: 1.17,
    question: 'Preventive Control',
    answer: 'Acts to eliminate or reduce the likelihood that an attack can succeed. Used BEFORE an attack. Ex: ACLs, door locks, SOPs',
  },
  {
    id: 1.18,
    question: 'Detective Control',
    answer: 'May not prevent or deter access, but will identify and record any attempted or successful intrusion. Used DURING attack. Ex: Logs, alarms, video recordings',
  },
  {
    id: 1.19,
    question: 'Corrective Control',
    answer: 'Acts to eliminate or reduce the impact of an intrusion. Works AFTER attack. Ex: Backup system to restore data that was damaged, patch management systems',
  },
  {
    id: 1.20,
    question: 'Physical Control',
    answer: 'Alarms, gateways, locks, lighting, security cameras, guards',
  },
  {
    id: 1.21,
    question: 'Deterrent Control',
    answer: 'May not physically or logically prevent access, but psychologically discourages an attacker from attempting an intrusion. Ex: Warning signs, obvious camera placement',
  },
  {
    id: 1.22,
    question: 'Compensating Control',
    answer: 'Serves as a substitute for a principal control, affording same or better level of protection but using a different method or technology',
  },
  {
    id: 1.23,
    question: 'CSF - Cybersecurity Framework',
    answer: 'List of activities and objectives undertaken to mitigate risks',
  },
  {
    id: 1.24,
    question: 'ISO - International Organization for Standardization',
    answer: 'Has an overall series of information security standards known as 27k, with specific ones for security controls, cloud security, personal data, etc',
  },
  {
    id: 1.25,
    question: 'CSA - Cloud Security Alliance',
    answer: 'A nonprofit organization with a mission to promote best practices for using cloud computing securely',
  },
  {
    id: 1.26,
    question: 'SSAE - Statement on Standards for Attestation Engagements',
    answer: 'Audit specifications designed to assure consumers that service providers meet professional standards',
  },
  {
    id: 1.27,
    question: 'CIS - Center for Internet Security',
    answer: 'Non-profit organization that produces benchmarks for different aspects of cybersecurity; including NIST-complient ones and product-specific ones like for Windows, macOS, Linux, etc',
  },
  {
    id: 1.28,
    question: 'OWASP - Open Web Application Security Project',
    answer: 'Non-profit community that supplies many secure app development resources, like the Top 10 list of the most critical app security risks',
  },
  {
    id: 1.29,
    question: 'SOX - Sarbanes-Oxley Act',
    answer: 'In the US; mandates implementation of risk assessments, internal controls, and audit procedures',
  },
  {
    id: 1.30,
    question: 'CSA - Computer Security Act',
    answer: 'Requires federal agencies to develop security policies for computer systems that process confidential information',
  },
  {
    id: 1.31,
    question: 'FISMA - Federal Information Security Management Act',
    answer: 'Governs the security of data processed by federal government agencies',
  },
  {
    id: 1.32,
    question: 'GDRP - General Data Protection Regulation',
    answer: 'In the EU; means personal data cant be collected, processed, or retained without the individuals informed consent',
  },
  {
    id: 1.33,
    question: 'PCI DSS - Payment Card Industry Data Security Standard',
    answer: 'Defines the safe handling and storage of financial information',
  },
  {
    id: 1.34,
    question: 'ISO 27001',
    answer: 'Focuses on personal data and privacy',
  },
  {
    id: 1.35,
    question: 'ISO 27002',
    answer: 'Classifies security controls',
  },
  {
    id: 1.36,
    question: 'ISO 27017 / 27018',
    answer: 'Reference cloud security',
  },
  {
    id: 1.37,
    question: 'ISO 31K',
    answer: 'ISO more broad, all encompassing framework for enterprise risk management',
  },
]
const two = [
  {
    id: 2.00,
    question: 'LESSON 2 - Explaining Threat Actors and Threat Intelligence',
  },
  {
    id: 2.01,
    question: 'Vulnerability',
    answer: 'A weakness that could be trigged accidentally or intentionally to cause a security breach',
  },
  {
    id: 2.02,
    question: 'Threat',
    answer: 'The potential for someone/thing to exploit a vulnerability and breach security',
  },
  {
    id: 2.03,
    question: 'Risk',
    answer: 'The likelihood and impact of a threat actor exploiting a vulnerability',
  },
  {
    id: 2.04,
    question: 'What are two critical attributes to know about threat actors',
    answer: 'Intent and motivation',
  },
  {
    id: 2.05,
    question: 'Black Hat',
    answer: 'Unauthorized',
  },
  {
    id: 2.06,
    question: 'White Hat',
    answer: 'Authorized',
  },
  {
    id: 2.07,
    question: 'Grey Hat',
    answer: 'Semi-authorized',
  },
  {
    id: 2.08,
    question: 'Script Kiddie',
    answer: 'Someone who uses hacker tools without necessarily understanding how they work or being able to craft new attacks themselves',
  },
  {
    id: 2.09,
    question: 'Hacktivist',
    answer: 'Someone, or a group, that use cyber weapons to promote a political agenda',
  },
  {
    id: 2.10,
    question: 'APT - Advanced Persistent Threat',
    answer: 'Refers to the ongoing ability of an adversary to compromise network security - to obtain and maintain access - using a variety of TTPs',
  },
  {
    id: 2.11,
    question: 'State Actors',
    answer: 'Adversaries working on behalf of a nation state government, often very sophisticated and well funded',
  },
  {
    id: 2.12,
    question: 'Criminal Syndicate',
    answer: 'Criminal groups/gangs acting online, typically for financial fraud and extortion purposes',
  },
  {
    id: 2.13,
    question: 'Shadow IT',
    answer: 'When users purchase or introduce computer hardware or software to the workplace without permission and without going through security analysis processes',
  },
  {
    id: 2.14,
    question: 'Attack Surface',
    answer: 'All the points where a malicious threat actor could try to exploit a vulnerability',
  },
  {
    id: 2.15,
    question: 'Attack Vector',
    answer: 'The path a threat actor uses to gain access to a secure system',
  },
  {
    id: 2.16,
    question: 'Deep Web',
    answer: 'Any part of the WWW not indexed by a search engine',
  },
  {
    id: 2.17,
    question: 'Dark Net',
    answer: 'Network established as an overlay to Internet infrastructure; acts to anonymize usage and prevent others from knowing about the networks existence',
  },
  {
    id: 2.18,
    question: 'Dark Web',
    answer: 'Sites, content, and services accessible only over a dark net',
  },
  {
    id: 2.19,
    question: 'Reputational Threat Intelligence',
    answer: 'Lists of IP address and domains associated with malicious behavior, plus signatures of known malware',
  },
  {
    id: 2.20,
    question: 'CTI - Cyber Threat Intelligence',
    answer: 'Feeds of packaged threat data that can integrate with SIEM platforms',
  },
  {
    id: 2.21,
    question: 'Closed / Proprietary CTI',
    answer: 'Threat research and CTI is made available as a paid subscription to a commercial threat intelligence platform',
  },
  {
    id: 2.22,
    question: 'Vendor CTI',
    answer: 'Many vendors make huge amounts of threat research available via their websites for their customers',
  },
  {
    id: 2.23,
    question: 'ISAC - Information Sharing and Analysis Centers',
    answer: 'Sector-specific threat intelligence resources for companies and agencies in critical industries like power supply, financial markets, or aviation',
  },
  {
    id: 2.24,
    question: 'OSINT - Open Source Intelligence',
    answer: 'Information gathered from publicly available ("open") sources, such as radio, television, newspapers, public websites, social media, etc',
  },
  {
    id: 2.25,
    question: 'TTP - Tactic, Technique, and Procedure',
    answer: 'Generalized statement of adversary behavior categorized in terms of strategy (tactics), attack vectors (techniques), and specific tools and methods (procedures)',
  },
  {
    id: 2.26,
    question: 'IoC - Indicator of Compromise',
    answer: 'Residual sign that an asset or network has been successfully attacked or is continuing to be attacked. Evidence of TTP',
  },
  {
    id: 2.27,
    question: 'STIX - Structured Threat Information eXpression',
    answer: 'Provides the syntax for describe CTI',
  },
  {
    id: 2.28,
    question: 'TAXII - Trusted Automated eXchange of Indicator Information',
    answer: 'Protocol that provides a means for transmitting CTI data between servers and clients',
  },
  {
    id: 2.29,
    question: 'AIS - Automated Indicator Sharing',
    answer: 'Service offered by the Department of Homeland Security for companies to participate in threat intelligence sharing',
  },
  {
    id: 2.30,
    question: 'Threat Map',
    answer: 'Animated graphic showing the source, target, and type of attacks that have been detected by a CTI platform',
  },
  {
    id: 2.31,
    question: 'CVE - Common Vulnerabilities and Exposures',
    answer: 'A database of vulnerabilities operated by Mitre, including information about the vulnerability and its severity',
  },
]
const three = [
  {
    id: 3.00,
    question: 'LESSON 3 - Performing Security Assessments',
  },
  {
    id: 3.01,
    question: 'ipconfig',
    answer: 'Windows command that shows the IP configuration settings on a PC',
  },
  {
    id: 3.02,
    question: 'ifconfig',
    answer: 'Linux command that shows the IP configuration settings on a PC; being replaced by ip',
  },
  {
    id: 3.03,
    question: 'ip',
    answer: 'Linux command that shows the IP configuration settings on a PC; replacing ifconfig',
  },
  {
    id: 3.04,
    question: 'ping',
    answer: 'Probes a host on a particular IP address or host name using ICMP, shows if a host is up and reachable or not',
  },
  {
    id: 3.05,
    question: 'arp',
    answer: 'Displayed the local machines ARP cache',
  },
  {
    id: 3.06,
    question: 'route',
    answer: 'Command-line tool to view and configure a hosts local routing table',
  },
  {
    id: 3.07,
    question: 'tracert',
    answer: 'Windows command that uses ICMP probes to report the round trip time for hops between the local host and a remote host',
  },
  {
    id: 3.08,
    question: 'traceroute',
    answer: 'Linux command that uses UDP probes to perform route discovery between the local host and a remote host',
  },
  {
    id: 3.09,
    question: 'pathping',
    answer: 'Windows tool that provides statistics for latency and packet loss along a route',
  },
  {
    id: 3.10,
    question: 'mtr',
    answer: 'Linux tool that provides statistics for latency and packet loss along a route',
  },
  {
    id: 3.11,
    question: 'nmap',
    answer: 'Open source IP scanner that can perform remote host discovery, service discovery, OS discovery, port scans',
  },
  {
    id: 3.12,
    question: 'netstat',
    answer: 'Shows the state of TCP/UDP ports on a local machine',
  },
  {
    id: 3.13,
    question: 'nslookup',
    answer: 'Windows tool to query name records for a given domain using a particular DNS resolver',
  },
  {
    id: 3.14,
    question: 'dig',
    answer: 'Linux tool to query name records for a given domain using a particular DNS resolver',
  },
  {
    id: 3.15,
    question: 'theHarvester',
    answer: 'A tool for gathering OSINT for a particular domain or company; scans public data sources to gather emails, names, subdomains, IPs, URLs, etc',
  },
  {
    id: 3.16,
    question: 'curl',
    answer: 'Command-line tool for performing data transfers over many types of protocols; can be used to submit HTTP GET and POST requests for web app vulnerability testing',
  },
  {
    id: 3.17,
    question: 'Nessus',
    answer: 'One of the best-known commercial vulnerability scanners',
  },
  {
    id: 3.18,
    question: 'Packet Analysis',
    answer: 'Deep-down, frame-by-frame scrutiny of captured frames',
  },
  {
    id: 3.19,
    question: 'Protocol Analysis',
    answer: 'Using statistical tools to analyze a sequence of packets',
  },
  {
    id: 3.20,
    question: 'tcpdump',
    answer: 'Linux command-line tool for packet capturing',
  },
  {
    id: 3.21,
    question: 'Wireshark',
    answer: 'Open-source graphical packet capture and analysis utility',
  },
  {
    id: 3.22,
    question: 'hping',
    answer: 'Open-source spoofing tool that can craft packets to exploit FWs and IDSs; can do port detection, traceroutes, and flood-based DoS attacks',
  },
  {
    id: 3.23,
    question: 'tcpreplay',
    answer: 'Takes previously captured traffic saved to a .pcap file and replays it through a network interface',
  },
  {
    id: 3.24,
    question: 'Exploitation Framework',
    answer: 'Framework containing a database of exploit code, each targeting a particular CVE; can be used to actually exploit discovered vulnerabilities. Ex: Metasploit',
  },
  {
    id: 3.25,
    question: 'netcat (nc)',
    answer: 'Command-line tool that can be used for port scanning, fingerprinting, or can be configured as a backdoor on a remote machine',
  },
  {
    id: 3.26,
    question: 'Zero Day',
    answer: 'A vulnerability that is exploited before the developer knows about it or can release a patch',
  },
  {
    id: 3.27,
    question: 'Vendor Management',
    answer: 'Process for selecting supplier companies and evaluating the inherent risks in relying on a third-party product or service',
  },
  {
    id: 3.28,
    question: 'Vulnerability Assessment',
    answer: 'Evaluation of a systems security and ability to meet compliance requirements based on the configuration of the system',
  },
  {
    id: 3.29,
    question: 'Vulnerability Scanner',
    answer: 'Designed to test network hosts; examines an organizations systems, apps, and devices and compares the results to configuration templates + lists of known vulnerabilities. PASSIVE',
  },
  {
    id: 3.30,
    question: 'SCAP - Security Content Application Protocol',
    answer: 'Protocol that allows vulnerability scanners to obtain information and updates from feeds and determine whether or not a host meets a configuration baseline. Uses OVAL and XCCDF to do this',
  },
  {
    id: 3.31,
    question: 'OVAL - Open Vulnerability and Assessment Language',
    answer: 'An XML schema used to describe system security states and for querying vulnerability reports. Used alongside XCCDF by SCAP',
  },
  {
    id: 3.32,
    question: 'XCCDF - Extensible Configuration Checklist Description Format',
    answer: 'An XML schema for developing and auditing best-practice configuration checklists and rules. Used alongside OVAL by SCAP',
  },
  {
    id: 3.33,
    question: 'CVSS - Common Vulnerability Scoring System',
    answer: 'Metrics that generate a score from 0 to 10 for a CVE, based on characteristics of the vulnerability',
  },
  {
    id: 3.34,
    question: 'Non-intrusive Scanning',
    answer: 'Analyzes indirect evidence, like the kinds of traffic generated by a devices. Has the least impact on the network and hosts, but less likely to comprehensively identify vulnerabilities',
  },
  {
    id: 3.35,
    question: 'Active Scanning',
    answer: 'Probing a devices configuration using some sort of network connection with the target. Consumes more bandwidth but can get more comprehensive info',
  },
  {
    id: 3.36,
    question: 'False Positive',
    answer: 'When a security appliance like an IDS flags something as a vulnerability/alert/etc but it actually is not one',
  },
  {
    id: 3.37,
    question: 'False Negative',
    answer: 'When a security appliance like an IDS does not flag something as malicious/an alert/etc but it should have',
  },
  {
    id: 3.38,
    question: 'Threat Hunting',
    answer: 'Assessment technique that utilizes insights from threat intelligence to proactively discover whether a network or system has evidence of TTPs already present',
  },
  {
    id: 3.39,
    question: 'Maneuver',
    answer: 'When an attacker expects/anticipates action being planned or taken against them, and thus attempts to distract the team or get around them in some other way',
  },
  {
    id: 3.40,
    question: 'Penetration Test',
    answer: 'An authorized test where contractors will use hacking techniques to discover exploitable weaknesses in the targets security system. ACTIVE',
  },
  {
    id: 3.41,
    question: 'Rules of Engagement',
    answer: 'Specify what is and is not permitted in a pen test',
  },
  {
    id: 3.42,
    question: 'Black Box',
    answer: 'Unknown environment; tester is given no privileged info about the network. Simulates external threats',
  },
  {
    id: 3.43,
    question: 'White Box',
    answer: 'Known environment; tester is given complete access to info about the network. Simulates privileged insider threats',
  },
  {
    id: 3.44,
    question: 'Grey Box',
    answer: 'Partially known environment; tester is given some info about the network. Simulates underprivileged insider threats',
  },
  {
    id: 3.45,
    question: 'Bug Bounty',
    answer: 'Program operated by a software vendor or website operator where rewards are given for reporting vulnerabilities',
  },
  {
    id: 3.46,
    question: 'Red Team',
    answer: 'Performs the offensive role to try and infiltrate a target',
  },
  {
    id: 3.47,
    question: 'Blue Team',
    answer: 'Performs the defensive role by operating, monitoring, and alerting controls to detect and prevent infiltration',
  },
  {
    id: 3.48,
    question: 'White Team',
    answer: 'Sets the rules of engagement and monitors the exercise',
  },
  {
    id: 3.49,
    question: 'Purple Team',
    answer: 'Where red and blue teams meet for regular debriefs while an exercise is ongoing',
  },
  {
    id: 3.50,
    question: 'Social Engineering',
    answer: 'Obtaining information, physical access to premises, or even access to a user account through the art of persuasion',
  },
  {
    id: 3.51,
    question: 'Footprinting',
    answer: 'Using software tools like Nmap to obtain information about a host or network topology',
  },
  {
    id: 3.52,
    question: 'War Driving',
    answer: 'Mapping the location and type of wireless networks operated by a target or targets',
  },
  {
    id: 3.53,
    question: 'Drones / Unmanned Aerial Vehicle',
    answer: 'Allow testers/attackers to check out target premises or even perform war driving from the air',
  },
  {
    id: 3.54,
    question: 'Persistence',
    answer: 'The testers or attackers ability to reconnect to a compromised host and use it as a remote access tool or backdoor',
  },
  {
    id: 3.55,
    question: 'Privilege Escalation',
    answer: 'Finding ways to elevate your privileges; so going from a normal user to one with admin rights',
  },
  {
    id: 3.56,
    question: 'Lateral Movement',
    answer: 'Gaining control over other hosts on a network',
  },
  {
    id: 3.57,
    question: 'Pivoting',
    answer: 'The initial foothold into a network, allowing testers/attackers to bypass a network boundary and compromise servers on the inside',
  },
  {
    id: 3.58,
    question: 'Actions on Objectives',
    answer: 'Could mean stealing data, installing malware, in the case of a pen tester just proving/showing that a vulnerability could be exploited; its what the attacker/tester came there to do',
  },
  {
    id: 3.59,
    question: 'Cleanup',
    answer: 'Removing evidence of the attack, or at least evidence that could implicate the attacker. For testers, removing any tools or backdoors they used',
  },
]
const four = [
  {
    id: 4.00,
    question: 'LESSON 4 - Identifying Social Engineering and Malware',
  },
  {
    id: 4.01,
    question: 'Social Engineering',
    answer: 'Hacking the human; getting information from someone or getting them to perform some action for the attacker via persuasion',
  },
  {
    id: 4.02,
    question: 'Four Social Engineering Principles',
    answer: 'Familiarity/Liking, Consensus/Social Proof, Authority/Intimidation, Scarcity/Urgency',
  },
  {
    id: 4.03,
    question: 'Impersonation',
    answer: 'Pretending to be someone else; a basic social engineering technique that can be combined with one or more social engineering principles',
  },
  {
    id: 4.04,
    question: 'Dumpster Diving',
    answer: 'Going through an individuals or organizations trash to try and find useful documents',
  },
  {
    id: 4.05,
    question: 'Tailgating',
    answer: 'A means of entering a secure area without authorization by following close behind the person that has been allowed in',
  },
  {
    id: 4.06,
    question: 'Piggybacking',
    answer: 'A means of entering a secure area with an employees permission; typically by impersonating a staff member or delivery person, etc',
  },
  {
    id: 4.07,
    question: 'Identity Fraud',
    answer: 'Specific type of impersonation where the attacker uses specific details of someones identity',
  },
  {
    id: 4.08,
    question: 'Shoulder Surfing',
    answer: 'Threat actors learning a password or PIN or other secure info by watching the user type it in. Could be literally over shoulder or via CCTV, binoculars, etc',
  },
  {
    id: 4.09,
    question: 'Lunchtime Attack',
    answer: 'When a user leaves their workstation unattended while still logged on, and an attacker physically gains access to the system during that window of time',
  },
  {
    id: 4.10,
    question: 'Phishing',
    answer: 'Combo of social engineering and spoofing; persuades or tricks target into interacting with a malicious resource or providing sensitive info. Typically using email',
  },
  {
    id: 4.11,
    question: 'Spear Phishing',
    answer: 'Phishing scam where the attacker has some information to target an individual specifically, making them more likely to be fooled',
  },
  {
    id: 4.12,
    question: 'Whaling',
    answer: 'A type of spear phishing attack that targets specifically upper levels of management in an organization (CEOs, CIOs, etc)',
  },
  {
    id: 4.13,
    question: 'Vishing',
    answer: 'A phishing attack conducted through a voice channel; telephone or VoIP, for example',
  },
  {
    id: 4.14,
    question: 'SMiShing',
    answer: 'Phishing attacks committed using text messages (SMS)',
  },
  {
    id: 4.15,
    question: 'Spim',
    answer: 'Spam that is delivered through instant messaging',
  },
  {
    id: 4.16,
    question: 'Spam',
    answer: 'Unsolicited email',
  },
  {
    id: 4.17,
    question: 'Hoax',
    answer: 'Common social engineering technique, often combined with phishing. Email alert or pop-up will claim to has identified a problem, tell user to download its product to fix it, etc',
  },
  {
    id: 4.18,
    question: 'Prepending',
    answer: 'Adding text that appears to have been generated by the mail system. "RE:" or "MAILSAFE: PASSED"',
  },
  {
    id: 4.19,
    question: 'Pharming',
    answer: 'A passive way of redirecting users from a legitimate website to a malicious one. Corrupts the name resolution process',
  },
  {
    id: 4.20,
    question: 'Typosquatting',
    answer: 'Registering domain names very similar to those of legit sites in hopes of receiving traffic from users who mistakenly enter an incorrect URL in their browsers',
  },
  {
    id: 4.21,
    question: 'Watering Hole',
    answer: 'Relies on a group of targets all using the same unsecure third-party website. The attacker "poisons the watering hole", aka corrupts the third-party website, and all targets that visit the page get infected',
  },
  {
    id: 4.22,
    question: 'Credential Harvesting',
    answer: 'A campaign specifically designed to steal account credentials, often to sell the database of information',
  },
  {
    id: 4.23,
    question: 'Influence Campaign',
    answer: 'A major problem launched by highly capable adversaries like a nation-state or terrorist group; the goal is to shift public opinion on a topic through spreading misinformation, making fake accounts to push the fake info, etc',
  },
  {
    id: 4.24,
    question: 'Trojan',
    answer: 'Malware concealed within a software installer package that appears to be legitimate. Designed to operate secretly, but can be found with common tools',
  },
  {
    id: 4.25,
    question: 'PUP - Potentially Unwanted Programs',
    answer: 'Software installed alongside a package, maybe bundled with a new computer system. Not necessarily malicious, but unwanted. Can be called grayware',
  },
  {
    id: 4.26,
    question: 'Virus',
    answer: 'Malware designed to replicate and spread from computer to computer, typically by infecting executable apps or code',
  },
  {
    id: 4.27,
    question: 'Non-resident / File Infector Virus',
    answer: 'Virus contained within a host executable file and that runs with the host process',
  },
  {
    id: 4.28,
    question: 'Memory Resident Virus',
    answer: 'A virus that creates a new process for itself in memory, which remains in memory even if the host process is terminated',
  },
  {
    id: 4.29,
    question: 'Boot Sector Virus',
    answer: 'Virus code written to the disk boot sector or partition table of a disk or USB media, executes as memory resident process with the OS starts or the media is connected to a computer',
  },
  {
    id: 4.30,
    question: 'Script and Macro Viruses',
    answer: 'Viruses that use the programming features in local scripting engines; PowerShell, WMI, JavaScript, PDFs with JavaScript enabled, etc',
  },
  {
    id: 4.31,
    question: 'Multipartite Virus',
    answer: 'A virus that uses multiple vectors of infection',
  },
  {
    id: 4.32,
    question: 'Polymorphic Virus',
    answer: 'A virus that can dynamically change or obfuscate its code to evade detection',
  },
  {
    id: 4.33,
    question: 'Worm',
    answer: 'Memory-resident malware that can run without user intervention and self-replicate over network resources',
  },
  {
    id: 4.34,
    question: 'Shellcode',
    answer: 'Code executed by a target program due to an exploit and used to open a remote shell so that an attacker can use that shell to further interact with the victims system',
  },
  {
    id: 4.35,
    question: 'Cookies',
    answer: 'Plain text files that can be used to record pages visited, search queries, browser metadata, IP address, etc',
  },
  {
    id: 4.36,
    question: 'Adware',
    answer: 'Class of PUP that shows lots of ads, may be installed as a program or browser extension/plug-in, can change your default search provider, open a sponser page at startup, add bookmarks, etc',
  },
  {
    id: 4.37,
    question: 'Spyware',
    answer: 'Similar to adware, but can also monitor local application activity, take screenshots, and activate devices like microphones or webcams',
  },
  {
    id: 4.38,
    question: 'Keylogger',
    answer: 'Spyware that actively attempts to steal confidential information by recording keystrokes',
  },
  {
    id: 4.39,
    question: 'Backdoor',
    answer: 'Something that gives access to a program or a service that circumvents normal security protections. Can be malicious or accidental',
  },
  {
    id: 4.40,
    question: 'RAT - Remote Access Trojan',
    answer: 'Backdoor malware that mimics the functionality of legitimate remote control programs, designed to operate covertly. Gives attacker remote access to host',
  },
  {
    id: 4.41,
    question: 'Botnet',
    answer: 'A group of compromised computers (bots) that can be used for DDoS, spam campaigns, cryptomining, etc',
  },
  {
    id: 4.42,
    question: 'C&C - Command and Control',
    answer: 'An infrastructure of hosts and services with which attackers direct, distribute, and control malware over botnets',
  },
  {
    id: 4.43,
    question: 'Rootkit',
    answer: 'Malware running with root/System privileges; very hard to detect, hard to remove, can reside in firmware, can make it so local tools cant discover it',
  },
  {
    id: 4.44,
    question: 'Ransomware',
    answer: 'A type of malware that tries to extort money from the victim',
  },
  {
    id: 4.45,
    question: 'Crypto-malware',
    answer: 'Class of ransomware that encrypts data files on any fixed, removable, and network drives. Demands a ransom to hand over decryption key',
  },
  {
    id: 4.46,
    question: 'Logic Bomb',
    answer: 'A computer program or script that lies dormant until it is triggered by a specific time or event',
  },
  {
    id: 4.47,
    question: 'EPP - Endpoint Protection Platform',
    answer: 'A software agent and monitoring system that performs multiple security tasks',
  },
  {
    id: 4.48,
    question: 'UEBA - User and Entity Behavior Analytics',
    answer: 'A system that can provide automated identification of suspicious activity by user accounts and computer hosts',
  },
  {
    id: 4.49,
    question: 'Sandbox',
    answer: 'A system configured to be completely isolated from its host. Can be used to test malware',
  },
  {
    id: 4.50,
    question: 'Anomaly Analysis',
    answer: 'Analyzing file metadata and checking for suspicious files, temporary files, etc, that can help establish a timeline of events for an incident',
  },
  {
    id: 4.51,
    question: 'Abnormal Process Behavior Analysis',
    answer: 'Building up a sense of what is "normal" in a system so that you can spot deviations in a potentially infected system',
  },
  {
    id: 4.52,
    question: 'Sysinternals',
    answer: 'A free suite of tools designed to assist with troubleshooting issues with Windows',
  },
]
const five = [
  {
    id: 5.00,
    question: 'LESSON 5 - Summarizing Basic Cryptographic Concepts',
  },
  {
    id: 5.01,
    question: 'Cryptography',
    answer: 'The art of making information secure by encoding it',
  },
  {
    id: 5.02,
    question: 'Plaintext',
    answer: 'Cleartext - an unencrypted message',
  },
  {
    id: 5.03,
    question: 'Ciphertext',
    answer: 'An encrypted message',
  },
  {
    id: 5.04,
    question: 'Cipher',
    answer: 'The process or algorithm used to encrypt and decrypt a message',
  },
  {
    id: 5.05,
    question: 'Cryptanalysis',
    answer: 'The art of cracking cryptographic systems',
  },
  {
    id: 5.06,
    question: 'Hashing',
    answer: 'A one-way cryptographic function that takes input of any length and produces a fixed-length string',
  },
  {
    id: 5.07,
    question: 'Checksum / Message Digest / Hash',
    answer: 'The output of a hashing algorithm',
  },
  {
    id: 5.08,
    question: 'SHA - Secure Hashing Algorithm',
    answer: 'Considered the strongest hashing algorithm; the most popular variant is SHA-256 which produces a 256 bit digest',
  },
  {
    id: 5.09,
    question: 'MD5 - Message Digest Algorithm #5',
    answer: 'A weaker hashing algorithm that produces a 128 bit digest; still used because it is faster and more compatible between products',
  },
  {
    id: 5.10,
    question: 'Substitution Cipher',
    answer: 'A cipher that involves replacing characters (a letter or block of letters) in the plaintext with different ones in ciphertext; ex: Caesar cipher, ROT13',
  },
  {
    id: 5.11,
    question: 'Transposition Cipher',
    answer: 'A cipher where the characters stay the same in both plain and ciphertext, but their order is changed; ex: Rail fence cipher',
  },
  {
    id: 5.12,
    question: 'Symmetric Encryption',
    answer: 'An encryption method in which the same key is used to encrypt and decrypt a message. Provides confidentiality. Faster, used for bulk encryption',
  },
  {
    id: 5.13,
    question: 'Stream Cipher',
    answer: 'A type of symmetric encryption where each byte or bit of data in the plaintext is encrypted one at a time',
  },
  {
    id: 5.14,
    question: 'Block Cipher',
    answer: 'A type of symmetric encryption where plaintext is divided into equal-size blocks and then encrypted. Padded to a correct size',
  },
  {
    id: 5.15,
    question: 'AES - Advanced Encryption Standard',
    answer: 'Default symmetric block cipher used for most products; basic key size is 128 bits, but most use AES256 a 256-bit key',
  },
  {
    id: 5.16,
    question: 'Asymmetric Encryption',
    answer: 'AKA public key cryptography; an encryption method where operations are performed by two different but related public and private keys',
  },
  {
    id: 5.17,
    question: 'RSA Algorithm',
    answer: 'De facto asymmetric algorithm used for encryption, digital signatures, and key exchange',
  },
  {
    id: 5.18,
    question: 'Trapdoor Function',
    answer: 'A function that is easy to compute in one direction, yet difficult to compute in the opposite direction',
  },
  {
    id: 5.19,
    question: 'ECC - Elliptic Curve Cryptography',
    answer: 'A type of trapdoor function that can be used in asymmetric ciphers; the advantage is it can use smaller keys that are just as strong as RSAs larger keys',
  },
  {
    id: 5.20,
    question: 'Digital Signature',
    answer: 'An asymmetrically encrypted hash message that provides integrity and authentication of a message; commonly used to sign emails or digital certificates',
  },
  {
    id: 5.21,
    question: 'DSA - Digital Signature Algorithm',
    answer: 'A format of creating digital signatures using ECC rather than the RSA cipher',
  },
  {
    id: 5.22,
    question: 'Key Exchange',
    answer: 'The process of sending and receiving secure cryptographic keys utilizing both asymmetric and symmetric encryption',
  },
  {
    id: 5.23,
    question: 'Digital Certificates',
    answer: 'A technology used to guarantee the identity of a person or server issuing out a public key; signed by CAs who vouch for the person/servers identity',
  },
  {
    id: 5.24,
    question: 'PFS - Perfect Forward Secrecy',
    answer: 'Uses the D-H key agreement to create ephemeral session keys; meaning even if an attacker intercepts the key, it wont be of any use to them',
  },
  {
    id: 5.25,
    question: 'DHE - Diffie-Hellman Ephemeral / ECDHE - Elliptic Curve Diffie-Hellman Ephemeral',
    answer: 'Varients of D-H that are used to implement perfect forward secrecy',
  },
  {
    id: 5.26,
    question: 'Cipher Suite',
    answer: 'Protocols often use separate cryptographic products for different things; the combo of ciphers supported is a suite',
  },
  {
    id: 5.27,
    question: 'CBC - Cipher Block Chaining',
    answer: 'A mode that applies an IV to the 1st plaintext block to make sure it outputs a unique ciphertext; the output is then combined with the next block using an XOR operation',
  },
  {
    id: 5.28,
    question: 'Counter Mode',
    answer: 'A mode of operation that can make the AES block cipher algorithm work as a stream cipher',
  },
  {
    id: 5.29,
    question: 'MAC - Message Authentication Code',
    answer: 'Provides authentication and integrity by hashing a combo of message output and a shared secret key',
  },
  {
    id: 5.30,
    question: 'Cryptographic Primitive',
    answer: 'A single hash function, symmetric cipher, or asymmetric cipher',
  },
  {
    id: 5.31,
    question: 'Symmetric encryption provides..',
    answer: 'Confidentiality',
  },
  {
    id: 5.32,
    question: 'Hashing algorithms provide..',
    answer: 'Integrity',
  },
  {
    id: 5.33,
    question: 'Asymmetric encryption provides..',
    answer: 'Authentication and Non-repudiation',
  },
  {
    id: 5.34,
    question: 'Obfuscation',
    answer: 'The art of making a message/code/etc difficult to understand',
  },
  {
    id: 5.35,
    question: 'Cryptographic Performance Limitations',
    answer: 'Speed, Latency, Size, Computational overheads',
  },
  {
    id: 5.36,
    question: 'Cryptographic Security Limitations',
    answer: 'Low entropy, Weak keys, Predictability, Re-usage',
  },
  {
    id: 5.37,
    question: 'Entropy',
    answer: 'A measure of disorder or randomness',
  },
  {
    id: 5.38,
    question: 'RC4',
    answer: 'A symmetric stream cipher known to have weak keys; seen with WEP and WPA',
  },
  {
    id: 5.39,
    question: 'TRNG - True Random Number Generator',
    answer: 'A number generator that uses truly random input to generate a number, such as atmospheric noise or airwave static',
  },
  {
    id: 5.40,
    question: 'PRNG - Pseudo Random Number Generator',
    answer: 'A number generator that relies on mathematical algorithms that are very close to being completely random themselves',
  },
  {
    id: 5.41,
    question: 'Nonce',
    answer: 'Number only use once; random or pseudo-random value used alongside a cipher',
  },
  {
    id: 5.42,
    question: 'IV - Initialization Vector',
    answer: 'The principal characteristic is that it is a random or pseudo-random number; rarely reused',
  },
  {
    id: 5.43,
    question: 'Salt',
    answer: 'A random or pseudo-random number or string, used specifically in conjunction with hashing passwords',
  },
  {
    id: 5.44,
    question: 'Downgrade Attack',
    answer: 'A type of attack that forces or requests a system to downgrade its security. The attacker then exploits the weaker security control',
  },
  {
    id: 5.45,
    question: 'Key Stretching',
    answer: 'A technique that strengthens potentially weak cryptographic keys by putting them through many additional rounds of hashing',
  },
  {
    id: 5.46,
    question: 'Birthday Attack',
    answer: 'An attack that searches for any two message digests that are the same aka collisions; potentially using this to swap out a benign document for a malicious one',
  },
  {
    id: 5.47,
    question: 'Collision',
    answer: 'When a hashing function produces the same hash values for two different plaintexts',
  },
  {
    id: 5.48,
    question: 'Qubits',
    answer: 'Quantum computing performs processing on these units',
  },
  {
    id: 5.49,
    question: 'Superposition',
    answer: 'An indeterminate state for a qubit, where there is a probability of it being either 1 or 0',
  },
  {
    id: 5.50,
    question: 'Post-Quantum',
    answer: 'The expected state of computing when quantum computers that can perform useful tasks are a reality',
  },
  {
    id: 5.51,
    question: 'Lightweight Cryptography',
    answer: 'A compact cipher suite that is both quantum resistant and can run on battery-powered devices; doesnt exist yet',
  },
  {
    id: 5.52,
    question: 'Homomorphic Encryption',
    answer: 'Enables processing/statistical analysis of encrypted data without the need to decrypt the data',
  },
  {
    id: 5.53,
    question: 'Blockchain',
    answer: 'A concept where an expanding list of transactional records are secured with cryptography; each record is a "block" and run through a hash; that value is added to the next block in the chain, etc',
  },
  {
    id: 5.54,
    question: 'Steganography',
    answer: 'A technique for obscuring the presence of a message',
  },
]
const six = [
  {
    id: 6.00,
    question: 'LESSON 6 - Implementing Public Key Infrastructure',
  },
  {
    id: 6.01,
    question: 'PKI - Public Key Infrastructure',
    answer: 'Framework of CAs, digital certificates, software, services, etc deployed for the purpose of validating subject identities',
  },
  {
    id: 6.02,
    question: 'CA - Certificate Authority',
    answer: 'Entity responsible for issuing and guaranteeing certificates',
  },
  {
    id: 6.03,
    question: 'Certificate Chaining',
    answer: 'A process that combines/shows all certificates within a trust model; it includes all the certificates in the chain of trust from the root CA down to the certificate issued to the end user',
  },
  {
    id: 6.04,
    question: 'Online CA',
    answer: 'A CA connected to the network and available to accept and process CSRs',
  },
  {
    id: 6.05,
    question: 'Offline CA',
    answer: 'A CA taken off of the network, disconnected entirely from any network, and usually kept in a powered-off state; will need to be brought back online to add or update intermediate CAs',
  },
  {
    id: 6.06,
    question: 'CSR - Certificate Signing Request',
    answer: 'A structured message sent to a certificate authority requesting a digital certificate',
  },
  {
    id: 6.07,
    question: 'RA - Registration Authority',
    answer: ' specific type of intermediate CA that performs solely certificate registration services on behalf of the root; it does nothing else - no signing, no issuing',
  },
  {
    id: 6.08,
    question: 'Digital Certificate',
    answer: 'Acts as a wrapper for someones public key; contains info about the subject and the certificates issuer; will be digitally signed to prove it was issued by a particular CA',
  },
  {
    id: 6.09,
    question: 'What standard is used for digital certificates?',
    answer: 'X.509',
  },
  {
    id: 6.10,
    question: 'SAN - Subject Alternative Name',
    answer: 'Extension field that represents different types of identifiers, including domain names',
  },
  {
    id: 6.11,
    question: 'Server Certificate',
    answer: 'Guarantees the identity of e-commerce sites or any website where users submit data that should be kept confidential',
  },
  {
    id: 6.12,
    question: 'DV - Domain Validation',
    answer: 'Proves ownership of a particular domain, can be done just through responding to an email, so easily compromised',
  },
  {
    id: 6.13,
    question: 'EV - Extended Validation',
    answer: 'Subjects that require more rigorous checks on the subjects legal identity and control over the domain or software being signed',
  },
  {
    id: 6.14,
    question: 'Root Certificate',
    answer: 'Cert that identifies the CA itself; self-signed',
  },
  {
    id: 6.15,
    question: 'Self-signed Certificate',
    answer: 'Any machine, web server, or program code can be deployed with one; they will be marked as untrusted by OS and browsers',
  },
  {
    id: 6.16,
    question: 'Key Management Life Cycle',
    answer: 'Key generation, Certificate generation, Storage, Revocation, Expiration and renewal',
  },
  {
    id: 6.17,
    question: 'M-of-N Control',
    answer: 'Means that "N" number out of "M" total admins need to be present for access/changes to be granted',
  },
  {
    id: 6.18,
    question: 'Key Escrow',
    answer: 'Keys are managed by a third party, e.g. a trusted CA',
  },
  {
    id: 6.19,
    question: 'CRL - Certificate Revocation List',
    answer: 'A list of digital certificate revocations and suspensions that CAs maintain and distribute throughout the hierarchy',
  },
  {
    id: 6.20,
    question: 'OCSP - Online Certificate Status Protocol',
    answer: 'An alternative to CRLs; instead of returning the whole list, it gives you the status of just the requested cert',
  },
  {
    id: 6.21,
    question: 'OCSP Stapling',
    answer: 'An improvement to OCSP that reduces the high demands on the CA by having a web server periodically get a time-stamped OCSP response and storing it in a cache to pull from',
  },
  {
    id: 6.22,
    question: 'Certificate Pinning',
    answer: 'Several techniques used to ensure that when a client inspects a certificate presented by a server or app, it is inspecting the right certificate',
  },
  {
    id: 6.23,
    question: 'DER - Distinguished Encoding Rules',
    answer: 'An X.509 encoding format, the data is processed as binary',
  },
  {
    id: 6.24,
    question: 'PEM - Privacy-Enhanced Electronic Mail',
    answer: 'An X.509 encoding format where binary data is represented as ASCII text characters using Base64',
  },
  {
    id: 6.25,
    question: 'PKCS #12 Format',
    answer: 'Allows the export of private keys with certificates; on Windows seen as .PFX, MacOS as .P12',
  },
  {
    id: 6.26,
    question: 'P7B Format',
    answer: 'Allows us to bundle multiple certificates into the same file',
  },
  {
    id: 6.27,
    question: 'OpenSSL',
    answer: 'Enables us to generate, sign, manage and validate certificates in Linux, as opposed to something like Active Directory in Windows',
  },
]
const seven = [
  {
    id: 7.00,
    question: 'LESSON 7 - Implementing Authentication Controls',
  },
  {
    id: 7.01,
    question: 'Identification',
    answer: 'Creating an account or ID that uniquely represents a user, device, or process on the network',
  },
  {
    id: 7.02,
    question: 'Authentication',
    answer: 'Proving a subject is who or what it claims to be when it attempts to access a resource',
  },
  {
    id: 7.03,
    question: 'Authorization',
    answer: 'Determining what rights subjects should have on each resource and enforcing those rights',
  },
  {
    id: 7.04,
    question: 'Accounting',
    answer: 'Tracking authorized usage of a resource or use of rights by a subject and alerting when unauthorized use is detected or attempted',
  },
  {
    id: 7.05,
    question: 'Something You Know Authentication',
    answer: 'Passwords, PINs, personal challenge questions, swipe patterns',
  },
  {
    id: 7.06,
    question: 'Something You Have Authentication',
    answer: 'Smart cards, key fobs, OTPs',
  },
  {
    id: 7.07,
    question: 'Something You Are Authentication',
    answer: 'Fingerprints, facial recognition, retinal and iris scans',
  },
  {
    id: 7.08,
    question: 'Something You Do Authentication',
    answer: 'Voice recognition, how you sign your name, how you type, how you walk',
  },
  {
    id: 7.09,
    question: 'PAM - Pluggable Authentication Module',
    answer: 'A package for enabling different authentication providers, like a smart-card login',
  },
  {
    id: 7.10,
    question: 'Three Heads of Kerberos',
    answer: 'Client, application server, KDC',
  },
  {
    id: 7.11,
    question: 'PAP - PAssword Authentication Protocol',
    answer: 'A weak authentication protocol that passes all information in cleartext; depreciated and avoided',
  },
  {
    id: 7.12,
    question: 'Challenge Handshake Authentication Protocol',
    answer: 'An older three-way authentication handshake for authenticating over a remote link',
  },
  {
    id: 7.13,
    question: 'CHAP Three-Way Handshake',
    answer: 'Challenge issued by server / response from client verification / if aok connection is granted',
  },
  {
    id: 7.14,
    question: 'MS-CHAPv2',
    answer: 'Microsoft version of CHAP. v2 is still using vulnerable hashes, so still unsecure overall, but does offer mutual authentication',
  },
  {
    id: 7.15,
    question: 'Online Password Attack',
    answer: 'The attacker interacts with the authentication service directly; like submitting passwords on a website over and over',
  },
  {
    id: 7.16,
    question: 'Password Spraying',
    answer: 'Taking a list of possible user accounts and trying very common passwords with them',
  },
  {
    id: 7.17,
    question: 'Offline Password Attack',
    answer: 'Attempt to discover passwords from a captured database or captured packet scan',
  },
  {
    id: 7.18,
    question: 'Brute-force Attack',
    answer: 'An attack on passwords or encryption that tries every possible character combination for passwords or encryption keys',
  },
  {
    id: 7.19,
    question: 'Dictionary Attack',
    answer: 'A password attack that uses ordinary or common words to guess password',
  },
  {
    id: 7.20,
    question: 'Rainbow Tables',
    answer: 'In password cracking, a set of precalculated hashed passwords located in a lookup table',
  },
  {
    id: 7.21,
    question: 'Hybrid Password Attack',
    answer: 'A password attack using a combination of dictionary and brute-force attacks',
  },
  {
    id: 7.22,
    question: 'Smart Card',
    answer: 'Some are powerful enough to generate key material using a cryptoprocessor in the card',
  },
  {
    id: 7.23,
    question: 'USB Key',
    answer: 'Some are powerful enough to generate key material using a cryptoprocesser in the USB',
  },
  {
    id: 7.24,
    question: 'TPM - Trusted Platform Module',
    answer: 'A secure cryptoprocessor implemented in a device, typically a module within the CPU; generates keys for the device user',
  },
  {
    id: 7.25,
    question: 'Hardware Security Module',
    answer: 'A standalone device designed to perform centralized PKI management for a network of other devices; can archive or act as escrow for keys',
  },
  {
    id: 7.26,
    question: '802.1X/PNAC relies on',
    answer: 'EAP Extensible Authentication Protocol',
  },
  {
    id: 7.27,
    question: 'Three Parts of 802.1X AAA Architecture',
    answer: 'Supplicant device requesting access / Network Access Server NAS; switches, APs, VPN gateways / AAA Server authentication server in internal network',
  },
  {
    id: 7.28,
    question: 'RADIUS',
    answer: 'AAA server; open source; uses UDP; only encrypts authentication information',
  },
  {
    id: 7.29,
    question: 'TACACS+',
    answer: 'AAA server; Cisco product; uses TCP; encrypts entire packet',
  },
  {
    id: 7.30,
    question: 'OTP - One-Time Password',
    answer: 'An authentication code that can be used only once',
  },
  {
    id: 7.31,
    question: 'OATH - Initiative for Open Authentication',
    answer: 'An industry body established with the aim of developing an open, strong authentication framework',
  },
  {
    id: 7.32,
    question: 'HOTP - HMAC-Based One-Time Password',
    answer: 'HMAC-based algorithm used to generate a one-time password; delivered to user as a form of 2FA',
  },
  {
    id: 7.33,
    question: 'TOTP - Time-Based One-Time Password',
    answer: 'A refinement of HOTP; the password generated expires after a short window of time',
  },
  {
    id: 7.34,
    question: 'FRR - False Rejection Rate',
    answer: 'Type 1 error; when a legitimate user is not recognized; measured as a percentage',
  },
  {
    id: 7.35,
    question: 'FAR - False Acceptance Rate',
    answer: 'Type II error; when an unauthorized user is accepted; measured as percentage',
  },
  {
    id: 7.36,
    question: 'Crossover Error Rate',
    answer: 'The point at which FRR and FAR meet; the lower the better',
  },
  {
    id: 7.37,
    question: 'Retinal Scan',
    answer: 'Infrared light shines into eye to identify the pattern of blood vessels; highly accurate; expensive',
  },
  {
    id: 7.38,
    question: 'Iris Scan',
    answer: 'Matches patterns on the surface of the eye using near-infrared imaging; accurate but less intrusive than retinal; can be fooled by high-res images',
  },
]
const eight = [
  {
    id: 8.00,
    question: 'LESSON 8 - Implementing Identity and Account Management Controls',
  }, 
  {
    id: 8.01,
    question: 'Whats given to users when they authenticate with SSO?',
    answer: 'A cryptographic token',
  },
  {
    id: 8.02,
    question: 'Three Phases of Personnel Management',
    answer: 'Recruitment, Operation, Termination/Separation',
  },
  {
    id: 8.03,
    question: 'Onboarding',
    answer: 'The process of welcoming a new employee to the organization; same principle for new suppliers or contractors',
  },
  {
    id: 8.04,
    question: 'Onboarding Tasks',
    answer: 'Create user account / Make sure creds are known only to account holder / Asset allocation / Training/policies',
  },
  {
    id: 8.05,
    question: 'Separation of Duties',
    answer: 'Means of establishing checks and balances to mitigate against insider threat compromise',
  },
  {
    id: 8.06,
    question: 'Least Privilege',
    answer: 'Providing only the minimum amount of privileges necessary to perform a job or function',
  },
  {
    id: 8.07,
    question: 'Job Rotation',
    answer: 'No one person is permitted to remain in the same job for an extended period of time; helps enforce separation of duties',
  },
  {
    id: 8.08,
    question: 'Mandatory Vacation',
    answer: 'Employees are forced to take their vacation time so that corporate audits can be done to make sure theres been no discrepancies in the employees activity; helps enforce separation of duties',
  },
  {
    id: 8.09,
    question: 'Offboarding',
    answer: 'The process of ensuring an employee leaves a company gracefully',
  },
  {
    id: 8.10,
    question: 'Offboarding Tasks',
    answer: 'Disable user account and privilege / Retrieve any company assets / Wipe and return personal assets / Change security credentials',
  },
  {
    id: 8.11,
    question: 'Default Account',
    answer: 'Created by OS when installed; has every permission available; Windows = Administrator, Linux = Root',
  },
  {
    id: 8.12,
    question: 'Service Accounts',
    answer: 'Accounts used by scheduled processes and application server software, like databases',
  },
  {
    id: 8.13,
    question: 'Windows System Account',
    answer: 'Service account; has most privileges of any Windows account; full privileges over local computer',
  },
  {
    id: 8.14,
    question: 'Windows Local Service Account',
    answer: 'Service account; has same privileges as standard user; can only access network resources as an anon user',
  },
  {
    id: 8.15,
    question: 'Windows Network Service Account',
    answer: 'Service account; has same privileges as standard user; can present account credentials when accessing network resources',
  },
  {
    id: 8.16,
    question: 'Shared Account',
    answer: 'An account where password or other credentials are known to more than one person',
  },
  {
    id: 8.17,
    question: 'SSH Two Types of Key Pairs',
    answer: 'Host Key Pair: Identifies an SSH server / User Key Pair: Way for specific client to login to SSH server',
  },
  {
    id: 8.18,
    question: 'SID - Security Identifier',
    answer: 'Value assigned to an account by Windows, used by the OS to identify that account',
  },
  {
    id: 8.19,
    question: 'UID - User Identifier',
    answer: 'Value assigned to an account by Linux, used by the OS to identify that account',
  },
  {
    id: 8.20,
    question: 'GPO - Group Policy Object',
    answer: 'A way to deploy per-user and per-computer settings like password policy, account restrictions, etc on a Windows domain',
  },
  {
    id: 8.21,
    question: 'Account Policies',
    answer: 'A set of rules governing user security information, such as password expiration and uniqueness, which can be set globally',
  },
  {
    id: 8.22,
    question: 'Password Aging',
    answer: 'Forces users to select a new password after a set number of days',
  },
  {
    id: 8.23,
    question: 'Password History',
    answer: 'Prevents users from using a password they previously used already',
  },
  {
    id: 8.24,
    question: 'Geofencing',
    answer: 'The practice of creating a virtual boundary based on real-world geography',
  },
  {
    id: 8.25,
    question: 'Geotagging',
    answer: 'The addition of location metadata to files or devices',
  },
  {
    id: 8.26,
    question: 'Recertification',
    answer: 'When a user moves to a new job role, old privileges may need to be revoked and new ones given',
  },
  {
    id: 8.27,
    question: 'Privilege / Permissions Auditing',
    answer: 'Reviewing user privileges regularly to make sure the are appropriate, finding and disabling unnecessary accounts, etc',
  },
  {
    id: 8.28,
    question: 'Usage Auditing',
    answer: 'Reviewing what users are doing with their permissions; setting up security logs to record key indicators and then reviewing the logs for anything suspicious',
  },
  {
    id: 8.29,
    question: 'Account Disablement',
    answer: 'You can manually disable accounts if you suspect compromise; login is permanently prevented until an admin manually re-enables the account',
  },
  {
    id: 8.30,
    question: 'Account Lockout',
    answer: 'Login is prevented for a period of time; can be done manually or by various automatic means like entering the wrong PW too many times',
  },
  {
    id: 8.31,
    question: 'DAC - Discretionary Access Control',
    answer: 'Access control model focusing on the important of the resource owner; they have full control over the resource and can modify its ACL to grant rights to others. Most flexible model, but bad for centralized administration',
  },
  {
    id: 8.32,
    question: 'RBAC - Role-Based Access Control',
    answer: 'Access control model where roles are defined and subjects are allocated to those roles; only system owner can modify roles',
  },
  {
    id: 8.33,
    question: 'MAC - Mandatory Access Control',
    answer: 'The most restrictive access control model, based on security clearance levels; typically found in military settings in which security is of supreme importance',
  },
  {
    id: 8.34,
    question: 'ABAC - Attribute-Based Access Control',
    answer: 'Most detailed access control model; makes access decisions based on a variety of different attributes like group membership, OS type, IP address, patches, etc',
  },
  {
    id: 8.35,
    question: 'Rule-Based Access Control',
    answer: 'Refers to any kind of access control model where the policies are determined by system-enforced rules instead of users; RBAC, ABAC, and MAC are all rule-based',
  },
  {
    id: 8.36,
    question: 'Linux Three Basic Permissions',
    answer: 'Read (r) / Write (w) / Execute (x)',
  },
  {
    id: 8.37,
    question: 'chmod',
    answer: 'Linux command used to modify permissions',
  },
  {
    id: 8.38,
    question: 'Directory Services',
    answer: 'Principal means of providing privilege management and authorization on an enterprise network; storing info about users, computers, security groups, services; much like a database',
  },
  {
    id: 8.39,
    question: 'LDAP - Lightweight Directory Access Protocol',
    answer: 'A protocol used by various client applications when the application needs to query or update an X.500 database',
  },
  {
    id: 8.40,
    question: 'Distinguished Name',
    answer: 'A naming system that uniquely identifies an object in an X.500 directory. Ex: CN=WidgetWeb, OU=Marketing, O=Widget, C=UK, DC=widget',
  },
  {
    id: 8.41,
    question: 'Federation',
    answer: 'Process that provides a shared login capability across multiple systems and enterprises; connects the identity management services of multiple systems',
  },
  {
    id: 8.42,
    question: 'IdP - Identity Provider',
    answer: 'In a federated network, the service that holds the user account and performs authentication',
  },
  {
    id: 8.43,
    question: 'SP - Service Provider',
    answer: 'In a federated network, the network that you are attempting to connect with using your IdP authentication',
  },
  {
    id: 8.44,
    question: 'SAML - Security Assertions Markup Language',
    answer: 'An XML-based data format used to exchange authentication information between a client and a service; used in federations',
  },
  {
    id: 8.45,
    question: 'SOAP - Simple Object Access Protocol',
    answer: 'An XML-based web services protocol used to exchange messages',
  },
  {
    id: 8.46,
    question: 'OAuth - Open Authorization',
    answer: 'Standard for federated identity management, allowing resource servers or consumer sites to work with user accounts created and managed on a separate IdP',
  },
  {
    id: 8.47,
    question: 'OIDC - Open ID Connect',
    answer: 'An authentication protocol that can be implemented as special types of OAuth flows with precisely defined token fields',
  },
  {
    id: 8.48,
    question: 'AUP - Acceptable Use Policy',
    answer: 'A policy that defines the actions users may perform while accessing systems and networking equipment',
  },
  {
    id: 8.49,
    question: 'Code of Conduct',
    answer: 'Sets out expected professional standards',
  },
  {
    id: 8.50,
    question: 'Clean Desk Policy',
    answer: 'Employee work area should be free from any documents left there; aims to prevent sensitive information from being obtained by unauthorized persons',
  },
  {
    id: 8.51,
    question: 'CTF - Capture the Flag',
    answer: 'A gamified competition, typically used in ethical hacking training, where participants complete challenges within a virtualized computing environment to discover flags',
  },
  {
    id: 8.52,
    question: 'CBT - Computer-Based Training',
    answer: '',
  },
]
const nine = [
  {
    id: 9.00,
    question: 'LESSON 9 - Implementing Secure Network Designs',
  },
  {
    id: 9.01,
    question: 'Common Network Weaknesses',
    answer: 'SPoF, Complex dependencies, A over CI (CIA triad), Lack of documentation/change control, Overdependence on perimeter security',
  },
  {
    id: 9.02,
    question: 'Network Segment',
    answer: 'One where all hosts attached to the segment can use local (layer 2) forwarding to communicate freely with each other; same broadcast domain',
  },
  {
    id: 9.03,
    question: 'Segregation',
    answer: 'Hosts in one segment are restricted in how they communicate with hosts in other segments',
  },
  {
    id: 9.04,
    question: 'Zone',
    answer: 'An area of the network where the security configuration is the same for all hosts within it',
  },
  {
    id: 9.05,
    question: 'Three Main Zones',
    answer: 'Intranet / Extranet / Internet/Guest',
  },
  {
    id: 9.06,
    question: 'Intranet',
    answer: 'Network of trusted hosts owned and controlled by the organization',
  },
  {
    id: 9.07,
    question: 'Extranet',
    answer: 'Network of semi-trusted hosts, typically business partners, suppliers, or customers; hosts must authenticate to join',
  },
  {
    id: 9.08,
    question: 'Internet/Guest',
    answer: 'Zone that permits anonymous access, or a mix of anon and authenticated access, for untrusted hosts over the Internet',
  },
  {
    id: 9.09,
    question: 'DMZ - Demilitarized Zone',
    answer: 'A segment isolated from the rest of a private network by one or more FWs that accepts connections from the Internet',
  },
  {
    id: 9.10,
    question: 'Bastion Host',
    answer: 'Hosts within the DMZ that are not full trusted by hosts in the internal network',
  },
  {
    id: 9.11,
    question: 'Screened Subnet',
    answer: 'DMZ topology that uses two firewalls placed on either side of the DMZ; one restricts external traffic, one restricts internal traffic. AKA Choke firewall',
  },
  {
    id: 9.12,
    question: 'Triple-homed Firewall',
    answer: 'DMZ topology established using one router/firewall appliance with three network interfaces; one for public, one for the DMZ, and one for internal traffic',
  },
  {
    id: 9.13,
    question: 'Screened Host',
    answer: 'Budget version of a DMZ; uses a dual-homed proxy/gateway server to act as a screened host so that internal hosts still arent directly exposed to external traffic',
  },
  {
    id: 9.14,
    question: 'What is something IPv4 has that IPv6 does not (security related)?',
    answer: 'IPv6 does not perform any kind of address translation; so theres no obscuring a host by translating their private IP to a public IP',
  },
  {
    id: 9.15,
    question: 'North-South Traffic',
    answer: 'Traffic that goes to and from a data center',
  },
  {
    id: 9.16,
    question: 'East-West Traffic',
    answer: 'Traffic going between servers within a data center',
  },
  {
    id: 9.17,
    question: 'Zero Trust',
    answer: 'Security design paradigm where any request must be authenticated before being allowed; based on idea that no perimeter security will be 100% effective 100% of the time',
  },
  {
    id: 9.18,
    question: 'On-Path Attack',
    answer: 'New name for MitM attacks; an attacker sits between two hosts and captures, monitors, and/or relays all communication between them',
  },
  {
    id: 9.19,
    question: 'MAC Cloning',
    answer: 'AKA MAC spoofing; changing the hardware address configured on an adapter or using an arbitrary MAC address',
  },
  {
    id: 9.20,
    question: 'ARP Poisoning',
    answer: 'Attack where an attacker redirects an IP address to the MAC address of a comp that isnt the legit recipient; poisons the ARP caches of hosts',
  },
  {
    id: 9.21,
    question: 'MAC Flooding',
    answer: 'An attacker overflows the switch address table with fake MAC addresses, forcing it to act like a hub, sending packets out all ports',
  },
  {
    id: 9.22,
    question: 'Portfast',
    answer: 'Command/setting used to prevent STP use on access ports',
  },
  {
    id: 9.23,
    question: 'BPDUs',
    answer: 'Used to communicate information about STP topology; should not appear on access ports',
  },
  {
    id: 9.24,
    question: 'BPDU Guard',
    answer: 'An STP feature that disables an access port if any BPDU is received there',
  },
  {
    id: 9.25,
    question: 'DHCP Snooping',
    answer: 'Only allows DHCP messages from trusted ports; inspects DHCP traffic to make sure a host isnt trying to spoof its MAC address',
  },
  {
    id: 9.26,
    question: 'Arp Inspection',
    answer: 'Prevents a host attached to an untrusted port from flooding the segment with gratuitous ARP replies',
  },
  {
    id: 9.27,
    question: 'PNAC - Port-based Network Access Control',
    answer: 'Means that switches will use a AAA server to authenticate the attached device before activating the port',
  },
  {
    id: 9.28,
    question: 'NAC - Network Access Control',
    answer: 'Allows admins to create health policies that devices must meet to be granted network access',
  },
  {
    id: 9.29,
    question: 'Posture Assessment',
    answer: 'The process by which host health checks are performed against a device to verify compliance with the health policy',
  },
  {
    id: 9.30,
    question: 'Persistent NAC Agent',
    answer: 'One that is installed as a software application on the client',
  },
  {
    id: 9.31,
    question: 'Non-persistent NAC Agent',
    answer: 'AKA dissolvable; one that is loaded into the memory during the posture assessment but isnt installed on the device',
  },
  {
    id: 9.32,
    question: 'Agentless NAC Assessments',
    answer: 'Useful when NAC solution needs to support a wide range of devices, but returns less detailed information',
  },
  {
    id: 9.33,
    question: 'Route Injection',
    answer: 'Pray on weak (security-wise) routing protocols; can redirect traffic, send traffic to a black hole, or make traffic loop continuously',
  },
  {
    id: 9.34,
    question: 'Source Routing',
    answer: 'Technique in which the originator of a packet can attempt to partially or completely control the path through the network to the destination; can be used to try and avoid FWs',
  },
  {
    id: 9.35,
    question: 'CCI - Co-Channel Interference',
    answer: 'When two WAPs close to each other use the same channel, they compete for bandwidth; as signals collide they need to be retransmitted',
  },
  {
    id: 9.36,
    question: 'ACI - Adjacent Channel Interference',
    answer: 'When channels chosen for WAPs arent spaced far enough apart, interference can cause many errors and bandwidth loss',
  },
  {
    id: 9.37,
    question: 'Site Survey',
    answer: 'An in-depth examination and analysis of a wireless LAN site; used to measure signal strength and channel usage throughout the intended area',
  },
  {
    id: 9.38,
    question: 'Heat Map',
    answer: 'Graphical representation of how strong or weak wireless signal is in a certain area',
  },
  {
    id: 9.39,
    question: 'Wireless Controllers',
    answer: 'Give us a centralized way of managing and monitoring multiple WAPs',
  },
  {
    id: 9.40,
    question: 'Fat WAP',
    answer: 'One that has enough processing logic to function autonomously without a wireless controller',
  },
  {
    id: 9.41,
    question: 'Thin WAP',
    answer: 'One that requires a wireless controller in order to function',
  },
  {
    id: 9.42,
    question: 'What cipher does WEP use?',
    answer: 'RC4',
  },
  {
    id: 9.43,
    question: 'What cipher and security does WPA use?',
    answer: 'RC4 + TKIP',
  },
  {
    id: 9.44,
    question: 'What cipher and security does WPA2 use?',
    answer: 'AES + CCMP',
  },
  {
    id: 9.45,
    question: 'What cipher and security does WPA3 use?',
    answer: 'AES + GCMP',
  },
  {
    id: 9.46,
    question: 'SAE - Simultaneous Authentication of Equals',
    answer: 'Feature of WPA3; replaces WPA 4-way handshake with the Dragonfly handshake based on D-H key agreement',
  },
  {
    id: 9.47,
    question: 'Enhanced Open',
    answer: 'Feature of WPA3; enables encryption for the open authentication method; intended to replace WPS',
  },
  {
    id: 9.48,
    question: 'PSK - Pre-Shared Key',
    answer: 'A shared secret that has been shared between parties and is used to establish a secure channel',
  },
  {
    id: 9.49,
    question: 'WPS - Wi-Fi Protected Setup',
    answer: 'A standard included on many WAPs and clients to make secure connections easier to configure; very weak to brute force attacks',
  },
  {
    id: 9.50,
    question: 'EAP-TLS',
    answer: 'One of the strongest types of authentication; creates TLS tunnel and uses certificates for both client and server - mutual authentication',
  },
  {
    id: 9.51,
    question: 'PEAP',
    answer: 'Creates an encrypted tunnel but only requires a server-side certificate; can be set up for mutual authentication though; MUST use MS-CHAPv2 or EAP-GTC as "inner" auth mechanism',
  },
  {
    id: 9.52,
    question: 'EAP-TTLS',
    answer: 'Basically the same as PEAP except that it can use any inner authentication mechanism it wants',
  },
  {
    id: 9.53,
    question: 'EAP-FAST',
    answer: 'Similar to PEAP, but uses a Protected Access Credential (PAC) generated for each user from the servers master key instead of certificates',
  },
  {
    id: 9.54,
    question: 'RADIUS Federation',
    answer: 'Multiple organizations allow access to one anothers users by joining their RADIUS servers into a hierarchy or mesh',
  },
  {
    id: 9.55,
    question: 'Rogue Access Point',
    answer: 'An unauthorized access point on a network; can be accidental or malicious',
  },
  {
    id: 9.56,
    question: 'Evil Twin',
    answer: 'A rogue AP set up by an attacker with the same or similar SSID of a legitimate AP',
  },
  {
    id: 9.57,
    question: 'Deauthentication Attack',
    answer: 'Attacker sends spoofed frames to cause a client to fully deauthenticate them from the WAP',
  },
  {
    id: 9.58,
    question: 'Disassociation Attack',
    answer: 'Attacher sends spoofed disassociation packets; victim wont be fully deauthenticated from the WAP, but it wont be able to communicate either unless it reassociates',
  },
  {
    id: 9.59,
    question: 'Jamming',
    answer: 'A wireless attack that aims to purposefully interfere with a WAP by using devices that emit radio waves',
  },
  {
    id: 9.60,
    question: 'SYN Flood Attack',
    answer: 'Type of DoS attack in which the attacker sends multiple SYN messages initializing TCP connections with a target server, then never finishes with the final ACK',
  },
  {
    id: 9.61,
    question: 'What two protocols are often used in amplification attacks?',
    answer: 'DNS and NTP',
  },
  {
    id: 9.62,
    question: 'OT - Operational Technology Network',
    answer: 'Network established between embedded system devices and their controllers; valves, motors, gauges, sensors, etc',
  },
  {
    id: 9.63,
    question: 'Load Balancer',
    answer: 'A dedicated network device that can direct client requests to different servers based on a variety of factors; work at layer 4 or 7',
  },
  {
    id: 9.64,
    question: 'Round Robin',
    answer: 'Simplest load balancing scheduling algorithm; just means picking the next node in line',
  },
  {
    id: 9.65,
    question: 'Session Affinity',
    answer: 'Offered by layer 4 load balancers; when a client establishes a session, it becomes "stuck" to the node that first accepted the request',
  },
  {
    id: 9.66,
    question: 'Session Persistence',
    answer: 'Offered by layer 7 load balancers; keeps client connected to a session, typically by setting a cookie on the node or injected by the load balancer',
  },
  {
    id: 9.67,
    question: 'Is loadbalancing stateful or stateless?',
    answer: 'Stateless',
  },
  {
    id: 9.68,
    question: 'Is loadbalancing stateful or stateless?',
    answer: 'Stateful',
  },
  {
    id: 9.69,
    question: 'Clustering',
    answer: 'Allows multiple redundant nodes to share data with one another seemlessly',
  },
  {
    id: 9.70,
    question: 'Active / Active Cluster',
    answer: 'Uses all nodes in the cluster; ex: 6 out of 6 - if one fails, the work gets shoved on the remaining 5, so it degrades performance',
  },
  {
    id: 9.71,
    question: 'Active / Passive Cluster',
    answer: 'Keeps at least one node on the side, not running, in case a running server fails - the passive one will step in',
  },
  {
    id: 9.72,
    question: 'QoS',
    answer: 'Framework for prioritizing traffic based on its characteristics; MPLS is an example of a QoS protocol',
  },
]
const ten = [
  {
    id: 10.00,
    question: 'LESSON 10 - Implementing Network Security Appliances',
  },
  {
    id: 10.01,
    question: 'Packet Filtering Firewall',
    answer: 'Original, most basic FW; stateless. All modern FWs still perform this function while being stateful. Inspects headers of IP packets; rules can be based on the info found there - IP, protocol, port',
  },
  {
    id: 10.02,
    question: 'Stateless',
    answer: 'Doesnt preserve any information about network sessions; each packet is analyzed independently',
  },
  {
    id: 10.03,
    question: 'Stateful Inspection FW',
    answer: 'Track information about sessions established between two hosts; FW will check incoming packet to see if it belongs to an existing connection - if it does, it is let through; if not, it is scanned first',
  },
  {
    id: 10.04,
    question: 'State Table',
    answer: 'Where stateful firewalls store session data',
  },
  {
    id: 10.05,
    question: 'Stateful Inspection @ Layer 4',
    answer: 'Examines the TCP three-way handshake to distinguish new from establshed connections',
  },
  {
    id: 10.06,
    question: 'Stateful Inspection @ Layer 7',
    answer: 'Inspects the contents of packets at the application layer; verifies if the application protocol matches the port; Application Aware FW',
  },
  {
    id: 10.07,
    question: 'Flood Guard',
    answer: 'Blocks flooding-type DoS/DDoS attacks, frequently part of a stateful inspection FW or IPS',
  },
  {
    id: 10.08,
    question: 'iptables',
    answer: 'Linux command utility that lets admins edit the Linux kernal firewall rules',
  },
  {
    id: 10.09,
    question: 'Appliance Firewall',
    answer: 'A stand-alone hardware firewall deployed to monitor traffic passing into and out of a network zone; can be deployed in two ways: routed and bridged',
  },
  {
    id: 10.10,
    question: 'Routed Deployment',
    answer: 'The appliance firewall performs forwarding between subnets; each interface on the FW connects to a different subnet and represents a different security zone',
  },
  {
    id: 10.11,
    question: 'Bridged Deployment',
    answer: 'The appliance firewall inspects traffic passing between two nodes, like a router and switch - aka transparent mode',
  },
  {
    id: 10.12,
    question: 'Router Firewall',
    answer: 'A firewall/filtering functionality built in as part of the router firmware; SOHOs have these often',
  },
  {
    id: 10.13,
    question: 'Host-Based Firewall',
    answer: 'A software firewall that only protects the host on which its installed',
  },
  {
    id: 10.14,
    question: 'Application Firewall',
    answer: 'A firewall that can control the traffic associated with specific applications; works all the way up to the Application Layer of the OSI model',
  },
  {
    id: 10.15,
    question: 'NOS - Network Operating System Firewell',
    answer: 'A software firewall running under a network server OS',
  },
  {
    id: 10.16,
    question: 'Proxy Server',
    answer: 'A server that mediates the communications between a client and another server; can filter and modify comms, as well as provide caching services to improve performance',
  },
  {
    id: 10.17,
    question: 'Forward Proxy Server',
    answer: 'Handles protocol-specific requests from inside a private network out to the Internet (outbound traffic)',
  },
  {
    id: 10.18,
    question: 'Reverse Proxy Server',
    answer: 'Handles protocol-specific requests from out on the Internet to inside a private network (inbound traffic)',
  },
  {
    id: 10.19,
    question: 'Caching Engine',
    answer: 'An application or service that stores requested data in order to provide faster responses to future requests for the data',
  },
  {
    id: 10.20,
    question: 'Non-Transparent Proxy',
    answer: 'The client must be configured with the proxy server address and port number to use it',
  },
  {
    id: 10.21,
    question: 'Transparent Proxy',
    answer: 'Intercepts client traffic without the client having to be reconfigured; must be implemented on a switch or router or other inline network appliance',
  },
  {
    id: 10.22,
    question: 'Implicit Deny',
    answer: 'An access control principle that maintains that if a condition is not explicitly met, it is to be rejected',
  },
  {
    id: 10.23,
    question: 'NAT - Network Address Translation',
    answer: 'Translates the private IP address to a public address for routing over the Internet',
  },
  {
    id: 10.24,
    question: 'Private Class A Addresses',
    answer: '10.0.0.0 - 10.255.255.255',
  },
  {
    id: 10.25,
    question: 'Private Class B Addresses',
    answer: '172.16.0.0 - 172.31.255.255',
  },
  {
    id: 10.26,
    question: 'Private Class C Addresses',
    answer: '192.168.0.0 - 192.168.255.255',
  },
  {
    id: 10.27,
    question: 'Static and Dynamic Source NAT',
    answer: 'Perform 1:1 mappings between private network address and public address; can be assigned statically or dynamically',
  },
  {
    id: 10.28,
    question: 'PAT - Port Address Translation',
    answer: 'Provides a means for multiple private IP addresses to be mapped to a single public address; aka Overloaded NAT',
  },
  {
    id: 10.29,
    question: 'Port Forwarding',
    answer: 'Uses the routers public address to publish a service, but forwards incoming requests to a different IP/port; aka Destination NAT',
  },
  {
    id: 10.30,
    question: 'Hypervisor-Based Virtual FW',
    answer: 'Filtering functionaility is built into the hypervisor, you can use the web app to write ACLs for traffic arriving or leaving a virtual host or virtual network',
  },
  {
    id: 10.31,
    question: 'Virtual Appliance FW',
    answer: 'Refers to deploying a vendor firewall appliance instance using virtualization in the same way you might deploy a Windows or Linux guest OS',
  },
  {
    id: 10.32,
    question: 'Multiple Context Virtual FW',
    answer: 'Refers to multiple virtual FW instances running on a single hardware firewall appliance; each context has a separate interface and can perform a distinct filtering role',
  },
  {
    id: 10.33,
    question: 'IDS - Intrusion Detection System',
    answer: 'A means of using software tools to provide real-time analysis of network traffic or system and app logs; PASSIVE',
  },
  {
    id: 10.34,
    question: 'IPS - Intrusion Prevention System',
    answer: 'Essentially the same as an IDS but is ACTIVE; can apply FW filters, block attackers, throttle bandwidth, run scripts, etc',
  },
  {
    id: 10.35,
    question: 'SPAN / Mirror Port',
    answer: 'The sensor is attached to a specially configured port on the switch that is receiving copies of frames from other port(s); frames with errors wont be mirrored',
  },
  {
    id: 10.36,
    question: 'TAP - Passive Test Access Port',
    answer: 'A box with ports for incoming and outgoing network cabling and an inductor or optical splitter that physically copies the signal from the cabling to a monitor port',
  },
  {
    id: 10.37,
    question: 'TAP - Active Test Acces Port',
    answer: 'A powered device that performs signal generation; good when were copying Gigabit signals over copper, or a fiber type that is negatively impacted by optical splitters; important to connect to a UPS',
  },
  {
    id: 10.38,
    question: 'Signature-Based Detection',
    answer: 'Aka pattern matching; the engine is loaded with a database of attack patterns or signaures - if traffic matches a pattern, then the engine generates an incident',
  },
  {
    id: 10.39,
    question: 'Behavioral-Based Detection',
    answer: 'The engine is trained to recognize baseline "normal" traffic or events; anything that deviates from this baseline generates an incident',
  },
  {
    id: 10.40,
    question: 'Heuristics',
    answer: '',
  },
  {
    id: 10.41,
    question: 'False Positive',
    answer: 'Legitimate behavior wrongly generates an alert',
  },
  {
    id: 10.42,
    question: 'False Negative',
    answer: 'Malicious activity does not generate an alert',
  },
  {
    id: 10.43,
    question: 'Anomoly-Based Detection',
    answer: 'Often interchangeable with behavior-based, but can specifically refer to looking for irregularities in the use of protocols',
  },
  {
    id: 10.44,
    question: 'NGFW - Next-Generation Firewall',
    answer: 'Powerful modern FW that combines application-aware filtering wth user account-based filtering and the ability to act as an IPS',
  },
  {
    id: 10.45,
    question: 'UTM - Unified Threat Management',
    answer: 'Comprehensive security management tool that combines multiple security tools, including firewalls, VPNs, intrusion detection systems, and web content filtering and anti-spam software',
  },
  {
    id: 10.46,
    question: 'Content Filter',
    answer: 'Applies a number of user-forcused filtering rules, like blocking URLs that appear on content blacklists, or time-based restrictions',
  },
  {
    id: 10.47,
    question: 'SWG - Secure Web Gateway',
    answer: 'Performs content filtering, often DLP, CASB functionality',
  },
  {
    id: 10.48,
    question: 'WAF - Web Application Firewall',
    answer: 'Designed specifically to protect software running on web servers and their backend databases from code injection and DoS attacks',
  },
  {
    id: 10.49,
    question: 'Network Monitor',
    answer: 'Collects data about network appliances like switches, APs, routers, FWs, and servers - used to monitor CPU status, memory, disk capacity, temperature, error stats, etc',
  },
  {
    id: 10.50,
    question: 'SIEM - Security Information and Event Management',
    answer: 'Software designed to assist with managing security data inputs and provide reporting and alerting; core functions are aggregation and correlation',
  },
  {
    id: 10.51,
    question: 'SOAR - Security Orchestraction, Automation, and Response',
    answer: 'The basis of this is to scan the organizations store of security and threat intelligence, analyze it using machine/deep learning techniques, and then use that data to automate and provide data enrichment for the workflows that drive incident response and threat hunting',
  },
  {
    id: 10.52,
    question: 'cat',
    answer: 'A Linux command used to display (or concatenate) the entire contents of one or more files to the screen',
  },
  {
    id: 10.53,
    question: 'head / tail',
    answer: 'Linux command that displays the first/last set of lines of a text file; by default, the first/last 10 lines',
  },
  {
    id: 10.54,
    question: 'logger',
    answer: 'A command that can be used to write system log events to the local system log or a remote syslog server',
  },
  {
    id: 10.55,
    question: 'grep',
    answer: 'A Linux command that invokes simple string matching or regex syntax to search text files for specific strings',
  },
]
const eleven = [
  {
    id: 11.00,
    question: 'LESSON 11 - Implementing Secure Network Protocols',
  },
  {
    id: 11.01,
    question: 'DHCP Starvation',
    answer: 'An attack that uses spoofed MACs to request a bunch of IP address configurations from the DHCP, eventually completely exhausting its scope',
  },
  {
    id: 11.02,
    question: 'Domain Hijacking',
    answer: 'An attack where the attacker steals a domain name by altering its registration info and then transferring the domain name to another entity',
  },
  {
    id: 11.03,
    question: 'URL Redirection',
    answer: 'Refers to the use of HTTP redirects to open a page other than the one the user requested; not always malicious, can be done to guide users to login pages',
  },
  {
    id: 11.04,
    question: 'DNS Poisoning',
    answer: 'An attack that compromises the process by which clients query name servers to locate the IP address for an FQDN; several methods to pull it off',
  },
  {
    id: 11.05,
    question: 'DNS Client Cache Poisoning',
    answer: 'An attack where the attacker places a false name:IP address mapping in the local HOSTS file',
  },
  {
    id: 11.06,
    question: 'DNS Server Cache Poisoning',
    answer: 'Aims to corrupt the records held by the DNS server itself; can be done by posing as an authoritative server and answering queries with malicious information',
  },
  {
    id: 11.07,
    question: 'DNSSEC - Domain Name System Security Extensions',
    answer: 'Uses digital signatures to provide security for DNS communications and helps to minimise the likelihood to spoofing and poisoning attacks',
  },
  {
    id: 11.08,
    question: 'LDAP Authentication Options',
    answer: '- No auth / Simple bind: payload passed in cleartext / SASL: Client and server negotiate use of supported auth mechanism / LDAPS: uses TLS and digital certs',
  },
  {
    id: 11.09,
    question: 'Stratum 1 Server',
    answer: 'Top-level NTP server that obtains the Coordinated Universal Time (UTC) from a highly accurate clock source, like an atomic clock',
  },
  {
    id: 11.10,
    question: 'Stratum 2 Server',
    answer: 'Lower-level NTP server that gets it time from the Stratum 1s and must account for the delay in propogating the signal',
  },
  {
    id: 11.11,
    question: 'What SNMP version supports encryption and strong authentication?',
    answer: 'SNMPv3',
  },
  {
    id: 11.12,
    question: 'HTTP - Hypertext Transfer Protocol',
    answer: 'Protocol that defines how messages are formatted and transmitted over the WWW; enables clients to request resources from an HTTP server',
  },
  {
    id: 11.13,
    question: 'HTTP POST Mechanism',
    answer: 'Allows a user to submit data from the client to the server',
  },
  {
    id: 11.14,
    question: 'Is HTTP Stateful or Stateless?',
    answer: 'Stateless',
  },
  {
    id: 11.15,
    question: 'TLS - Transport Layer Security',
    answer: 'A security protocol that uses certificates for authentication and encryption to protect web communication',
  },
  {
    id: 11.16,
    question: 'What is special about TLS 1.3?',
    answer: 'It removes the ability to perform downgrade attacks by preventing the use of unsecure features and algorithms',
  },
  {
    id: 11.17,
    question: 'ECDHE-RSA-AES128-GCM-SHA256 is an example of what?',
    answer: 'Cipher suite',
  },
  {
    id: 11.18,
    question: 'API - Application Programming Interface',
    answer: '',
  },
  {
    id: 11.19,
    question: 'SFTP',
    answer: 'SSH FTP, encrypts authentication and data transfers between client and server using port 22',
  },
  {
    id: 11.20,
    question: 'FTPES - Explicit TLS',
    answer: 'Uses the AUTH TLS command to upgrade an existing unsecure connection over port 21 to a secure one; more common',
  },
  {
    id: 11.21,
    question: 'FTPS - Implicit TLS',
    answer: 'Negotiates a TLS tunnel before the exchange of any FTP commands over port 990; not as common',
  },
  {
    id: 11.22,
    question: 'STARTTLS',
    answer: 'Explicit TLS for SMTP; upgrades existing unsecure SMTP connection to a secure one; more common',
  },
  {
    id: 11.23,
    question: 'SMTPS',
    answer: 'Implicit TLS for SMTP, establishes a secure connection before any SMTP commands are exchanged; less common',
  },
  {
    id: 11.24,
    question: 'POP3S Port',
    answer: '995',
  },
  {
    id: 11.25,
    question: 'Imaps Port',
    answer: '993',
  },
  {
    id: 11.26,
    question: 'S/MIME',
    answer: 'Provides authentication and confidentiality on a per-message basis for email; helps prevent email account compromise and email spoofing',
  },
  {
    id: 11.27,
    question: 'SIP',
    answer: 'Session Initiation Protocol; one of the most widely used session control protocols, seen widely with VoIP and real time data',
  },
  {
    id: 11.28,
    question: 'RTP',
    answer: 'Real-time Transport Protocol; while SIP provides session management, RTP handles the actual delivery of real-time data',
  },
  {
    id: 11.29,
    question: 'Remote Access VPN Model',
    answer: 'Aka telecommuter model; allows home-workers and employees working in the field to connect to the corporate network',
  },
  {
    id: 11.30,
    question: 'Remote Access VPN Model',
    answer: 'Aka telecommuter model; allows home-workers and employees working in the field to connect to the corporate network',
  },
  {
    id: 11.31,
    question: 'Site-to-Site VPN Model',
    answer: 'Connects two or more private networks',
  },
  {
    id: 11.32,
    question: 'PPTP - Point-to-Point Tunneling Protocol',
    answer: 'A legacy protocol that, while sometimes still seen, is deprecated',
  },
  {
    id: 11.33,
    question: 'TLS VPN',
    answer: 'Requires a remote access server listening on port 443; client connects using TLS which creates an encrypted tunnel for the user to submit credentials',
  },
  {
    id: 11.34,
    question: 'OpenVPN',
    answer: 'An open source TLS VPN; can work in TAP mode (layer 2) or TUN mode (layer 3)',
  },
  {
    id: 11.35,
    question: 'IPSec',
    answer: 'A set of open standards that are used to secure data through authentication and encryption as the data travels across the network/Internet; works at network layer',
  },
  {
    id: 11.36,
    question: 'AH - Authentication Header',
    answer: 'IPSec protocol that performs a cryptographic hash on the whole packet, including the IP header, plus a shared secret key - this HMAC in its header as an ICV',
  },
  {
    id: 11.37,
    question: 'ESP - Encapsulation Security Payload',
    answer: 'Provides confidentiality and/or authentication and integrity; encrypts the whole packet instead of just calculating an HMAC',
  },
  {
    id: 11.38,
    question: 'Transport Mode',
    answer: 'IPsec mode that encrypts only the payload and ESP trailer; so the IP header of the original packet is not encrypted for between hosts on a network',
  },
  {
    id: 11.39,
    question: 'Tunnel Mode',
    answer: 'IPSec mode used for communications between VPN gateways across an unsecure network; the whole IP packet is encrypted and encapsulated as a datagram with a new IP header',
  },
  {
    id: 11.40,
    question: 'IKE - Internet Key Exchange',
    answer: 'Handles authentication and key exchange for IPSec; using v1 requires the use of L2TP, using v2 you dont have to',
  },
  {
    id: 11.41,
    question: 'L2TP - Layer 2 Tunneling Protocol',
    answer: 'Used with IKEv1 in IPSec for remote access VPN functionality',
  },
  {
    id: 11.42,
    question: 'Always-On VPN',
    answer: 'Means the computer establishes the VPN whenever an Internet connection over a trusted network is detected',
  },
  {
    id: 11.43,
    question: 'Split Tunnel',
    answer: 'VPN connection where the client accesses the Internet directly using its "native" IP configuration and DNS servers',
  },
  {
    id: 11.44,
    question: 'Full Tunnel',
    answer: 'VPN connection where the Internet access is mediated by the corporate network, which will alter the clients IP adddress and DNS servers',
  },
  {
    id: 11.45,
    question: 'RDP - Remote Desktop Protocol',
    answer: 'Microsoft protocol to access a machine via a GUI interface, port 3389',
  },
  {
    id: 11.46,
    question: 'HTML5 VPN',
    answer: 'Clientless remote desktop gateway, allows you to use your browser to connect to a GUI interface of a machine',
  },
  {
    id: 11.47,
    question: 'Jump Server',
    answer: 'A hardened server that provides access to other hosts; particularly to provide administrative access to bastion hosts',
  },
  {
    id: 11.48,
    question: 'SSH - Secure Shell',
    answer: 'Principal means of obtaining secure remote access to a command-line terminal; main uses are remote administration and secure FTP',
  },
  {
    id: 11.49,
    question: 'Types of SSH Client Authentication',
    answer: 'Username/Password, Public key authentication, Kerberos',
  },
  {
    id: 11.50,
    question: 'OOB - Out-of-Band Management',
    answer: 'Accessing the administrative interface of a network appliance using a separate network from the usual data networ; this could use a separate VLAN or a different kind of link, such as a dial-up modem',
  },
]
const twelve = [
  {
    id: 12.00,
    question: 'LESSON 12 - Implementing Host Security Solutions',
  },
  {
    id: 12.01,
    question: 'RoT - Root of Trust',
    answer: 'A secure subsystem that is able to provide attestation; established by TPM',
  },
  {
    id: 12.02,
    question: 'TPM - Trusted Platform Module',
    answer: 'A cryptoprocessor that can be used to establish RoT and store encryption keys, hashed passwords, and other user ID information; either part of chipset or embedded in CPU',
  },
  {
    id: 12.03,
    question: 'Endorsement Key',
    answer: 'A hard-coded, unique, unchangeable asymmetric private key that each TPM comes with',
  },
  {
    id: 12.04,
    question: 'UEFI - Unified Extensible Firmware Interface',
    answer: 'An interface between firmware on the motherboard and the operating system that provides the code that allows the host to boot to an OS',
  },
  {
    id: 12.05,
    question: 'Secure Boot',
    answer: 'Designed to prevent a computer from loading a malicious OS; checks digital signatures of OS vendors and prevents boot loaders or kernals changed by malware from being used',
  },
  {
    id: 12.06,
    question: 'Measured Boot',
    answer: 'Uses platform configuration registers (PCRs) at each stage in the boot process to check whether hashes of key system state data have changed; wont usually prevent booting, but will record changes',
  },
  {
    id: 12.07,
    question: 'Boot Attestation',
    answer: 'The capability to transmit a boot log report signed by the TPM/ROT via a trusted process to a remote server',
  },
  {
    id: 12.08,
    question: 'FDE - Full Disk Encryption',
    answer: 'Uses the OS to perform cryptographic operations to encrypt the entire contents of the drive, including system files and folders',
  },
  {
    id: 12.09,
    question: 'SED - Self-Encrypting Drive',
    answer: 'Uses its own drive controller to perform cryptographic operations to encrypt the entire contents of the drive, including system files and folders',
  },
  {
    id: 12.10,
    question: 'EOL - End of Life Phase',
    answer: 'Phase in which support and availability of spares and updates for a product become limited',
  },
  {
    id: 12.11,
    question: 'EOSL - End of Service Life',
    answer: 'A system/product that is no longer supported by its developer or vendor',
  },
  {
    id: 12.12,
    question: 'MOU - Memorandum of Understanding',
    answer: 'A preliminary/exploratory agreement to express an intent to work together; relatively information, not a binding contract',
  },
  {
    id: 12.13,
    question: 'BPA - Business Partnership Agreement',
    answer: 'The most common IT model for partner agreements; used often by large IT companies to set up with resellers and solution providers',
  },
  {
    id: 12.14,
    question: 'NDA - Non-Disclosure Agreement',
    answer: 'Legal contract for protecting information assets; if someone breaks the NDA they may face legal consequences',
  },
  {
    id: 12.15,
    question: 'SLA - Service Level Agreement',
    answer: 'A contractural agreement setting out the detailed terms under which a service is provided',
  },
  {
    id: 12.16,
    question: 'MSA - Measurement Systems Analysis',
    answer: 'Evaluates the data collection and statistical methods used by a quality management process to ensure they are robust',
  },
  {
    id: 12.17,
    question: 'Hardening',
    answer: 'The process of putting something in a secure configuration',
  },
  {
    id: 12.18,
    question: 'EPP- Endpoint Protection Platform',
    answer: 'A single agent performing multiple security tasks on a host; malware/intrusion detection and prevention, host FW, web content filtering, file/message encryption, etc',
  },
  {
    id: 12.19,
    question: 'EDR - Endpoint Detection and Response',
    answer: 'A product whose aim isnt preventing initial execution, but to provide real-time and historical visibility into a compromise, contain malware within a single host, a faciliate remediate of the host to its original state',
  },
  {
    id: 12.20,
    question: 'Sysinternals',
    answer: 'Free technical resources and utilities to manage, diagnose, troubleshoot, and monitor a Microsoft Windows environment - sometimes referred to as "advanced malware tools" by CompTIA',
  },
  {
    id: 12.21,
    question: 'Sandboxing',
    answer: 'A technique that isolates an untrusted host or app in a segregated environment to conduct tests',
  },
  {
    id: 12.22,
    question: 'Embedded System',
    answer: 'A complete computer system that is designed to perform a specific, dedicated function',
  },
  {
    id: 12.23,
    question: 'PLC - Programmable Logic Controller',
    answer: 'The firmware that embedded systems are normally based on; also seen a lot in industrial control systems',
  },
  {
    id: 12.24,
    question: 'SoC - System on a Chip',
    answer: 'This is a single chip containing all the system architecture (CPU, processors, controllers, memory) typically linked via a motherboard for normal PCs; ex: Raspberry Pi',
  },
  {
    id: 12.25,
    question: 'FPGA - Field Programmable Gate Array',
    answer: 'A processor that can be programmed to perform a specific function by a customer, rather than at the time of manufacture',
  },
  {
    id: 12.26,
    question: 'RTOS - Real-Time Operating Systems',
    answer: 'A type of OS that prioritizes deterministic execution of operations to ensure consistent response for time-critical tasks',
  },
  {
    id: 12.27,
    question: 'NB-IoT - Narrowband-IoT',
    answer: 'This refers to a low-power version of the Long Term Evolution (LTE) or 4G cellular standard; the signal occupies less bandwidth than regular cellular; data rates are limited (20-100 kbps)',
  },
  {
    id: 12.28,
    question: 'LTE-M - LTE Machine Type Communication',
    answer: 'This is another low-power system (like NB-IoT), but supports higher bandwidth (up to about 1 Mbps)',
  },
  {
    id: 12.29,
    question: 'Z-Wave',
    answer: 'Wireless communications protocol used primarily for home automation; devices can to work as repeaters to extend the network but there is a limit of four "hops"; uses ~900 Mhz frequencies',
  },
  {
    id: 12.30,
    question: 'Zigbee',
    answer: 'Open source competitor technology to Z-Wave; uses 2.4 GHz band so more vuln to interference; more data bandwidth but less range',
  },
  {
    id: 12.31,
    question: 'ICS - Industrial Control Systems',
    answer: 'A network managing embedded devices (computer systems that are designed to perform a specific, dedicated function)',
  },
  {
    id: 12.32,
    question: 'HMI - Human Machine Interfaces',
    answer: 'Output and configuration of a PLC is performed by one or more of these',
  },
  {
    id: 12.33,
    question: 'Data Historian',
    answer: 'A database of all the information generated by the control loop',
  },
  {
    id: 12.34,
    question: 'SCADA - Supervisory Control and Data Acquisition',
    answer: '',
  },
  {
    id: 12.35,
    question: 'IoT - Internet of Things',
    answer: 'A global network of appliances and personal devices that have been equipped with sensors, software, and network connectivity',
  },
  {
    id: 12.36,
    question: 'BAS - Building Automation System',
    answer: 'Components and protocols that facilitate the centralized configuration and monitoring of mechanical and electrical systems within offices and data centers',
  },
  {
    id: 12.37,
    question: 'Smart Meter',
    answer: 'Provides continually updating reports of electricity, gas, or water usage to the supplier, reducing the need for manual inspections',
  },
  {
    id: 12.38,
    question: 'MFP - Multifunction Printers',
    answer: 'A device that serves as a printer, scanner, fax machine, all in one',
  },
  {
    id: 12.39,
    question: 'CAN - Controller Area Network Bus',
    answer: 'A serial network designed to allow communications between embedded programmable logic controllers',
  },
]
const thirteen = [
  {
    id: 13.00,
    question: 'LESSON 13 - Implementing Secure Mobile Solutions',
  },
  {
    id: 13.01,
    question: 'BYOD - Bring Your Own Device',
    answer: 'The mobile device is owned by the employee; it will have to meet whatever is required by the company and the employee will have to agree on the installation of corporate apps and to some level of oversight and auditing',
  },
  {
    id: 13.02,
    question: 'COBO - Corporate Owned, Business Only',
    answer: 'The device is the property of the company and may only be used for company business',
  },
  {
    id: 13.03,
    question: 'COPE - Corporate Owned, Personally-Enabled',
    answer: 'The device is chosen and supplied by the company and remains its property, but the employee may use it to access personal email and social media accounts and for personal web browsing',
  },
  {
    id: 13.04,
    question: 'CYOD - Choose Your Own Device',
    answer: 'Much the same as COPE but the employee is given a choice of device from a list',
  },
  {
    id: 13.05,
    question: 'MDM - Mobile Device Management',
    answer: 'Management suite that sets device policies for authentication, feature use (camera and microphone), and connectivity; can also allow device resets and remote wipes.',
  },
  {
    id: 13.06,
    question: 'MAM - Mobile Application Management',
    answer: '',
  },
  {
    id: 13.07,
    question: 'UEM - Unified Endpoint Management',
    answer: 'Enterprise software for controlling device settings, apps, and corporate data storage on all types of fixed, mobile, and IoT computing devices',
  },
  {
    id: 13.08,
    question: 'GPS - Global Positioning System',
    answer: 'A means of determining the device latitude and longitude based on information received from satellites via a GPS sensor',
  },
  {
    id: 13.09,
    question: 'IPS - Indoor Positioning System',
    answer: 'Works out a device location by triangulating its proximity to other radio sources, such as cell towers, Wi-Fi access points, and Bluetooth/RFID beacons',
  },
  {
    id: 13.10,
    question: 'Geofencing',
    answer: 'The practice of creating a virtual boundary based on real-world geography',
  },
  {
    id: 13.11,
    question: 'GPS Tagging',
    answer: 'The process of adding geographical identification metadata, such as the latitude and longitude, to media such as photographs, SMS messages, video, ..',
  },
  {
    id: 13.12,
    question: 'Sideloading',
    answer: 'Downloading untrusted apps from a website or 3rd party',
  },
  {
    id: 13.13,
    question: 'Containerization',
    answer: 'A mobile app or workspace that runs within a partitioned environment to prevent other (unauthorized) apps from interacting with it',
  },
  {
    id: 13.14,
    question: 'Rooting',
    answer: 'Term used for Androids; subverting the security measures on the device to gain root access to it',
  },
  {
    id: 13.15,
    question: 'Jailbreaking',
    answer: 'Term used for iOS devices; subverting the security measures on the device to gain administrative access to it',
  },
  {
    id: 13.16,
    question: 'Unlocking',
    answer: 'For either iOS or Android, this means removing the restrictions that lock a device to a single carrier',
  },
  {
    id: 13.17,
    question: 'Ad Hoc Network',
    answer: 'Peer-to-peer wireless network, no access points; can only use WEP for encryption',
  },
  {
    id: 13.18,
    question: 'Wi-Fi Direct',
    answer: 'Peer to peer wireless network; one device acts as a soft access point; uses WPA2 but depends on WPS',
  },
  {
    id: 13.19,
    question: 'Hotspot',
    answer: 'A smartphone sharing its Internet connection over Wi-Fi with multiple other devices',
  },
  {
    id: 13.20,
    question: 'Tethering',
    answer: 'A smartphone sharing its Internet connection to a PC over USB cable or a single PC via Bluetooth',
  },
  {
    id: 13.21,
    question: 'Bluejacking',
    answer: 'A sort of BT spam where someone sends you an unsolicited text (or picture/ video) message or vCard (contact details)',
  },
  {
    id: 13.22,
    question: 'Bluesnarfing',
    answer: 'Refers to using an exploit in Bluetooth to steal information from someone elses phone',
  },
  {
    id: 13.23,
    question: 'IR Blaster',
    answer: 'Infrared tech that allows the device to interact with an IR receiver and operate a device such as a TV as though it were the remote control',
  },
  {
    id: 13.24,
    question: 'IR Sensor',
    answer: 'Infrared tech that is used as proximity sensors (to detect when a smartphone is being held to the ear, for instance) and to measure health information (such as heart rate and blood oxygen levels)',
  },
  {
    id: 13.25,
    question: 'OTA - Over-the-Air Updates',
    answer: 'A firmware update delivered on a cellular data connection',
  },
  {
    id: 13.26,
    question: 'P2P - Point-to-Point Microwave',
    answer: 'Uses high-gain antennas to link two sites; high-gain means that the antenna is highly directional, each one is pointed directly at the other',
  },
  {
    id: 13.27,
    question: 'P2M - Point-to-Multipoint Microwave',
    answer: 'Uses smaller sectoral antennas, each covering a separate quadrant; links multiple sites or subscriber nodes to a single hub; this can be more cost-efficient in high density urban areas and requires less radio spectrum',
  },
]
const fourteen = [
  {
    id: 14.00,
    question: 'LESSON 14 - Implementing Secure Application Concepts',
  },
  {
    id: 14.01,
    question: 'Arbitrary Code Execution',
    answer: 'The goal of most application attacks; the app accepts commands unrelated to the program and runs them on the host machine within a shell, or command interpreter',
  },
  {
    id: 14.02,
    question: 'Veritcal Privilege Escalation',
    answer: 'Where a user or application can access functionality or data that shouldnt be available to them; going from standard user to local admin privs, for example',
  },
  {
    id: 14.03,
    question: 'Horizontal Privilege Escalation',
    answer: 'Where a user accesses functionality or data that is intended for another user; looking at account info of another user, for example',
  },
  {
    id: 14.04,
    question: 'Error Handling',
    answer: 'An application shouldnt reveal configuration or platform details that could help an attacker, like showing the type/version of a server running',
  },
  {
    id: 14.05,
    question: 'Improper Input Handling',
    answer: 'Software that allows the user to enter data but does not validate or filter user input to prevent invalid or malicious injections',
  },
  {
    id: 14.06,
    question: 'Buffer Overflow',
    answer: 'An attack in which data goes past the boundary of the destination buffer and begins to corrupt adjacent memory; this can allow the attacker to crash the system or execute arbitrary code',
  },
  {
    id: 14.07,
    question: 'Integer Overflow',
    answer: 'An attack in which a computed result is too large to fit in its assigned storage space, which may lead to crashing or data corruption, and may trigger a buffer overflow',
  },
  {
    id: 14.08,
    question: 'Null Pointer Dereference',
    answer: 'A pointer is a variable that stores a memory location; if the memory location is invalid or null, a null pointer dereference is created and the process will likely crash',
  },
  {
    id: 14.09,
    question: 'Race Condition',
    answer: 'A software vulnerability when the resulting outcome from execution processes is directly dependent on the order and timing of certain events, and those events fail to execute in the order and timing intended by the developer',
  },
  {
    id: 14.10,
    question: 'TOCTTOU - Time-of-Check-to-Time-of-Use',
    answer: 'The potential vulnerability that occurs when there is a change between when an app checked a resource and when the app used the resource',
  },
  {
    id: 14.11,
    question: 'Memory Leak',
    answer: 'A software vulnerability that can occur when software does not release allocated memory when it is done using it, potentially leading to system instability',
  },
  {
    id: 14.12,
    question: 'DLL Injection',
    answer: 'A vulnerability in the way the operating system allows one process to attach to another; this functionality can be abused by malware to force a legitimate process to load a malicious link library',
  },
  {
    id: 14.13,
    question: 'Code Refactoring',
    answer: 'The code performs the same function by using different methods; this means that the A-V software may no longer identify malware by its signature',
  },
  {
    id: 14.14,
    question: 'Shimming',
    answer: 'The process of developing and implementing additional code between an application and the operating system to enable functionality that would otherwise be unavailable',
  },
  {
    id: 14.15,
    question: 'PtH - Pass the Hash Attack',
    answer: 'A network-based attack where the attacker steals hashed user credentials and uses them as-is to try to authenticate to the same network the hashed credentials originated on',
  },
  {
    id: 14.16,
    question: 'GET',
    answer: 'HTTP request method used to retrieve a resource',
  },
  {
    id: 14.17,
    question: 'POST',
    answer: 'HTTP request method used to send data to the server for processing by the requested resource',
  },
  {
    id: 14.18,
    question: 'PUT',
    answer: 'HTTP request method used to create or replace the resource',
  },
  {
    id: 14.19,
    question: 'HEAD',
    answer: 'HTTP request method used to retrieve the headers for a resource only (not the whole body)',
  },
  {
    id: 14.20,
    question: 'Percent Encoding',
    answer: 'Allows a user-agent to submit any safe OR unsafe character to a server within a URL (so + become %2B, & becomes %26)',
  },
  {
    id: 14.21,
    question: 'Replay Attack',
    answer: 'An attack where the attacker intercepts some authentication data and reuses it to try to re-establish a session',
  },
  {
    id: 14.22,
    question: 'Session Hijacking',
    answer: 'A type of spoofing attack where the attacker disconnects a host then replaces it with his or her own machine, spoofing the original hosts IP address; often involves replaying cookies',
  },
  {
    id: 14.23,
    question: 'XSRF or CSRF - Cross-Site Request Forgery',
    answer: 'An attack that forces an end user to execute unwanted actions on a web application in which theyre currently authenticated',
  },
  {
    id: 14.24,
    question: 'Clickjacking',
    answer: 'An attack where what the user sees and trusts as a web application with some sort of login page or form contains a malicious layer or invisible iFrame that allows an attacker to intercept or redirect user input',
  },
  {
    id: 14.25,
    question: 'XSS - Cross-Site Scripting',
    answer: 'A type of injection attack in which malicious scripts are injected into otherwise benign and trusted websites',
  },
  {
    id: 14.26,
    question: 'SQL Injection',
    answer: 'An attack that injects a SQL database query into the input data directed at a server by accessing the client side of the application',
  },
  {
    id: 14.27,
    question: 'XML - Extensible Markup Language',
    answer: 'Language used by apps for authentication and authorizations, and for other types of data exchange and uploading',
  },
  {
    id: 14.28,
    question: 'XML Injection',
    answer: 'An attack that injects XML tags and data into a database',
  },
  {
    id: 14.29,
    question: 'LDAP Injection',
    answer: 'An application attack that targets web-based applications by fabricating LDAP statements that are typically created by user input',
  },
  {
    id: 14.30,
    question: 'Directory Traversal',
    answer: 'An application attack that allows access to commands, files, and directories that may or may not be connected to the web document root directory ../',
  },
  {
    id: 14.31,
    question: 'Command Injection',
    answer: 'An attack that attempts to cause the server to run OS shell commands and return the output to the browser',
  },
  {
    id: 14.32,
    question: 'Server-Side Request Forgery',
    answer: 'Vulnerabilities that let an attacker send crafted requests from the back-end server of a vulnerable web application',
  },
  {
    id: 14.33,
    question: 'Input Validation',
    answer: 'Any technique used to ensure that the data entered into a field or variable in an application is handled appropriately by that application',
  },
  {
    id: 14.34,
    question: 'Normalization',
    answer: 'Means that a string is stripped of illegal characters or substrings and converted to the accepted character set',
  },
  {
    id: 14.35,
    question: 'Output Encoding',
    answer: 'Means that a string is re-encoded safely for the context in which it is being used',
  },
  {
    id: 14.36,
    question: 'Data Exposure',
    answer: 'A fault that allows privileged information (such as a token, password, or personal data) to be read without being subject to the appropriate access controls',
  },
  {
    id: 14.37,
    question: 'SEH - Structured Exception Handler',
    answer: 'A mechanism to account for unexpected error conditions that might arise during code execution',
  },
  {
    id: 14.38,
    question: 'Code Reuse',
    answer: 'Using a block of code from elsewhere in the same application or from another application to perform a different function (or perform the same function in a different context)',
  },
  {
    id: 14.39,
    question: 'SDK - Software Development Kit',
    answer: 'Using sample code or libraries of pre-built functions from the programming environment used to create the software or interact with a third party API',
  },
  {
    id: 14.40,
    question: 'Stored Procedures',
    answer: 'Using a pre-built function to perform a database query',
  },
  {
    id: 14.41,
    question: 'Unreachable Code',
    answer: 'A part of application source code that can never be executed',
  },
  {
    id: 14.42,
    question: 'Dead Code',
    answer: 'Code that is executed but has no effect on the program flow',
  },
  {
    id: 14.43,
    question: 'Static Code Analysis',
    answer: 'Analysis performed against the application code before it is packaged as an executable process',
  },
  {
    id: 14.44,
    question: 'Dynamic Code Analysis',
    answer: 'The application is tested under "real world" conditions using a staging environment',
  },
  {
    id: 14.45,
    question: 'Fuzzing',
    answer: 'A dynamic code analysis technique that involves sending a running application random and unusual input so as to evaluate how the app responds',
  },
  {
    id: 14.46,
    question: 'Execution Control',
    answer: 'The process of determining what additional software or scripts may be installed or run on a host beyond its baseline',
  },
  {
    id: 14.47,
    question: 'Allow List',
    answer: 'A highly restrictive policy that means only running authorized processes and scripts',
  },
  {
    id: 14.48,
    question: 'Block List',
    answer: 'A permissive policy that only prevents execution of listed processes and scripts',
  },
  {
    id: 14.49,
    question: 'Code Signing',
    answer: 'Principal means of proving the authenticity and integrity of code; the developer creates a cryptographic hash of the file then signs the hash using their private key',
  },
  {
    id: 14.50,
    question: 'Shellcode',
    answer: 'A minimal program designed to exploit a buffer overflow or similar vulnerability to gain privileges, or to drop a backdoor on the host if run as a Trojan',
  },
  {
    id: 14.51,
    question: 'Man-in-the-Browser Attack',
    answer: 'An attack when the web browser is compromised by installing malicious plug-ins or scripts, or intercepting API calls between the browser process and DLLs',
  },
  {
    id: 14.52,
    question: 'Automation',
    answer: 'The completion of an administrative task without human intervention',
  },
  {
    id: 14.53,
    question: 'Scalability',
    answer: 'Means that the costs involved in supplying the service to more users are linear. EX: if the # of users doubles, the costs to maintain the same level of service would also double (or less than double)',
  },
  {
    id: 14.54,
    question: 'Elasticity',
    answer: 'The property by which a computing environment can instantly react to both increasing and decreasing demands in workload',
  },
  {
    id: 14.55,
    question: 'SDLC - Software Development Life Cycle',
    answer: 'Divides the creation and maintenance of software into discrete phases. Ex: Waterfall and Agile SDLCs',
  },
  {
    id: 14.56,
    question: 'Waterfall Model',
    answer: 'Older SDLC paradigm that focuses on successful completion of projects by progressing strictly from stage to stage',
  },
  {
    id: 14.57,
    question: 'Agile Model',
    answer: 'Modern SDLC paradigm that uses iterative processes and where dev and provisioning tasks are continuous',
  },
  {
    id: 14.58,
    question: 'Development Environment',
    answer: 'The code will be hosted on a secure server; each dev will check a portion of code to edit on their machine',
  },
  {
    id: 14.59,
    question: 'Test / Integration Environment',
    answer: 'Code from multiple devs is merged into a single master copy and subjected to basic unit and functional tests',
  },
  {
    id: 14.60,
    question: 'Staging Environment',
    answer: 'A mirror of the production environment; may use test or sample data and will have access controls so its only accessible to test users',
  },
  {
    id: 14.61,
    question: 'Production Environment',
    answer: 'The application is released to end users',
  },
  {
    id: 14.62,
    question: 'Provisioning',
    answer: 'The process of deploying an application to the target environment, such as enterprise desktops, mobile devices, or cloud infrastructure',
  },
  {
    id: 14.63,
    question: 'Deprovisioning',
    answer: 'The process of removing an application from packages or instances',
  },
  {
    id: 14.64,
    question: 'Version Control',
    answer: 'An ID system for each iteration of a software product',
  },
  {
    id: 14.65,
    question: 'Continuous Integration',
    answer: 'The principle that developers should commit and test updates often—every day or sometimes even more frequently',
  },
  {
    id: 14.66,
    question: 'Continuous Delivery',
    answer: 'About testing all of the infrastructure that supports the app, including networking, database functionality, client software, and so on',
  },
  {
    id: 14.67,
    question: 'Continuous Development',
    answer: 'The separate process of actually making changes to the production environment to support the new app version',
  },
  {
    id: 14.68,
    question: 'Continuous Monitoring',
    answer: 'Technique of constantly evaluating an environment for changes so that new risks may be more quickly detected and business operations improved upon',
  },
  {
    id: 14.69,
    question: 'Verification',
    answer: 'A compliance testing process to ensure that the product or system meets its design goals',
  },
  {
    id: 14.70,
    question: 'Validation',
    answer: 'The process of determining whether the application is fit-for-purpose (so for instance, its design goals meet the user requirements)',
  },
]
const fifteen = [
  {
    id: 15.00,
    question: 'LESSON 15 - Implementing Secure Cloud Solutions',
  },
  {
    id: 15.01,
    question: 'Cloud Deployment Model',
    answer: 'Classifies how the cloud service is owned and provisioned; public, private, hosted private, community, etc',
  },
  {
    id: 15.02,
    question: 'Public Cloud',
    answer: 'A cloud that is deployed for shared use by multiple independent tenants; like Google Drive or Dropbox',
  },
  {
    id: 15.03,
    question: 'Hosted Private Cloud',
    answer: 'A cloud hosted by a third-party for the exclusive use of one organization',
  },
  {
    id: 15.04,
    question: 'Private Cloud',
    answer: 'A cloud infrastructure that is completely private to and owned by one organization',
  },
  {
    id: 15.05,
    question: 'Community Cloud',
    answer: 'A cloud servce where several organizations share the costs of either a hosted private or fully private cloud',
  },
  {
    id: 15.06,
    question: 'IaaS - Infrastructure as a Service',
    answer: 'A means of provisioning IT resources like servers, load balancers, and storage area network components; rather than purchase those, you rent them on an as-needed basis',
  },
  {
    id: 15.07,
    question: 'SaaS',
    answer: 'A means of provisioning software applications; Microsoft Office 365, Google G Suite, Salesforce',
  },
  {
    id: 15.08,
    question: 'PaaS - Platform as a Service',
    answer: 'A cloud computing method that provides somewhere in between IaaS and SaaS. Ex: Servers and storage infrastructure but also a multi-tier web app platform on top. Distinct from SaaS: the platform would not be configured to DO anything; your own devs would have to create the software that runs the platform',
  },
  {
    id: 15.09,
    question: 'Consultants',
    answer: 'Using a third-party professional for security support; for big picture analysis or more specific and product-focused projects',
  },
  {
    id: 15.10,
    question: 'MSSP - Managed Security Services Provider',
    answer: 'Third-party provision of security configuration and monitoring as an outsourced service',
  },
  {
    id: 15.11,
    question: 'SECaaS',
    answer: 'A computing method that enables clients to take advantage of information, software, infrastructure, and processes provided by a cloud vendor in the specific area of computer security',
  },
  {
    id: 15.12,
    question: '3 Components of a Virtual Platform',
    answer: 'Host Hardware, Hypervisor/Virtual Machine Monitor, Virtual Machines/Guest OSes/Instances',
  },
  {
    id: 15.13,
    question: 'Bare Metal Hypervisor',
    answer: 'Type I; installed directly onto the computer and manages access to the host hardware without going through a host OS',
  },
  {
    id: 15.14,
    question: 'Host-Based Hypervisor',
    answer: 'Type II; the hypervisor application is itself installed on a host operation system',
  },
  {
    id: 15.15,
    question: 'VDI - Virtual Desktop Infrastructure',
    answer: 'A virtualization implementation that separates the personal computing environment from a users physical computer',
  },
  {
    id: 15.16,
    question: 'VDE - Virtual Desktop Environment',
    answer: 'The user desktop and software applications provisioned as an instance under VDI',
  },
  {
    id: 15.17,
    question: 'VM Escaping',
    answer: 'Refers to malware running on a guest OS jumping to another guest or to the host',
  },
  {
    id: 15.18,
    question: 'VM Sprawl',
    answer: 'Configuration vulnerability where provisioning and deprovisioning of virtual assets is not properly authorized and monitored',
  },
  {
    id: 15.19,
    question: 'Compute Component',
    answer: 'Provides process and system memory (RAM) resource as required for a particular workload',
  },
  {
    id: 15.20,
    question: 'Storage Component',
    answer: 'The provisioning of persistent storage capacity',
  },
  {
    id: 15.21,
    question: 'JSON',
    answer: '',
  },
  {
    id: 15.22,
    question: 'Data Replication',
    answer: 'Allows businesses to copy data to where it can be utilized most effectively',
  },
  {
    id: 15.23,
    question: 'Hot Storage',
    answer: 'Retrieves data very quickly; the faster the retrieval, the higher the cost',
  },
  {
    id: 15.24,
    question: 'Cold Storage',
    answer: 'Retrieves data slowly; the faster the retrieval, the higher the cost',
  },
  {
    id: 15.25,
    question: 'Local Replication',
    answer: 'Replicates your data within a single data center in the region where you created your storage account',
  },
  {
    id: 15.26,
    question: 'Regional Replication',
    answer: 'Replicates your data across multiple data centers within one or two regions (aka zone-redundant storage)',
  },
  {
    id: 15.27,
    question: 'GRS - Geo-redundant Storage',
    answer: 'Replicates your data to a secondary region that is distant from the primary region',
  },
  {
    id: 15.28,
    question: 'VPC - Virtual Private Cloud',
    answer: 'Synonymous with virtual network; a private network segment made available to a single cloud consumer on a public cloud',
  },
  {
    id: 15.29,
    question: 'Transit Gateway',
    answer: 'A virtual router that handles routing between the subnets in each attached VPC and any attached VPN gateways',
  },
  {
    id: 15.30,
    question: 'VPC Endpoint',
    answer: 'A means of publishing a service so its accessible by instances in other VPCs using only the AWS internal network and private IP addresses',
  },
  {
    id: 15.31,
    question: 'Gateway Endpoint',
    answer: 'Used to connect instances in a VPC to the AWS S3 (storage) and DynamoDB (database) services; configured as a route to the service in the VPCs route table',
  },
  {
    id: 15.32,
    question: 'Interface Endpoint',
    answer: 'Makes use of AWSs PrivateLink feature to allow private access to custom services',
  },
  {
    id: 15.33,
    question: 'Security Group',
    answer: 'How, in AWS, basic packet filtering rules managing traffic that each instance will accept can be managed',
  },
  {
    id: 15.34,
    question: 'CASB - Cloud Access Security Broker',
    answer: '',
  },
  {
    id: 15.35,
    question: 'SWG - Next-Generation Secure Web Gateway',
    answer: 'Combines the functionality of an SWG with that of data loss prevention and a CASB to provide a wholly cloud-hosted platform for client access to websites and cloud apps',
  },
  {
    id: 15.36,
    question: 'SOA - Service-Oriented Architecture',
    answer: 'A software architecture where components of the solution are conceived as loosely coupled services not dependent on a single platform type or technology',
  },
  {
    id: 15.37,
    question: 'Microservices',
    answer: 'A software architecture where components of the solution are conceived as highly decoupled services not dependent on a single platform type or technology',
  },
  {
    id: 15.38,
    question: 'Orchestration',
    answer: 'The automation of multiple steps in a deployment process',
  },
  {
    id: 15.39,
    question: 'Fog Computing',
    answer: 'Provisioning processing resource BETWEEN the network edge of IoT devices and the data center to reduce latency',
  },
  {
    id: 15.40,
    question: 'Edge Computing',
    answer: 'Provisioning processing resource close to the network edge of IoT devices to reduce latency',
  },
  {
    id: 15.41,
    question: 'Edge Devices',
    answer: 'Collect and depend upon data for their operation. Ex: HVAC controller that relies on data from a thermometer to activate different components',
  },
  {
    id: 15.42,
    question: 'Edge Gateways',
    answer: 'Perform some pre-processing of data to and from edge devices to enable prioritization; also perform wired/wireless connectivity to transfer data to and from the storage and processing networks',
  },
  {
    id: 15.43,
    question: 'NFV - Network Functions Virtualization',
    answer: 'The architecture supporting rapid deployment of virtual networking using general-purpose VMs and containers',
  },
  {
    id: 15.44,
    question: 'SDV - Software-Defined Visibility',
    answer: 'APIs for reporting configuration and state data for automated monitoring and alerting',
  },
  {
    id: 15.45,
    question: 'Software-Defined Networking',
    answer: 'APIs and compatible hardware/virtual appliances allowing for programmable network appliances and systems',
  },
  {
    id: 15.46,
    question: 'Serverless',
    answer: 'A software architecture that runs functions within virtualized runtime containers in a cloud rather than on dedicated server instances',
  },
  {
    id: 15.47,
    question: '3 Planes of SDN',
    answer: 'Control Plane, Data Plane, Management Plane',
  },
  {
    id: 15.48,
    question: 'Control Plane',
    answer: 'Makes decisions about how traffic should be prioritized and secured, and where it should be switched',
  },
  {
    id: 15.49,
    question: 'Data Plane',
    answer: 'Handles the actual switching and routing of traffic and imposition of security access controls',
  },
  {
    id: 15.50,
    question: 'Management Plane',
    answer: 'Monitors traffic conditions and network status',
  },
  {
    id: 15.51,
    question: 'Idempotence',
    answer: 'Means that making the same call with the same parameters will always produce the same result; crucial to Infrastructure as Code',
  },
  {
    id: 15.52,
    question: 'IaC - Infrastructure as Code',
    answer: 'A provisioning architecture in which deployment of resources is performed by scripted automation and orchestration',
  },
  {
    id: 15.53,
    question: 'SOAP - Simple Object Access Protocol',
    answer: 'Uses XML format messaging and has a number of extensions in the form of Web Services (WS) standards that support common features, such as authentication, transport security, and asynchronous messaging',
  },
  {
    id: 15.54,
    question: 'REST - Representational State Transfer',
    answer: 'A looser architectural framework, also referred to as RESTful APIs; where a SOAP request must be sent as a correctly formatted XML document, a REST request can be submitted as an HTTP operation/verb (GET or POST for example)',
  },
]
const sixteen = [
  {
    id: 16.00,
    question: 'LESSON 16 - Explaining Data Privacy and Protection Concepts',
  },
  {
    id: 16.01,
    question: 'Stages of Information Life Cycle',
    answer: 'Creation / Collection / Distribution & Use / Retention',
  },
  {
    id: 16.02,
    question: 'Data Governance Policy',
    answer: 'Describes the security controls that will be applied to protect data at each stage of its life cycle',
  },
  {
    id: 16.03,
    question: 'Data Owner',
    answer: 'A senior/exec role with ultimate responsibility for maintaining the CIA of the information asset; responsible for labeling it and ensuring it is protected with appropriate controls',
  },
  {
    id: 16.04,
    question: 'Data Steward',
    answer: 'A role primarily responsible for data quality; ensuring data is labeled, collected, and stored in a format and with values that comply with applicable laws and regulations',
  },
  {
    id: 16.05,
    question: 'Data Custodian',
    answer: 'A role handling the managing of the system on which the data assets are stroed; enforcing access control, encryption, and backup/recovery measures',
  },
  {
    id: 16.06,
    question: 'DPO - Data Privacy Officer',
    answer: ' role responsible for oversight of any PII assets managed by the company; ensures the processing, disclosure, and retention of PII complies with legal and regularly frameworks',
  },
  {
    id: 16.07,
    question: 'Data Controller',
    answer: 'The entity responsible for determining why and how data is stored, collected, and used and for ensuring that those purposes are lawful',
  },
  {
    id: 16.08,
    question: 'Data Processor',
    answer: 'The entity engaged by the data controller to assist with technical collection, storage, or analysis tasks',
  },
  {
    id: 16.09,
    question: 'Public (Unclassified)',
    answer: 'With this label there are no restrictions on viewing the data',
  },
  {
    id: 16.10,
    question: 'Confidential (Secret)',
    answer: 'With this label the information is highly sensitive, for viewing only byb approved persons within the organization and possibly by trusted 3rd parties under NDAs',
  },
  {
    id: 16.11,
    question: 'Critical (Top-Secret)',
    answer: 'With this label the information is too valuable to allow any risk of its capture; viewing is severely restricted',
  },
  {
    id: 16.12,
    question: 'IP - Proprietary / Intellectual Property',
    answer: 'Information created and owned by the company, typically about the products or services they make/perform',
  },
  {
    id: 16.13,
    question: 'Private / Personal Data',
    answer: 'Information that relates to an individual identity',
  },
  {
    id: 16.14,
    question: 'Sensitive Data',
    answer: 'A label usually used in the context of personal data; could harm a person if the information is made public, or lead to predjudiced decisions made about them',
  },
  {
    id: 16.15,
    question: 'PII - Personally Identifiable Information',
    answer: 'Data that can be used to identify, contact, or locate an individual; SSN, full name, DOB, email, etc',
  },
  {
    id: 16.16,
    question: 'Customer Data',
    answer: 'Can be institutional information, but also personal information about the customers employees, like sales/technical support contacts; should be treated like PII',
  },
  {
    id: 16.17,
    question: 'PHI - Personal Health Information',
    answer: 'Medical and insurance records, plus associated hospital and lab test results; noted particularly for trading at high values on the black market',
  },
  {
    id: 16.18,
    question: 'Financial Information',
    answer: 'Data held about bank and investment accounts, plus info such as payroll and tax returns, or payment card information',
  },
  {
    id: 16.19,
    question: 'Privacy Notice',
    answer: 'The consent statement a data subject gives after they are told clearly what the purpose of the collection and processing of the information is',
  },
  {
    id: 16.20,
    question: 'Purpose Limitation',
    answer: 'In data protection, the principle that personal information can be collected and processed only for a stated purpose to which the subject has consented',
  },
  {
    id: 16.21,
    question: 'Impact Assessment',
    answer: 'In data protection, a process designed to identify the risks of collection and processing personal data in the context of a business workflow/project and to identify mitigation mechanisms for them',
  },
  {
    id: 16.22,
    question: 'Data Sovereignty',
    answer: 'In data protection, the principle that countries and states may impose individual requirements on data collected or stored within their jurisdiction',
  },
  {
    id: 16.23,
    question: 'Data Breach',
    answer: 'When confidential or private data is read, copied, or changed without authorization',
  },
  {
    id: 16.24,
    question: 'Privacy Breach',
    answer: 'Refers specifically to the loss or disclosure of personal or sensitive data',
  },
  {
    id: 16.25,
    question: 'ISA - Interconnection Security Agreement',
    answer: 'A document that regulates security-relevant aspects of an intended connection between an org and an external system; it regulates the security interface between any two systems operating under two different distinct authorities',
  },
  {
    id: 16.26,
    question: 'Data Sharing and Use Agreement',
    answer: 'A legal means of preventing the risk of reidentification in data sets; specifies terms for how a data set can be analyzed',
  },
  {
    id: 16.27,
    question: 'Data at Rest',
    answer: 'Data in some sort of persistent storage media',
  },
  {
    id: 16.28,
    question: 'Data in Transit / Motion',
    answer: 'Data being transmitted over a network; web traffic, remote access traffic',
  },
  {
    id: 16.29,
    question: 'Data in Use/Processing',
    answer: 'Data present in volatile memory, like RAM or CPU registers; open Word documents, event logs being created while an OS is running',
  },
  {
    id: 16.30,
    question: 'Data Exfiltration',
    answer: 'The unauthorized copying or retrieval of data from a system',
  },
  {
    id: 16.31,
    question: 'DLP - Data Loss Prevention',
    answer: 'These products automate the discovery and classification of data types and enforce rules so that data isnt view or transferred without proper authorization',
  },
  {
    id: 16.32,
    question: '3 Components of DLP Product',
    answer: 'Policy Server, Endpoint Agents, Network Agents',
  },
  {
    id: 16.33,
    question: 'DLP Policy Server',
    answer: 'Used to configure classification, confidentiality, and privacy rules and policies, log incidents, and compile reports',
  },
  {
    id: 16.34,
    question: 'DLP Endpoint Agents',
    answer: 'Enforce policy on client computers, even when they arent connected to the network',
  },
  {
    id: 16.35,
    question: 'DLP Network Agents',
    answer: 'Scan communications at network borders and interface with web and messaging servers to enforce policy',
  },
  {
    id: 16.36,
    question: 'Alert Only',
    answer: 'DLP remediation action where the copying is allowed, but the management system records an incident and may alert an administrator',
  },
  {
    id: 16.37,
    question: 'Quarantine',
    answer: 'DLP remediation action where access to the original file is denied to the user (or possibly any user); this might be accomplished by encrypting the file in place or by moving it to a quarantine area in the file system',
  },
  {
    id: 16.38,
    question: 'Block',
    answer: 'DLP remediation action where the user is prevented from copying the original file but retains access to it. The user may or may not be alerted to the policy violation, but it will be logged as an incident by the management engine',
  },
  {
    id: 16.39,
    question: 'Tombstone',
    answer: 'DLP remediation where the original file is quarantined and replaced with one describing the policy violation and how the user can release it again',
  },
  {
    id: 16.40,
    question: 'Data Minimization',
    answer: 'The principle that data should only be processed and stored if that is necessary to perform the purpose for which it is collected',
  },
  {
    id: 16.41,
    question: 'Principle of Suffieciency / Adequacy',
    answer: 'You should collect the data required for the stated purpose in a single transaction to which the data subject can give clear consent; collecting additional data later would not be compliant with this principle',
  },
  {
    id: 16.42,
    question: 'Deidentification',
    answer: 'In data protection, methods and technologies that remove identifying information from data before it is distributed',
  },
  {
    id: 16.43,
    question: 'Pseudo-Anonymization',
    answer: 'Modifies or replaces identifying information so that reidentification depends on an alternate data source, which must be kept separate',
  },
  {
    id: 16.44,
    question: 'Data Masking',
    answer: 'A deidentification method where generic or placeholder labels are substituted for real data while preserving the structure or format of the original data',
  },
  {
    id: 16.45,
    question: 'Tokenization',
    answer: 'A deidentification method where a unique token is substituted for real data',
  },
  {
    id: 16.46,
    question: 'Aggregation / Banding',
    answer: 'A deidentification technique that generalizes the data, such as substituting a specific age with a broader age band',
  },
]
const seventeen = [
  {
    id: 17.00,
    question: 'LESSON 17 - Performing Incident Response',
  },
  {
    id: 17.01,
    question: 'Rsyslog',
    answer: 'An updated version of syslog that uses the same configuration file syntax, but can work over TCP and use a secure connection',
  },
  {
    id: 17.02,
    question: 'Walkthrough Exercise',
    answer: 'A facilitator presents the scenario and the incident responders demonstrate what actions they would take in response; unlike a tabletop exercise, the responders perform actions such as running scans and analyzing sample files, typically on a sandbox',
  },
  {
    id: 17.03,
    question: 'IPFIX',
    answer: 'Redevelopment of Ciscos NetFlow',
  },
  {
    id: 17.04,
    question: 'Security Logs',
    answer: 'Audit events, such as a failed logon or access to a file being denied',
  },
  {
    id: 17.05,
    question: 'Exploitation Phase',
    answer: 'The weaponized code is executed on the target system by the chosen mechanism',
  },
  {
    id: 17.06,
    question: 'Preparation Phase',
    answer: 'Making the system resilient to attack in the first place; writing policies, hardening systems, etc',
  },
  {
    id: 17.07,
    question: 'Tabletop Exercise',
    answer: 'The facilitator presents a scenario and the responders explain what action they would take to identify, contain, and eradicate the threat; the training does not use computer systems; least costly',
  },
  {
    id: 17.08,
    question: 'Syslog-ng',
    answer: 'An updated version of syslog that uses a different configuration file syntax, but can also use TCP/secure communications and more advanced options for message filtering',
  },
  {
    id: 17.09,
    question: 'Correlation',
    answer: 'Interpreting the relationship between individual data points to diagnose incidents of significance to the security team',
  },
  {
    id: 17.10,
    question: 'Setup Logs',
    answer: 'Events generated during the installation of Windows',
  },
  {
    id: 17.11,
    question: 'Metadata',
    answer: 'Information stored or recorded as a property of an object, state of a system, or transaction',
  },
  {
    id: 17.12,
    question: 'BCP - Business Continuity Plan',
    answer: 'Identifies how business processes should deal with both minor and disaster-level disruption',
  },
  {
    id: 17.13,
    question: 'Reconnaissance Phase',
    answer: 'The attacker determines what methods to use to complete the phases of the attack and gathers information about the targets personnel, computer systems, and supply chain',
  },
  {
    id: 17.14,
    question: 'COOP - Continuity of Operations Plan',
    answer: 'Basically just a BCP; identifies how business processes should deal with incidents',
  },
  {
    id: 17.15,
    question: 'System Logs',
    answer: 'Events generated by the operating system and its services, such as storage volume health checks',
  },
  {
    id: 17.16,
    question: 'Diamond Model of Intrusion Analysis',
    answer: 'Attack framework that analyzes an intrusion event by exploring the relationships between four core features: adversary, capability, infrastructure, and victim',
  },
  {
    id: 17.17,
    question: 'Command and Control Phase',
    answer: 'The weaponized code establishes an outbound channel to a remote server that can then be used to control the remote access tool and possibly download additional tools to progress the attack',
  },
  {
    id: 17.18,
    question: 'Playbook',
    answer: 'A data-driven standard operating procedure (SOP) to assist junior analysts in detecting and responding to specific cyberthreat scenarios',
  },
  {
    id: 17.19,
    question: 'Trend Analysis',
    answer: 'The process of detecting patterns or indicators within a data set over a time series and using those patterns to make predictions about future events',
  },
  {
    id: 17.20,
    question: '...',
    answer: 'Dictates for how long information needs to be kept available on backup and archive systems',
  },
  {
    id: 17.21,
    question: 'Weaponization Phase',
    answer: 'The attacker couples payload code that will enable access with exploit code that will use a vulnerability to execute on the target system',
  },
  {
    id: 17.22,
    question: 'Incident Response Lifecycle Stages',
    answer: 'Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned',
  },
  {
    id: 17.23,
    question: 'Lockheed Martin Kill Chain Phases',
    answer: 'Reconnaissance, Weaponization, Delivery, Exploitation, Installation, Command and Control, Actions on Objectives',
  },
  {
    id: 17.24,
    question: 'Forwarded Events Logs',
    answer: 'Events that are sent to the local log from other hosts',
  },
  {
    id: 17.25,
    question: 'System Memory Dump',
    answer: 'Creates an image file that can be analyzed to identify the processes that are running, the contents of temporary file systems, registry data, network connections, cryptographic keys, and more',
  },
  {
    id: 17.26,
    question: 'Syslog',
    answer: 'Provides an open format, protocol, and server software for logging event messages',
  },
  {
    id: 17.27,
    question: 'Recovery Phase',
    answer: 'With the cause of the incident eradicated, the system can be reintegrated into the business process that it supports; this recovery phase may involve restoration of data from backup and security testing',
  },
  {
    id: 17.28,
    question: 'SOAR - Security Orchestration, Automation, and Response',
    answer: 'A class of security tools that facilitates incident response, threat hunting, and security configuration by orchestrating automated runbooks and delivering data enrichment',
  },
  {
    id: 17.29,
    question: 'Lessons Learned Phase',
    answer: 'Analyze the incident and responses to identify whether procedures or systems could be improved',
  },
  {
    id: 17.30,
    question: 'Application Logs',
    answer: 'Events generated by applications and services, such as when a service cannot start',
  },
  {
    id: 17.31,
    question: 'Delivery Phase',
    answer: 'The attacker identifies a vector by which to transmit the weaponized code to the target environment, such as via an email attachment or on a USB drive',
  },
  {
    id: 17.32,
    question: 'sFlow',
    answer: 'Developed by HP; uses sampling to measure traffic statistics at any layer of the OSI model for a wider range of protocol types than the IP-based Netflow',
  },
  {
    id: 17.33,
    question: 'MITRE ATT&CK',
    answer: 'Attack framework that uses matrices to provide access to a database of known TTPs',
  },
  {
    id: 17.34,
    question: 'Installation Phase',
    answer: 'The chosen mechanism enables the weaponized code to run a remote access tool and achieve persistence on the target system',
  },
  {
    id: 17.35,
    question: 'First Responder',
    answer: 'The first member of the CIRT team that is notified and takes charge of the situation',
  },
  {
    id: 17.36,
    question: 'IRP - Incident Response Plan',
    answer: 'Specific procedures that must be performed if a certain type of event is detected or reported',
  },
  {
    id: 17.37,
    question: 'NetFlow',
    answer: 'A Cisco-developed means of reporting network flow information to a structured database',
  },
  {
    id: 17.38,
    question: 'Adversarial AI',
    answer: 'Using AI to identify vulnerabilities and attack vectors to circumvent security systems',
  },
  {
    id: 17.39,
    question: 'Containment Phase',
    answer: 'Limit the scope and magnitude of the incident',
  },
  {
    id: 17.40,
    question: 'Simulation Exercise',
    answer: 'A team-based exercise where the red team attempts an intrusion, the blue team operates response and recovery controls, and a white team moderates and evaluates the exercise',
  },
  {
    id: 17.41,
    question: 'Eradication Phase',
    answer: 'Once the incident is contained, remove the cause and restore the affected system to a secure state by applying secure configuration settings and installing patches',
  },
  {
    id: 17.42,
    question: 'NXlog',
    answer: 'An open-source log normalization tool; one use for it is to collect Windows logs, which use an XML-based format, and normalize them to a syslog format',
  },
  {
    id: 17.43,
    question: 'Actions on Objectives Phase',
    answer: 'The attacker typically uses the access he has achieved to covertly collect information from target systems and transfer it to a remote system (data exfiltration)',
  },
  {
    id: 17.44,
    question: 'Identification Phase',
    answer: 'Determine whether an incident has taken place, assess how severe it may be, and notify stakeholders',
  },
]
const eighteen = [
  {
    id: 18.00,
    question: 'LESSON 18 - Explaining Digital Forensics',
  },
  {
    id: 18.01,
    question: 'Digital Forensics',
    answer: 'The practice of collecting evidence from computer systems to a standard that will be accepted in a court of law',
  },
  {
    id: 18.02,
    question: 'Due Process',
    answer: 'A term used in US and UK common law to require that people only be convicted of crimes following the fair application of the laws of the land',
  },
  {
    id: 18.03,
    question: 'Legal Hold',
    answer: 'Refers to the fact that information that may be relevant to a court case must be preserved',
  },
  {
    id: 18.04,
    question: 'Chain of Custody',
    answer: 'Documentation that reinforces the integrity and proper handling of evidence from collection, to analysis, to storage, and finally to presentation',
  },
  {
    id: 18.05,
    question: 'E-Discovery',
    answer: 'A means of filtering the relevant evidence produced from all the data gathered by a forensic examination and storing it in a database in a format such that it can be used as evidence in a trial; software tools have been produced to assist this process',
  },
  {
    id: 18.06,
    question: 'Timelines',
    answer: 'The visual representation of events happening in chronological order',
  },
  {
    id: 18.07,
    question: 'Counterintelligence',
    answer: 'Identification and analysis of specific adversary tactics, techniques, and procedures (TTP) to help configure and audit our own systems',
  },
  {
    id: 18.08,
    question: 'Strategic Intelligence',
    answer: 'Data and research that has been analyzed to produce actionable insights for risk management and security control provisioning',
  },
  {
    id: 18.09,
    question: 'Acquisition',
    answer: 'The process of obtaining a forensically clean copy of data from a device held as evidence',
  },
  {
    id: 18.10,
    question: 'Order of Volatility',
    answer: 'The order in which volatile data should be recovered from various storage locations and devices after a security incident occurs',
  },
  {
    id: 18.11,
    question: 'Order of Volatility (the actual order)',
    answer: '1. CPU registers and cache memory / 2. RAM (routing table, ARP cache, kernal stats) / 3. Persistent mass storage (System mem caches, temp file caches, OS files) / 4. Remote logging and monitoring data / 5. Physical configuration and network topology / 6. Archival media and printed docs',
  },
  {
    id: 18.12,
    question: 'Live Acquisition',
    answer: 'Capturing the contents of memory while the host is running',
  },
  {
    id: 18.13,
    question: 'Crash Dump',
    answer: 'When Windows encounters an unrecoverable kernel error, it can write contents of memory to a dump file at Windows_MEMORY.DMP, Minidumps are in Windows_Minidumps',
  },
  {
    id: 18.14,
    question: 'Anti-Forensics',
    answer: 'Malware or attacker taking measures to cover their tracks; delete logs, change timestamps, files, etc.',
  },
  {
    id: 18.15,
    question: 'Pagefile',
    answer: 'Stores pages of memory in use that exceed the capacity of the hosts RAM modules',
  },
  {
    id: 18.16,
    question: 'dd',
    answer: 'A Linux command that makes a bit-by-bit copy of an input file, typically used for disk imaging',
  },
  {
    id: 18.17,
    question: 'Provenance',
    answer: 'In digital forensics, being able to trace the source of evidence to a crime scene and show that it has not been tampered with',
  },
  {
    id: 18.18,
    question: 'Write Blocker',
    answer: 'Prevents any data on a disk or volume from being changed by filtering write commands at the driver and OS level',
  },
  {
    id: 18.19,
    question: 'Carving',
    answer: 'The process of recovering file fragments, such as those that may represent deleted or overwritten files',
  },
]
const nineteen = [
  {
    id: 19.00,
    question: 'LESSON 19 - Summarizing Risk Management Concepts',
  },
  {
    id: 19.01,
    question: 'Risk Management',
    answer: 'A process for identifying, assessing, and mitigating vulnerabilities and threats to the essential functions that a business must perform to serve its customers',
  },
  {
    id: 19.02,
    question: 'Likelihood',
    answer: 'The probability of a threat being realized',
  },
  {
    id: 19.03,
    question: 'Impact',
    answer: 'The severity of the risk if realized as a security incident',
  },
  {
    id: 19.04,
    question: 'Quantitative Risk Assessment',
    answer: 'Aims to assign concrete, often monetary, values to each risk factor',
  },
  {
    id: 19.05,
    question: 'SLE - Single Loss Expectancy',
    answer: 'The amount that would be lost in a single occurrence of the risk factor, Reached by multiplying the value of an asset by an Exposure Factor (EF)',
  },
  {
    id: 19.06,
    question: 'EF - Exposure Factor',
    answer: 'The percentage of the asset value that would be lost in an incident',
  },
  {
    id: 19.07,
    question: 'ARO - Annualized Rate of Occurence',
    answer: 'How many times a risk is likely to occur within a year',
  },
  {
    id: 19.08,
    question: 'ALE - Annualized Loss Expectancy',
    answer: 'The amount that would be lost over the course of a year. Reached by multiplying the SLE by the ARO',
  },
  {
    id: 19.09,
    question: 'Qualitative Risk Assessment',
    answer: 'Seeks out peoples opinions on which risk factors are significant, uses simple categories like High Value, Medium Value, Low Value; often use "Traffic Light" grids with red, yellow, and green colors',
  },
  {
    id: 19.10,
    question: 'Inherent Risk',
    answer: 'The level of risk before any type of mitigation has been attempted',
  },
  {
    id: 19.11,
    question: 'Risk Mitigation',
    answer: 'The overall process of reducing exposure to or the effects of risk factors',
  },
  {
    id: 19.12,
    question: 'Risk Deterrence',
    answer: 'When you deploy a countermeasure that reduces exposure to a threat or vulnerability',
  },
  {
    id: 19.13,
    question: 'Risk Avoidance',
    answer: 'You stop doing the activity that is risk-bearing',
  },
  {
    id: 19.14,
    question: 'Risk Transference',
    answer: 'Assigning risk to a third party, such as an insurance company or a contract with a supplier that defines liabilities',
  },
  {
    id: 19.15,
    question: 'Risk Acceptance',
    answer: 'No countermeasures are put in place either because the level of risk does not justify the cost or because there will be unavoidable delay before the countermeasures are deployed',
  },
  {
    id: 19.16,
    question: 'Residual Risk',
    answer: 'The remaining risk after specific mitigation, transference, or acceptance measures have been applied',
  },
  {
    id: 19.17,
    question: 'Risk Appetite',
    answer: 'A strategic assessment of what level of residual risk is tolerable',
  },
  {
    id: 19.18,
    question: 'Control Risk',
    answer: 'A measure of how much less effective a security control has become over time',
  },
  {
    id: 19.19,
    question: 'Risk Register',
    answer: 'A document showing the results of risk assessments in a comprehensible format',
  },
  {
    id: 19.20,
    question: 'BIA - Business Impact Analysis',
    answer: 'The process of assessing what losses (impacts) might occur for a range of threat scenarios',
  },
  {
    id: 19.21,
    question: 'MEF - Mission Essential Function',
    answer: 'A business function that cannot be deferred, org must be able to perform the function as close to continuously as possible; if it goes down, it must be restored first',
  },
  {
    id: 19.22,
    question: 'PBF - Primary Business Function',
    answer: 'Functions that act as support for the business or an MEF but are not critical in themselves',
  },
  {
    id: 19.23,
    question: 'MTD - Maximum Tolerable Downtime',
    answer: 'The longest period of time that a business function outage may occur for without causing irrecoverable business failure',
  },
  {
    id: 19.24,
    question: 'RTO - Recovery Time Objective',
    answer: 'The period following a disaster that an individual IT system may remain offline; represents the amount of time it takes to identify that there is a problem and then perform recovery',
  },
  {
    id: 19.25,
    question: 'WRT - Work Recovery Time',
    answer: 'Following systems recovery, there may be additional work to reintegrate different systems, test overall functionality, and brief system users on any changes or different working practices so that the business function is again fully supported',
  },
  {
    id: 19.26,
    question: 'RPO - Recovery Point Objective',
    answer: 'The amount of data loss that a system can sustain, measured in time',
  },
  {
    id: 19.27,
    question: 'Asset Types',
    answer: 'People (employees) / Tangible (buildings, equipment) / Intangible (ideas, reputation) / Procedures (supply chains, SOPs)',
  },
  {
    id: 19.28,
    question: 'SPoF - Single Point of Failure',
    answer: 'An asset that causes the entire workflow to fail if it is damaged or otherwise not available',
  },
  {
    id: 19.29,
    question: 'MTTF - Mean Time to Failure',
    answer: 'The expected lifetime of a non-repairable asset. Calculation: Total time divided by number of devices',
  },
  {
    id: 19.30,
    question: 'MTBF - Mean Time Between Failures',
    answer: 'The expected usage time of a repairable asset between needing to be repaired again. Calculation: Total time divided by number of failures',
  },
  {
    id: 19.31,
    question: 'MTTR - Mean Time to Repair',
    answer: 'Average time taken to correct a fault so that the system is restored to full operation - important in determining overall RTO',
  },
  {
    id: 19.32,
    question: 'DRP - Disaster Recovery Plan',
    answer: 'Describe the specific procedures to follow to recover a system or site to a working state following a disaster-level event',
  },
]
const twenty = [
  {
    id: 20.00,
    question: 'LESSON 20 - Implementing Cybersecurity Resilience',
  },
  {
    id: 20.01,
    question: 'HA - High Availability',
    answer: 'The property that defines how closely systems approach the goal of providing data availability 100 percent of the time while maintaining a high level of system performance',
  },
  {
    id: 20.02,
    question: 'Availability 99%',
    answer: 'Downtime 87:36:00',
  },
  {
    id: 20.03,
    question: '99.9% / 99.99% / 99.999% / 99.9999%',
    answer: '08:45:36 / 00:52:34 / 00:05:15 / 00:00:32',
  },
  {
    id: 20.04,
    question: 'Scaling Out',
    answer: 'Adding more resources in parallel with existing resources',
  },
  {
    id: 20.05,
    question: 'Scaling Up',
    answer: 'Increasing the power',
  },
  {
    id: 20.06,
    question: 'Fault Tolerant System',
    answer: 'A system that can experience failures and continue to provide the same (or nearly the same) level of service',
  },
  {
    id: 20.07,
    question: 'Redundant Component',
    answer: 'One that is not essential to the normal function of a system but that allows the system to recover from the failure of another component',
  },
  {
    id: 20.08,
    question: 'Brownout',
    answer: 'An intentional or unintentional drop in voltage in an electrical power supply system',
  },
  {
    id: 20.09,
    question: 'PDU - Power Distribution Unit',
    answer: 'Advanced strip socket that provides filtered output voltage',
  },
  {
    id: 20.10,
    question: 'UPS - Uninterruptible Power Supply',
    answer: 'Battery bank based power supply that will provide a temporary power source in the event of a blackout (complete power loss)',
  },
  {
    id: 20.11,
    question: 'Backup Power Generator',
    answer: 'Can provide power to the whole building, often for several days; most use diesel, propane, or natural gas as a fuel source',
  },
  {
    id: 20.12,
    question: 'NIC Teaming',
    answer: 'AKA adapter teaming, means that the server is installed with multiple NICs, or NICs with multiple ports, or both; each port is connected to separate network cabling',
  },
  {
    id: 20.13,
    question: 'RAID - Redundant Array of Independent Disks',
    answer: 'Specifications that support redundancy and fault tolerance for different configurations of multipledevice storage systems',
  },
  {
    id: 20.14,
    question: 'Striping',
    answer: 'Splitting the flow of data into blocks and then writing these blocks across the RAID one by one; improves performance',
  },
  {
    id: 20.15,
    question: 'Mirroring',
    answer: 'Identical copies of data are stored on the RAID members simultaneously; improves redundancy',
  },
  {
    id: 20.16,
    question: 'Parity',
    answer: 'Used for fault tolerance by calculating the data in two drives and storing the results on a third',
  },
  {
    id: 20.17,
    question: 'RAID 0',
    answer: 'stripes data evenly across two or more disks, without parity information, redundancy, or fault tolerance',
  },
  {
    id: 20.18,
    question: 'RAID 1',
    answer: 'Mirroring - Data is written to two disks at the same time, so if one fails there is a backup copy; drawback is storage efficiency is only 50%',
  },
  {
    id: 20.19,
    question: 'RAID 5',
    answer: 'Striping with parity - Data is written across 3 or more disks, but if ONE disk fails the volume will continue; better storage than RAID 1',
  },
  {
    id: 20.20,
    question: 'RAID 6',
    answer: 'Double parity - Like RAID 5 but with an extra parity stripe; allows the volume to continue when TWO disks fail',
  },
  {
    id: 20.21,
    question: 'Multipath',
    answer: 'Overprovisioning controllers and cabling so that a host has failover connections to storage media',
  },
  {
    id: 20.22,
    question: 'Geographical Dispersal',
    answer: 'Refers to data replicating hot and warm sites that are physically distant from one another',
  },
  {
    id: 20.23,
    question: 'Asynchronous Replication',
    answer: 'Writes data to the primary storage first, and then copies data to the replicas at scheduled intervals',
  },
  {
    id: 20.24,
    question: 'Synchronous Replication',
    answer: 'Write data to all replicas simultaneously; therefore, all replicas should always have the same data all of the time',
  },
  {
    id: 20.25,
    question: 'Full Backup',
    answer: 'Includes all selected files and directories; attribute is cleared',
  },
  {
    id: 20.26,
    question: 'Incremental Backup',
    answer: 'Includes any new files, as well as files modified since the last backup; attribute is cleared',
  },
  {
    id: 20.27,
    question: 'Differential Backup',
    answer: 'Includes all new and modified files since the last full backup; attribute is not cleared',
  },
  {
    id: 20.28,
    question: 'Snapshot',
    answer: 'A point-in-time copy of data maintained by the file system; a backup program can use the snapshot rather than live data to perform the backup',
  },
  {
    id: 20.29,
    question: 'VSS - Volume Shadow Copy Service',
    answer: 'A Windows service that enables shadow copies and allows copying files that are open, essentially taking a snapshot of the data',
  },
  {
    id: 20.30,
    question: 'Image Backup',
    answer: 'Made by duplicating an OS installation; this can be done either from a physical hard disk or from a VMs virtual hard disk',
  },
  {
    id: 20.31,
    question: 'NAS - Network Attached Storage',
    answer: 'A specially configured type of server that makes RAID storage available over common network protocols, such as Windows File Sharing (SMB) or FTP; file-level',
  },
  {
    id: 20.32,
    question: 'SAN - Storage Area Network',
    answer: 'A high-speed fiber optic network of storage devices built from technologies such as Fibre Channel, Small Computer System Interface (SCSI), or Infiniband; block-level',
  },
  {
    id: 20.33,
    question: 'Order of Restoration',
    answer: 'The sequence in which different systems must be reinstated in order to avoid additional power, network, OS, or app problems',
  },
  {
    id: 20.34,
    question: 'Order of Restoration (actual order)',
    answer: '1. Power delivery systems / 2. Switch infrastructure, routing appliances / 3. Network security appliances / 4. Critical network servers (DHCP, DNS, NTP) / 5. Back-end/Middleware, verify data integrity / 6. Front-end applications / 7. Client workstations, devices, browser access',
  },
  {
    id: 20.35,
    question: 'Nonpersistence',
    answer: 'Means that any given instance is completely static in terms of processing function',
  },
  {
    id: 20.36,
    question: 'Configuration Management',
    answer: 'Ensures that each component of infrastructure is in a trusted state that has not diverged from its documented properties',
  },
  {
    id: 20.37,
    question: 'Service Assets',
    answer: 'Things, processes, or people that contribute to the delivery of an IT service',
  },
  {
    id: 20.38,
    question: 'CI - Configuration Item',
    answer: 'An asset that requires specific management procedures for it to be used to deliver the service',
  },
  {
    id: 20.39,
    question: 'CMS - Configuration Management System',
    answer: 'The tools and databases that collect, store, manage, update, and present information about CIs and their relationships',
  },
  {
    id: 20.40,
    question: 'Standard Naming Convention',
    answer: 'Applying consistent names and labels to assets and digital resources/identities within a configuration management system',
  },
  {
    id: 20.41,
    question: 'Active Defense',
    answer: 'Engaging with the adversary, maybe using honeypots/nets/files, or disruption strategies',
  },
  {
    id: 20.42,
    question: 'Fake Telemetry',
    answer: 'Deception strategy that returns spoofed data in response to network probes',
  },
  {
    id: 20.43,
    question: 'DNS Sinkhole',
    answer: 'A DNS server that gives out a false result for a domain name, used to route suspicious traffic to something like a honeynet',
  },
]
const twentyone = [
  {
    id: 21.00,
    question: 'LESSON 21 - Explaining Physical Security',
  },
  {
    id: 21.01,
    question: 'Physical Access Controls',
    answer: 'Security measures that restrict and monitor access to specific physical areas or assets',
  },
  {
    id: 21.02,
    question: 'Industrial Camouflage',
    answer: 'Methods of disguising the nature and purpose of buildings or parts of buildings',
  },
  {
    id: 21.03,
    question: 'Turnstile',
    answer: 'A type of gateway that only allows one person through at a time',
  },
  {
    id: 21.04,
    question: 'Mantrap / Access Control Vestibule',
    answer: 'Where one gateway leads to an enclosed space protected by another barrier',
  },
  {
    id: 21.05,
    question: 'Skimming',
    answer: 'Using a counterfeit card reader to capture card details, which are then used to program a duplicate',
  },
  {
    id: 21.06,
    question: 'USB Data Blocker',
    answer: 'Mitigate against juice jacking attacks by preventing any sort of data transfer when the smartphone or laptop is connected to a charge point',
  },
  {
    id: 21.07,
    question: 'Robot Sentries',
    answer: 'Surveillance systems (and in some cases weapon systems) can be mounted on a wholly or partially autonomous robot',
  },
  {
    id: 21.08,
    question: 'Challenge Policy',
    answer: 'Sets out what type of response is appropriate in given situations and helps to defeat social engineering attacks',
  },
  {
    id: 21.09,
    question: 'Air Gap',
    answer: 'A type of network isolation that physically separates a network from all other networks',
  },
  {
    id: 21.10,
    question: 'Vault',
    answer: 'A room that is hardened against unauthorized entry by physical means, such as drilling or explosives',
  },
  {
    id: 21.11,
    question: 'Faraday Cage',
    answer: 'A charged conductive mesh cage that blocks signals from entering or leaving the area',
  },
  {
    id: 21.12,
    question: 'Hot Aisle / Cold Aisle',
    answer: 'Servers are placed back-to-back not front-to-back, so that the warm exhaust from one bank of servers is not forming the air intake for another bank',
  },
  {
    id: 21.13,
    question: 'What class of fire extinguiser can be used where the risk of electric shock makes others unsuitable?',
    answer: 'Class C',
  },
  {
    id: 21.14,
    question: 'Pulping',
    answer: 'Taking shredded remains and mixing them with water as a further form of data destruction',
  },
  {
    id: 21.15,
    question: 'Degaussing',
    answer: 'HDD only! Exposing a hard disk to a powerful electromagnet disrupts the magnetic pattern that stores the data on the disk surface',
  },
  {
    id: 21.16,
    question: 'Zero Filling',
    answer: 'Most basic type of data overwriting which sets each bit to zero',
  },
  {
    id: 21.17,
    question: 'SE - Secure Erase',
    answer: 'On HDDs, performs a single pass of zero filling. On SSDs, this command marks all blocks as empty',
  },
  {
    id: 21.18,
    question: 'ISE - Instant Secure Erase',
    answer: 'Only for SEDs; aka crypto erase. When this command is given, the MEK of the SED is erased, rendering the data unrecoverable',
  },
]
const ports = [
  {
    id: 0.01,
    question: '20',
    answer: 'FTP Data / TCP',
  },
  {
    id: 0.02,
    question: '21',
    answer: 'FTP Control / TCP',
  },
  {
    id: 0.03,
    question: '22',
    answer: 'SSH SFTP / TCP',
  },
  {
    id: 0.04,
    question: '23',
    answer: 'Telnet / TCP',
  },
  {
    id: 0.05,
    question: '25',
    answer: 'SMTP / TCP',
  },
  {
    id: 0.06,
    question: '49',
    answer: 'TACACS+ / TCP',
  },
  {
    id: 0.07,
    question: '67',
    answer: 'BOOTP DHCP Server / UDP',
  },
  {
    id: 0.08,
    question: '68',
    answer: 'BOOTP DHCP Client / UDP',
  },
  {
    id: 0.09,
    question: '69',
    answer: 'TFTP / UDP',
  },
  {
    id: 0.10,
    question: '80',
    answer: 'HTTP / TCP',
  },
  {
    id: 0.11,
    question: '110',
    answer: 'POP / TCP',
  },
  {
    id: 0.12,
    question: '123',
    answer: 'NTP SNTP / UDP',
  },
  {
    id: 0.13,
    question: '143',
    answer: 'IMAP / TCP',
  },
  {
    id: 0.14,
    question: '161',
    answer: 'SNMP / UDP',
  },
  {
    id: 0.15,
    question: '162',
    answer: 'SNMP Trap / UDP',
  },
  {
    id: 0.16,
    question: '389',
    answer: 'LDAP / TCP UDP',
  },
  {
    id: 0.17,
    question: '443',
    answer: 'HTTPS / TCP',
  },
  {
    id: 0.18,
    question: '445',
    answer: 'SMB / TCP',
  },
  {
    id: 0.19,
    question: '514',
    answer: 'Syslog / UDP',
  },
  {
    id: 0.20,
    question: '546',
    answer: 'DHCPv6 Client / UDP',
  },
  {
    id: 0.21,
    question: '547',
    answer: 'DHCPv6 Server / TCP',
  },
  {
    id: 0.22,
    question: '587',
    answer: 'SMTPS / TCP',
  },
  {
    id: 0.23,
    question: '636',
    answer: 'LDAPS / TCP',
  },
  {
    id: 0.235,
    question: '993',
    answer: 'IMAPS / TCP',
  },
  {
    id: 0.24,
    question: '995',
    answer: 'POP3S / TCP',
  },
  {
    id: 0.25,
    question: '1433',
    answer: 'MS SQL Server / TCP',
  },
  {
    id: 0.26,
    question: '1521',
    answer: 'SQL Net / TCP',
  },
  {
    id: 0.27,
    question: '1645',
    answer: 'RADIUS Authentication / UDP',
  },
  {
    id: 0.28,
    question: '1646',
    answer: 'RADIUS Accounting / UDP',
  },
  {
    id: 0.29,
    question: '1812',
    answer: 'RADIUS Authentication / UDP',
  },
  {
    id: 0.30,
    question: '1813',
    answer: 'RADIUS Accounting / UDP',
  },
  {
    id: 0.31,
    question: '3306',
    answer: 'MySQL / TCP',
  },
  {
    id: 0.32,
    question: '3389',
    answer: 'RDP / TCP',
  },
  {
    id: 0.33,
    question: '5004',
    answer: 'RTP / UDP',
  },
  {
    id: 0.34,
    question: '5005',
    answer: 'RTCP / UDP',
  },
  {
    id: 0.35,
    question: '5060',
    answer: 'SIP / TCP UDP',
  },
  {
    id: 0.36,
    question: '5061',
    answer: 'SIPS / TCP UDP',
  },
]
const net_one = [
  {
    id: 1.00,
    question: 'LESSON 1 - OSI Model',
  },
  {
    id: 1.01,
    question: 'OSI Model',
    answer: 'Open Systems Interconnection. Please Do Not Throw Sausage Pizza Away. Physical / Data Link / Network / Transport / Session / Presentation / Application',
  },
  {
    id: 1.02,
    question: 'ISO',
    answer: 'International Organization for Standardization',
  },
  {
    id: 1.03,
    question: 'PDU',
    answer: 'Protocol Data Unit. Includes the Headers and Payload',
  },
  {
    id: 1.04,
    question: 'HTTP / HTTPS',
    answer: 'HyperText Transfer Protocol (HTTPS: Secure)',
  },
  {
    id: 1.05,
    question: 'TCP / IP',
    answer: 'Transport Control Protocol. Added at the transport layer. That segment is then wrapped in an IP header',
  },
  {
    id: 1.06,
    question: 'Encapsulation',
    answer: 'The sender adds various functionality and features to the data transmission, including security and reliability. OSI Model top down',
  },
  {
    id: 1.07,
    question: 'De-encapsulation',
    answer: 'The receiver removes information from the package in order to obtain the original payload. OSI Model bottom up',
  },
  {
    id: 1.08,
    question: 'Physical Layer',
    answer: 'The physical connections. Devices: cables, transceivers, repeaters, hub, antennas',
  },
  {
    id: 1.09,
    question: 'Data Link Layer',
    answer: 'Exchanges PDUs as frames using hardware addresses within local network segment. Devices: ethernet switch, network interface card (NIC), bridge, wireless access point (WAP)',
  },
  {
    id: 1.10,
    question: 'Network Layer',
    answer: 'Forwards packets via routers using logical network addresses (IP addresses). Devices: router, basic firewall',
  },
  {
    id: 1.11,
    question: 'Transport Layer',
    answer: 'Host-to-Host. Identify applications using port numbers. Devices: ports, load balancer, advanced firewall, intrusion detection system (IDS)',
  },
  {
    id: 1.12,
    question: 'Session Layer',
    answer: 'Represents functions that administer establishing a dialog, managing data transfer, and ending the dialog session',
  },
  {
    id: 1.13,
    question: 'Presentation Layer',
    answer: 'Transforms data between the format required for the network and the format required for the application',
  },
  {
    id: 1.14,
    question: 'Application Layer',
    answer: 'Interface for software programs',
  },
  {
    id: 1.15,
    question: 'LAN',
    answer: 'Local Area Network. Network in a single location',
  },
  {
    id: 1.16,
    question: 'SOHO',
    answer: 'Small Office Home Office. Small number of hosts that rely on a single integrated appliance (e.g. router). That appliance usually combines a modem, switch, wireless access point, router and firewall in one',
  },
  {
    id: 1.17,
    question: 'WAN',
    answer: 'Wide Area Network. Different geographic regions but with shared links. A network of networks',
  },
  {
    id: 1.18,
    question: 'SOHO Router Physical Layer',
    answer: 'RJ-45 ports, radio antennas, modem',
  },
  {
    id: 1.19,
    question: 'SOHO Router Data Link Layer',
    answer: 'Ethernet switch, wireless access point, MAC addresses',
  },
  {
    id: 1.20,
    question: 'MAC',
    answer: 'Media Access Control hardware addresses identify each interface',
  },
  {
    id: 1.21,
    question: 'SOHO Router Network Layer',
    answer: 'Makes forwarding decisions between local private network and public internet. Zones are distinguished by IP addresses. Local network uses private IPs. DHCP server allocates unique IPs to each host',
  },
  {
    id: 1.22,
    question: 'DHCP',
    answer: 'Dynamic Host Configuration Protocol',
  },
  {
    id: 1.23,
    question: 'IANA / ICANN',
    answer: 'Internet Assigned Numbers Authority - IP addresses and top-level domains. Internet Corporation for Assigned Names and Numbers',
  },
  {
    id: 1.24,
    question: 'IETF',
    answer: 'Internet Engineering Task Force - standards, services and protocols',
  },
  {
    id: 1.26,
    question: 'PSTN',
    answer: 'Public Switched Telephone Network. Facilitates SOHO internet access',
  },
  {
    id: 1.27,
    question: 'Hexadecimal',
    answer: 'Base 16 numbering system. 0-9 & A-F. A=10, B=11, C=12, D=13, E=14, F=15, FF=255',
  },
]
const net_two = [
  {
    id: 2.00,
    question: 'LESSON 2 - Ethernet Cabling',
  },
  {
    id: 2.01,
    question: 'Bandwidth',
    answer: 'Electromagnetic carrier wave with a range of frequencies',
  },
  {
    id: 2.02,
    question: 'Copper Cable',
    answer: 'Twisted pair and coaxial types. Attenuation. Twisted pair Cat cable standards',
  },
  {
    id: 2.03,
    question: 'Fiber Optic Cable',
    answer: 'Single Mode (SMF) and Multimode (MMF) types. Optical Mode (OM) category designations',
  },
  {
    id: 2.04,
    question: 'Attenuation',
    answer: 'Loss of signal strength over length. Usually refers to copper',
  },
  {
    id: 2.05,
    question: 'IEEE',
    answer: 'Institute of Electrical and Electronics Engineers',
  },
  {
    id: 2.06,
    question: 'xBASE-y',
    answer: 'Ethernet media specifications using a three-part convention. 1) the bit rate in megabits (Mbps) or gigabits (Gbps) per second. 2) the signal mode, all mainstream types nowadays use baseband. 3) a designator for the media type (e.g. cable type)',
  },
  {
    id: 2.07,
    question: '802.3',
    answer: 'Ethernet standards written by the IEEE',
  },
  {
    id: 2.08,
    question: 'CSMA/CD',
    answer: 'Carrier Sense Multiple Access with Collision Detection. Detect collision on Tx and Rx simultaneously',
  },
  {
    id: 2.09,
    question: 'Half-Duplex / Full-Duplex',
    answer: 'Half-duplex allows one-way traffic only. Full-duplex enables two-way traffic simultaneously',
  },
  {
    id: 2.10,
    question: '100BASE-TX Fast Ethernet',
    answer: 'CSMA/CD, Cat 5 or better, Maximum length of 100 meters',
  },
  {
    id: 2.11,
    question: 'Gigabit Ethernet',
    answer: 'Requires switches, supports 100 meters links over twisted-pair. Mainstream choice for office networks',
  },
  {
    id: 2.12,
    question: '10 Gbps & 40 Gbps',
    answer: 'Requires shielded/screened cable for longer runs. Used in datacenters and workstations with high bandwidth requirements',
  },
  {
    id: 2.13,
    question: 'Unshielded Twisted Pair - UTP',
    answer: 'Balanced pairs and twist rate to mitigate interference and crosstalk.',
  },
  {
    id: 2.14,
    question: 'Screened Cable',
    answer: 'Outer foil shield around all pairs. Screened Twisted Pair (ScTP) / Foiled Unshielded Twisted Pair (F/UTP) / Foiled Twisted Pair (FTP)',
  },
  {
    id: 2.15,
    question: 'Shielded and Screened Cable',
    answer: 'Outer braid around all pairs. Foil around each pair. Shielded foiled twisted pair (S/FTP)',
  },
  {
    id: 2.16,
    question: 'Cat 5',
    answer: 'Legacy installations only',
  },
  {
    id: 2.17,
    question: 'Cat 5e',
    answer: '1 Gbps over 100 m',
  },
  {
    id: 2.18,
    question: 'Cat 6',
    answer: '10 Gbps over 55 m',
  },
  {
    id: 2.19,
    question: 'Cat 6A',
    answer: '10 Gbps over 100 m',
  },
  {
    id: 2.20,
    question: 'Cat 7',
    answer: 'Screened and shielded, uses special connectors',
  },
  {
    id: 2.21,
    question: 'Cat 8',
    answer: '40 Gbps top-of-rack datacenter applications',
  },
  {
    id: 2.22,
    question: 'RJ-45',
    answer: '4-pair cable used for ethernet',
  },
  {
    id: 2.23,
    question: 'RJ-11',
    answer: '2-pair cable used for telephone',
  },
  {
    id: 2.23,
    question: 'RJ-45 EIA/TIA 568 A',
    answer: 'Pin 1 Green/White, Pin 2 Green',
  },
  {
    id: 2.24,
    question: 'RJ-45 EIA/TIA 568 B',
    answer: 'Pin 1 Orange/White, Pin 2 Orange',
  },
  {
    id: 2.25,
    question: 'Plenum-rated',
    answer: 'For HVAC systems. Emits minimal smoke and self-extinguishing',
  },
  {
    id: 2.26,
    question: 'Riser-rated',
    answer: 'For between two floors',
  },
  {
    id: 2.27,
    question: 'Coaxial Connector',
    answer: 'Core and mesh conductors. Used for cable broadband. F-type connectors',
  },
  {
    id: 2.28,
    question: 'Twinaxial Connector',
    answer: 'Two core conductors plus mesh. Used in datacenters. Direct attach copper (DAC) transceivers',
  },
]
const net_three = [
  {
    id: 3.00,
    question: 'LESSON 3 - Ethernet Switching',
  },
  {
    id: 3.01,
    question: 'Repeater',
    answer: 'To overcome distance limitations. Works at layer 1. Copper and fiber optic',
  },
  {
    id: 3.02,
    question: 'Media Converter',
    answer: 'Transitions between media types. Works at layer 1. Fiber to copper. Single mode to multimode',
  },
  {
    id: 3.03,
    question: 'Hub',
    answer: 'Legacy intermediate system for ethernet. Works at layer 1. All ports in the same collision domain',
  },
  {
    id: 3.04,
    question: 'Bridges',
    answer: 'Works at layer 2. Ports in separate collision domains. Ports in same broadcast domain. Tracks MAC addresses',
  },
  {
    id: 3.05,
    question: 'Switches at Layer 2',
    answer: 'Replaces hub and bridges and eliminates performance drag. Each port a separate collision domain. Allows full-duplex. All ports in same broadcast domain unless VLANs have been configured. Uses MAC addresses',
  },
  {
    id: 3.06,
    question: 'Network Interface Cards - NIC',
    answer: 'Transceiver component works at layer 1. Card logic and driver work at layer 2. Copper or fiber optic. MAC address / Ethernet address (EA) / Extended unique identifier (EUI)',
  },
  {
    id: 3.07,
    question: 'Ethernet Frame',
    answer: 'Preamble / SFD / Destination MAC / Source MAC / Ether type / Payload / FCS',
  },
  {
    id: 3.08,
    question: 'MAC Address Format',
    answer: '48 bit ID in hex notation (e.g. 00:60:8c:3a:bc). Burned-in IEEE address according to manufacturer. Broadcast address = ff:ff:ff:ff:ff:ff',
  },
  {
    id: 3.09,
    question: 'MTU',
    answer: 'Maximum Transmission Unit. normally up to 1500-byte payload. 64 bytes minimum, if not 64 bytes padded with redundant data. Including headers max size 1518 bytes (or jumbo frames)',
  },
  {
    id: 3.10,
    question: 'Packet Sniffer',
    answer: 'Protocol analyzer decodes frames, headers and data',
  },
  {
    id: 3.11,
    question: 'SPAN',
    answer: 'Switched Port Analyzer',
  },
  {
    id: 3.12,
    question: 'TAP',
    answer: 'Test Access Point. Passive or active',
  },
  {
    id: 3.13,
    question: 'tcpdump',
    answer: 'A command line packet analyzer',
  },
  {
    id: 3.14,
    question: 'Wireshark',
    answer: 'GUI packet capture and analysis utility',
  },
  {
    id: 3.15,
    question: 'Unmanaged Switch',
    answer: 'Standalone and run without any configuration',
  },
  {
    id: 3.16,
    question: 'Stackable Switch',
    answer: 'Can be connected together and operate as a group',
  },
  {
    id: 3.17,
    question: 'Modular Switch',
    answer: 'Can be configured with different numbers and ports. Includes slots for plug-in cards',
  },
  {
    id: 3.18,
    question: 'Fixed Switch',
    answer: 'Set number of ports and cannot be changed',
  },
  {
    id: 3.19,
    question: 'Switch - User EXEC',
    answer: 'Read-only mode. Report configuration, show system status, run basic troubleshooting',
  },
  {
    id: 3.20,
    question: 'Switch - Privileged EXEC',
    answer: 'Allows user to reboot, shut down, backup, restore',
  },
  {
    id: 3.21,
    question: 'Switch - Configuration Mode',
    answer: 'Allows user to write configuration updates',
  },
  {
    id: 3.22,
    question: 'Auto MDI/MDI-X',
    answer: 'Media dependant interface (MDI). Transmits on pins 1 and 2, recieves on pins 3 and 6. Senses configuration regardless of cable',
  },
  {
    id: 3.23,
    question: 'MAC Address Table',
    answer: 'Database of MAC addresses associated with each port. Switch flood frames when destination MAC is unknown',
  },
  {
    id: 3.24,
    question: 'Port Security',
    answer: 'Specify static list of allowed MACs. Accept giver number of sticky MACs. Specify enforcement action for policy violation',
  },
  {
    id: 3.25,
    question: 'Port Aggregation / NIC Teaming',
    answer: 'Combine multiple cabled links into a single logical channel. Aggregates link bandwidth. Provides redundancy',
  },
  {
    id: 3.26,
    question: 'LACP',
    answer: 'Link Aggregation Control Protocol. Auto negotiates the bonded link between switch ports and end system, detects configuration errors, recovers from the failure of a physical link',
  },
  {
    id: 3.27,
    question: 'Port Mirroring',
    answer: 'Configure switch to copy unicast frames for legitimate packet sniffing and network analysis. Switched port analyzer (SPAN). Attach sniffer/monitor to destination port',
  },
  {
    id: 3.28,
    question: 'Jumbo Frames',
    answer: 'MTU as high as 9000 bytes. Ofter used in storage area networks',
  },
  {
    id: 3.29,
    question: 'Flow Control',
    answer: 'Allows server to pause traffic',
  },
  {
    id: 3.30,
    question: 'PoE 802.3af',
    answer: 'Power Over Ethernet',
  },
  {
    id: 3.31,
    question: 'PoE 802.3at',
    answer: 'Power Over Ethernet plus (PoE+)',
  },
  {
    id: 3.32,
    question: 'PoE 802.3bt',
    answer: 'Ultra Power Over Ethernet',
  },
]
const net_four = [
  {
    id: 4.00,
    question: 'LESSON 4 - Troubleshooting Ethernet Networks',
  },
  {
    id: 4.01,
    question: '7 Step Network Troubleshooting Methodology', 
    answer: '1. Identify problem / 2. Establish theory / 3. Test theory / 4. Establish plan of action / 5. Implement solution / 6. Verify functionality / 7. Document findings',
  },
  {
    id: 4.02,
    question: 'Identify the Problem', 
    answer: 'Gather information: Identify scope and prioritization, analyze logs, verify with other technicians. Identify symptoms and duplicate problem, Approach multiple problems individually',
  },
  {
    id: 4.03,
    question: 'Question Users', 
    answer: 'Question the user with open and closed questions. Determine if anything has changed',
  },
  {
    id: 4.04,
    question: 'Establish a Theory of Probable Cause', 
    answer: 'Establish a theory from known symptoms: question the obvious, prove functionality systematically. OSI Model approach: layer by layer, top-to-bottom, bottom-to-top, divide and conquer',
  },
  {
    id: 4.05,
    question: 'Test the Theory to Determine Cause', 
    answer: 'Isolate the problem to a single component or system. Run tests to prove theory. Escalate if necessary: problem too difficult, warranty or supplier issue, scope too large, customer issues',
  },
  {
    id: 4.06,
    question: 'Establish a Plan of Action', 
    answer: 'Repair, replace, ignore. Plan changes carefully and try to anticipate effects',
  },
  {
    id: 4.07,
    question: 'Implement the Solution', 
    answer: 'Change management and authorization, is escalation required? Notification and scheduling. Change control',
  },
  {
    id: 4.08,
    question: 'Verify Full System Functionality', 
    answer: 'Consider impact on overall system functionality. Test that the problem is fixed and that the system functions normally. Identify preventive measures that will prevent from reoccurring',
  },
  {
    id: 4.09,
    question: 'Document Findings, Actions, Outcomes', 
    answer: 'Ticket system is available. Categorize problems and identify trends. Add known issues to knowledge base. Complete all notes professionally',
  },
  {
    id: 4.10,
    question: 'Baud Rate', 
    answer: 'Measures symbol rate in hertz',
  },
  {
    id: 4.11,
    question: 'Throughput', 
    answer: 'Rate at which ALL data and messages arrive at their destination',
  },
  {
    id: 4.12,
    question: 'Goodput', 
    answer: 'Rate at which USEFUL data and messages arrive at their destination',
  },
  {
    id: 4.13,
    question: 'SNR', 
    answer: 'Signal to noise ratio',
  },
  {
    id: 4.14,
    question: 'Cable Issues', 
    answer: 'End system transceiver > patch cord. Permanent link wall port > patch panel. Patch cord > intermediate system port. Test each component, use known good patch cords, use port tester and cabling test tools',
  },
  {
    id: 4.15,
    question: 'Loopback', 
    answer: 'Test port by transmitting to itself',
  },
  {
    id: 4.16,
    question: 'Status Indicator', 
    answer: 'LEDs on NIC and switch port. Solid green: connected but no activity. Blinking green: connected and active. Blinking amber: continuous blinking indicates a problem (usually collisions). No LED: no detectable link',
  },
  {
    id: 4.17,
    question: 'Cable Tester', 
    answer: 'Verify cable category is appropriate for application. Consider screened / shielded categories. Use test to report detailed characteristics',
  },
  {
    id: 4.18,
    question: 'TDR', 
    answer: 'Time domain reflectometer. Measures length and locates installation problems or faults',
  },
  {
    id: 4.19,
    question: 'Wire Map Tester', 
    answer: 'Check pinouts are correctly wired. Opens, shorts, reversed, crossed, split pairs',
  },
  {
    id: 4.20,
    question: 'Tone Generator (Fox and Hound)', 
    answer: 'Trace cable path and identify cable within a bundle',
  },
  {
    id: 4.21,
    question: 'Issue - Reduced link speed, errors and retransmissions', 
    answer: 'Measure using cable certifier and compare tolerance for cable category',
  },
  {
    id: 4.22,
    question: 'Issue - Signal is too weak at destination', 
    answer: 'Ratio of input to output using logarithms. Absolute value (smaller better) versus margin (larger better)',
  },
  {
    id: 4.23,
    question: 'Issue - Interference', 
    answer: 'Cable placement and electromagnetic interference. Alien crosstalk',
  },
  {
    id: 4.24,
    question: 'Issue - Crosstalk general', 
    answer: 'Interference within cable due to faulty wiring or termination',
  },
  {
    id: 4.25,
    question: 'Crosstalk - Near End (NEXT)', 
    answer: 'Check termination',
  },
  {
    id: 4.26,
    question: 'Crosstalk - Attenuation to Crosstalk Ratio (ACRN)', 
    answer: 'Check link distance, cable quality and faults, external interference',
  },
  {
    id: 4.27,
    question: 'Crosstalk - Attenuation to Crosstalk Ratio, Far End (ACRF)', 
    answer: 'Check cable quality and faults',
  },
  {
    id: 4.28,
    question: 'Crosstalk - Power Sum', 
    answer: 'Check cable suitability for gigabit ethernet and higher',
  },
  {
    id: 4.29,
    question: 'Cable Application Issue - Straight Through', 
    answer: 'Terminated T568A at both ends or T568B at both ends. Used for an uplink (MDI port to MDI-X port)',
  },
  {
    id: 4.30,
    question: 'Cable Application Issue - Crossover', 
    answer: 'Terminated T568A at both ends or T568B at both ends. Host to host or hub to hub. Auto MDI/MDI-X supported',
  },
  {
    id: 4.31,
    question: 'Cable Application Issue - Rollover / Console', 
    answer: 'Used to connect to serial interface of switches and routers',
  },
  {
    id: 4.32,
    question: 'Cable Application Issue - Power Over Ethernet', 
    answer: 'Cable must be sufficient quality',
  },
  {
    id: 4.33,
    question: 'Fiber Optic Cable Testing', 
    answer: 'Test length using optical power meter. Identify faults using a OTDR. Ensure clean environment when splicing / terminating. Match transceiver wavelength and type at ends',
  },
  {
    id: 4.34,
    question: 'OTDR', 
    answer: 'Optical Time Domain Reflectometer',
  },
]
const net_five = [
  {
    id: 5.00,
    question: 'LESSON 5 - IPv4 Addressing',
  },
  {
    id: 5.01,
    question: 'ARP',
    answer: 'Address Resolution Protocol. Determines which MAC is associated with which IP. Windows utility: arp -a; Linux: ip neigh',
  },
  {
    id: 5.02,
    question: 'TCP', 
    answer: 'Transmission Control Protocol',
  },
  {
    id: 5.03,
    question: 'UDP', 
    answer: 'User Datagram Protocol',
  },
  {
    id: 5.04,
    question: 'ICMP/1', 
    answer: 'Internet Control Message Protocol. Status messaging and connectivity testing',
  },
  {
    id: 5.05,
    question: 'IGMP/2', 
    answer: 'Internet Group Messaging Protocol. Multicasting',
  },
  {
    id: 5.06,
    question: 'GRE/47',
    answer: 'To tunnel packets across an intermediate network',
  },
  {
    id: 5.07,
    question: 'ESP/50 and AH/51', 
    answer: 'An encrypted form of IP',
  },
  {
    id: 5.08,
    question: 'EIGRP/88 and OSPF/89', 
    answer: 'Used by routers to exchange information about paths to remote networks',
  },
  {
    id: 5.09,
    question: 'IPv4 Format', 
    answer: 'Encodes a Network ID and Host ID. 32 bit. Divided into four octets usually decimal notation (e.g. 198.51.100.1). Range of values from 0.0.0.0 to 255.255.255.255',
  },
  {
    id: 5.10,
    question: 'Network Masks', 
    answer: 'Accompanies IP address to reveal Network ID part. Dotted decimal or slash notation',
  },
  {
    id: 5.11,
    question: 'Subnet Masks',
    answer: 'Divides an IP network into multiple IP subnets. Designates some host bits as subnet ID bits. Only used within the IP network',
  },
  {
    id: 5.12,
    question: 'Forwarding at Layer 2', 
    answer: 'Switching',
  },
  {
    id: 5.13,
    question: 'Forwarding at Layer 3', 
    answer: 'Routing',
  },
  {
    id: 5.14,
    question: 'Default Gateway', 
    answer: 'Router',
  },
  {
    id: 5.15,
    question: 'Unicast', 
    answer: 'Packet directed to a single destination IP',
  },
  {
    id: 5.16,
    question: 'Multicast',
    answer: 'Packet directed to all interfaces in the local IP network. Hosts join a multicast group. IGMP. Delivery at layer 2',
  },
  {
    id: 5.17,
    question: 'Anycast', 
    answer: 'Group of hosts configured with same IP address. Router forwards to only one node. Used for load balancing and service failover',
  },
  {
    id: 5.18,
    question: 'Broadcast - performance', 
    answer: 'Limit number of hosts within broadcast domain to improve performance. Configure VLANs on switches to map layer 3 broadcast to layer 2',
  },
  {
    id: 5.19,
    question: 'Segmentation - performance', 
    answer: 'Enforce security zones and boundaries. Isolate physical and data link layer segments that se different technologies',
  },
  {
    id: 5.20,
    question: 'Classful Addressing - Class A', 
    answer: '/8',
  },
  {
    id: 5.21,
    question: 'Classful Addressing - Class B',
    answer: '/16',
  },
  {
    id: 5.22,
    question: 'Classful Addressing - Class C', 
    answer: '/24',
  },
  {
    id: 5.23,
    question: 'Private Address Ranges', 
    answer: 'Not routable over the internet: 10.0.0.0 to 10.255.255.255, 172.16.0.0 to 172.31.255.255, 192.168.0.0 to 192.168.255.255',
  },
  {
    id: 5.24,
    question: 'NAT', 
    answer: 'Network Address Translation',
  },
  {
    id: 5.25,
    question: 'APIPA', 
    answer: 'Automatic Private IP Addressing. 169.254.0.0 to 169.254.255.255',
  },
  {
    id: 5.26,
    question: 'Classful Addressing - Class D Multicast and Class E',
    answer: 'Class D: 224.0.0.0 to 239.255.255.255. Class E (experimental) 240.0.0.0 to 255.255.255.255',
  },
  {
    id: 5.27,
    question: 'Loopback Range', 
    answer: '',
  },
  {
    id: 5.28,
    question: 'Classful Addressing - Address Unknown', 
    answer: '0.0.0.0/8',
  },
  {
    id: 5.29,
    question: 'Sunnys Subnet Table video link', 
    answer: 'https://www.youtube.com/watch?v=ecCuyq-Wprc',
  },
]
const net_six = [
  {
    id: 6.00,
    question: 'LESSON 6 - Supporting IPv4 and IPv6 Networks',
  },
  {
    id: 6.01,
    question: 'DHCP',
    answer: 'Dynamic Host Configuration Protocol. Obtain addresses automatically',
  },
  {
    id: 6.02,
    question: 'ipconfig /all',
    answer: 'ipconfig (without switch) will display IP address, subnet mask and default gateway for all network interfaces. /all is complete TCP/IP configuration for each interface, including DHCP and MAC',
  },
  {
    id: 6.03,
    question: 'ICMP',
    answer: 'Internet Control Message Protocol. Used to report errors and send messages about the delivery of a packet. UNICAST',
  },
  {
    id: 6.04,
    question: 'TTL',
    answer: 'Time To Live. Reduced by one every time a packet is forwarded by a router (referred to as a hop). Value shown when packet arrives at destination',
  },
  {
    id: 6.05,
    question: 'ping',
    answer: 'Utility used to test and verify if IP address exists and can accept requests.',
  },
  {
    id: 6.06,
    question: 'ping Error Messaging',
    answer: 'Destination unreachable: does not know how to get to destination. No replay / Request timed out: Unavailable and cannot reply',
  },
  {
    id: 6.07,
    question: 'ping Connectivity Test #1 - ping loopback',
    answer: 'Verify TCP/IP is installed and loaded correctly',
  },
  {
    id: 6.08,
    question: 'ping Connectivity Test #2 - ping host',
    answer: 'Verify local host was added correctly and network adapter is functioning properly',
  },
  {
    id: 6.09,
    question: 'ping Connectivity Test #3 - ping gateway',
    answer: 'Verify gateway is up and running',
  },
  {
    id: 6.10,
    question: 'ping Connectivity Test #4 - ping remote host',
    answer: 'Other hosts on the same subnet to test configuration and link problems',
  },
  {
    id: 6.11,
    question: 'ping Connectivity Test #5 - ping host name',
    answer: 'Verify you can communicate through the router',
  },
  {
    id: 6.12,
    question: 'ping Connectivity Test #6 - establish session',
    answer: '',
  },
  {
    id: 6.13,
    question: 'IGMP',
    answer: 'Internet Group Management Protocol',
  },
  {
    id: 6.14,
    question: 'IPv6',
    answer: '128 bits and space for 340 undecillion unique addresses. 8 16-bit binary numbers',
  },
  {
    id: 6.15,
    question: 'IPv6 Header',
    answer: '',
  },
  {
    id: 6.16,
    question: 'Canonical Notation',
    answer: 'Leading 0s can be ignored. Contiguous 2 series of 0s can be replaced by a :: (use only once!). One series of 0s can be replaced by a single 0',
  },
  {
    id: 6.17,
    question: 'IPv6 Network Prefixes',
    answer: 'Divided into two parts: the first 64 bits are the Network ID, the second 64 bits are the Interface ID',
  },
  {
    id: 6.18,
    question: 'IPv6 Unicast',
    answer: 'First 3 bits (001) indicate address is within global scope. Next 45 bits for regional registries and ISPs. Next 16 bits identify subnet. Final 64 bits are Interface ID',
  },
  {
    id: 6.19,
    question: 'IPv6 Local Link',
    answer: 'Span a single subnet. Link local range is fe80::/10',
  },
  {
    id: 6.20,
    question: 'ND Protocol',
    answer: 'Neighbor Discovery Protocol. Main functions are Address Autoconfiguration, Prefix discovery, Local address resolution, and Redirection. ND replaces ARP in IPv4',
  },
  {
    id: 6.21,
    question: 'SLAAC',
    answer: 'Stateless Address Autoconfiguration. Host generates a link local and tests its uniqueness using ND. Host listens for a router advertisement (RA) and transmits a router solicitation',
  },
  {
    id: 6.22,
    question: 'MLD',
    answer: 'Multicast Listener Discovery. Allows nodes to join a multicast and discover whether other members are present',
  },
  {
    id: 6.23,
    question: 'Tunneling',
    answer: 'Deliver IPv6 packets across an IPv4 network',
  },
  {
    id: 6.24,
    question: 'fe80::/10',
    answer: 'Link Local Unicast',
  },
  {
    id: 6.25,
    question: 'ff00::/8',
    answer: 'Multicast',
  },
  {
    id: 6.26,
    question: 'ff02::/16',
    answer: 'Multicast Link Local',
  },
  {
    id: 6.27,
    question: '::/128',
    answer: 'Unspecified',
  },
  {
    id: 6.28,
    question: '::1/128',
    answer: 'Loopback',
  },
]
const net_seven = [
  {
    id: 7.00,
    question: 'LESSON 7 - Configuring and Troubleshooting Routers',
  },
  {
    id: 7.01,
    question: 'Routing Table Categories', 
    answer: 'Directly connected / paths to remote networks / host routes / default route (0.0.0.0/0 or ::/0)',
  },
  {
    id: 7.02,
    question: 'Packet Forwarding', 
    answer: 'Encapsulation for interface data link protocol. Hop count / TTL',
  },
  {
    id: 7.03,
    question: 'Fragmentation', 
    answer: 'IP is unreliable, connectionless delivery. Packets might be lost, out of sequence, delayed',
  },
  {
    id: 7.04,
    question: 'Convergence', 
    answer: 'All routers agree on network topology',
  },
  {
    id: 7.05,
    question: 'IGP', 
    answer: 'Interior Gateway Protocol. Routing within an autonomous system',
  },
  {
    id: 7.06,
    question: 'EGP', 
    answer: 'Exterior Gateway Protocol. Routing between autonomous systems',
  },
  {
    id: 7.07,
    question: 'RIP', 
    answer: 'Routing Information Protocol. Distance vector. Slow convergence and inefficient updates. Max hop count 15. Classful',
  },
  {
    id: 7.08,
    question: 'RIPv2', 
    answer: 'Classless and uses more efficient multicasts',
  },
  {
    id: 7.09,
    question: 'RIPng', 
    answer: 'IPv6 support',
  },
  {
    id: 7.10,
    question: 'EIGRP', 
    answer: 'Enhanced Interior Gateway Routing Protocol. Classless addressing. Advanced distance vector. Best convergence performance. Runs over IP directly (protocol #88) using multicasts',
  },
  {
    id: 7.11,
    question: 'OSPF', 
    answer: 'Open Shortest Path First. Link state suited to complex private networks. Classless. Runs over IP directly (protocol #89) using multicasts',
  },
  {
    id: 7.12,
    question: 'BGP', 
    answer: 'Border Gateway Protocol. Hybrid or path vector. EGP. Supports routing on internet. Supports classless addressing. Runs over TCP port 179',
  },
  {
    id: 7.13,
    question: 'Administrative Distance', 
    answer: 'Longer prefixes preferred. Determines least-cost path using metrics',
  },
  {
    id: 7.14,
    question: 'VLSM', 
    answer: 'Variable Length Subnet Masks. Uses address space in IPv4 network more efficiently. Uses different mask lengths according to host numbers per subnet',
  },
  {
    id: 7.15,
    question: 'Edge Router', 
    answer: 'Hosts in different IP networks must be separated by router. Edge routers on network perimeter. Customer edge (CE) to provider edge (PE)',
  },
  {
    id: 7.16,
    question: 'Layer 3 Switch', 
    answer: 'Optimized to forward between VLANs',
  },
  {
    id: 7.17,
    question: 'Route command', 
    answer: 'Troubleshoot windows and linux hosts. Verify default gateway. Add static route',
  },
  {
    id: 7.18,
    question: 'traceroute and tracert', 
    answer: 'UDP probes to identify each hop in a path. Increments TTL. Outputs hops, IP address of interface, time taken in milliseconds. tracert is for Windows',
  },
  {
    id: 7.19,
    question: 'Missing Route', 
    answer: 'Use ping and traceroute to identify where network path fails. Check routing table. Review device configuration',
  },
  {
    id: 7.20,
    question: 'Routing Loop Issue', 
    answer: 'Incorrect path info cause packet to circulate until TTL is exhausted. Use traceroute to diagnose',
  },
  {
    id: 7.21,
    question: 'Asymmetrical Routing Issue', 
    answer: 'Return path different than forward path. Inconsistent latency or security appliances drop return packets. Analyze traceroute and investigate routing tables',
  },
  {
    id: 7.22,
    question: 'Low Optical Link Budget Issue', 
    answer: 'Consider physical / data link layers. Poor connectivity across fiber link. Loss budget expresses loss from attenuation, connectors, splices. Loss budget must be less than power budget',
  },
]
const net_eight = [
  {
    id: 8.00,
    question: 'LESSON 8 - Network Topologies and Types',
  },
  {
    id: 8.01,
    question: 'Client-Server', 
    answer: 'Machines are dedicated to a client role or a servers role. Centralized administration',
  },
  {
    id: 8.02,
    question: 'Peer-to-Peer', 
    answer: 'Machines can be configured in both client and server roles. Administration is decentralized',
  },
  {
    id: 8.03,
    question: 'Home / Residential Network', 
    answer: 'Comprised of a router and a few computers, mobile devices, gaming consoles, printers',
  },
  {
    id: 8.04,
    question: 'SOHO', 
    answer: 'Business-oriented network often using a single internet access point to provide connectivity',
  },
  {
    id: 8.05,
    question: 'SME', 
    answer: 'Small and Medium Sized Enterprise network supporting dozens of users',
  },
  {
    id: 8.06,
    question: 'Enterprise LAN', 
    answer: 'Large network with hundreds or thousands of servers and clients',
  },
  {
    id: 8.07,
    question: 'CAN', 
    answer: 'Campus Area Network. A LAN that spans multiple nearby buildings',
  },
  {
    id: 8.08,
    question: 'Data Center', 
    answer: 'A network that hosts only servers and storage, and no end user client devices',
  },
  {
    id: 8.09,
    question: 'MAN', 
    answer: 'Metropolitan Area Network. Cities',
  },
  {
    id: 8.10,
    question: 'WAN', 
    answer: 'A network of networks connected by long distance links',
  },
  {
    id: 8.11,
    question: 'Physical Topology', 
    answer: 'The placement of nodes and the media links between them',
  },
  {
    id: 8.12,
    question: 'Logical Topology', 
    answer: 'Describes the flow of data',
  },
  {
    id: 8.13,
    question: 'Star Topology', 
    answer: 'Each node is connected to a concentrator over dedicated network media',
  },
  {
    id: 8.14,
    question: 'Mesh Topology', 
    answer: 'Each node has a point-to-point link with every other node. The number of links is calculated using N*(N-1)/2. Partial mesh networks are preferred',
  },
  {
    id: 8.15,
    question: 'Ring Topology', 
    answer: 'Each node is connected to its neighbor in a closed loop. Signals are forwarded in one direction only',
  },
  {
    id: 8.16,
    question: 'Bus Topology', 
    answer: 'Each node connects to a shared medium, such as a trunk. Terminators located at each end',
  },
  {
    id: 8.17,
    question: 'Hybrid Topology', 
    answer: 'Different logical and physical topologies. E.g. hierarchical star, hierarchical star-mesh, star of stars, star with ring',
  },
  {
    id: 8.18,
    question: 'Three-tiered Network Hierarchy', 
    answer: 'Access/edge Layer (workgroup switches connect end systems). Distribution/aggregation layer (fault tolerant links). Core layer (network backbone)',
  },
  {
    id: 8.19,
    question: 'Spanning Tree Protocol', 
    answer: 'Prevents switching loops. Designates a single path from any device to the root bridge',
  },
  {
    id: 8.20,
    question: 'BPDU', 
    answer: 'Bridge Protocol Data Unit. STP info is packaged as BPDU multicast frames. Exchanged by devices to determine topology',
  },
  {
    id: 8.21,
    question: '802.1w', 
    answer: 'Rapid STP reduces outages',
  },
  {
    id: 8.22,
    question: 'Switching Loop', 
    answer: 'Can be catastrophic as there is no TTL to expire a frame',
  },
  {
    id: 8.23,
    question: 'Broadcast Storm', 
    answer: 'Occur when switches keep receiving and re-broadcasting continually. Often, cause is when two ports bridged with mismatched patch cord',
  },
  {
    id: 8.24,
    question: 'VLAN', 
    answer: 'Breaks up broadcast domains. Filter traffic between VLAN segments using access control lists (ACLs). Static or dynamic assignment',
  },
  {
    id: 8.25,
    question: '802.1q', 
    answer: 'Trunking. Switches interconnected vis trunk links. VLAN information is transported',
  },
  {
    id: 8.26,
    question: 'Untagged ports', 
    answer: 'Host or access ports. The switch assigns tags, not end systems',
  },
  {
    id: 8.27,
    question: 'Tagged ports', 
    answer: 'Typically trunk link, also used by virtualization hosts',
  },
  {
    id: 8.28,
    question: 'Voice VLAN', 
    answer: 'VoIP bandwidth and latency requirements. Voice VLAN allows VoIP handset to share physical port. Switch assigns PC data to one VLAN and VoIP to another',
  },
]
const net_nine = [
  {
    id: 9.00,
    question: 'LESSON 9 - Transport Layer Protocols',
  },
  {
    id: 9.01,
    question: 'TCP',
    answer: 'Transmission Control Protocol. Guaranteed delivery and can be re-transferred',
  },
  {
    id: 9.02,
    question: '3-Way Handshake',
    answer: 'Client SYN > Server SYN/ACK > Client ACK',
  },
  {
    id: 9.03,
    question: 'Graceful Teardown',
    answer: 'Client sends FIN and enters FIN-WAIT1. Server responds with ACK and enters CLOSE-WAIT. Client receives ACK and enters FIN-WAIT2. Server sends FIN to client and goes to LAST-ACK. Client responds with ACK and enters TIME-WAIT. After a defined period client closes. Server closes when it receives ACK from client',
  },
  {
    id: 9.04,
    question: 'UDP',
    answer: 'User Datagram Protocol. Connectionless and non-guaranteed. Fewer headers and can tolerate lost or out-of-order packets',
  },
  {
    id: 9.05,
    question: 'Port 20',
    answer: 'FTP - File Transfer Protocol - DATA. TCP',
  },
  {
    id: 9.06,
    question: 'Port 21',
    answer: 'FTP - File Transfer Protocol - CONTROL. TCP',
  },
  {
    id: 9.07,
    question: 'Port 22',
    answer: 'SSH - Secure Shell. TCP',
  },
  {
    id: 9.08,
    question: 'Port 23',
    answer: 'Telnet. TCP',
  },
  {
    id: 9.09,
    question: 'Port 25',
    answer: 'SMTP - Simple Mail transfer Protocol. TCP',
  },
  {
    id: 9.10,
    question: 'Port 53',
    answer: 'Domain Name System. TCP / UDP',
  },
  {
    id: 9.11,
    question: 'Port 67',
    answer: 'BOOT DHCP - SERVER. UDP',
  },
  {
    id: 9.12,
    question: 'Port 68',
    answer: 'BOOT DHCP - CLIENT. UDP',
  },
  {
    id: 9.13,
    question: 'Port 69',
    answer: 'TFTP - Trivial File Transfer Protocol. UDP',
  },
  {
    id: 9.14,
    question: 'Port 80',
    answer: 'HTTP. TCP',
  },
  {
    id: 9.15,
    question: 'Port 110',
    answer: 'POP - Post Office Protocol. TCP',
  },
  {
    id: 9.16,
    question: 'Port 123',
    answer: 'NTP - Network Time Protocol. UDP',
  },
  {
    id: 9.17,
    question: 'Port 143',
    answer: 'IMAP - Internet Message Access Protocol. TCP',
  },
  {
    id: 9.18,
    question: 'Port 161',
    answer: 'SNMP - Simple Network Management Protocol. UDP',
  },
  {
    id: 9.19,
    question: 'Port 162',
    answer: 'SNMP - Simple Network Management Protocol - TRAP. UDP',
  },
  {
    id: 9.20,
    question: 'Port 389',
    answer: 'LDAP - Lightweight Directory Access Protocol. TCP / UDP',
  },
  {
    id: 9.21,
    question: 'Port 443',
    answer: 'HTTPS. TCP',
  },
  {
    id: 9.22,
    question: 'Port 445',
    answer: 'SMB - Server Message Block. TCP',
  },
  {
    id: 9.23,
    question: 'Port 514',
    answer: 'Syslog. UDP',
  },
  {
    id: 9.24,
    question: 'Port 546',
    answer: 'DHCPv6 - CLIENT. UDP',
  },
  {
    id: 9.25,
    question: 'Port 547',
    answer: 'DHCPv6 - SERVER. TCP',
  },
  {
    id: 9.26,
    question: 'Port 587',
    answer: 'SMTP - Secure. TCP',
  },
  {
    id: 9.27,
    question: 'Port 636',
    answer: 'LDAP - Secure. TCP',
  },
  {
    id: 9.28,
    question: 'Port 993',
    answer: 'IMAP - Secure. TCP',
  },
  {
    id: 9.29,
    question: 'Port 995',
    answer: 'POP3 - Secure. TCP',
  },
  {
    id: 9.30,
    question: 'Port 1433',
    answer: 'SQL SERVER. TCP',
  },
  {
    id: 9.31,
    question: 'Port 1521',
    answer: 'SQL NET - TCP',
  },
  {
    id: 9.32,
    question: 'Port 3306',
    answer: 'MySQL. TCP',
  },
  {
    id: 9.33,
    question: 'Port 3389',
    answer: 'RDP - Remote Desktop Protocol. TCP',
  },
  {
    id: 9.34,
    question: 'Port 5004',
    answer: 'RTP - Real-Time Protocol. UDP',
  },
  {
    id: 9.35,
    question: 'Port 5005',
    answer: 'RTCP - Real-Time Control Protocol. UDP',
  },
  {
    id: 9.36,
    question: 'Port 5060',
    answer: 'SIP - Session Initiation Protocol. TCP / UDP',
  },
  {
    id: 9.37,
    question: 'Port 5061',
    answer: 'SIPS - Session Initiation Protocol SECURE. TCP / UDP',
  },
  {
    id: 9.38,
    question: 'IP Scanner',
    answer: 'Host and topology discovery. Can use ping, arp, traceroute',
  },
  {
    id: 9.39,
    question: 'SNMP',
    answer: 'Simple Network Management Protocol',
  },
  {
    id: 9.40,
    question: 'IPAM',
    answer: 'IP Address Management',
  },
  {
    id: 9.41,
    question: 'Nmap',
    answer: 'Pentesting tool...',
  },
  {
    id: 9.42,
    question: 'Remote Port Scanner',
    answer: '',
  },
  {
    id: 9.43,
    question: 'Protocol Analyzers',
    answer: '',
  },
]
const net_ten = [
  {
    id: 10.00,
    question: 'LESSON 10 - Explaining Network Services',
  },
  {
    id: 10.01,
    question: 'Dynamic Host Configuration Protocol - 4 Steps',
    answer: '1. Discover / 2. Offer / 3. Request / 4. Acknowledge. Ports 67 and 68. All communications Broadcast 255.255.255.255',
  },
  {
    id: 10.02,
    question: 'DHCP Server Configuration',
    answer: 'Statically Assigned IP and Scope are mandatory. UDP/546 client. UDP/547 server',
  },
  {
    id: 10.03,
    question: 'DHCP Scope',
    answer: 'Range of IP addresses available to lease for clients on a particular subnet',
  },
  {
    id: 10.04,
    question: 'Lease',
    answer: 'Long lease reduces DHCP server traffic but risks address pool exhaustion. T1 and T2 timers (usually at 50% and 87.5%',
  },
  {
    id: 10.05,
    question: 'DHCP Relay Agent',
    answer: 'RFC 1542 compliant. Forwards broadcasts to specified interface for a DHCP server. Forwards responses from server back to appropriate client subnet',
  },
  {
    id: 10.06,
    question: 'IP Helper',
    answer: 'Can forward various types of broadcast traffic (not just DHCP). Cisco command supporting operation of DHCP relay',
  },
  {
    id: 10.07,
    question: 'Stateless',
    answer: 'Host obtains presence, prefix and options from Router Advertisement (RA)',
  },
  {
    id: 10.08,
    question: 'Stateful',
    answer: 'DHCPv6 server provides routable IPv6 address',
  },
  {
    id: 10.09,
    question: 'FQDN',
    answer: 'Fully Qualified Domain Name. Host name + domain suffix',
  },
  {
    id: 10.10,
    question: 'Domain Suffix',
    answer: 'Domain name + Top Level Domain (TLD - managed by ICANN)',
  },
  {
    id: 10.11,
    question: 'Naming Rules',
    answer: 'Host name must be unique within domain. Labels separated by periods. 253 characters maximum length. 63 characters maximum length per label',
  },
  {
    id: 10.12,
    question: 'DNS',
    answer: 'Domain Name System. Hierarchical distributed database of name resource records. Root domain just 13 servers worldwide',
  },
  {
    id: 10.13,
    question: 'Example: laptop.account.widget.com',
    answer: '"laptop" is host name / "account" is sub-domain / "widget" is domain name / "com" is top level domain (TLD)',
  },
  {
    id: 10.14,
    question: 'Start of Authority - SOA',
    answer: 'Primary DNS server that is authoritative for the zone',
  },
  {
    id: 10.15,
    question: 'Name Server - NS',
    answer: 'Two or more NS records are configured for redundancy. Primary (editable) versus Secondary (read-only)',
  },
  {
    id: 10.16,
    question: 'Host A',
    answer: 'IPv4',
  },
  {
    id: 10.17,
    question: 'Host AAAA',
    answer: 'IPv6',
  },
  {
    id: 10.18,
    question: 'CNAME',
    answer: 'Alternative name (alias) for a particular record',
  },
  {
    id: 10.19,
    question: 'Iterative Query and Response',
    answer: '1. Root name server / 2. TLD name server / 3. Authoritative name server / 4. Local name server / 5. Added to network cache',
  },
  {
    id: 10.20,
    question: 'Recursive Query and Response',
    answer: 'The Iterative Query steps, but completely automatic',
  },
  {
    id: 10.21,
    question: 'MX',
    answer: 'Mail Exchange. Identifies a host record that functions as an email server for the domain. Servers distinguished by priority value',
  },
  {
    id: 10.22,
    question: 'TXT',
    answer: 'Stores free-form text that may be needed to support other network services. Sender Policy Framework (SPF) and DomainKeys Identified Email (DKIM) help protect from spam',
  },
  {
    id: 10.23,
    question: 'Pointer - PTR',
    answer: 'Forward or reverse lookup. Resolves an IP address to a domain name',
  },
  {
    id: 10.24,
    question: 'DNS Server Zones',
    answer: 'Primary - privileged access and editable. Secondary - read only. Cache-only - your history',
  },
  {
    id: 10.25,
    question: 'Internal DNS Zone',
    answer: '',
  },
  {
    id: 10.26,
    question: 'External DNS Zone',
    answer: '',
  },
  {
    id: 10.27,
    question: 'nslookup',
    answer: '',
  },
  {
    id: 10.28,
    question: 'dig',
    answer: '',
  },
]
const net_eleven = [
  {
    id: 11.00,
    question: 'LESSON 11 - Network Applications',
  },
]
const net_twelve = [
  {
    id: 12.00,
    question: 'LESSON 12 - Network Availability',
  },
  {
    id: 12.01,
    question: 'Availability',
    answer: 'Up and operational. Is my data available when I want it?',
  },
  {
    id: 12.02,
    question: 'Reliability',
    answer: 'Not dropping packets',
  },
  {
    id: 12.03,
    question: 'MTTR',
    answer: 'Mean Time to Repair. The average time it takes to repair a device when it breaks.',
  },
  {
    id: 12.04,
    question: 'MTBF',
    answer: 'Mean Time Between Failures. Avrage time between failures of a device.',
  },
  {
    id: 12.05,
    question: 'HSRP',
    answer: 'Hot Standby Router Protocol. Cisco proprietary first-hop redundancy. Allows for active and standby routers.',
  },
  {
    id: 12.06,
    question: 'CARP',
    answer: 'Common Address Redundancy Protocol. Open-standard variant of CARP. Allows for active and standby routers.',
  },
  {
    id: 12.07,
    question: 'VRRP',
    answer: 'Virtual Router Redundancy Protocol. IETP open-standard variant of HSRP.',
  },
  {
    id: 12.08,
    question: 'GLBP',
    answer: 'Gateway Load Balancing Protocol. Proprietary Cisco first-hop focuses on load balancing over redundancy.',
  },
  {
    id: 12.09,
    question: 'LACP',
    answer: 'Link Aggregation Control Protocol. Redundancy by having multiple links between devices',
  },
  {
    id: 12.10,
    question: 'Availability Best Practices',
    answer: 'Examine technical goals / Identify budget / Categorize business apps into levels of availablility / Establish performance standards / Define how to manage and measure the solution.',
  },
  {
    id: 12.11,
    question: 'Recovery Sites: Cold',
    answer: 'Building is available but no hardware or software is configured. Slow and time consuming recovery.',
  },
  {
    id: 12.12,
    question: 'Recovery Sites: Warm',
    answer: 'Building and equipment available, latest data unavailable though. Recovery is fairly quick.',
  },
  {
    id: 12.13,
    question: 'Recovery Sites: Hot',
    answer: 'Ready to go. Downtime is nil.',
  },
]
const net_thirteen = [
  {
    id: 13.00,
    question: 'LESSON 13 - Common Security Concepts',
  },
  {
    id: 13.01,
    question: 'Quest',
    answer: 'Answer',
  },
]
const net_fourteen = [
  {
    id: 14.00,
    question: 'LESSON 14 - Secure Networks',
  },
  {
    id: 14.01,
    question: 'Stateful Firewall',
    answer: 'Inspects traffic as a part of a session & recognizes where the traffic originated.',
  },
  {
    id: 14.02,
    question: 'NGFW',
    answer: 'Next Generation Firewall.Conducts deep packet inspection & packet filtering.',
  },
  {
    id: 14.03,
    question: 'ACL',
    answer: 'Access Control List. A set of rules applied to router interfaces that permit / deny traffic - IP / MAC',
  },
  {
    id: 14.04,
    question: 'NIDS / NIPS and HIDS / HIPS',
    answer: 'NIDS / NIPS Network-Based: A network device protects the network HIDS / HIPS Host-Based: Software-based & installed on servers / clients. Can work together!',
  },
  {
    id: 14.05,
    question: 'RDG',
    answer: 'Remote Desktop Gateway. Provides a secure connection using SSL/TLS protocols to the server via RDP. Encrypted. Control access to network resources based on permissions/group roles.',
  },
  {
    id: 14.06,
    question: 'VNC',
    answer: 'Virtual Network Computing: port 5900. Designed for thin clients e.g. VDI.',
  },
  {
    id: 14.07,
    question: 'In-Band Management',
    answer: 'Managing devices using Telnet / SSH protocols over the network.',
  },
  {
    id: 14.08,
    question: 'VPN',
    answer: 'Extends a private network across public networks.',
  },
  {
    id: 14.09,
    question: 'Full Tunnel VPN',
    answer: 'Routes & encrypts all network requests through the VPN connection back to the headquarters.',
  },
  {
    id: 14.10,
    question: 'Split Tunnel VPN',
    answer: 'Routes & encrypts only the traffic bound for the headquarters over the VPN, & sends the rest of the traffic to the regular internet. Better performance but less secure',
  },
  {
    id: 14.11,
    question: 'Clientless VPN',
    answer: 'Creates a secure, remote-access VPN tunnel using a web browser without requiring a software / hardware client.',
  },
  {
    id: 14.12,
    question: 'SSL',
    answer: 'Secure Socket Layer. Provides cryptography/reliability using the upper OSI layers 5 / 6 / 7.',
  },
  {
    id: 14.13,
    question: 'TLS',
    answer: 'Transport Layer Security. Provides secure web browsing over HTTPS SSL / TLS use TCP to establish secure client / server connections.',
  },
  {
    id: 14.14,
    question: 'DTLS',
    answer: 'Datagram Transport Layer Security. UDP-based version of the TLS protocol, operates faster due to less overhead.',
  },
  {
    id: 14.15,
    question: 'L2TP',
    answer: 'Layer 2 Tunneling Protocol. Lacks encryption by default.',
  },
  {
    id: 14.16,
    question: 'PPTP',
    answer: 'Answer',
  },
  {
    id: 14.16,
    question: 'SNMP',
    answer: 'Answer',
  },
  {
    id: 14.16,
    question: 'Syslog',
    answer: 'Answer',
  },
  {
    id: 14.16,
    question: 'SIEM',
    answer: 'Answer',
  },
]
const net_fifteen = [
  {
    id: 15.00,
    question: 'LESSON 15 - Wireless Networks',
  },
  {
    id: 15.01,
    question: 'Wireless Access Point', 
    answer: 'Expands wired LAN into wireless domain. Connects wired LAN and wireless devices into same subnet. All clients on access point are on single collision domain.',
  },
  {
    id: 15.02,
    question: 'IBSS', 
    answer: 'Independent Basic Service Set. Only devices / clients with no AP',
  },
  {
    id: 15.03,
    question: 'BSS', 
    answer: 'Basic Service Set. Only one AP connected to network. (SOHO)',
  },
  {
    id: 15.04,
    question: 'ESS', 
    answer: 'Extended Service Set. Contains multiple APs to provide coverage. (Campus)',
  },
  {
    id: 15.05,
    question: 'Mesh Topology', 
    answer: 'May not use centralized control. A range of wireless',
  },
  {
    id: 15.06,
    question: 'Site Survey', 
    answer: 'Wireless survey to determine coverage areas',
  },
  {
    id: 15.07,
    question: 'Wireless Range Extenders', 
    answer: 'Overcomes distance limitations of wireless networks. Amplifies the signal and extends reachability',
  },
  {
    id: 15.08,
    question: 'RFI', 
    answer: 'Radio Frequency Interference. Caused by using similar frequencies to WLAN. (e.g. baby monitor, microwave over, wireless security system)',
  },
  {
    id: 15.09,
    question: 'CSMA/CA', 
    answer: 'Carrier Sense Multiple Access / Collision Avoidance. Listens for transmission to determine if safe to transmit',
  },
  {
    id: 15.10,
    question: 'Pre-Shared Key', 
    answer: 'AP and client use the same encryption key. Key can be compromised.',
  },
  {
    id: 15.11,
    question: 'WEP', 
    answer: 'Wired Equivalent Privacy. Original 802.11 security standard. Pre-shared key. 40-bit to 64-bit to 128-bit upgrades over time.',
  },
  {
    id: 15.12,
    question: 'WPA', 
    answer: 'Wi-Fi Protected Access. TKIP 48-bit IV, RC4 encryption',
  },
  {
    id: 15.13,
    question: 'WPA2', 
    answer: '802.11i security standard, stronger encryption and integrity. CCMP AES 128-bit encryption',
  },
  {
    id: 15.14,
    question: 'Captive Portal', 
    answer: 'Web page that appears before user can access network resources.',
  },
  {
    id: 15.15,
    question: 'Geofencing', 
    answer: '',
  },
  {
    id: 15.16,
    question: 'War Driving', 
    answer: '',
  },
  
]
const net_sixteen = [
  {
    id: 16.00,
    question: 'LESSON 16 - WAN and Remote Access Methods',
  },
  {
    id: 16.01,
    question: 'Circuit-Switched Connection', 
    answer: 'Only connected when needed (e.g. a phone call). On-demand bandwidth.',
  },
  {
    id: 16.02,
    question: 'Packet-Switched Connection', 
    answer: 'Always on, dedicated leased line.',
  },
  {
    id: 16.03,
    question: 'PPP', 
    answer: 'Point-to-Point Protocol, Common protocol on dedicated leased lines.',
  },
  {
    id: 16.04,
    question: 'LCP', 
    answer: 'Link Control Protocol. Multilink interface allows multiple physical connections to be bonded together.',
  },
  {
    id: 16.05,
    question: 'PAP', 
    answer: 'Password Authentication Protocol. One way authentication between client / server. Sent in clear text.',
  },
  {
    id: 16.06,
    question: 'CHAP', 
    answer: 'Challenge Handshake Authentication Protocol. One way auth using a three way handshake. Credentials hashed before transmission.',
  },
  {
    id: 16.07,
    question: 'MS_CHAP', 
    answer: 'Microsoft Challenge Handshake Authentication Protocol. Includes two way auth.',
  },
  {
    id: 16.09,
    question: 'PPoE', 
    answer: 'PPP over Ethernet. Common on DSL modems.',
  },
  {
    id: 16.10,
    question: 'ADSL', 
    answer: 'Asymmetric Digital Subscriber Line. Max distance: 18,000 ft. Down: 8 mbps. Up: 1.54 mbps.',
  },
  {
    id: 16.11,
    question: 'SDSL', 
    answer: 'Symmetric Digital Subscriber Line. Max distance: 12,000 ft. Down: 1.168 mbps. Up: 1.168 mbps.',
  },
  {
    id: 16.12,
    question: 'VDSL', 
    answer: 'Very High Bit Rate DSL. MAx distance: 4,000 ft. Down: 52 mbps. Up: 12 mbps.',
  },
  {
    id: 16.13,
    question: 'Cable Modem', 
    answer: 'Cable TV infrastructure contains both fiber and coax. Specific ranges are used for down / up data transmission.',
  },
  {
    id: 16.14,
    question: 'MPLS GSM 1G 2G ..', 
    answer: 'Answer.',
  },
  {
    id: 16.15,
    question: 'Title', 
    answer: 'Answer.',
  },
]
const net_seventeen = [
  {
    id: 17.00,
    question: 'LESSON 17 - Organizational and Physical Security Concepts',
  },
  {
    id: 17.01,
    question: 'Quest',
    answer: 'Answer',
  },
]
const net_eighteen = [
  {
    id: 18.00,
    question: 'LESSON 18 - Disaster Recovery and High Availability',
  },
  {
    id: 18.01,
    question: 'Quest',
    answer: 'Answer',
  },
]
const net_nineteen = [
  {
    id: 19.00,
    question: 'LESSON 19 - Network Hardening Techniques',
  },
  {
    id: 19.01,
    question: 'Patch Management',
    answer: 'Planning, testing, implementing, & auditing of software patches.',
  },
  {
    id: 19.02,
    question: 'Least Functionality',
    answer: 'Process of configuring a device / server / workstation to only provide essential services required by user.',
  },
  {
    id: 19.03,
    question: 'Port Security',
    answer: 'Prevents unauthorized access to a switchport by identifying / limiting the MAC addresses of hosts that are allowed.',
  },
  {
    id: 19.04,
    question: 'Private VLAN (Port Isolation)',
    answer: 'A technique where a VLAN contains switchports that are restricted to a single uplink.',
  },
  {
    id: 19.05,
    question: 'Primary VLAN',
    answer: 'Forwards frames downstream to all of the secondary VLANs.',
  },
  {
    id: 19.06,
    question: 'Isolated VLAN',
    answer: 'Includes switchports that can reach the primary VLAN but not other secondary VLANs.',
  },
  {
    id: 19.07,
    question: 'Community VLAN',
    answer: 'Includes switchports that can communicate with each other and the primary VLAN but not other secondary VLANs.',
  },
  {
    id: 19.08,
    question: 'DAI',
    answer: 'Dynamic ARP Inspection. Validates the ARP packets in your network. Ensures only valid ARP requests/responses are relayed across network device.',
  },
  {
    id: 19.09,
    question: 'DHCP Snooping',
    answer: 'Provides security by inspecting DHCP traffic, filtering untrusted DHCP messages, & building/maintaining a DHCP snooping binding table.',
  },
  {
    id: 19.10,
    question: 'Untrusted Interface',
    answer: 'Any interface that is configured to receive messages from outside the network/firewall.',
  },
  {
    id: 19.11,
    question: 'Trusted Interface',
    answer: 'Any interface configured to receive messages only from within the network.',
  },
  {
    id: 19.12,
    question: 'Explicit Deny',
    answer: 'Answer.',
  },
  {
    id: 19.13,
    question: 'Implicit Deny',
    answer: 'Answer.',
  },
  {
    id: 19.14,
    question: 'Role Based Access',
    answer: 'Answer.',
  },
]
const net_twenty = [
  {
    id: 20.00,
    question: 'LESSON 20 - Cloud and Data Architecture',
  },
  {
    id: 20.01,
    question: 'Virtual Servers',
    answer: 'Multiple virtual instances exist on a single physical server. Multiple Windows & Linux servers running simultaneously.',
  },
  {
    id: 20.02,
    question: 'Hypervisor',
    answer: 'Specialized software that enables virtualization to occur. Hypervisor is the software that emulates the physical hardware. Also called a VMM (Virtual Machine Monitor). E.g. VMware, Virtualbox',
  },
  {
    id: 20.03,
    question: 'SAN',
    answer: 'Storage Area Network. Specialized LAN designed for data transfer/storage. Transfers data at block level with special protocol.',
  },
  {
    id: 20.04,
    question: 'SAN: Fibre Channel',
    answer: 'Special purpose hardware providing 1-16Gbps. FCoE (Fibre Channel over Ethernet). Removes need for specialized hardware. Runs over your Ethernet networks.',
  },
  {
    id: 20.05,
    question: 'SAN: iSCSI',
    answer: 'IP Small Computer System Interface. Lower cost, built using Ethernet switches (<10Gbps). Relies on configuration allowing jumbo frames over the network.',
  },
  {
    id: 20.06,
    question: 'Infiniband (Virtualized Storage)',
    answer: 'Switched fabric topology for high-performance computing. Very high throughput with very low latency. Direct or switched connection between servers & storage system.',
  },
  {
    id: 20.07,
    question: 'Virtual Firewalls and Routers',
    answer: 'To fully virtualize your network, you need a firewall/router. Virtualized firewall/routers provide the same features as their physical counterparts.',
  },
  {
    id: 20.08,
    question: 'Virtual Switches',
    answer: 'Overcomes the problem of all virtual servers being on one broadcast domain. Provides QoS & security',
  },
  {
    id: 20.09,
    question: 'Virtual Desktops',
    answer: 'User’s desktop computer is run in a browser. Used from web, laptop, tablet, or phone. Easier to secure & upgrade for the admins.',
  },
  {
    id: 20.10,
    question: 'SDN',
    answer: 'Software-Defined Network. Provides the admin with an easy-to-use front end to configure physical and virtual devices throughout the network.',
  },
  {
    id: 20.11,
    question: 'VoIP',
    answer: 'Voice over IP. Digitizes voice traffic so that it can be treated like other data on the network. Uses SIP (Session Initiation Protocol) to setup, maintain, & tear down calls.',
  },
  {
    id: 20.12,
    question: 'Virtual PBX & VoIP',
    answer: 'Exchange & VoIP. Ability to outsource your telephone system. Utilizes VoIP to send all data to provider, then provider connects it to telephone system.',
  },
  {
    id: 20.13,
    question: 'Public Cloud | Private Cloud | Hybrid Cloud',
    answer: 'Private: Systems & users only have access with other devices inside of the same private cloud or system. Public: Systems & users interact with devices on public networks, such as the Internet & other clouds. Hybrid: Combination of private/public.',
  },
  {
    id: 20.14,
    question: 'NaaS',
    answer: 'Allows outsourcing of a network to a service provider. Hosted off-site at the service provider’s data center & the customer is billed for usage.',
  },
  {
    id: 20.15,
    question: 'IaaS',
    answer: 'Infrastructure as a Service. Allows outsourcing of the infrastructure of servers or desktops to a service provider.',
  },
  {
    id: 20.16,
    question: 'SaaS',
    answer: 'Software as a Service. User interacts with web-based application. Details of how it works are hidden from users.',
  },
  {
    id: 20.17,
    question: 'PaaS',
    answer: 'Platform as a Service. Provides a development platform for companies that are developing applications without the need for infrastructure.',
  },
  {
    id: 20.18,
    question: 'DaaS',
    answer: 'Desktop as a Service. Provides a desktop environment that is accessible through the internet in the form of a cloud desktop or virtual desktop environment.',
  },
  {
    id: 20.19,
    question: 'Elasticity',
    answer: 'Attempts to match the resources allocated with the actual amount of resources needed at any given point in time.',
  },
  {
    id: 20.20,
    question: 'Scalability',
    answer: 'Answer.',
  },
  {
    id: 20.21,
    question: 'Vertical Scaling',
    answer: 'Answer.',
  },
  {
    id: 20.22,
    question: 'Horizontal Scaling',
    answer: 'Answer.',
  },
]

export default App;
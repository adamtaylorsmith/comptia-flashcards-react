import React, { useState } from 'react';
import './App.css'
import LessonOne from './components/LessonOne'
import LessonTwo from './components/LessonTwo'
import LessonThree from './components/LessonThree'
import LessonFour from './components/LessonFive'
import LessonFive from './components/LessonSix'
import LessonSix from './components/LessonSix'
import LessonSeven from './components/LessonSeven'
import LessonEight from './components/LessonEight'
import LessonNine from './components/LessonNine'
import LessonTen from './components/LessonTen'
import LessonEleven from './components/LessonEleven'
import LessonTwelve from './components/LessonTwelve'
import LessonThirteen from './components/LessonThirteen'
// LessonFourteen from './components/LessonFourteen'
// LessonFifteen from './components/LessonFifteen
// LessonSixteen from './components/LessonSixteen
// LessonSeventeen from './components/LessonSeventeen
// LessonEighteen from './components/LessonEighteen
// LessonNineteen from './components/LessonNineteen
// LessonTwenty from './components/LessonTwenty
// LessTwentyone from './components/LessonTwentyone

function App() {

  const [flashcards, setFlashcards] = useState('')

  const myComponents = {
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
    // 'fourteen': <LessonFourteen flashcards={fourteen} />,
    // 'fifteen': <LessonFifteen flashcards={fifteen} />,
    // 'sixteen': <LessonSixteen flashcards={sixteen} />,
    // 'seventeen': <LessonSeventeen flashcards={seventeen} />,
    // 'eighteen': <LessonEighteen flashcards={eighteen} />,
    // 'nineteen': <LessonNineteen flashcards={nineteen} />,
    // 'twenty': <LessonTwenty flashcards={twenty} />,
    // 'twentyone': <LessonTwentyone flashcards={twentyone} />,
  }

  return (
    <>
      <div className='text-3xl font-bold flex justify-center mt-4'>
        CompTIA Security+ SY0-601
      </div>
      <form className='flex justify-center my-6'>
        <select className='text-lg' onChange={(e) => setFlashcards(e.target.value)}>
          <option>Select Lesson to Review</option>
          {/* <option value="ports">Ports</option> */}
          <option value="one">Lesson 1 - Comparing Security Roles and Security Controls</option>
          <option value="two">Lesson 2 - Explaining Threat Actors and Threat Intelligence</option>
          <option value="three">Lesson 3 - Performing Security Assessments</option>
          <option value="four">Lesson 4 - Identifying Social Engineering and Malware</option>
          <option value="five">Lesson 5 - Summarizing Basic Cryptographic Concepts</option>
          <option value="six">Lesson 6 - Implementing Public Key Infrastructure</option>
          <option value="seven">Lesson 7 - Implementing Authentication Controls</option>
          <option value="eight">Lesson 8 - Implementing Identity and Account Management Controls</option>
          <option value="nine">Lesson 9 - Implementing Secure Network Designs</option>
          <option value="ten">Lesson 10 - Implementing Network Security Appliances</option>
          <option value="eleven">Lesson 11 - Implementing Secure Network Protocols</option>
          <option value="twelve">Lesson 12 - Implementing Host Security Solutions</option>
          <option value="thirteen">Lesson 13 - Implementing Secure Mobile Solutions</option>
          <option value="fourteen">Lesson 14 - Implementing Secure Application Concepts</option>
          <option value="fifteen">Lesson 15 - Implementing Secure Cloud Solutions</option>
          <option value="sixteen">Lesson 16 - Explaining Data Privacy and Protection Concepts</option>
          <option value="seventeen">Lesson 17 - Performing Incident Response</option>
          <option value="eighteen">Lesson 18 - Explaining Digital Forensics</option>
          <option value="nineteen">Lesson 19 - Summarizing Risk Management Concepts</option>
          <option value="twenty">Lesson 20 - Implementing Cybersecurity Resilience</option>
          <option value="twentyone">Lesson 21 - Explaining Physical Security</option>
        </select>
      </form>
      <hr/>
      {myComponents[flashcards]}
    </>
  );
}

const one = [
  {
    id: 1.00,
    question: 'LESSON 1 - ',
  },
  {
    id: 1.01,
    question: '',
    answer: '',
  },
  {
    id: 1.02,
    question: '',
    answer: '',
  },
  {
    id: 1.03,
    question: '',
    answer: '',
  },
  {
    id: 1.04,
    question: '',
    answer: '',
  },
  {
    id: 1.05,
    question: '',
    answer: '',
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
const two = [
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
const three = [
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
const four = [
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
const five = [
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
const six = [
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
const seven = [
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
const eight = [
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
const nine = [
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
    answer: '',
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
const ten = [
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
const eleven = [
  {
    id: 11.00,
    question: 'LESSON 11 - Network Applications',
  },
]
const twelve = [
  {
    id: 12.00,
    question: 'LESSON 12 - Network Availability',
  },
]
const thirteen = [
  {
    id: 13.00,
    question: 'LESSON 13 - Common Security Concepts ',
  },
]


export default App;

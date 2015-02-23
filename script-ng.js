var GyaanCheckApp = angular.module('GyaanCheck', []);

GyaanCheckApp.controller('getLeftPanel', function ($scope, $element) {
  $scope.sections = sectionLeft;
});

GyaanCheckApp.controller('getRightPanel', function ($scope, $element) {
    $scope.sections = sectionRight;
});

var sectionLeft = [
    {
        HeadingTheme: "panel panel-info",
        Title: "Faculty position at Rajiv Gandhi University, Arunachal Pradesh",
        ApplicationEndDt: "06/03/2015",
        DetailedNotification: "http://rgu.ac.in/downloads/Advno6jan15.pdf",
        GoToSite: "http://rgu.ac.in/jobsatrgu.html",
        ApplicationFee: "400",
        PublishedOn: "12/02/2015",
        Age: "--",
        Logo: "rgu.jpg",
        AltText: "Faculty position at Rajiv Gandhi University",
        JobDetails: [{
            Designation: "Professor",
            NoOfPosts: "11",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Associate Professor",
            NoOfPosts: "12",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor",
            NoOfPosts: "04",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
        },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Officer posts in FCI Aravali Gypsum And Minerals India Limited(FAGMIL)",
        ApplicationEndDt: "16/03/2015",
        DetailedNotification: "http://fagmil.nic.in/images/Careers/recruitment2015.pdf",
        GoToSite: "http://fagmil.nic.in/index.php/en/services/careers",
        ApplicationFee: "200",
        PublishedOn: "2015",
        Age: "--",
        Logo: "fagmil.jpg",
        AltText: "FCI Aravali Gypsum And Minerals India Limited(FAGMIL) Recruitment",
        JobDetails: [{
            Designation: "Asstt. Finance Manager",
            NoOfPosts: "01",
            PayScale: "24900-3%-50500",
            GradePay: "",
            Eligibility: "CA OR ICWA"
        },
        {
            Designation: "Accounts Officer Grade-II",
            NoOfPosts: "02",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: "CA OR ICWA"
        },
        {
            Designation: "Asstt. Mining Engineer",
            NoOfPosts: "01",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: "Degree in Mining Engg./AMIE with Second Class Mine Manager’s Certificate of Competency (Restricted) under MMR, 1961."
        },
        {
            Designation: "Asstt. Engineer (Project)",
            NoOfPosts: "01",
            PayScale: "16400-3%-40500",
            GradePay: "",
            Eligibility: "Full time B.E./B.Tech. in IT/Mechanical from a recognized university"
        },
        {
            Designation: "Jr. Chemist",
            NoOfPosts: "01",
            PayScale: "12600-3%-32500",
            GradePay: "",
            Eligibility: "(i) Regular course in M.Sc. (Chemistry) from a recognized university. (ii) Basic knowledge of computer."
        },
        {
            Designation: "Jr. Geologist",
            NoOfPosts: "01",
            PayScale: "12600-3%-32500",
            GradePay: "",
            Eligibility: "(i) Regular course in M.Sc. (Geology) from a recognized university. (ii) Basic knowledge of computer"
        },
        {
            Designation: "Quarry Foreman",
            NoOfPosts: "03",
            PayScale: "11600-3%-26250",
            GradePay: "",
            Eligibility: "1) (i) 12th Pass (ii) Should possess Mine Foreman’s Certificate (Restricted) under MMR , 1961 OR Diploma in Mining & Mine Surveying With Mine Foreman’s Certificate (Restricted) under MMR 1961. 2) Basic knowledge of computer."
        },
        {
            Designation: "Mining Mate",
            NoOfPosts: "05",
            PayScale: "9550-3%-21300",
            GradePay: "",
            Eligibility: "(i) 12th Pass (ii) Should possess Mining Mate’s Certificate under MMR, 1961 (iii) Basic knowledge of computer."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Officer posts in Sutlej Gramin Bank",
        ApplicationEndDt: "03/03/2015",
        DetailedNotification: "http://sgbbathinda.co.in/Downloads/adsgb2015.pdf",
        GoToSite: "http://sgbbathinda.co.in/Recruitment.aspx",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "sgb.jpg",
        AltText: "Sutlej Gramin Bank recruitment",
        JobDetails: [{
            Designation: "Officer Scale-I",
            NoOfPosts: "21",
            PayScale: "14500-600/7, 18700-700/2, 20100-800/7, 25700",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Office Assistant (Multipurpose)",
            NoOfPosts: "20",
            PayScale: "7200-400/3, 8400-500/3, 9900-600/4, 12300-700/7, 17200-1300/1,18500-800/1,19300.",
            GradePay: "",
            Eligibility: ""
        }]
        },
    {
        HeadingTheme: "panel panel-danger",
        Title: "CIIL Requirement of Project Staff for various Schemes",
        ApplicationEndDt: "05/03/2015",
        DetailedNotification: "http://www.ciil.org/Download/CIIL_Project_Staff_2015.pdf",
        GoToSite: "http://www.ciil.org/AnnCIIL2015.aspx",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "ciil.jpg",
        AltText: "CIIL Requirement of Project Staff for various Schemes",
        JobDetails: [{
            Designation: "Chief Resource Officer",
            NoOfPosts: "08",
            PayScale: "43636 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Resource Person - I",
            NoOfPosts: "14",
            PayScale: "40738 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Resource Person - II",
            NoOfPosts: "09",
            PayScale: "38813 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Resource Person - I",
            NoOfPosts: "37",
            PayScale: "38212 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Resource Person - II",
            NoOfPosts: "44",
            PayScale: "35482 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Resource Person (Technical)- I",
            NoOfPosts: "12",
            PayScale: "38212 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Junior Resource Person (Technical)- II",
            NoOfPosts: "04",
            PayScale: "35480 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Office Supervisor",
            NoOfPosts: "03",
            PayScale: "37571 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Accounts Assistant",
            NoOfPosts: "05",
            PayScale: "23515 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Library Assistant",
            NoOfPosts: "03",
            PayScale: "23515 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Office Assistant",
            NoOfPosts: "07",
            PayScale: "20515 Monthly",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Data Input Operator",
            NoOfPosts: "12",
            PayScale: "23515 Monthly",
            GradePay: "",
            Eligibility: ""
        },
         {
             Designation: "Office Helper",
             NoOfPosts: "06",
             PayScale: "14490 Monthly",
             GradePay: "",
             Eligibility: ""
         }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "NIT Meghalaya Faculty Recruitment",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://nitmeghalaya.in/nitm/notifications/recruitments/docs/advtFacultyFebruary2015_full.pdf",
        GoToSite: "http://nitmeghalaya.in/nitm/notifications/recruitments/faculty_feb2015.html",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "nit_meghalya.jpg",
        AltText: "NIT Meghalaya faculty recruitment",
        JobDetails: [{
            Designation: "Asst. Professor",
            NoOfPosts: "",
            PayScale: " PB3 Min Basic: 30,000",
            GradePay: "8000",
            Eligibility: "Ph. D. with 1st Class at UG & PG levels"
        },
        {
            Designation: "Asst. Professor(On Contract)",
            NoOfPosts: "",
            PayScale: " PB3 + 07 increments",
            GradePay: "7000",
            Eligibility: "Ph. D. with 1st Class at UG & PG levels"
        },
        {
            Designation: "Asst. Professor(On Contract)",
            NoOfPosts: "",
            PayScale: " PB3 + 07 increments",
            GradePay: "6000",
            Eligibility: "Ph. D. with 1st Class at UG & PG levels"
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Recruitment of Trainee Teacher at NIT Meghalya(National Institute of Technology)",
        ApplicationEndDt: "01/04/2015",
        DetailedNotification: "http://nitmeghalaya.in/nitm/notifications/recruitments/docs/trainee%20teacher%20scheme.pdf",
        GoToSite: "http://nitmeghalaya.in/nitm/notifications/recruitments/Trainee_techerFeb2015.html",
        ApplicationFee: "",
        PublishedOn: "09/02/2015",
        Age: "--",
        Logo: "nit_meghalya.jpg",
        AltText: "Recruitment of Trainee Teacher at NIT Meghalya",
        JobDetails: [{
            Designation: "Trainee Teacher",
            NoOfPosts: "",
            PayScale: "",
            GradePay: "",
            Eligibility: "Candidates within top 15% in other AICTE recognized institutions and having valid GATE score are also eligible for the position."
        }]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "National Institute of Technical Teachers Training and Reserch(NITTR) recruitment for various posts",
        ApplicationEndDt: "27/03/2015",
        DetailedNotification: "http://www.nitttrchd.ac.in/sitenew1/pdf/Adv.142_2015.pdf",
        GoToSite: "http://recruit.nitttrchd.ac.in/",
        ApplicationFee: "100",
        PublishedOn: "09/02/2015",
        Age: "--",
        Logo: "nitttrchd.jpg",
        AltText: "National Institute of Technical Teachers Training and Reserch(NITTR) recruitment for various posts",
        JobDetails: [{
            Designation: "Sr. Administrative Officer",
            NoOfPosts: "01",
            PayScale: "PB-3 15600-39100",
            GradePay: "6600",
            Eligibility: ""
        },
        {
            Designation: "Research Assistant",
            NoOfPosts: "01",
            PayScale: "PB-3 15600-39100",
            GradePay: "5400",
            Eligibility: ""
        },
        {
            Designation: "Senior Production Assistant",
            NoOfPosts: "03",
            PayScale: "PB-2 9300-34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Accounts Officer",
            NoOfPosts: "01",
            PayScale: "PB-2 9300-34800",
            GradePay: "4600",
            Eligibility: ""
        },
        {
            Designation: "Accountant",
            NoOfPosts: "01",
            PayScale: "PB-2 9300-34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Hindi Translator",
            NoOfPosts: "01",
            PayScale: "PB-2 9300-34800",
            GradePay: "4200",
            Eligibility: ""
        },
        {
            Designation: "Technicians",
            NoOfPosts: "11",
            PayScale: "PB-1 5200-20200",
            GradePay: "2800",
            Eligibility: ""
        },
        {
            Designation: "Estate Assistant",
            NoOfPosts: "01",
            PayScale: "PB-1 5200-20200",
            GradePay: "2800",
            Eligibility: ""
        },
        {
            Designation: "Stenographer Grade-II",
            NoOfPosts: "06",
            PayScale: "PB-1 5200-20200",
            GradePay: "2400",
            Eligibility: ""
        },
        {
            Designation: "Lower Division Clerks",
            NoOfPosts: "07",
            PayScale: "PB-1 5200-20200",
            GradePay: "1900",
            Eligibility: ""
        },
        {
            Designation: "Drivers",
            NoOfPosts: "02",
            PayScale: "PB-1 5200-20200",
            GradePay: "1900",
            Eligibility: ""
        },
        {
            Designation: "Multi Skilled Attendants (MSA)",
            NoOfPosts: "16",
            PayScale: "PB-1 5200-20200",
            GradePay: "1800",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Indian Oil Corporation invites applications for Junior Engineer at Mathura Refinery(IOCL Recruitment)",
        ApplicationEndDt: "16/03/2015",
        DetailedNotification: "https://www.iocl.com/download/Mathura_Refinery_AD_2015.pdf",
        GoToSite: "https://www.iocl.com/PeopleCareers/job.aspx",
        ApplicationFee: "100",
        PublishedOn: "20/02/2015",
        Age: "--",
        Logo: "iocl.jpg",
        AltText: "Indian Oil Corporation invites applications for Junior Engineer at Mathura Refinery(IOCL Recruitment)",
        JobDetails: [{
            Designation: "Jr. Engineering Assistant-IV (Production)",
            NoOfPosts: "17",
            PayScale: "11900 - 32000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Jr. Engineering Assistant-IV (Power & Utility)",
            NoOfPosts: "02",
            PayScale: "11900 - 32000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Jr. Engineering Assistant-IV (Mechanical Maintenance)",
            NoOfPosts: "10",
            PayScale: "11900 - 32000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Jr. Engineering Assistant-IV(Instrumentation)",
            NoOfPosts: "05",
            PayScale: "11900 - 32000",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Jr. Engineering Assistant-IV(Instrumentation)",
            NoOfPosts: "07",
            PayScale: "11900 - 32000",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Rajasthan Marudhara Gramin Bank recruitment by IBPS",
        ApplicationEndDt: "26/02/2015",
        DetailedNotification: "http://www.mgbbank.com/IBPSAPPFinal.pdf",
        GoToSite: "http://www.mgbbank.com/",
        ApplicationFee: "100",
        PublishedOn: "12/02/2015",
        Age: "--",
        Logo: "rmgb.jpg",
        AltText: "rajasthan marudhara gramin bank recruitment",
        JobDetails: [{
            Designation: "Officer Scale-III",
            NoOfPosts: "17",
            PayScale: "25700-800/5-29700-900/2-31500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-II (General Banking Officer)",
            NoOfPosts: "69",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-II (IT)",
            NoOfPosts: "04",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-II (CA)",
            NoOfPosts: "01",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-II (Law)",
            NoOfPosts: "01",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-II (Treasury Manager)",
            NoOfPosts: "01",
            PayScale: "19400-700/1-20100-800/10-28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Officer Scale-I",
            NoOfPosts: "153",
            PayScale: "14500 - 600/7 - 18700 - 700/2 – 20100 - 800/7 – 25700",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Office Assistant (Multipurpose)",
            NoOfPosts: "262",
            PayScale: "7200-400/3-8400-500/3-9900-600/4-12300-700/7-17200-1300/1-18500-800/1-19300",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Shipping Corporation Of India Recruitment For Management Posts",
        ApplicationEndDt: "09/03/2015",
        DetailedNotification: "http://www.shipindia.com/uploaded_pdfs/career/detailed%20ad.pdf",
        GoToSite: "http://www.shipindia.com/careers/shore-details.aspx?NjY.",
        ApplicationFee: "1000",
        PublishedOn: "14/02/2015",
        Age: "--",
        Logo: "sci.jpg",
        AltText: "shipping corporation of india recruitment",
        JobDetails: [{
            Designation: "Assistant Manager",
            NoOfPosts: "62",
            PayScale: "20600 - 46500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Manager(Company Secretary)",
            NoOfPosts: "01",
            PayScale: "29100 - 54500",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Deputy General Manager",
            NoOfPosts: "17",
            PayScale: "32900 - 58000",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "Union Bank of India recruitment for Specialist Officer",
        ApplicationEndDt: "28/02/2015",
        DetailedNotification: "http://www.unionbankofindia.co.in/pdf/UBRP201516EnglishNotificationwebsite.pdf",
        GoToSite: "http://www.unionbankofindia.co.in/abt_recruitmentaspx.aspx",
        ApplicationFee: "600",
        PublishedOn: "13/02/2015",
        Age: "--",
        Logo: "unionbank.jpg",
        AltText: "union bank of india recruitment",
        JobDetails: [{
            Designation: "Economist",
            NoOfPosts: "02(UR-02)",
            PayScale: "14500 - 25700",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Forex Officer II",
            NoOfPosts: "11(UR-02, SC-02, ST-01)",
            PayScale: "19400 - 28100",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Forex Officer I",
            NoOfPosts: "36(UR-25, OBC-4, SC-05, ST-02)",
            PayScale: "14500 - 25700",
            GradePay: "",
            Eligibility: ""
        }
        ]
},
    {
        HeadingTheme: "panel panel-info",
        Title: "Walkin for IT Professionals in HARTRON -27th/28 Feb and 3rd/4th March",
        ApplicationEndDt: "",
        DetailedNotification: "http://hartron.org.in/images/SDG/2015/SDGRoles1815.pdf",
        GoToSite: "hartron.org.in/index.php/jobs-career/current-opening",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "hartron.jpg",
        AltText: "Walkin for IT Professionals in HARTRON -27th/28 Feb and 3rd/4th March",
        JobDetails: [{
            Designation: "Program Manager",
            NoOfPosts: "1",
            PayScale: "18+ Lacs",
            GradePay: "",
            Eligibility: "11+ Yrs experience"
        },
        {
            Designation: "IT Infrastructure Manager (SWAN)",
            NoOfPosts: "1",
            PayScale: "10+ Lacs",
            GradePay: "",
            Eligibility: "7+ Yrs experience"
        },
        {
            Designation: "Senior Database Analyst",
            NoOfPosts: "1",
            PayScale: "10+ Lacs",
            GradePay: "",
            Eligibility: "7+ Yrs experience"
        },
        {
            Designation: "Service delivery manager",
            NoOfPosts: "1",
            PayScale: "10+ Lacs",
            GradePay: "",
            Eligibility: "7+ Yrs experience"
        },
        {
            Designation: "Senior Security Analyst",
            NoOfPosts: "1",
            PayScale: "18+",
            GradePay: "",
            Eligibility: "11+ Yrs experience"
        },
        {
            Designation: "Asstt. Manager IT (DevOps)",
            NoOfPosts: "1",
            PayScale: "18+",
            GradePay: "",
            Eligibility: "11+ Yrs experience"
        },
         {
             Designation: "Database Analyst",
             NoOfPosts: "2",
             PayScale: "6+ Lacs",
             GradePay: "",
             Eligibility: "4+ Yrs experience"
         },
        {
            Designation: "Software Developer",
            NoOfPosts: "2",
            PayScale: "6+ Lacs",
            GradePay: "",
            Eligibility: "4+ Yrs experience"
        },
        {
            Designation: "Security Analyst",
            NoOfPosts: "1",
            PayScale: "6+ Lacs",
            GradePay: "",
            Eligibility: "4+ Yrs experience"
        },
        {
            Designation: "Business Analyst",
            NoOfPosts: "4",
            PayScale: "6+ Lacs",
            GradePay: "",
            Eligibility: "4+ Yrs experience"
        },
        {
            Designation: "IT Manager",
            NoOfPosts: "1",
            PayScale: "10+ Lacs",
            GradePay: "",
            Eligibility: "7+ Yrs experience"
        }
        ]
    },
{
            HeadingTheme: "panel panel-warning",
            Title: "COMBINED STATE / UPPER SUBORDINATE SERVICES (GEN. RECTT.) EXAMINATION-2015",
            ApplicationEndDt: "28/02/2015",
            DetailedNotification: "http://uppsc.up.nic.in/View_Enclosure.aspx?ID=103&flag=E&FID=334",
            GoToSite: "http://uppsc.up.nic.in/Notifications.aspx",
            ApplicationFee: "115",
            PublishedOn: "2015",
			Age: "--",
			Logo:"uppsc.jpg",
			AltText:"COMBINED STATE / UPPER SUBORDINATE SERVICES (GEN. RECTT.) EXAMINATION-2015",
            JobDetails: [{
                Designation: "Multiple posts",
                NoOfPosts: "450",
                PayScale: "93,00 - 34,800",
                GradePay: "4,200",
                Eligibility: "Bachelors Degree"
            }]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Faculty posts at Benaras Hindu University(BHU)",
            ApplicationEndDt: "20/02/2015",
            DetailedNotification: "http://www.bhu.ac.in/rac/jan2015/RollingFinal.pdf",
            GoToSite: "http://www.bhu.ac.in/rac/",
            ApplicationFee: "--",
            PublishedOn: "2015",
			Age: "--",
			Logo:"bhu.jpg",
			AltText:"BHU recruitment 2015",
            JobDetails: [{
                Designation: "Professor",
                NoOfPosts: "",
                PayScale: "37,400 - 67,000",
                GradePay: "10,000",
                Eligibility: ""
            },
			{
                Designation: "Reader",
                NoOfPosts: "",
                PayScale: "12000-420-18300",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Professor",
                NoOfPosts: "",
                PayScale: "15,600 - 39,100",
                GradePay: "6,000",
                Eligibility: ""
            },
			{
                Designation: "Associate Professor",
                NoOfPosts: "",
                PayScale: "37,400 - 67,000",
                GradePay: "9,000",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Non Managerial positions in Mangalore Refinery and Petrochemicals Limited(MRPL)",
            ApplicationEndDt: "11/02/2015",
            DetailedNotification: "http://www.mrpl.co.in/careers",
            GoToSite: "http://www.mrpl.co.in/careers",
            ApplicationFee: "--",
            PublishedOn: "2015",
			Age: "--",
			Logo:"mrpl.jpg",
			AltText:"MRPL Career 2015",
            JobDetails: [{
                Designation: "Workman(chemical)",
                NoOfPosts: "92",
                PayScale: "W2",
                GradePay: "--",
                Eligibility: ""
            },
			{
                Designation: "Assistant(Materials)",
                NoOfPosts: "04",
                PayScale: "JMS",
                GradePay: "--",
                Eligibility: ""
            },
			{
                Designation: "Assistant(Finance)",
                NoOfPosts: "04",
                PayScale: "JMS",
                GradePay: "--",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-danger",
            Title: "Recruitment Of Engineering Executive Trainee at NTPC through GATE-2015",
            ApplicationEndDt: "03/03/2015",
            DetailedNotification: "http://www.ntpccareers.net/et15/my_files/advt_et15.pdf",
            GoToSite: "http://www.ntpccareers.net/et15/hm.php",
            ApplicationFee: "--",
            PublishedOn: "02/02/2015",
			Age: "--",
			Logo:"ntpc.jpg",
			AltText:"ntpc recruitment through gate 2015",
            JobDetails: [{
                Designation: "Executive Trainee Engineer-Electrical",
                NoOfPosts: "40",
                PayScale: "24,900-3%-50,500",
                GradePay: "--",
                Eligibility: "Engineering Degree with minimum 65%"
            },
			{
                Designation: "Executive Trainee Engineer-Mechanical",
                NoOfPosts: "60",
                PayScale: "24,900-3%-50,500",
                GradePay: "--",
                Eligibility: "Engineering Degree with minimum 65%"
            },
			{
                Designation: "Executive Trainee Engineer-Instrumentation",
                NoOfPosts: "10",
                PayScale: "24,900-3%-50,500",
                GradePay: "--",
                Eligibility: "Engineering Degree with minimum 65%"
            },
			{
                Designation: "Executive Trainee Engineer-Electronics",
                NoOfPosts: "10",
                PayScale: "24,900-3%-50,500",
                GradePay: "--",
                Eligibility: "Engineering Degree with minimum 65%"
            }
			]
},
{
            HeadingTheme: "panel panel-success",
            Title: "Project Scientist in Ministry of Earth Sciences on Contract Basis",
            ApplicationEndDt: "21/02/2015",
            DetailedNotification: "http://moes.gov.in/writereaddata/files/project%20scientist%20B%20%26%20C.pdf",
            GoToSite: "http://moes.gov.in/",
            ApplicationFee: "--",
            PublishedOn: "06/02/2015",
			Age: "--",
			Logo:"moes.jpg",
			AltText:"ministry of earth sciences recruitment",
            JobDetails: [{
                Designation: "Project Scientist 'B'",
                NoOfPosts: "08",
                PayScale: "21,000 + HRA + DA",
                GradePay: "--",
                Eligibility: "Post Graduate Degree"
            },
			{
                Designation: "Project Scientist 'C'",
                NoOfPosts: "04",
                PayScale: "22,000 + HRA + DA",
                GradePay: "--",
                Eligibility: "Post Graduate Degree"
            }
			]
},
{
            HeadingTheme: "panel panel-info",
            Title: "job posts at Bihar Agricultural University",
            ApplicationEndDt: "16/02/2015",
            DetailedNotification: "http://bausabour.ac.in.199-79-63-199.plesk-web24.webhostbox.net/bau/files/Advertisement/4e10b0c6-9b4d-40be-bed5-6aacb1e751d9-harshit01.docx",
            GoToSite: "http://bausabour.ac.in.199-79-63-199.plesk-web24.webhostbox.net/bau/index.aspx",
            ApplicationFee: "--",
            PublishedOn: "02/02/2015",
			Age: "--",
			Logo:"bau.jpg",
			AltText:"job at Bihar Agricultural University",
            JobDetails: [{
                Designation: "Deputy Director Research",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Deputy Director Training",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Deputy Comptroller",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Director Recruitment",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Director Administration",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Registrar",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Audit Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            }]
},
{
            HeadingTheme: "panel panel-success",
            Title: "Various Group-C posts at Uttarakhand Public Service Commission(UKPSC)",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://ukpsc.gov.in/files/Group_C_Vigapati.pdf",
            GoToSite: "http://ukpsc.gov.in/recruitment/view/331",
            ApplicationFee: "--",
            PublishedOn: "07/02/2015",
			Age: "--",
			Logo:"ukpsc.jpg",
			AltText:"job at UKPSC",
            JobDetails: [{
                Designation: "Lecturer(Cookery, Bakery, Housekeeping, Restaurant, Reception)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Deputy Sports Officer",
                NoOfPosts: "03",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Technical Assistant Geophysics",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Technical Assistant Geology",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Technical Assistant Chemistry",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Mines Inspector",
                NoOfPosts: "10",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Draughtsman",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Engineer(Civil)",
                NoOfPosts: "05",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Head Clerk",
                NoOfPosts: "24",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Surveyor",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            }]
},
{
            HeadingTheme: "panel panel-danger",
            Title: "Various Group-B posts at Uttarakhand Public Service Commission(UKPSC)",
            ApplicationEndDt: "18/02/2015",
            DetailedNotification: "http://ukpsc.gov.in/files/Group_B.pdf",
            GoToSite: "http://ukpsc.gov.in/recruitment/view/330",
            ApplicationFee: "--",
            PublishedOn: "31/01/2015",
			Age: "--",
			Logo:"ukpsc.jpg",
			AltText:"job at UKPSC",
            JobDetails: [{
                Designation: "Principal Grade II",
                NoOfPosts: "18",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Engineer",
                NoOfPosts: "06",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Lecturer(Cookery, Bakery, Housekeeping, Restaurant, Reception)",
                NoOfPosts: "04",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Lecturer(Food Science and nutrition)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Personnel Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Geologist",
                NoOfPosts: "04",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Extension Officer",
                NoOfPosts: "12",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "District Sports Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Superintendent",
                NoOfPosts: "05",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Director(Printing)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            }]
},
{
            HeadingTheme: "panel panel-warning",
            Title: "Category II stipendiary trainee at Bhabha Atomic Research Centre(BARC)",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://barc.gov.in/careers/vacancy242.pdf",
            GoToSite: "http://barc.gov.in/careers/",
            ApplicationFee: "--",
            PublishedOn: "02/02/2015",
			Age: "18 - 27",
			Logo:"barc.jpg",
			AltText:"job at BARC",
            JobDetails: [{
                Designation: "Category II stipendiary trainee",
                NoOfPosts: "41(SC-13, OBC-28)",
                PayScale: "5200 - 20200",
                GradePay: "2400",
                Eligibility: "--"
            }]
},
{
            HeadingTheme: "panel panel-warning",
            Title: "Coast guard Navik general duty",
            ApplicationEndDt: "10/02/2015",
            DetailedNotification: "http://www.joinindiancoastguard.gov.in/PDF/Advertisement/Navik%28GD%29.pdf",
            GoToSite: "http://www.joinindiancoastguard.gov.in/",
            ApplicationFee: "--",
            PublishedOn: "02/02/2015",
			Age: "18 - 22",
			Logo:"coastguard.jpg",
			AltText:"job at Coast Gaurd",
            JobDetails: [{
                Designation: "Navik(General Duty)",
                NoOfPosts: "--",
                PayScale: "5200 - 20200",
                GradePay: "2200",
                Eligibility: "10+2 with Maths and Physics"
            }]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Non faculty posts at Indira Gandhi National Tribal University(IGNTU)",
            ApplicationEndDt: "28/02/2015",
            DetailedNotification: "http://igntu.ac.in/recruitment/Advt_Non_Teaching_2015.pdf",
            GoToSite: "http://igntu.ac.in/recruitment.htm",
            ApplicationFee: "500",
            PublishedOn: "20/01/2015",
			Age: "read Adv",
			Logo:"igntu.jpg",
			AltText:"job at IGNTU",
            JobDetails: [{
                Designation: "Librarian",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Executive Engineer(Civil)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Librarian",
                NoOfPosts: "03(1 for regional campus Manipur)",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Public Relations Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Information Scientist",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Section Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Private Secretary",
                NoOfPosts: "03",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant Engineer(Civil)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Security Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Personal Assistant",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Professional Assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Senior Technical Assistant",
                NoOfPosts: "05",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Senior Technical Assistant(Computer)",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Junior Engineer(Civil)",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Semi Professional Assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Technical Assistant",
                NoOfPosts: "06",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Pharmacist",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Security Inspector",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Upper Divisional Clerk",
                NoOfPosts: "03",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Library Assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Laboratory Assistant",
                NoOfPosts: "09",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Lower Divisional Clerk",
                NoOfPosts: "11",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Driver",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Cook",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Library Attendant",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Laboratory Attendant",
                NoOfPosts: "08",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Multi tasking staff",
                NoOfPosts: "06",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Kitchen Attendant",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Hostel Attendant",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Manager posts in National Small Industries corporation limited(NSIC)",
            ApplicationEndDt: "17/02/2015",
            DetailedNotification: "http://nsicnet.com/hrnsic15/Instruction.asp?Ad=2",
            GoToSite: "http://nsicnet.com/hrnsic15/Instruction.asp?Ad=2",
            ApplicationFee: "--",
            PublishedOn: "24/01/2015",
			Age: "read Adv",
			Logo:"nsic.gif",
			AltText:"NSIC job",
            JobDetails: [{
                Designation: "Chief Manager",
                NoOfPosts: "05(UR-03,OBC-01, SC-01)",
                PayScale: "24,900 - 50,500",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Chief Manager(Finance and Accounts)",
                NoOfPosts: "05(UR-04, SC-01)",
                PayScale: "24,900 - 50,500",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Deputy Manager",
                NoOfPosts: "15(UR-06,OBC-06,ST-01, SC-02)",
                PayScale: "16,400 - 40,500",
                GradePay: "--",
                Eligibility: "--"
            },
			{
                Designation: "Chief Manager(Finance and Accounts)",
                NoOfPosts: "05(UR-01,OBC-02, SC-02,ST-01)",
                PayScale: "16,400 - 40,500",
                GradePay: "--",
                Eligibility: "--"
            }
            ]
        },
{
            HeadingTheme: "panel panel-danger",
            Title: "Officer posts in Allahbad Gramin Bank(AGB)",
            ApplicationEndDt: "12/02/2015",
            DetailedNotification: "http://www.allahabadgraminbank.in/career/Allahabad%20UP%20Gramin%20Bank-Advertisement.pdf.pdf",
            GoToSite: "http://www.allahabadgraminbank.in/career.html",
            ApplicationFee: "--",
            PublishedOn: "28/01/2015",
			Age: "read Adv",
			Logo:"agb.jpg",
			AltText:"AGB job",
            JobDetails: [{
                Designation: "Officer Scale - I",
                NoOfPosts: "113(UR-41,OBC-41, SC-21, ST-10)",
                PayScale: "14500 - 25700",
                GradePay: "--",
                Eligibility: "qualified the CWE RRB-III September/ October 2014 of IBPS for RRBs"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Bharat Electronics (BEL) Ghaziabad Engineering Assistant Trainee",
            ApplicationEndDt: "08/02/2015",
            DetailedNotification: "http://bel-india.com/sites/default/files/Recruitments/Detailed%20Advt.pdf",
            GoToSite: "http://bel-india.com/",
            ApplicationFee: "300",
            PublishedOn: "01/2015",
			Age: "30 years as on 01/01/2015",
			Logo:"bel.jpg",
			AltText:"BEL job",
            JobDetails: [{
                Designation: "Contract Engineer",
                NoOfPosts: "25",
                PayScale: "15000 -20000 per month",
                GradePay: "--",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-success",
            Title: "Bharat Electronics (BEL) Ghaziabad Engineering Assistant Trainee",
            ApplicationEndDt: "14/02/2015",
            DetailedNotification: "https://jobapply.in/belghaziabad2015/",
            GoToSite: "http://bel-india.com/",
            ApplicationFee: "300",
            PublishedOn: "17/01/2015",
			Age: "28",
			Logo:"bel.jpg",
			AltText:"BEL job",
            JobDetails: [{
                Designation: "Engineering Assistant Trainee(EAT)",
                NoOfPosts: "11",
                PayScale: "4000 per month for 1 year",
                GradePay: "--",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-danger",
            Title: "Job posts in Karnataka Kerela Region(KKR) by Staff Selection Commission(SSC)",
            ApplicationEndDt: "13/02/2015",
            DetailedNotification: "http://ssc.nic.in/notice/examnotice/ADVERTISEMENT%20NO.%20KKR-01-2015.pdf",
            GoToSite: "http://ssckkr.kar.nic.in",
            ApplicationFee: "check Advt",
            PublishedOn: "17/01/2015",
			Age: "refer advertisement",
			Logo:"ssc.jpg",
			AltText:"SSC job",
            JobDetails: [{
                Designation: "Senior Radio Technician",
                NoOfPosts: "01(UR)",
                PayScale: "9300 - 34800",
                GradePay: "4200",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Research Assistant(Environment))",
                NoOfPosts: "08(UR-04,OBC01,SC-02,ST-01)",
               PayScale: "9300 - 34800",
                GradePay: "4200",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Technical Assistant",
                NoOfPosts: "01 UR",
                PayScale: "5200 - 20200",
                GradePay: "2800",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Technical Officer",
                NoOfPosts: "01 UR",
                PayScale: "9300 - 34800",
                GradePay: "4200",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "National Hydroelectric power Corporation(NHPC) special drive for engineer and officer posts",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://www.nhpcindia.com/writereaddata/Images/pdf/srd2015.pdf",
            GoToSite: "http://www.nhpcindia.com/career.htm",
            ApplicationFee: "check Advt",
            PublishedOn: "01/2015",
			Age: "refer advertisement",
			Logo:"nhpc.jpg",
			AltText:"NHPC job",
            JobDetails: [{
                Designation: "Trainee Engineer(Civil)",
                NoOfPosts: "35",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer(Mechanical)",
                NoOfPosts: "16",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer(E & C)",
                NoOfPosts: "05",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer / Officer(IT)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer / Officer(Geology)",
                NoOfPosts: "03",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer / Officer(Geophysicist)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer / Officer(Geo Technical)",
                NoOfPosts: "02",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Engineer / Officer(Earthquake)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Constable(General Duty)/Rifleman(GD)",
                NoOfPosts: "62390",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(HR)",
                NoOfPosts: "05",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(Finance)",
                NoOfPosts: "20",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Medical Officer",
                NoOfPosts: "05",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(Law)",
                NoOfPosts: "03",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(PR)",
                NoOfPosts: "03",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Rajbhasha Officer",
                NoOfPosts: "13",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(Company Secretary)",
                NoOfPosts: "05",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Trainee Officer(Safety)",
                NoOfPosts: "10",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            }
            ]
        },
        {
            HeadingTheme: "panel panel-success",
            Title: "Recruitment of constables(GD) in CAPFs and rifleman in Assam Rifles 2015",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://ssconline.nic.in/mainmenu2.php",
            GoToSite: "http://ssconline.nic.in/mainmenu2.php",
            ApplicationFee: "50",
            PublishedOn: "24/01/2015",
			Age: "18 - 23 as on 01/08/2015",
			Logo:"ssc.jpg",
			AltText:"SSC",
            JobDetails: [{
                Designation: "Constable(General Duty)/Rifleman(GD)",
                NoOfPosts: "62390",
                PayScale: "5200 - 20200",
                GradePay: "2000",
                Eligibility: "10th pass or matriculation"
            }
            ]
        },
        {
            HeadingTheme: "panel panel-danger",
            Title: "Civil Judge(Junior Division) cum judicial magistrate at Punjab PSC",
            ApplicationEndDt: "25/02/2015",
            DetailedNotification: "http://ppsc.gov.in/pdf/pcsj1415/dae.pdf",
            GoToSite: "http://ppsc.gov.in/advertisement_04.html",
            ApplicationFee: "--",
            PublishedOn: "21/01/2015",
			Age: "21 - 27 as on 25/02/2015",
			Logo:"PunjabPSC.jpg",
			AltText:"PunjabPSC",
            JobDetails: [{
                Designation: "Civil Judge",
                NoOfPosts: "118",
                PayScale: "27,700-44,770",
                GradePay: "--",
                Eligibility: "1. Degree of Bachelor of Laws. 2. Punjabi upto Matric or its equivalent Standard"
            }
            ]
        },
		{
            HeadingTheme: "panel panel-warning",
            Title: "Constable Driver at Indo Tibetan Border Police(ITBP)",
            ApplicationEndDt: "16/02/2015",
            DetailedNotification: "http://itbpolice.nic.in/eKiosk/writeReadData/RectAd/Fresh%20Advertisement%20CT%20%28dvr%29%202014.pdf",
            GoToSite: "http://itbpolice.nic.in/itbpwebsite/index.html",
            ApplicationFee: "50",
            PublishedOn: "2015",
			Age: "21 - 27",
			Logo:"itbp.jpg",
			AltText:"job at ITBP",
            JobDetails: [{
                Designation: "Constable Driver",
                NoOfPosts: "472",
                PayScale: "5,200 - 20,200",
                GradePay: "2000",
                Eligibility: "1. Matriculation or 10th pass. 2. Valid driving license for light, medium or heavy vehicles with 2 years of driving experience"
            }
            ]
        }
];

var sectionRight = [
    {
        HeadingTheme: "panel panel-info",
        Title: "UPSC Indian Economic Service Examination 2015",
        ApplicationEndDt: "20/03/2015",
        DetailedNotification: "http://upsc.gov.in/exams/notifications/2015/IES_ISS/Notice_IES_ISS_Exam_2015_English.pdf",
        GoToSite: "http://upsconline.nic.in/mainmenu2.php",
        ApplicationFee: "200",
        PublishedOn: "21/02/2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "UPSC Indian Economic Service Examination 2015",
        JobDetails: [{
            Designation: "Indian Economic Service",
            NoOfPosts: "06",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Indian Statistical Service",
            NoOfPosts: "55",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        ]
    },
    {
        HeadingTheme: "panel panel-success",
        Title: "UPSC Combined Geo-Scientist And Geologist Examination 2015",
        ApplicationEndDt: "23/03/2015",
        DetailedNotification: "http://upsc.gov.in/exams/notifications/2015/Geol/Notice_Geol_2015_English.pdf",
        GoToSite: "http://upsconline.nic.in/mainmenu2.php",
        ApplicationFee: "200",
        PublishedOn: "21/02/2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "UPSC Combined Geo-Scientist And Geologist Examination 2015",
        JobDetails: [{
            Designation: "Geologist Group A",
            NoOfPosts: "150",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Geophysicist Group A",
            NoOfPosts: "40",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Jr. HydroGeologist(Scientist B)",
            NoOfPosts: "29",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Chemist Group A",
            NoOfPosts: "50",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Recruitment Of Meritorious Sportsperson in the Income Tax Department, Chennai",
        ApplicationEndDt: "06/04/2015",
        DetailedNotification: "http://tnincometax.gov.in/vdo_library/902e9550-b988-11e4-9f25-5254005c208b.pdf",
        GoToSite: "http://tnincometax.gov.in/vdo_library/902e9550-b988-11e4-9f25-5254005c208b.pdf",
        ApplicationFee: "",
        PublishedOn: "2015",
        Age: "--",
        Logo: "tn_it.jpg",
        AltText: "Recruitment Of Meritorious Sportsperson in the Income Tax Department, Chennai",
        JobDetails: [{
            Designation: "Income Tax Inspectors",
            NoOfPosts: "07",
            PayScale: "9300 - 34800",
            GradePay: "4600",
            Eligibility: ""
        },
        {
            Designation: "Tax Assistant",
            NoOfPosts: "20",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        },
        {
            Designation: "Multi Tasking Officer",
            NoOfPosts: "10",
            PayScale: "5200 - 20200",
            GradePay: "1800",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Recruitment of Head Constable(Ministerial) at Central Industrial Security Force(CISF)",
        ApplicationEndDt: "14/03/2015",
        DetailedNotification: "http://www.cisf.gov.in/wp-content/uploads/2015/02/HC_MIN_2015_ENGLISH.pdf",
        GoToSite: "http://www.cisf.gov.in/head-constablemin-2015/",
        ApplicationFee: "50",
        PublishedOn: "",
        Age: "--",
        Logo: "cisf.jpg",
        AltText: "Recruitment at Central Industrial Security Force(CISF)",
        JobDetails: [{
            Designation: "Head Constable(Ministerial)",
            NoOfPosts: "700",
            PayScale: "5200 - 20200",
            GradePay: "2400",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Advertisement for the post of Resident Medical Officer at IISER Bhopal",
        ApplicationEndDt: "10/03/2015",
        DetailedNotification: "https://www.iiserb.ac.in/PDF/Advertisement_for_the_post_of_Resident_Medical_Officer.pdf",
        GoToSite: "https://www.iiserb.ac.in/page.php?bulletin=Vacancies-&type=NonAcademic&id=87",
        ApplicationFee: "",
        PublishedOn: "",
        Age: "--",
        Logo: "iiser.jpg",
        AltText: "IISER Bhopal Recruitment for Resident Medical Officer",
        JobDetails: [{
            Designation: "Resident Medical Officer",
            NoOfPosts: "02",
            PayScale: "57,500 Gross Salary",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Faculty Position Under Special Recruitment Drive For SC/ST at IISER Thiruvananthapuram",
        ApplicationEndDt: "31/03/2015",
        DetailedNotification: "http://www.orientalinsurance.org.in/Career.jsp",
        GoToSite: "http://www.iisertvm.ac.in/openings/faculty_special_recruitment_drive.phpx",
        ApplicationFee: "",
        PublishedOn: "",
        Age: "--",
        Logo: "iiser.jpg",
        AltText: "Faculty Position Under Special Recruitment Drive For SC/ST at Indian Institue of Science Education and Reserch(IISER)",
        JobDetails: [{
            Designation: "Assistant Professor ( on contract)",
            NoOfPosts: "",
            PayScale: "15600-39100",
            GradePay: "6000",
            Eligibility: ""
        },
        {
            Designation: "Assistant Professor (Regular)",
            NoOfPosts: "",
            PayScale: "15600-39100",
            GradePay: "6000",
            Eligibility: "PhD with a very good academic record throughout and at least three years "
        }
        ]
    },
   {
       HeadingTheme: "panel panel-danger",
       Title: "Recruitment of Administrative Officers (Scale-I)-2015 in Oriental Insurance Co. Ltd",
       ApplicationEndDt: "20/03/2015",
       DetailedNotification: "http://www.orientalinsurance.org.in/Career.jsp",
       GoToSite: "http://www.orientalinsurance.org.in/Career.jsp",
       ApplicationFee: "600",
       PublishedOn: "27/02/2015",
       Age: "--",
       Logo: "orientalinsurance.jpg",
       AltText: "Recruitment of Administrative Officers (Scale-I)-2015 in Oriental Insurance Co. Ltd",
       JobDetails: [{
           Designation: "Administrative Officer",
           NoOfPosts: "246",
           PayScale: "17,240-840(14)-29,000-910(4)-32640",
           GradePay: "",
           Eligibility: ""
       },
       ]
   },
    {
        HeadingTheme: "panel panel-info",
        Title: "Center For Development of Advanced Computing(CDAC) invites applications for Group A non Technical posts",
        ApplicationEndDt: "05/03/2015",
        DetailedNotification: "http://cdac.in/index.aspx?id=ca_pune_feb_general_terms",
        GoToSite: "http://cdac.in/index.aspx?id=job_pune_feb_2015",
        ApplicationFee: "500",
        PublishedOn: "17/02/2015",
        Age: "--",
        Logo: "cdac.jpg",
        AltText: "CDAC Recruitment 2015",
        JobDetails: [{
            Designation: "Senior HRD Officer",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Finance Officer",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Senior Admin Officer(Chief Executive Office/Registrar Office)",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "HRD Officer",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Admin Officer(Legal)",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Admin Officer",
            NoOfPosts: "01",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Finance Officer",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Purchase Officer",
            NoOfPosts: "02",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        }
        ]
    },
    {
        HeadingTheme: "panel panel-info",
        Title: "Zone Wise Recruitment for Junior Engineer(Civil/Electrical/Mechanical), Assistant Grade II, Typist(Hindi) and Assistant Grade III at Food Corporation Of India(FCI)",
        ApplicationEndDt: "17/03/2015",
        DetailedNotification: "https://fcijobsportal.com/AGIII2014/pages/FCI_Advt_2015.pdf",
        GoToSite: "https://fcijobsportal.com/AGIII2014/pages/fciindex.aspx",
        ApplicationFee: "350",
        PublishedOn: "16/02/2015",
        Age: "--",
        Logo: "fci.jpg",
        AltText: "fci recruitment 2015",
        JobDetails: [{
            Designation: "Junior Engineer(Civil)",
            NoOfPosts: "66",
            PayScale: "11100-29950",
            GradePay: "",
            Eligibility: "Degree in Civil Engineering or Diploma in Civil Engineering with one year experience."
        },
        {
            Designation: "Junior Engineer(Electrical)",
            NoOfPosts: "17",
            PayScale: "11100-29950",
            GradePay: "",
            Eligibility: "Degree in Electrical Engineering or Diploma in Electrical Engineering with one year experience in the case of Diploma holders only."
        },
        {
            Designation: "Junior Engineer(Mechanical)",
            NoOfPosts: "06",
            PayScale: "11100-29950",
            GradePay: "",
            Eligibility: "Degree in Mechanical Engineering or Diploma in Mechanical Engineering with one year experience in the case of Diploma holders."
        },
        {
            Designation: "AG-II (Hindi)",
            NoOfPosts: "54",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "1. Degree of a recognized University with Hindi as the main subject. 2. Proficiency in English. 3. One year experience of translation from English to Hindi and viceversa."
        },
        {
            Designation: "Typist (Hindi)",
            NoOfPosts: "100",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "(1) Graduation or equivalent. (2) 30 W.P.M speed in Hindi Typing. (3) Preference will be given to the candidates knowing by-lingual typing (English and Hindi) and Computer knowledge."
        },
        {
            Designation: "AG-III (General)",
            NoOfPosts: "699",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "Graduate Degree in any discipline from a recognized University with proficiency in use of computers."
        },
        {
            Designation: "AG-III (Accounts)",
            NoOfPosts: "269",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "Bachelor of Commerce from a recognized University with proficiency in use of computers."
        },
        {
            Designation: "AG-III (Technical)",
            NoOfPosts: "1429",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "1. B.Sc. in Agriculture from a recognized University. 2. Proficiency in use of computers."
        },
        {
            Designation: "AG-III (Depot)",
            NoOfPosts: "1652",
            PayScale: "9900 – 25530",
            GradePay: "",
            Eligibility: "Graduate Degree in any discipline from a recognized University withproficiency in use of computers."
        }
        ]
    },
    {
        HeadingTheme: "panel panel-danger",
        Title: "Container Corporation Of India Recruitment 2015 Management Trainee",
        ApplicationEndDt: "08/03/2015",
        DetailedNotification: "http://careers1.concorindia.co.in/AdvEng.Pdf",
        GoToSite: "http://www.concorindia.com/recruitment_notices.aspx",
        ApplicationFee: "350",
        PublishedOn: "14/02/2015",
        Age: "--",
        Logo: "concor.jpg",
        AltText: "container corporation of india recruitment 2012 management trainee",
        JobDetails: [{
            Designation: "Management Trainee",
            NoOfPosts: "25",
            PayScale: "16400 - 40500",
            GradePay: "",
            Eligibility: "Graduate with minimum 55% marks and 2 years full time MBA"
        },
        {
            Designation: "Assistant Company Secretary",
            NoOfPosts: "01",
            PayScale: "11800 - 28600",
            GradePay: "",
            Eligibility: "Commerce Graduate with minimum 60% marks and membership of ICSI"
        }
        ]
    },
  {
      HeadingTheme: "panel panel-success",
      Title: "Indian Navy SSC Technical Recruitment JAn 2016 course",
      ApplicationEndDt: "04/03/2015",
      DetailedNotification: "http://www.nausena-bharti.nic.in/pdf/Triadentry/sscxtechsubmjan16.pdf",
      GoToSite: "http://www.nausena-bharti.nic.in/forthcomingOfficer.php",
      ApplicationFee: "",
      PublishedOn: "14/02/2015",
      Age: "--",
      Logo: "indiannavy.jpg",
      AltText: "Indian Navy SSC Technical Recruitment 2015",
      JobDetails: [{
          Designation: "SSC Technical",
          NoOfPosts: "71",
          PayScale: "15600 - 39100",
          GradePay: "5400",
          Eligibility: "B.E./B.Tech Engineering with minimum 65%"
      }]
  },
    {
        HeadingTheme: "panel panel-warning",
        Title: "BPCL Kochi Refinery Workman Recruitment",
        ApplicationEndDt: "28/02/2015",
        DetailedNotification: "http://www.bharatpetroleum.com/Kochicareers/pdf/advertisement%20feb%202015.pdf",
        GoToSite: "http://www.bpclcareers.in/joblisting.aspx",
        ApplicationFee: "",
        PublishedOn: "14/02/2015",
        Age: "--",
        Logo: "bpcl.jpg",
        AltText: "BPCL recruitment",
        JobDetails: [{
            Designation: "General Workman",
            NoOfPosts: "71",
            PayScale: "5.51 CTC",
            GradePay: "",
            Eligibility: "First class Diploma in Engineering"
        }]
    },
    {
        HeadingTheme: "panel panel-warning",
        Title: "Various posts by UPSC",
        ApplicationEndDt: "05/03/2015",
        DetailedNotification: "http://upsc.gov.in/recruitment/advt/2015/advt3&51_20015.pdf",
        GoToSite: "http://upsconline.nic.in/ora/VacancyNoticePub.php",
        ApplicationFee: "500",
        PublishedOn: "14/02/2015",
        Age: "--",
        Logo: "upsc.jpg",
        AltText: "UPSC vacancy",
        JobDetails: [{
            Designation: "Stores Officer",
            NoOfPosts: "20(SC-03, ST-01, OBC-05, UR-11)",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Stores Officer",
            NoOfPosts: "20(SC-03, ST-01, OBC-05, UR-11)",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Public Prosecutor",
            NoOfPosts: "22(SC-02, ST-01, OBC-01, UR-13)",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
        {
            Designation: "Assistant Surveyor Officers",
            NoOfPosts: "04(ST-01, OBC-01, UR-02)",
            PayScale: "",
            GradePay: "",
            Eligibility: ""
        },
         {
             Designation: "Engineer and Ship Surveyor cum Deputy Director General(Tech.)",
             NoOfPosts: "03(ST-01, OBC-01, UR-01)",
             PayScale: "",
             GradePay: "",
             Eligibility: ""
         }
        ]
},
{
    HeadingTheme: "panel panel-danger",
    Title: "Uttar Pradesh National Rural Health Mission (UP NRHM) vacancy : Contract jobs",
    ApplicationEndDt: "28/02/2015",
    DetailedNotification: "http://upnrhm.gov.in/site-files/careers/JD_BCPM-NHM__SS-ARS-GN_3__1_.doc",
    GoToSite: "http://upnrhm.gov.in/careers.php",
    ApplicationFee: "500",
    PublishedOn: "2015",
    Age: "--",
    Logo: "nrhm.jpg",
    AltText: "UP NRHM vacancy",
    JobDetails: [{
        Designation: "Block Community Process Managers",
        NoOfPosts: "820",
        PayScale: "",
        GradePay: "",
        Eligibility: ""
    },
    {
        Designation: "Rogi Sahayata Kendra Managers",
        NoOfPosts: "50",
        PayScale: "",
        GradePay: "",
        Eligibility: ""
    },
    {
        Designation: "Rogi Sahayata Kendra Operators",
        NoOfPosts: "200",
        PayScale: "",
        GradePay: "",
        Eligibility: ""
    }
    ]
},
{
            HeadingTheme: "panel panel-danger",
            Title: "Various posts in Indian Institute Of Technology Bhubaneswar(IIT)",
            ApplicationEndDt: "20/02/2015",
            DetailedNotification: "http://www.iitbbs.ac.in/staffrecruitment/advt/postadvt_1422493625.pdf",
            GoToSite: "http://www.iitbbs.ac.in/staffrecruitment/index.php",
            ApplicationFee: "500",
            PublishedOn: "30/01/2015",
			Age: "--",
			Logo:"iit_bhubaneswar.jpg",
			AltText:"Indian Institute Of Technology Bhubaneswar recruitment 2015",
            JobDetails: [{
                Designation: "Junior Superintendent",
                NoOfPosts: "05(UR-03, OBC-02)",
                PayScale: "9,300 - 34,800",
                GradePay: "4200",
                Eligibility: ""
            },
			{
                Designation: "Junior Assistant",
                NoOfPosts: "05(UR-02, SC-01, ST-02)",
                PayScale: "5,200 - 20,200",
                GradePay: "2,000",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-warning",
            Title: "Various posts in Tripura Public Service Commission(TPSC)",
            ApplicationEndDt: "28/02/2015",
            DetailedNotification: "http://www.tpsc.gov.in/2015/310115.pdf",
            GoToSite: "http://www.tpsc.gov.in/examination.htm",
            ApplicationFee: "200",
            PublishedOn: "2015",
			Age: "--",
			Logo:"tpsc.jpg",
			AltText:"Tripura Public Service Commission recruitment 2015",
            JobDetails: [{
                Designation: "Junior Medical Officer / General Duty Medical Officer",
                NoOfPosts: "350",
                PayScale: "13,575 - 37,000",
                GradePay: "3,700",
                Eligibility: ""
            },
			{
                Designation: "Scientific Officer",
                NoOfPosts: "03",
                PayScale: "9,570 - 30,000",
                GradePay: "3,500",
                Eligibility: ""
            },
			{
                Designation: "Statistical Officer",
                NoOfPosts: "02",
                PayScale: "9,570 - 30,000",
                GradePay: "3,500",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Faculty posts in Institute of Microbial Technology(IMTECH) Chandigarh",
            ApplicationEndDt: "12/03/2015",
            DetailedNotification: "http://www.imtech.res.in/index.php?option=com_chronocontact&chronoformname=Job&task=summary&Itemid=123",
            GoToSite: "http://www.imtech.res.in/",
            ApplicationFee: "",
            PublishedOn: "2015",
			Age: "--",
			Logo:"csir.jpg",
			AltText:"Faculty posts in IMTECH",
            JobDetails: [{
                Designation: "Senior Principal Scientist / Principal Scientist",
                NoOfPosts: "04",
                PayScale: "37,400 - 67,000",
                GradePay: "8,900",
                Eligibility: ""
            },
			{
                Designation: "Senior Scientist / Scientist",
                NoOfPosts: "11",
                PayScale: "15,600 - 39,100",
                GradePay: "6,600",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-info",
            Title: "Faculty posts in Berhampur University",
            ApplicationEndDt: "28/02/2015",
            DetailedNotification: "http://www.buodisha.edu.in/",
            GoToSite: "http://www.buodisha.edu.in/",
            ApplicationFee: "1000",
            PublishedOn: "2015",
			Age: "--",
			Logo:"berhampur_university.jpg",
			AltText:"Faculty posts in Berhampur University",
            JobDetails: [{
                Designation: "Reader",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Lecturer",
                NoOfPosts: "10",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-danger",
            Title: "Faculty posts at All India Institute of Medical Sciences(AIIMS) Patna",
            ApplicationEndDt: "14/03/2015",
            DetailedNotification: "http://www.aiimspatna.org/news/Faculty%20Ad%20Employment%20News.pdf",
            GoToSite: "http://www.aiimspatna.org/pages/recruitment.php",
            ApplicationFee: "500",
            PublishedOn: "07/02/2015",
			Age: "--",
			Logo:"aiims_patna.jpg",
			AltText:"Faculty posts at AIIMS Patna",
            JobDetails: [{
                Designation: "Professor",
                NoOfPosts: "29",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Additional Professor",
                NoOfPosts: "23",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Associate Professor",
                NoOfPosts: "60",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Professor",
                NoOfPosts: "82",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-warning",
            Title: "Faculty and non faculty posts at Tata Memorial Hospital(TMH)",
            ApplicationEndDt: "20/02/2015",
            DetailedNotification: "https://tmc.gov.in/work/Notification2015/work03_15.html",
            GoToSite: "https://tmc.gov.in/work/Notification2015/work03_15.html",
            ApplicationFee: "500",
            PublishedOn: "30/01/2015",
			Age: "--",
			Logo:"tmh.jpg",
			AltText:"Faculty and non faculty posts at TMH",
            JobDetails: [{
                Designation: "Professor 'G' / Associate Professor 'F' / Assistant Professor 'E' Gastroenterology",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Professor 'E' Gastroenterology",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Professor 'G' / Associate Professor 'F', Assistant Professor 'E' Gastroenterology",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Scientific Officer",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Officer In charge(Dispensary)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Junior Engineer",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Dietician",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Scientific Assistant 'B'",
                NoOfPosts: "13",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Pharmacist 'B'",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Technician 'C'",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Stenographer",
                NoOfPosts: "04",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Technician 'A'",
                NoOfPosts: "03",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Lower Divisional Clerk",
                NoOfPosts: "15",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-success",
            Title: "Recruitment of Personal Assistant / Stenographer in Patna High Court",
            ApplicationEndDt: "13/03/2015",
            DetailedNotification: "http://patnahighcourt.bih.nic.in/ViewPDF.aspx?File=UPLOADED/575.PDF",
            GoToSite: "http://patnahighcourt.bih.nic.in/",
            ApplicationFee: "200",
            PublishedOn: "12/02/2015",
			Age: "--",
			Logo:"patna_high_court.jpg",
			AltText:"Personal Assistant / Stenographer in Patna High Court",
            JobDetails: [{
                Designation: "Personal Assistant / Stenographer",
                NoOfPosts: "64 +30(anticipated)",
                PayScale: "9,300 - 34,800",
                GradePay: "4,600",
                Eligibility: ""
            }]
},
{
            HeadingTheme: "panel panel-warning",
            Title: "Manager and officer posts at Hindustan Shipyard Limited(HSL)",
            ApplicationEndDt: "28/02/2015",
            DetailedNotification: "http://hsl.gov.in/WriteReadData/userfiles/file/Recruitment/ADVT_NO_HR_E_0102_01_2015_03Feb2015_Final.pdf",
            GoToSite: "http://hsl.gov.in/content/200_1_Careers.aspx",
            ApplicationFee: "100",
            PublishedOn: "2015",
			Age: "--",
			Logo:"hsl.jpg",
			AltText:"Manager and officer posts at HSL",
            JobDetails: [{
                Designation: "General Manager(Finance)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Additional General Manager(Finance)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
               Designation: "Additional General Manager(Submarine Technical)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Professor(Nephrology)",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Additional General Manager(Technical)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Professor(Nephrology)",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Additional General Manager(Safety and Security)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Deputy General Manager(Technical)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Additional General Manager(Safety and Security)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Deputy General Manager(Technical)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Senior Manager(HR and Admin)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Senior Manager(Purchase and Material)",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Dock Master",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Manager(HR and Admin)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Management Trainee(Technical)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            }
			]
},
{
            HeadingTheme: "panel panel-danger",
            Title: "Job posts in Himachal Pradesh Public Service Commission(HPPSC)",
            ApplicationEndDt: "05/03/2015",
            DetailedNotification: "http://hp.gov.in/hppsc/file.axd?file=2015%2f2%2fAdvertisement+No.+8_2014+++(Various+Posts).pdf",
            GoToSite: "http://hp.gov.in/hppsc/page/Latest-Advertisement.aspx",
            ApplicationFee: "400",
            PublishedOn: "2014",
			Age: "--",
			Logo:"hppsc.jpg",
			AltText:"Various posts at HPPSC",
            JobDetails: [{
                Designation: "Assistant Professor(Nephrology)",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Principal(Department of Ayurveda)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Lecturer(Samhita and Siddhanta)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Lecturer(Rog Nidhan)",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Law Officer(English)",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Manager",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Accounts Officer",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Commandant / Junior Staff Officer",
                NoOfPosts: "02",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Assistant Town Planner",
                NoOfPosts: "01",
                PayScale: "",
                GradePay: "",
                Eligibility: ""
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Job posts in Chaitanya Godavri Grameen Bank(CGGB)",
            ApplicationEndDt: "18/02/2015",
            DetailedNotification: "http://www.cggb.in/Final_approved_Advertisement_CGGB_for%20RRBs_2015_to%20IBPS.pdf",
            GoToSite: "http://www.cggb.in/",
            ApplicationFee: "",
            PublishedOn: "07/02/2015",
			Age: "--",
			Logo:"cggb.jpg",
			AltText:"Officer posts at CGGB",
            JobDetails: [{
                Designation: "Officer Scale I",
                NoOfPosts: "69",
                PayScale: "14,500 - 25700",
                GradePay: "",
                Eligibility: ""
            },
			{
                Designation: "Office Assistant(Multi-purpose)",
                NoOfPosts: "32",
                PayScale: "7200 - 19300",
                GradePay: "",
                Eligibility: ""
            }
            ]
        },
{
            HeadingTheme: "panel panel-warning",
            Title: "Solar Energy Corporation Of India(SOLAR) invites application for Engineer and Assistant",
            ApplicationEndDt: "08/03/2015",
            DetailedNotification: "http://www.seci.gov.in/upload/uploadfiles/files/English%20Solar%20Energy%20Ad%20for%20Employment%20News.pdf",
            GoToSite: "http://www.seci.gov.in/content/news_update/recruitment-notification-no-12015.php",
            ApplicationFee: "--",
            PublishedOn: "07/02/2015",
			Age: "--",
			Logo:"solar.jpg",
			AltText:"Engineer posts at SOLAR",
            JobDetails: [{
                Designation: "Senior Engineer",
                NoOfPosts: "13",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Full time Engineering Graduate"
            },
			{
                Designation: "Personal Assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Bachelors degree from recognised university"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Last date extended for faculty posts at Motilal Nehru Instituteof Technology(MNNIT)",
            ApplicationEndDt: "02/03/2015",
            DetailedNotification: "http://mnnit.ac.in/images/newstories/Extension_Faculty_advertisement_No_new.pdf",
            GoToSite: "http://mnnit.ac.in/index.php/faculty-positions",
            ApplicationFee: "500",
            PublishedOn: "04/02/2015",
			Age: "--",
			Logo:"mnnit.jpg",
			AltText:"faculty posts at MNNIT",
            JobDetails: [{
                Designation: "Professor",
                NoOfPosts: "--",
                PayScale: "37,400 - 67,000",
                GradePay: "10,500",
                Eligibility: "--"
            },
			{
                Designation: "Associate Professor",
                NoOfPosts: "--",
                PayScale: "37,400 - 67,000",
                GradePay: "9500",
                Eligibility: "--"
            }
            ]
        },
{
            HeadingTheme: "panel panel-danger",
            Title: "Officer and office assistant post at Madhyanchal Gramin Bank(MGBank)",
            ApplicationEndDt: "13/02/2015",
            DetailedNotification: "http://www.mgbank.co.in/recruitment/1422447994Final%20recruitment%20advt%202015.pdf",
            GoToSite: "http://www.mgbank.co.in/career.php",
            ApplicationFee: "--",
            PublishedOn: "29/01/2015",
			Age: "--",
			Logo:"mgb.jpg",
			AltText:"job at Madhyanchal Gramin Bank(MGBank)",
            JobDetails: [{
                Designation: "Officer scale I",
                NoOfPosts: "100",
                PayScale: "14,500 - 25,700",
                GradePay: "--",
                Eligibility: "qualified online CWB for RRBs conducted by IBPS during Sep/Oct 2014"
            },
			{
                Designation: "Office Assistant(multi purpose)",
                NoOfPosts: "350",
                PayScale: "7200 - 19,300",
                GradePay: "--",
                Eligibility: "--"
            }
            ]
        },
{
            HeadingTheme: "panel panel-warning",
            Title: "Short service commission in meteorological branch of Indian Air force(IAF) for course commencing January 2016",
            ApplicationEndDt: "14/02/2015",
            DetailedNotification: "http://careerairforce.nic.in",
            GoToSite: "http://careerairforce.nic.in/tview3.asp?link_temp_id=256&lid=124",
            ApplicationFee: "--",
            PublishedOn: "2015",
			Age: "20 - 26 as on 01/01/2016",
			Logo:"iaf.jpg",
			AltText:"job at Indian Air force(IAF)",
            JobDetails: [{
                Designation: "Short Service Commission",
                NoOfPosts: "--",
                PayScale: "15,600 - 39,100",
                GradePay: "5400 plus 6000 MSP and other allowances",
                Eligibility: "Post graduate degree and physical standards"
            }
            ]
        },
{
            HeadingTheme: "panel panel-success",
            Title: "Registrar and officer posts in Aryabhatta Knowledge University(AKU)",
            ApplicationEndDt: "21/02/2015",
            DetailedNotification: "http://www.akubihar.org/pdf/Notice/Appointment%20of%20ACE,%20SO%20&%20LO%20of%20AKU,%20Patna.pdf",
            GoToSite: "http://www.akubihar.org/careers.html",
            ApplicationFee: "500",
            PublishedOn: "19/01/2015",
			Age: "Read Adv",
			Logo:"aku.jpg",
			AltText:"government job in AKU",
            JobDetails: [{
                Designation: "Assistant Controller of examination",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Section Officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Liaison officer",
                NoOfPosts: "01(purely on contract)",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Registrar",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Finance officer",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Professor",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Senior Technical assistant",
                NoOfPosts: "01",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Technical assistant",
                NoOfPosts: "02",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Laboratory Assistant",
                NoOfPosts: "03",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Officer posts in Central University of Kerela(CUK)",
            ApplicationEndDt: "01/03/2015",
            DetailedNotification: "http://cukerala.ac.in/index.php?option=com_content&view=article&id=713:teaching-and-non-teaching-recruitment-2&catid=25&Itemid=185&lang=en",
            GoToSite: "http://cukerala.ac.in/index.php?option=com_content&view=category&id=25&Itemid=185&lang=en",
            ApplicationFee: "300",
            PublishedOn: "15/01/2015",
			Age: "Read Adv",
			Logo:"cuk.jpg",
			AltText:"Central University of Kerela job",
            JobDetails: [{
                Designation: "Public Relation officer",
                NoOfPosts: "01",
                PayScale: "37400 - 67000",
                GradePay: "10000",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Technical Officer",
                NoOfPosts: "01",
                PayScale: "37400 - 67000",
                GradePay: "10000",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Finance officer",
                NoOfPosts: "01",
                PayScale: "37400 - 67000",
                GradePay: "10000",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Registrar",
                NoOfPosts: "01",
                PayScale: "37400 - 67000",
                GradePay: "10000",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-warning",
            Title: "Assistant Engineer and officer posts in Hindustan Aeronautics Limited(HAL)",
            ApplicationEndDt: "17/02/2015",
            DetailedNotification: "http://www.hal-india.com/CAREERS/M__206",
            GoToSite: "http://www.hal-india.com/CAREERS/M__206",
            ApplicationFee: "--",
            PublishedOn: "28/01/2015",
			Age: "Refer Advertisement",
			Logo:"hal.jpg",
			AltText:"jobs at HAL",
            JobDetails: [{
                Designation: "Assistant Engineer(Civil)",
                NoOfPosts: "37",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Scientific Officer",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Officer(Library)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Officer(Catering)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
              Designation: "Assistant Officer(Estate)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Officer(Horticulture)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Officer(Safety)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Assistant Officer(Security)",
                NoOfPosts: "01",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            },
			{
                Designation: "Russian Language Interpreter",
                NoOfPosts: "02",
                PayScale: "Read Adv",
                GradePay: "Read Adv",
                Eligibility: "Read Adv"
            }
            ]
        },
{
            HeadingTheme: "panel panel-info",
            Title: "Assistant Professor in Miranda House, Delhi University(DU)",
            ApplicationEndDt: "23/02/2015",
            DetailedNotification: "http://mh.du.ac.in/Docs/M1_Advertisement_JAN_2015.pdf",
            GoToSite: "http://mh.du.ac.in/home.aspx",
            ApplicationFee: "250",
            PublishedOn: "2015",
			Age: "Refer Advertisement",
			Logo:"Miranda.jpg",
			AltText:"MirandaHouse",
            JobDetails: [{
                Designation: "Assistant Professor",
                NoOfPosts: "37",
                PayScale: "15600 - 30100",
                GradePay: "6000",
                Eligibility: "--"
            }
            ]
        },
{
            HeadingTheme: "panel panel-warning",
            Title: "Union Public Service Commission(UPSC) Adv 02 for various jobs",
            ApplicationEndDt: "12/02/2015",
            DetailedNotification: "http://upsc.gov.in/recruitment/advt/2015/Advt%202%20of%202015.pdf",
            GoToSite: "http://upsconline.nic.in/ora/VacancyNoticePub.php",
            ApplicationFee: "Refer Advertisement",
            PublishedOn: "24/01/2015",
			Age: "Refer Advertisement",
			Logo:"upsc.jpg",
			AltText:"UPSC",
            JobDetails: [{
                Designation: "Junior Scientific Officer",
                NoOfPosts: "01(SC)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
            {
                Designation: "Specialist Grade III (Medicine) in the Non Teaching Specialist Sub Cadre of CHS at A&N Islands",
                NoOfPosts: "07(SC-01,ST-01,OBC-01,UR-04)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Specialist Grade III Assistant Professor (Nephrology)",
                NoOfPosts: "02(SC-01,UR-01)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Specialist Grade III Assistant Professor (Anaesthesia)",
                NoOfPosts: "37(SC-04,ST-02,OBC-13,UR-18)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Deputy Controller of Mines",
                NoOfPosts: "04(OBC-02,UR-02)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "SENIOR LECTURER (GENERAL SURGERY)",
                NoOfPosts: "01(OBC-01)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Senior Lecturer (Microbiology)",
                NoOfPosts: "01(OBC-01)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "SENIOR LECTURER (IMMUNO HAEMATOLOGY AND BLOOD TRANSFUSION)",
                NoOfPosts: "01(OBC-01)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Senior Lecturer (Tuberculosis and Respiratory Diseases)",
                NoOfPosts: "01(OBC-01)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "Senior Lecturer (Paediatrics)",
                NoOfPosts: "04(OBC-01,UR-03)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            },
			{
                Designation: "SENIOR LECTURER (RADIO DIAGNOSIS)",
                NoOfPosts: "03(OBC-01,UR-02)",
                PayScale: "--",
                GradePay: "--",
                Age: "--",
                Eligibility: "--"
            }
            ]
        },
		{
            HeadingTheme: "panel panel-danger",
            Title: "Institute of Himalayan Bioresource Technology (CSIR-IHBT) technical jobs",
            ApplicationEndDt: "09/02/2015",
            DetailedNotification: "http://www.ihbt.res.in/recruit/Advt13_2014.pdf",
            GoToSite: "http://www.ihbt.res.in/recruit/recruitNotice.php",
            ApplicationFee: "100",
            PublishedOn: "2014",
			Age: "Refer Advertisement",
			Logo:"csir.jpg",
			AltText:"Government Job at CSIR",
            JobDetails: [{
                Designation: "Senior Technical Officer",
                NoOfPosts: "02(OBC-01,UR-01)",
                PayScale: "15600 - 39100",
                GradePay: "5400",
                Eligibility: "--"
            },
            {
                Designation: "Technical Assistant",
                NoOfPosts: "01(UR-01)",
                PayScale: "--",
                GradePay: "--",
                Eligibility: "--"
            }
            ]
        }
];

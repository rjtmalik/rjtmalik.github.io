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

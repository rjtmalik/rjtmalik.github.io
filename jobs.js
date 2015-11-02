var GyaanCheckApp = angular.module('GyaanCheck', []);

GyaanCheckApp.controller('getJobs', function ($scope, $element) {
    $scope.sections = Jobs;
});

var Jobs = [
    {
        HeadingTheme: "panel panel-warning",
        Title: "Jashpur Panchayat",
        ApplicationEndDt: "13/11/2015",
        DetailedNotification: "http://www.cgforest.com/media/Adv_20102015.pdf",
        GoToSite: "http://gyaancheck.com/chattisgarh_Government/jashpur_panchayat_collector_office.html",
        ApplicationFee: "300",
        PublishedOn: "22/07/2015",
        Age: "",
        Logo: "chattisgarh_govt.png",
        AltText: "Collector Office, Jashpur (Chhattisgarh) invites application for the post of 03 Assistant Grade-III"
    }
];

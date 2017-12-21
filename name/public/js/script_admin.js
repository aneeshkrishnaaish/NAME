var port = 3000;

// sidebar
function openCity(evt, cityName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", ""); 
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

// Ajax POST & GET Services

var app = angular.module('myApp', []);
app.controller("myCtrl", function($scope, $http) {  //angular controller
   

                var sid =  '5a3383c6c844fe04901e10b1';
                    var responsePromise = $http.get('http://localhost:'+port+'/services/'+sid);

                        responsePromise.success(function(data) {
                              $scope.service_heading= data.service;
                              $scope.service_descrption= data.description;
                              $scope.heading_date= data.Created_date;
                              $scope.service_image_url= data.img_url;
                        });

                    $("#Save_Service").click(function () {        
                        
                     service_heading = $scope.service_heading;
                     service_descrption = $scope.service_descrption;
                     service_image_url = $scope.service_image_url;

                         var Header = "service="+service_heading+"&description="+service_descrption+"&img_url="+service_image_url+"";

                         if(service_heading!='' && service_descrption!=''){
                           $.ajax({
                             url: 'http://localhost:'+port+'/services/'+sid,
                             type: 'PUT',
                             dataType: 'json',
                             data: Header,
                             success: function (data, textStatus, xhr) {
                                 console.log(data);
                                 alert("Updated Successfully");
                                location.reload();
                             }
                             ,
                             error: function (xhr, textStatus, errorThrown) {
                                 console.log('Error in Operation');
                                 alert("Error in Operation");
                             }
                         });
                         }else{
                              alert("requred fields are missing");
                         }       
                      });
        


  // ajax POST & GET header
    var id =  '5a327c2c962c22064001121c';
    var responsePromise = $http.get('http://localhost:'+port+'/header/'+id);

        responsePromise.success(function(data) {
              $scope.main_heading= data.name;
              $scope.main_descrption= data.description;
              $scope.heading_date= data.Created_date;
              $scope.company_about_us= data.aboutus;
        });

    $(".Save_heading").click(function () {        
        
     header_name = $scope.main_heading;
     header_description = $scope.main_descrption;
     company_about_us_description = $scope.company_about_us;

         var Header = "name="+header_name+"&description="+header_description+"&aboutus="+company_about_us_description+"";

         if(header_name!='' && header_description!=''){
           $.ajax({
             url: 'http://localhost:'+port+'/header/'+id,
             type: 'PUT',
             dataType: 'json',
             data: Header,
             success: function (data, textStatus, xhr) {
                 console.log(data);
                 alert("Updated Successfully");
                location.reload();
             }
             ,
             error: function (xhr, textStatus, errorThrown) {
                 console.log('Error in Operation');
                 alert("Error in Operation");
             }
         });
         }else{
              alert("requred fields are missing");
         }       
      });
      // ajax POST & GET Testrimonials
      // var tid = '5a3289e8e5141e06904fa209';
          $scope.dataValuesForGrid = [];

      var responsePromise = $http.get('http://localhost:'+port+'/tasks/');
              responsePromise.success(function(data) {

             // $scope.stock=data;
             //  angular.forEach( $scope.stock ,function(data){
             //    $scope.dataValuesForGrid.push(data);
            
             //  });
            });

            $("#Save_testrimonial").click(function () {        
        
             testri_name = $scope.task_by_heading;
             testri_description = $scope.task_descrption;

         var Header = "testrimonial_name="+testri_name+"&testrimonial_description="+testri_description+"";

         if(testri_name!='' && testri_description!=''){
           $.ajax({
             url: 'http://localhost:'+port+'/tasks/',
             type: 'POST',
             dataType: 'json',
             data: Header,
             success: function (data, textStatus, xhr) {
                 console.log(data);
                 alert("Testrimonial Added Successfully")
                location.reload();
             }
             ,
             error: function (xhr, textStatus, errorThrown) {
                 console.log('Error in Operation');
                 alert("Error in Operation");
             }
         });
         }else{
              alert("requred fields are missing");
         }       
      });
                  
  // ajax POST & GET Contacts


    var cid =  '5a3343c74c9c4a029ab52793';
    var responsePromise = $http.get('http://localhost:'+port+'/contacts/'+cid);

        responsePromise.success(function(data) {
              $scope.address_line1= data.addrline1;
              $scope.address_line2= data.addrline2;
              $scope.work_hours= data.wrokhrs;
              $scope.work_holiday= data.holiwork;
              $scope.contact_phone= data.phone;
              $scope.contact_email= data.email;
              $scope.contact_date= data.Created_date;
        });

    $("#Save_Contact").click(function () {        
        
         address_line1 = $scope.address_line1;
         address_line2 = $scope.address_line2;
         work_hours = $scope.work_hours;
         work_holiday = $scope.work_holiday;
         contact_phone = $scope.contact_phone;
         contact_email = $scope.contact_email;

         var Contact = "addrline1="+address_line1+
                       "&addrline2="+address_line2+
                       "&wrokhrs="+work_hours+
                       "&holiwork="+work_holiday+
                       "&phone="+contact_phone+
                       "&email="+contact_email+
                       "";

         if(address_line1!='' && contact_phone!=''){
           $.ajax({
             url: 'http://localhost:'+port+'/contacts/'+cid,
             type: 'PUT',
             dataType: 'json',
             data: Contact,
             success: function (data, textStatus, xhr) {
                 console.log(data);
                alert("Contact Updated Successfully");
                location.reload();
             }
             ,
             error: function (xhr, textStatus, errorThrown) {
                 console.log('Error in Operation');
                 alert("Error in Operation");
             }
         });
         }else{
              alert("requred fields are missing");
         }       
      });
});


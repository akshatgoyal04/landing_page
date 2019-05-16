
// function getUtmSources() {
//     var url = location.href;
//     var arr = new Array();
//     arr = url.split("?");
//     if (arr.length > 1) {
//         var parse_url = arr[arr.length - 1];
//         var parse_url = parse_url.split('&');
//         return parse_url
//     }
// }

// function trackConv(google_conversion_id, google_conversion_label) {
//     var image = new Image(1, 1);
//     image.src = "//www.googleadservices.com/pagead/conversion/" + google_conversion_id + "/?label=" + google_conversion_label
// }
//  $(document).ready(function () {
//     var isfeeModal=false;
//     var ispros=false;
//     uform = "apply_now";
//     var source = "admissions_portal_signup";
    
//     $("#feestructure").click(function(){
//         $("#modal-title").text("Download Fee Structure");
//     isfeeModal=true;
//     uform="view_fee_structure_form_lp";
//     // source="view_fee_structure_form";
   
//     });
    
//     $("#downloadpros").click(function(){
//         $("#modal-title").text("Download Prospectus");
//         ispros=true;
//         uform = "download_prespectus_form_lp";
//         // source="download_prospectus_form";
        
//         });
//     $("#close-btn").click(function(){
//         $("#modal-title").text("Get in touch with us!");
//     isfeeModal=false;
//     ispros=false;
//     //var uform = "apply_now";
//     source="admissions_portal_signup";
//     $("#modalform form").trigger('reset');
    
//     });
//     "use strict";
    
//     var server = 'https://lmsapi.tis.edu.in/lead/create/outside';
//     var parsed_data = getUtmSources();

    
//     $('#user_data form').validator().on('submit', function (e) {
//     e.preventDefault();
    
//     //if (e.isDefaultPrevented()) {} else {
//     var $btn = $('#user_data form input.btn').button('loading');
//     var serialized_data = $('#user_data form').serialize();
//     if (parsed_data != undefined) {
//     for (var i = 0; i < parsed_data.length; i++) {
//     serialized_data += '&' + parsed_data[i]
//     }
// }}
//  });
//     }
//     console.log($("#name").val());
//     console.log($("#name").val());
//     // // var formData = new FormData();
//     // formData.append('name',$("#name").val() );
//     // formData.append('email',  $("#email").val());
//     // formData.append('phones',  $("#phones").val());
//     // formData.append('state',  $("#state").val());
//     // formData.append('courseData',  $("#course").val());
//     // formData.append('utm_source',  $("#source").val());
    
    
//     var postvalues = {
//     name: $("#name").val(),
//     email: $("#email").val(),
//     phones: $("#phones").val(),
//     countryCode: $("#code").val(),
//     state: $("#state").val(),
//     courseData: $("#course").val(),
//     utm_source: $("#source").val(),
//     utm_medium: $("#medium").val(),
//     utm_campaign: $("#campaign").val(),
//     utm_form: $("#uform").val(),
    
//     };
//     console.log(postvalues);
    
//     $.ajax({
//     type: 'POST',
//     url: server,
//     dataType: "json",
//     contentType: "application/json; charset=UTF-8",
//     headers: {
//     Key: "5bsDCVYywy4efVKR574iYXn2UMpmDs"
//     },
//     crossDomain: !0,
//     data:JSON.stringify(postvalues),
//     success: function () {
//     // debugger;
//     setTimeout(function(){
//     $btn.button('reset');
//     console.log("Form submitted");
//     $("#user_data form").trigger('reset');
//    // window.location = 'https://tis.edu.in/admissions/thank-you.html'
//     trackConv(959625469, 'tBR5CI-AsG4Q_fHKyQM');
//     },1000);
//     },
//     error: function (err) {
//     console.log(err);
//     // debugger;
//     }
//     });
//     return !1
//     //}
//     })
    
    
    
    
//     //modal
    
//     $('#modalform form').validator().on('submit', function (e) {
//     e.preventDefault();
    
//     //if (e.isDefaultPrevented()) {} else {
//     var $btn = $('#modalform form input.btn').button('loading');
//     var serialized_data = $('#modalform form').serialize();
//     if (parsed_data != undefined) {
//     for (var i = 0; i < parsed_data.length; i++) {
//     serialized_data += '&' + parsed_data[i]
//     }
//     }
//     // console.log($("#name").val());
//     // // var formData = new FormData();
//     // formData.append('name',$("#name").val() );
//     // formData.append('email',  $("#email").val());
//     // formData.append('phones',  $("#phones").val());
//     // formData.append('state',  $("#state").val());
//     // formData.append('courseData',  $("#course").val());
//     // formData.append('utm_source',  $("#source").val());
    
    
//     var modalvalues = {
//     name: $("#modalname").val(),
//     email: $("#modalemail").val(),
//     phones: $("#modalphones").val(),
//     countryCode: $("#code").val(),
//     state: $("#modalstate").val(),
//     courseData: $("#modalcourse").val(),
//     utm_source: $("#source").val(),
//     utm_medium: $("#medium").val(),
//     utm_campaign: $("#campaign").val(),
//     utm_form: uform
//     // utm_form: uform;
//     };
//     // console.log(modalvalues);
//     //console.log(utm_form);
//     $.ajax({
//     type: 'POST',
//     url: server,
//     dataType: "json",
//     contentType: "application/json; charset=UTF-8",
//     headers: {
//     Key: "5bsDCVYywy4efVKR574iYXn2UMpmDs"
//     },
//     crossDomain: !0,
//     data:JSON.stringify(modalvalues),
//     success: function () {
//     // debugger;
//     setTimeout(function(){
//     $btn.button('reset');
//     console.log("Form submitted");
    
//     if(isfeeModal){
//         window.open("https://dwnsl5b3qagg4.cloudfront.net/wp-content/uploads/2019/01/15164845/Fee-Structure-2019-20-India-Saarc-2.pdf");
//     window.location.href = "https://tis.edu.in/admissions/thank-you.html";
//     }
    
//     else if(ispros){
//      window.open("https://dwnsl5b3qagg4.cloudfront.net/wp-content/uploads/2018/01/24125542/Prospectus-2018-19.pdf") ;
//      window.location.href = "https://tis.edu.in/admissions/thank-you.html";
//     }  
//    else{
//     window.location.href = "https://tis.edu.in/admissions/thank-you.html";

//    }
//    console.log(source);
   
//     $("#modalform form").trigger('reset');
//     $("#modal-title").text("Get in touch with us!");
//     trackConv(959625469, 'tBR5CI-AsG4Q_fHKyQM');
//     },1000);
//     },
//     error: function (err) {
//     console.log(err);
//     // debugger;
//     }
//     });
//     return !1
//     //}
//     })
            
// })

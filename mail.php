
<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function



        $form_fields = array(
          'name' => $_REQUEST['name'],
          'email' => $_REQUEST['email'],
          'countryCode' => $_REQUEST['code'],
          'phones' => $_REQUEST['phone'],
          'state' => $_REQUEST['state'],
          'courseData' => $_REQUEST['course'],
          'utm_term' => $_REQUEST['utm_term'],
          'utm_source' =>  $_REQUEST['utm_source'],
          'utm_medium' => $_REQUEST['utm_medium'],
          'utm_form' =>  $_REQUEST['utm_form'],
          'utm_campaign' =>  $_REQUEST['utm_campaign']
        );

       
        $curl = curl_init();

        curl_setopt_array($curl, array(
          CURLOPT_URL => "https://lmsapi.tis.edu.in/lead/create/outside",
          CURLOPT_RETURNTRANSFER => true,
          CURLOPT_ENCODING => "",
          CURLOPT_MAXREDIRS => 10,
          CURLOPT_TIMEOUT => 30,
          CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
          CURLOPT_CUSTOMREQUEST => "POST",
          CURLOPT_POSTFIELDS => $form_fields,
          CURLOPT_HTTPHEADER => array(
              "key: 5bsDCVYywy4efVKR574iYXn2UMpmDs"
          ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);
        
        use PHPMailer\PHPMailer\PHPMailer;
        use PHPMailer\PHPMailer\Exception;
  // Load Composer's autoloader
  require 'vendor/autoload.php';

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);

    $name=$_POST['name']; // Get Name value from HTML Form
    $countrycode=$_POST['code'];
    $mobile=$_POST['phone'];  // Get  Mobile No
    $email=$_POST['email'];  // Get Email Value
    $state=$_POST['state'];
    $course=$_POST['course'];
    $utm_term = $_POST['utm_term'];
    $utm_source =  $_POST['utm_source'];
    $utm_medium = $_POST['utm_medium'];
    $utm_form =  $_POST['utm_form'];
    $utm_campaign = $_POST['utm_campaign'];

   
        //Server settings
        $mail->SMTPDebug = 1;                                       // Enable verbose debug output
        $mail->isSMTP();                                            // Set mailer to use SMTP
        $mail->Host       = 'smtp-relay.sendinblue.com';  // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'leads@tulas.edu.in';                     // SMTP username
        $mail->Password   = 'bkcpZYnxgURIt8X3';                               // SMTP password
        // $mail->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
        $mail->Port       = 587;                                    // TCP port to connect to

        //Recipients
        $mail->setFrom('info@tis.edu.in', 'Mailer');
        $mail->addAddress('ed_lp@tis.edu.in', 'Leads');     
        $mail->addCC('lead@tis.edu.in');

        // Attachments
        //  $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
        /// $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        // Content
        $mail->isHTML(true);                                  // Set email format to HTML
        $mail->Subject = 'New Lead from Landing page by TIS Class - ' . $course. "-" . $name  ;
        $mail->Body    =  "<br> Name :" . $name ."<br>Email :". $email ."<br>Phone no. :". $countrycode . "-" . $mobile ."<br>Class :". $course ."<br>State :". $state . "<br> Utm term :" . $utm_term . "<br> Utm source :" . $utm_source . "<br> Utm medium :" . $utm_medium . "<br> Utm form :" .  $utm_form . "<br> Utm campaign :" . $utm_campaign;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
    $mail->send();
     
       if($_POST['utm_source'] == 'download_prospectus_form'){
        echo "<script>  window.open('https://dwnsl5b3qagg4.cloudfront.net/wp-content/uploads/2018/01/24125542/Prospectus-2018-19.pdf') ;
              window.location.href = 'https://tis.edu.in/admissions/thank-you.html';</script>";
      
      }
      
      elseif($_POST['utm_source'] == 'view_fee_structure_form'){
        echo "<script> window.open('https://dwnsl5b3qagg4.cloudfront.net/wp-content/uploads/2019/01/15164845/Fee-Structure-2019-20-India-Saarc-2.pdf');
        window.location.href = 'https://tis.edu.in/admissions/thank-you.html'; </script>";
      }
        else{
          header("Location: https://tis.edu.in/admissions/thank-you.html");
          };

       die();
     
    
?>



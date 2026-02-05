<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize inputs
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $type = strip_tags(trim($_POST["type"]));
    $message = strip_tags(trim($_POST["message"]));

    // Validation
    if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(["message" => "Molimo popunite sva polja ispravno."]);
        exit;
    }

    $recipient = "info@tumaci.ba";
    $subject = "Novi upit sa web stranice: $type";

    $boundary = md5(time());
    $headers = "From: Tumaci.ba Kontakt <no-reply@tumaci.ba>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: multipart/mixed; boundary=\"$boundary\"\r\n";

    // Email Body
    $body = "--$boundary\r\n";
    $body .= "Content-Type: text/plain; charset=UTF-8\r\n";
    $body .= "Content-Transfer-Encoding: 7bit\r\n\r\n";
    $body .= "Imate novu poruku od: $name\n";
    $body .= "Email: $email\n";
    $body .= "Vrsta prevoda: $type\n\n";
    $body .= "Poruka:\n$message\r\n";

    // Handle Attachment
    if (isset($_FILES['file']) && $_FILES['file']['error'] == UPLOAD_ERR_OK) {
        $file_name = $_FILES['file']['name'];
        $file_tmp = $_FILES['file']['tmp_name'];
        $file_type = $_FILES['file']['type'];

        $content = file_get_contents($file_tmp);
        $encoded_content = chunk_split(base64_encode($content));

        $body .= "--$boundary\r\n";
        $body .= "Content-Type: $file_type; name=\"$file_name\"\r\n";
        $body .= "Content-Disposition: attachment; filename=\"$file_name\"\r\n";
        $body .= "Content-Transfer-Encoding: base64\r\n\r\n";
        $body .= $encoded_content . "\r\n";
    }

    $body .= "--$boundary--";

    // Send Email
    if (mail($recipient, $subject, $body, $headers)) {
        http_response_code(200);
        echo json_encode(["message" => "Poruka je poslana!"]);
    } else {
        http_response_code(500);
        echo json_encode(["message" => "Greška prilikom slanja (mail funkcija)."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["message" => "Metoda nije dozvoljena."]);
}
?>
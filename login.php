<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the loginId and password from POST request
    $loginId = isset($_POST['loginId']) ? $_POST['loginId'] : '';
    $password = isset($_POST['password']) ? $_POST['password'] : '';

    // Perform validation and authentication here
    // This is just an example; in a real application, use prepared statements and secure password handling
    if ($loginId === 'admin' && $password === 'password') {
        echo 'Login successful!';
    } else {
        echo 'Invalid login credentials';
    }
} else {
    echo 'Invalid request method';
}
?>
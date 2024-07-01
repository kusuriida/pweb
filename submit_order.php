<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $products = isset($_POST['products']) ? $_POST['products'] : [];

    if (empty($products)) {
        echo "Silakan pilih setidaknya satu barang.";
        exit;
    }

    $order = [
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'products' => implode(", ", $products)
    ];

    $orderText = "Nama: " . $order['name'] . "\n";
    $orderText .= "Email: " . $order['email'] . "\n";
    $orderText .= "Nomor Telepon: " . $order['phone'] . "\n";
    $orderText .= "Produk: " . $order['products'] . "\n";
    $orderText .= "=====================\n";

    $file = 'orders.txt';
    file_put_contents($file, $orderText, FILE_APPEND);

    // Mengarahkan pengguna kembali ke halaman beranda.html
    header("Location: beranda.html");
    exit;
}
?>

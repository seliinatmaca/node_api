// API: Gelen istekleri izler ve isteklere cevap gönderir.

// gerekli modülleri çağırdık
const http = require("http");

/*
 * createServer(), veridğimiz dinleyici fonksiyonu api'a her istek geldiğinde tetikler.
 * Bu fonksiyon 2 parametre alır
 * 1) request > istek ile alakalı verileri içeren nesne
 * 2) response > cevap göndermemizi sağlayacak nesne
  
 * Bu fonksiyon içerisinde gelen isteğe göre cevap gönderilir.
 */

// http.createServer fonksiyonu, bir HTTP sunucusu oluşturur.
// request ve response parametreleri:
// request: Gelen isteğin tüm bilgilerini içerir (istek türü, başlıklar, URL vb.).
//   response: Sunucunun, istemciye(tarayıcıya veya başka bir uygulamaya) göndereceği cevabı temsil eder

const server = http.createServer((request, response) => {
  console.log(" API'ya istek geldi");

  // gelen isteğin detyalarını konsola yazdır
  //   request.method: Gelen isteğin türünü verir (örneğin, GET, POST, PUT, DELETE).
  // Bu satır, sunucuya gelen isteğin türünü konsola yazdırır.
  console.log(request.method + "isteği geldi");

  // gelen isteğe gönderilecek cevap
  //   response.end: Gelen isteğe bir yanıt gönderir ve bağlantıyı kapatır.
  // "serve tarafından selamlar!!!" mesajı, istemciye gönderilen yanıt içeriğidir.
  response.end("serve tarafından selamlar!!!");
});

// bir dinleyici oluşturup hangi porta gelen isteklerin dinleneceğini söylemliyiz.
// server.listen(1616, "127.0.0.1"):
// Sunucu, 127.0.0.1 IP adresi (localhost) ve 1616 portunda dinlemeye başlar.
// İstemciden bu IP ve porta gelen her isteği yakalayarak işleyecek.
// Callback fonksiyonu (() => {}) sunucunun başarıyla başlatıldığını belirten bir mesajı konsola yazdırır.

server.listen(1616, "127.0.0.1", () => {
  console.log("IP adresinin 1616 portuna gelen istekler dinlenmeye alındı");
});

// Bu kodu çalıştırdığınızda:

// Sunucu 127.0.0.1:1616 üzerinde çalışacak.
// Tarayıcıdan veya başka bir istemciden bu adrese bir istek gönderildiğinde, konsolda isteğin türü görünecek ve istemciye "serve tarafından selamlar!!!" mesajı dönecek.

const replaceTemplate = (html, data) => {
  // Ürün adı değişkeninin yerine data'daki değer eklenir
  let output = html.replace(/{%PRODUCTNAME%}/g, data.productName);

  // Fiyat, miktar, görsel, id ve besin değerleri değişkenlerini değiştiriyoruz
  output = output.replace(/{%PRICE%}/g, data.price);
  output = output.replace(/{%QUANTITY%}/g, data.quantity);
  output = output.replace(/{%IMAGE%}/g, data.image);
  output = output.replace(/{%ID%}/g, data.id);
  output = output.replace(/{%NUTRIENTS%}/g, data.nutrients);

  // Ürün açıklaması ve menşei değişkenlerini değiştiriyoruz
  output = output.replace(/{%DESCRIPTION%}/g, data.description);
  output = output.replace(/{%FROM%}/g, data.from);

  // Eğer ürün organik değilse {%NOT_ORGANIC%} yerine not-organic class'ı ekle
  if (!data.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, "not-organic");
  } else {
    // Eğer ürün organikse boş string ile değiştir
    output = output.replace(/{%NOT_ORGANIC%}/g, "");
  }

  // Güncellenmiş card HTML'ini döndür
  return output;
};

// replaceTemplate fonksiyonunu dışa aktarıyoruz
module.exports = replaceTemplate;

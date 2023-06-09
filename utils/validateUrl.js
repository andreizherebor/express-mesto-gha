function validateUrl(url) {
  const regex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_+.~#?&/=]*)$/;
  if (regex.test(url)) {
    return url;
  }
  throw new Error('Невалидная ссылка');
}

module.exports = { validateUrl };

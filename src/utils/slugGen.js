module.exports = {
  slugGen: function (num) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    let randomSlug = "";

    for (let i = 0; i < num; i++) {
      randomSlug += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return randomSlug;
  }
};

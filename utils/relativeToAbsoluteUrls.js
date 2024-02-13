export const relativeToAbsoluteUrls = (htmlString = "") => {
    return htmlString.split('http://hot-dang-homes.local').join("");
  };
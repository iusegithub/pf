document.addEventListener("DOMContentLoaded", function () {
  const companies = {
    "racing-victoria-logo": "racingvictoria.com.au",
    "racing-victoria-logo-2": "racingvictoria.com.au",
    "ey-logo": "ey.com",
    "dxc-logo": "dxc.technology",
    "harvey-norman-logo": "harveynorman.com.au",
  };

  for (let id in companies) {
    const domain = companies[id];
    const logoUrl = `https://logo.clearbit.com/${domain}`;
    document.getElementById(id).src = logoUrl;
  }
});

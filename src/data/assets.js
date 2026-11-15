// Images and video come from the Framer template's CDN (same assets the template uses).
// To use your own, replace a value with a URL or a file in /public (e.g. '/images/hero.jpg').
const img = (id) => `https://framerusercontent.com/images/${id}`
import profile from "../assets/images/profile.png";

export const A = {
  hero: profile,
  aboutLeft: img('Wc2Igy1XlkSwsPPbUDOUp4uUqzQ.png'),
  aboutRight: img('nD9cxmqYXABNIyqGJxpGHgTSxhs.png'),
  whyBanner: img('u5KDmsEaFhyj2ja56OHXOHoA424.webp'),
  appointmentBg: img('hSG9Ovx8tvfRQmlD356HvTgP80E.png'),
  video: 'https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4',
  avatars: [
    img('75B2lTH3wkJtDXN0rX8hSPADB4.png'),
    img('ejskfuedx8uE91OwjUuvRQAE.png'),
    img('PvwDWoEmnC9NFAPvc1TqEEMjOU.png'),
  ],
  services: [
    { icon: img('r1ykfiFs3IAns6ZodbnLrD5AIsU.svg'), photo: img('CNG6lnq1LFggsbxiEuIVyHU5vY.png') },
    { icon: img('cCg8ka2CmyVyzXCHCzX5SFSPVG8.svg'), photo: img('tQNnStOBjDlhpxPSk2h1CHjMmc.png') },
    { icon: img('WPsWSkJ4LGYAG391ZyvIPgLcqJU.svg'), photo: img('0y4gf8gCYzCPKl3yY18cmKk3l6g.png') },
    { icon: img('r1ykfiFs3IAns6ZodbnLrD5AIsU.svg'), photo: img('CNG6lnq1LFggsbxiEuIVyHU5vY.png') },
  ],
  departments: [
    { photo: img('GJXc6PWVIBpI46plv9NqkhY85o.webp'), icon: img('svsUpJHm8gfEoLamiTZu6eTFM.svg') },
    { photo: img('RaemODqQUroWefREGEk6z3ovE.png'), icon: img('mt386cMNhOBIOWSPdL8IvFj30.svg') },
    { photo: img('FXmDlmIzniJqvd16bLdsRyEM.png'), icon: img('1ixwYy4Zv4iD8KdWwbHYBiQkJ6w.svg') },
    { photo: img('OtSVhACmdSX1eVTW7MhV5o0qZV4.jpg'), icon: img('rcNskhDSmwtlDaVIUetrVSymJSM.svg') },
  ],
  testimonialAvatars: [
    img('ejskfuedx8uE91OwjUuvRQAE.png'),
    img('PvwDWoEmnC9NFAPvc1TqEEMjOU.png'),
    img('VJB2EQWNimaemPwFpz01vRZjfN4.png'),
    img('cQUbpljtisVDA0V7ml8LS7HvVeA.png'),
  ],
  doctors: [
    img('eJFLjOMe0luFUDJeAJZUELWeE.png'),
    img('7Rmjw7S171ExvKGI9Caqk0NnP8.png'),
    img('myHoESk0UrlrBn6Ft8Kfidb0PF8.png'),
    img('ro85mwS1QZbHRQdXwQySXUy0qWY.png'),
    img('zc1JXaEGBTHy0jWNFScwd8VAjA.png'),
    img('H1orLTIE2CU07mtNX8UwZ8cdtVw.png'),
  ],
  blog: [
    img('mzyIcLzuWLrByeuvjpgOMagrM6Y.png'),
    img('Gj1PXWBdEtm9tBYzytBIJEk3fs.png'),
    img('PvTgSKccITpxWiBA0ng1fpqeSJM.png'),
    img('D4fiiqN6h5cQWkrVma28NeUki4.png'),
  ],
}

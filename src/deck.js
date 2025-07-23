import rainbow from './assets/flags/rainbow.webp';
import trans from './assets/flags/trans.webp';
import progress from './assets/flags/progress.webp';
import lesbian from './assets/flags/lesbian.webp';
import bisexual from './assets/flags/bisexual.webp';
import pansexual from './assets/flags/pansexual.webp';
import asexual from './assets/flags/asexual.webp';
import genderqueer from './assets/flags/genderqueer.webp';
import nonbinary from './assets/flags/nonbinary.webp';
import ally from './assets/flags/ally.webp';

const deck = [
  {
    keyword: 'rainbow',
    img: rainbow,
    heading: 'Rainbow Pride Flag',
    description: [
      "Created in 1978 by Gilbert Baker at Harvey Milk's request.",
      'It was first flown at San Francisco’s Pride parade on June 25, 1978.',
      'The original Rainbow Pride Flag had eight stripes: pink for sex, red for life, orange for healing, yellow for sunlight, green for nature, turquoise for art and magic, indigo for serenity, and violet for spirit. Each color expressed a facet of queer identity and resilience.',
      'From 1979, the hot pink was removed because the fabric was hard to find and the demand for the flag started to rise. The turquoise was then removed to keep an even number of colors.',
    ],
    link: {
      src: '#',
      title: 'Link',
    },
  },
  {
    keyword: 'trans',
    img: trans,
    heading: 'Transgender Pride Flag',
    description: [
      'Designed in 1999 by activist Monica Helms and debuted in 2000.',
      'The flag features three colors: light blue to represent traditional masculinity, pink for femininity, and white to symbolize those who are transitioning, intersex, or identify outside the binary.',
      "The symmetrical layout, which means it’s always flown correctly no matter how it's oriented.",
    ],
    link: {
      src: '#',
      title: 'Link',
    },
  },
  {
    keyword: 'progress',
    img: progress,
    heading: 'Intersex-Inclusive Progress Flag',
    description: [
      'Introduced by Valentino Vecchietti in 2021, builds upon earlier pride symbols to create a more inclusive design.',
      'It incorporates the 2018 Progress Pride Flag by Daniel Quasar (known for its chevron of black, brown, light blue, pink, and white stripes representing marginalized and trans communities) and the intersex flag, adding a bold yellow triangle and purple circle to the left.',
      'Yellow and purple are chosen as neutral colors, avoiding traditional gender-coded palettes.',
    ],
    link: {
      src: '#',
      title: 'Link',
    },
  },
  {
    keyword: 'lesbian',
    img: lesbian,
    heading: 'Lesbian Pride Flag',
    description: [
      'The first Lesbian Pride Flag appeared in 1999 with a labrys axe and triangle, but fell out of favor due to exclusion concerns and historical baggage.',
      'Today, the most common version is the 2018 sunset flag by Emily Gwen. It uses warm shades of orange, pink, and red to represent womanhood, community, love, and gender nonconformity.',
    ],
    link: {
      src: '#',
      title: 'Link',
    },
  },
  {
    keyword: 'bisexual',
    img: bisexual,
    heading: 'Bisexual Pride Flag',
    description: [
      'Created by Michael Page in 1998 to boost bisexual visibility.',
      'It uses pink to represent same-gender attraction, blue for attraction to other genders, and purple in the middle to show overlap and inclusion across the spectrum.',
      'The flag was first introduced at BiCafe, an early online bisexual community, in December 1998',
    ],
    link: {
      src: '#',
      title: 'Link',
    },
  },
  {
    keyword: 'pansexual',
    img: pansexual,
    heading: 'Pansexual Pride Flag',
    description: [
      'Emerged around 2010 to define distinct pansexual identity.',
      'The flag uses three stripes: pink for attraction to women, blue for men, and yellow for non-binary or other gender identities.',
      'The yellow stripe specifically adds non-binary inclusivity to the traditional orientation spectrum.',
    ],
    link: {
      src: '#',
      title: 'Link',
    },
  },
  {
    keyword: 'asexual',
    img: asexual,
    heading: 'Asexual Pride Flag',
    description: [
      'Created in 2010 through a community contest hosted by the Asexuality Visibility & Education Network.',
      'The flag features four stripes: black for asexuality, gray for gray-asexual and demisexual identities, white for allies, and purple for the shared community.',
      'The gray stripe represents those whose experiences fall somewhere between sexual and asexual.',
    ],
    link: {
      src: '#',
      title: 'Link',
    },
  },
  {
    keyword: 'genderqueer',
    img: genderqueer,
    heading: 'Genderqueer Pride Flag',
    description: [
      'Designed by Marilyn Roxie in 2011, evolving from earlier 2010 versions.',
      'The flag has three colors: lavender for androgyny, white for agender identities, and green for those who identify outside the binary.',
      'Lavender blends traditional male (blue) and female (pink) colors, embodying queer identity.',
    ],
    link: {
      src: '#',
      title: 'Link',
    },
  },
  {
    keyword: 'nonbinary',
    img: nonbinary,
    heading: 'Non-binary Pride Flag',
    description: [
      'Created in 2014 by Kye Rowan, then aged 17, to complement—not replace—the genderqueer flag.',
      'The flag has four stripes: yellow for non-binary identities, white for multiple genders, purple for a mix of male and female, and black for those who are agender.',
      'It drew international attention during Eurovision 2024, when performer Nemo snuck the flag on stage.',
    ],
    link: {
      src: '#',
      title: 'Link',
    },
  },
  {
    keyword: 'ally',
    img: ally,
    heading: 'Ally Pride Flag',
    description: [
      'Emerged in the early 2000s combining straight flag stripes with a rainbow “A” .',
      'It features black and white stripes to represent straight and cisgender identities, with a rainbow-colored “A”.',
      'The “A” symbolizes both "ally" and "advocate" a subtle but meaningful nod to support.',
    ],
    link: {
      src: '#',
      title: 'Link',
    },
  },
];

export default deck;

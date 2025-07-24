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
    info: {
      en: {
        heading: 'Rainbow Pride Flag',
        description: [
          "Created in 1978 by Gilbert Baker at Harvey Milk's request.",
          'It was first flown at San Francisco’s Pride parade on June 25, 1978.',
          'The original Rainbow Pride Flag had eight stripes: pink for sex, red for life, orange for healing, yellow for sunlight, green for nature, turquoise for art and magic, indigo for serenity, and violet for spirit. Each color expressed a facet of queer identity and resilience.',
          'From 1979, the hot pink was removed because the fabric was hard to find and the demand for the flag started to rise. The turquoise was then removed to keep an even number of colors.',
        ],
      },
    },
    link: {
      src: 'http://stonewall.org.uk',
      title: 'Stonewall (UK)',
      desc: 'The UK’s largest LGBTQ+ charity, advocating for legal reform, inclusive education, and equality across sexual orientations and gender identities.',
    },
  },
  {
    keyword: 'trans',
    img: trans,
    info: {
      en: {
        heading: 'Transgender Pride Flag',
        description: [
          'Designed in 1999 by activist Monica Helms and debuted in 2000.',
          'The flag features three colors: light blue to represent traditional masculinity, pink for femininity, and white to symbolize those who are transitioning, intersex, or identify outside the binary.',
          "The symmetrical layout, which means it’s always flown correctly no matter how it's oriented.",
        ],
      },
    },
    link: {
      src: 'https://transmediawatch.org',
      title: 'Trans Media Watch (UK)',
      desc: 'British charity improving media representation of trans and intersex individuals to foster social acceptance and accurate portrayal.',
    },
  },
  {
    keyword: 'progress',
    img: progress,
    info: {
      en: {
        heading: 'Intersex-Inclusive Progress Flag',
        description: [
          'Introduced by Valentino Vecchietti in 2021, builds upon earlier pride symbols to create a more inclusive design.',
          'It incorporates the 2018 Progress Pride Flag by Daniel Quasar (known for its chevron of black, brown, light blue, pink, and white stripes representing marginalized and trans communities) and the intersex flag, adding a bold yellow triangle and purple circle to the left.',
          'Yellow and purple are chosen as neutral colors, avoiding traditional gender-coded palettes.',
        ],
      },
    },
    link: {
      src: 'https://egale.ca',
      title: 'Egale Canada',
      desc: "Canada's leading 2SLGBTQI+ advocacy charity (English and French), influencing policy, research, visibility, and intersex-inclusive education.",
    },
  },
  {
    keyword: 'lesbian',
    img: lesbian,
    info: {
      en: {
        heading: 'Lesbian Pride Flag',
        description: [
          'The first Lesbian Pride Flag appeared in 1999 with a labrys axe and triangle, but fell out of favor due to exclusion concerns and historical baggage.',
          'Today, the most common version is the 2018 sunset flag by Emily Gwen. It uses warm shades of orange, pink, and red to represent womanhood, community, love, and gender nonconformity.',
        ],
      },
    },
    link: {
      src: 'https://each.education',
      title: 'EACH (Educational Action Challenging Homophobia, UK)',
      desc: 'UK charity delivering anti-bullying training and support focused on lesbian, gay, bisexual, trans, and queer individuals, with strong emphasis on education.',
    },
  },
  {
    keyword: 'bisexual',
    img: bisexual,
    info: {
      en: {
        heading: 'Bisexual Pride Flag',
        description: [
          'Created by Michael Page in 1998 to boost bisexual visibility.',
          'It uses pink to represent same-gender attraction, blue for attraction to other genders, and purple in the middle to show overlap and inclusion across the spectrum.',
          'The flag was first introduced at BiCafe, an early online bisexual community, in December 1998',
        ],
      },
    },
    link: {
      src: 'https://kaleidoscopetrust.com',
      title: 'Kaleidoscope Trust (UK)',
      desc: 'UK-based campaign charity promoting global LGBTQ+ human rights, including bisexual advocacy, especially across the Commonwealth.',
    },
  },
  {
    keyword: 'pansexual',
    img: pansexual,
    info: {
      en: {
        heading: 'Pansexual Pride Flag',
        description: [
          'Emerged around 2010 to define distinct pansexual identity.',
          'The flag uses three stripes: pink for attraction to women, blue for men, and yellow for non-binary or other gender identities.',
          'The yellow stripe specifically adds non-binary inclusivity to the traditional orientation spectrum.',
        ],
      },
    },
    link: {
      src: 'https://kindspace.ca',
      title: 'Kind Space (Canada)',
      desc: 'Ottawa-based LGBTQ2S+ community centre serving a diverse range including pansexual, intersex, non-binary, Two-Spirit and QTBIPoC individuals.',
    },
  },
  {
    keyword: 'asexual',
    img: asexual,
    info: {
      en: {
        heading: 'Asexual Pride Flag',
        description: [
          'Created in 2010 through a community contest hosted by the Asexuality Visibility & Education Network.',
          'The flag features four stripes: black for asexuality, gray for gray-asexual and demisexual identities, white for allies, and purple for the shared community.',
          'The gray stripe represents those whose experiences fall somewhere between sexual and asexual.',
        ],
      },
    },
    link: {
      src: 'https://ilga.org',
      title: 'ILGA World',
      desc: 'Worldwide federation of LGBTQ+ groups, with member organisations in many countries advocating for asexual and ace-spectrum rights.',
    },
  },
  {
    keyword: 'genderqueer',
    img: genderqueer,
    info: {
      en: {
        heading: 'Genderqueer Pride Flag',
        description: [
          'Designed by Marilyn Roxie in 2011, evolving from earlier 2010 versions.',
          'The flag has three colors: lavender for androgyny, white for agender identities, and green for those who identify outside the binary.',
          'Lavender blends traditional male (blue) and female (pink) colors, embodying queer identity.',
        ],
      },
    },
    link: {
      src: 'https://www.stonewall.org.uk',
      title: 'Stonewall (UK)',
      desc: 'Stonewall supports visibility and rights for genderqueer and non-binary people through campaigns, legal reforms, and inclusive programs.',
    },
  },
  {
    keyword: 'nonbinary',
    img: nonbinary,
    info: {
      en: {
        heading: 'Non-binary Pride Flag',
        description: [
          'Created in 2014 by Kye Rowan, then aged 17, to complement—not replace—the genderqueer flag.',
          'The flag has four stripes: yellow for non-binary identities, white for multiple genders, purple for a mix of male and female, and black for those who are agender.',
          'It drew international attention during Eurovision 2024, when performer Nemo snuck the flag on stage.',
        ],
      },
    },
    link: {
      src: 'https://ilga.org',
      title: 'ILGA World',
      desc: "Global entity with strong non-binary inclusion efforts—ILGA's member base spans dozens of countries and provides multilingual resources.",
    },
  },
  {
    keyword: 'ally',
    img: ally,
    info: {
      en: {
        heading: 'Ally Pride Flag',
        description: [
          'Emerged in the early 2000s combining straight flag stripes with a rainbow “A” .',
          'It features black and white stripes to represent straight and cisgender identities, with a rainbow-colored “A”.',
          'The “A” symbolizes both "ally" and "advocate" — a subtle but meaningful nod to support.',
        ],
      },
    },
    link: {
      src: 'https://www.rainbowcommunities.org.uk',
      title: 'Rainbow Communities (UK)',
      desc: 'UK ‑based “by and for” charity supporting vulnerable LGBTQ+ individuals and allies, fostering solidarity across cultural and generational lines.',
    },
  },
];

export default deck;

import { ILevel } from '../app/utils/types';
const levels: ILevel[] = [
  {
    title: 'Select all tea',
    selector: ['tea', '*'],
    markup: `<tea class="thai"></tea>
            <tea class="matcha-latte"></tea>
            <tea class="taiwanese"></tea>
        `,
  },
  {
    title: 'Select green tea',
    selector: ['.green', 'tea:nth-child(2)'],
    markup: `<tea class="black"></tea>
            <tea class="green"></tea>
            <tea class="black"></tea>
        `,
  },
  {
    title: 'Select black tea and taiwanese tea',
    selector: ['tea:nth-of-type(2n+2)', 'tea:nth-of-type(even)'],
    markup: `<tea class="matcha-latte"></tea>
            <tea class="black"></tea>
            <tea class="thai"></tea>
            <tea class="taiwanese"></tea>
        `,
  },
  {
    title: 'Select strawberry tea',
    selector: ['#strawberry', 'tea:first-child'],
    markup: `<tea id="strawberry"></tea>
            <tea class="matcha-latte"></tea>
            <icedtea class="lime"></icedtea>
        `,
  },
  {
    title: 'Select all drinks',
    selector: ['*'],
    markup: `<tea class="black"></tea>
            <icedtea class="lime"></icedtea>
            <soda class="yuzu"></soda>
        `,
  },
  {
    title: 'Select lychee soda, using + selector',
    selector: ['.melon+.lychee', '.lychee'],
    markup: `<soda class="yuzu"></soda>
            <soda class="melon"></soda>
            <soda class="lychee"></soda>
        `,
  },
  {
    title: 'Select soda, using ~ selector',
    selector: ['icedtea~soda'],
    markup: `<icedtea class="ginger"></icedtea>
            <soda class="melon"></soda>
            <tea class="thai"></tea>
            <soda class="lychee"></soda>
        `,
  },
  {
    title: 'Select first icedtea',
    selector: ['icedtea:first-child'],
    markup: `<icedtea class="thai"></icedtea>
            <icedtea class="lychee"></icedtea>
            <icedtea class="lime"></icedtea>
        `,
  },
  {
    title: 'Select all tea except last one',
    selector: ['tea:not(:last-child)'],
    markup: `<tea class="green"></tea>
            <tea class="taiwanese"></tea>
            <tea class="matcha-latte"></tea>
        `,
  },
  {
    title: 'Select only one drink',
    selector: ['icedtea:only-of-type'],
    markup: `<tea class="thai"></tea>
            <icedtea class="lychee"></icedtea>
            <soda class="yuzu"></soda>
            <tea id="strawberry""></tea>
            <tea class="black"></tea>
            <soda class="melon"></soda>
        `,
  },
];
export default levels;

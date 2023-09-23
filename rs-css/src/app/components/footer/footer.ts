import './footer.scss';
import { Element } from '../../utils/types';
import rsLogo from '../../../img/rs_school_js.svg';
import gitLogo from '../../../img/github.svg';

export function createFooter(): Node {
  const footer: Element<Node> = document.createElement('footer');
  const year: Date = new Date();
  (footer as HTMLElement).classList.add('footer');
  (footer as HTMLElement).innerHTML = `
            <div class="footer__links-wrapper">
                <a class="footer__link" href="https://github.com/rolling-scopes-school/idiamondcat-JSFE2023Q1" target="_blank">
                    <img class="footer__icon footer__icon--git" src=${gitLogo}>
                </a>
                <a class="footer__link" href="https://rs.school/js/" target="_blank">
                    <img class="footer__icon footer__icon--rss" src=${rsLogo}>
                </a>
            </div>
            <span class="footer__year">${year.getFullYear()}</span>
        `;
  return footer;
}

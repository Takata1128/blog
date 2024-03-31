import { htmlToText } from 'html-to-text'

export function extractText(html, length, more = '...') {
    const text = htmlToText(html, {
        selectors: [
            { selector: 'img', format: 'skip' },
            { selector: 'a', options: { ignoreHref: true } },
        ]
    });
    return text.slice(0, length) + more;
}
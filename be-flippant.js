import { register } from 'be-hive/register.js';
import { define } from 'be-decorated/DE.js';
export class BeFlippant extends EventTarget {
    async hydrate(pp) {
        const { self, on, nudge } = pp;
        if (nudge) {
            const { nudge } = await import('trans-render/lib/nudge.js');
            nudge(self);
        }
        return [{ resolved: true }, {
                doTransform: { on, of: self }
            }];
    }
    #tx;
    async doTransform(pp) {
        const { linkScope, transformScope, self, link, animOptions } = pp;
        const containerScope = linkScope || transformScope;
        const { findRealm } = await import('trans-render/lib/findRealm.js');
        const container = await findRealm(self, containerScope);
        const firstEl = container.querySelector(link[0]);
        if (firstEl === null)
            throw { msg: 404, link };
        const firstDOMRect = firstEl.getBoundingClientRect();
        if (this.#tx === undefined) {
            const { Tx } = await import('trans-render/lib/Tx.js');
            const { transform } = pp;
            this.#tx = new Tx(self, self, transform, transformScope);
        }
        await this.#tx.transform();
        const secondEl = container.querySelector(link[1]);
        if (secondEl === null)
            throw { msg: 404, link };
        const secondDOMRect = secondEl.getBoundingClientRect();
        const backDeltaX = firstDOMRect.x - secondDOMRect.x;
        const backDeltaY = firstDOMRect.y - secondDOMRect.y;
        const backScaleX = firstDOMRect.width / secondDOMRect.width;
        const backScaleY = firstDOMRect.height / secondDOMRect.height;
        secondEl.animate([
            {
                transformOrigin: 'top left',
                transform: `translate(${backDeltaX}px, ${backDeltaY}px) scale(${backScaleX}, ${backScaleY})`
            },
            {
                transformOrigin: 'top left',
                transform: 'none'
            }
        ], animOptions);
    }
}
const tagName = 'be-flippant';
const ifWantsToBe = 'flippant';
const upgrade = '*';
define({
    config: {
        tagName,
        propDefaults: {
            upgrade,
            ifWantsToBe,
            virtualProps: [
                'transform', 'on', 'link', 'animOptions',
                'transformScope', 'linkScope'
            ],
            proxyPropDefaults: {
                on: 'click',
                transformScope: 'parent',
                animOptions: { duration: 500, easing: 'ease-in-out' },
            }
        },
        actions: {
            hydrate: {
                ifAllOf: ['on', 'transform', 'link']
            },
        }
    },
    complexPropDefaults: {
        controller: BeFlippant
    }
});
register(ifWantsToBe, upgrade, tagName);

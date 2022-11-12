import { Actions, Proxy, PP, PPE, ProxyProps } from './types';
import { register } from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/DE.js';
import {ITx} from 'trans-render/lib/types';

export class BeFlippant extends EventTarget implements Actions{
    hydrate(pp: PP): PPE {
        const {self, on} = pp;
        return [{resolved: true}, {
            doTransform: {on, of: self}
        }] as PPE;

    }

    #tx: ITx | undefined;
    async doTransform(pp:  PP){
        const {linkScope, transformScope, self, link, animOptions} = pp;
        const containerScope = linkScope || transformScope!;
        const {findRealm} = await import('trans-render/lib/findRealm.js');
        const container = await findRealm(self, containerScope) as DocumentFragment;
        const firstEl = container.querySelector(link![0]);
        if(firstEl === null) throw {msg: 404, link};
        const firstDOMRect = firstEl.getBoundingClientRect();
        if(this.#tx === undefined){
            const {Tx} = await import('trans-render/lib/Tx.js');
            const {transform} = pp;
            this.#tx = new Tx(self, self, transform!, transformScope!);
        }
        await this.#tx.transform();
        const secondEl = container.querySelector(link![1]);
        if(secondEl === null) throw {msg: 404, link};
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

define<Proxy & BeDecoratedProps<Proxy, Actions>, Actions>({
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
    complexPropDefaults:{
        controller: BeFlippant
    }
});
register(ifWantsToBe, upgrade, tagName);
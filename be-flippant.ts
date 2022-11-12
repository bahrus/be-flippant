import { Actions, Proxy, PP, PPE, ProxyProps } from './types';
import { register } from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/DE.js';

export class BeFlippant extends EventTarget implements Actions{
    hydrate(pp: PP): PPE {
        const {self, on} = pp;
        return [, {
            doTransform: {on, of: self}
        }] as PPE
    }

    doTransform(pp: PP){

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
            }
        },
        actions: {
            hydrate: 'on',
        }
    },
    complexPropDefaults:{
        controller: BeFlippant
    }
});
register(ifWantsToBe, upgrade, tagName);
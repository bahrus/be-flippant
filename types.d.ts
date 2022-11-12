import {Matches, Scope} from 'trans-render/lib/types';
import {MinimalProxy, EventConfigs} from 'be-decorated/types';

export interface EndUserProps{
    transform: Matches,
    on: string | string[],
    link: [string, string],
    animOptions: KeyframeAnimationOptions,
    transformScope: Scope,
    linkScope: Scope,
}

export interface VirtualProps extends EndUserProps, MinimalProxy{}

export type Proxy = Element & VirtualProps;

export interface ProxyProps extends VirtualProps{
    proxy: Proxy
}

export type PP = ProxyProps;

export type PA = Partial<PP>;

export type PPE = [PA | undefined, EventConfigs<Proxy, Actions>];

export interface Actions{
    hydrate(pp: PP): PPE;
    doTransform(pp: PP): void;
}
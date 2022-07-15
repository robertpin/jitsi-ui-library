import Platform from './Platform';

export function withPixelLineHeight(base: any): Object {
    return {
        ...base,
        lineHeight: `${base.lineHeight}px`
    };
}

export function isMobileBrowser() {
    return Platform.OS === 'android' || Platform.OS === 'ios';
}
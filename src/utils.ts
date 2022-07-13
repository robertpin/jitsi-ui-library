export function withPixelLineHeight(base: any): Object {
    return {
        ...base,
        lineHeight: `${base.lineHeight}px`
    };
}
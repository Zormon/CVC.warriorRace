type obstacle<T extends ImageMetadata|string> = {
    img: T
    categories: Array<'1'|'3'|'5'>
    alt?: string
}

export {
    obstacle
}
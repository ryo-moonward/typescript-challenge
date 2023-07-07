const ICON_FILE_TYPE = {
    png: 'image/png',
    jpg: 'image/jpeg',
    svg: 'image/svg+xml',
    gif: 'image/gif',
    webp: 'image/webp',
}

const fileList = [
    ICON_FILE_TYPE.png,
    ICON_FILE_TYPE.jpg,
    ICON_FILE_TYPE.svg,
    ICON_FILE_TYPE.gif,
    ICON_FILE_TYPE.webp
]

/* *
    * Make getFileType function's return type this
    * "image/png" | "image/jpeg" | "image/svg+xml" | "image/gif" | "image/webp" | undefined
*/

const getFileType = () => {
    for (let index = 0; index < fileList.length; index++) {
        const file = fileList[index]
        return file
    }
}
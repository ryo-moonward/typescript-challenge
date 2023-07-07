const SOLUTION_ICON_FILE_TYPE = {
    png: 'image/png',
    jpg: 'image/jpeg',
    svg: 'image/svg+xml',
    gif: 'image/gif',
    webp: 'image/webp',
} as const

const solutionFileList = [
    SOLUTION_ICON_FILE_TYPE.png,
    SOLUTION_ICON_FILE_TYPE.jpg,
    SOLUTION_ICON_FILE_TYPE.svg,
    SOLUTION_ICON_FILE_TYPE.gif,
    SOLUTION_ICON_FILE_TYPE.webp
]

/* *
    * Make getFileType function's return type this
    * "image/png" | "image/jpeg" | "image/svg+xml" | "image/gif" | "image/webp" | undefined
*/

const getSolutionFileType = () => {
    for (let index = 0; index < solutionFileList.length; index++) {
        const file = fileList[index]
        return file
    }
}
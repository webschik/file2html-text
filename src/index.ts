import * as file2html from 'file2html';
import bytesToString from 'file2html/lib/bytes-to-string';

const supportedMimeTypes: string[] = ['text/plain'];

export default class TextReader extends file2html.Reader {
    read ({fileInfo}: file2html.ReaderParams) {
        const {content} = fileInfo;
        const {byteLength} = content;

        return Promise.resolve(new file2html.File({
            meta: Object.assign({
                fileType: file2html.FileTypes.document,
                mimeType: '',
                name: '',
                size: byteLength,
                creator: '',
                createdAt: '',
                modifiedAt: ''
            }, fileInfo.meta),
            styles: '<style></style>',
            content: `<div>${ bytesToString(content) }</div>`
        }));
    }

    static testFileMimeType (mimeType: string) {
        return supportedMimeTypes.indexOf(mimeType) >= 0;
    }
}
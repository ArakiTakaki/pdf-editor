import pdfJs from 'pdfjs-dist';

export const renderingPdf = (src: string) => {
    pdfJs.getDocument(src);
};


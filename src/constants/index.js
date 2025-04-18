import {
    IconArrowRight,
    IconCircle,
    IconHeart,
    IconHorizontalLine,
    IconSquare,
    IconStar,
    IconTools,
    IconToolsPink,
    IconTriangle,
    IconVerticalLine,
    ImageCustomTemplate1,
    ImageCustomTemplate2,
    ImageTemplate1,
    ImageTemplate2,
} from '@/assets';
import theme from '@/theme';
import { pageSizes } from './layoutConstants';

export const sideBarpillsList = {
    template: 'Template',
    text: 'Text',
    image: 'Image',
    shape: 'Shape',
    qr: 'QR',
    whiteLabel: 'White-label',
};

export const ButtonVarients = {
    primary: 'primary',
    secondary: 'secondary',
};
export const shapes = {
    circle: 'circle',
    square: 'square',
    triangle: 'triangle',
    arrowRight: 'arrowRight',
    horizontalLine: 'horizontalLine',
    verticalLine: 'verticalLine',
    star: 'star',
    heart: 'heart',
};
export const defaultSideBarImagesList = [IconTools, IconToolsPink];
export const textList = [
    {
        text: '+ Heading 1',
        fontFamily: 'Open Sans',
        fontSize: 18,
        color: '#333',
        fontWeight: theme.fontWeights[700],
        textDecoration: 'normal',
        fontStyle: 'normal',
        textAlign: 'left',
        width: 125,
    },
    {
        text: '+ Heading 2',
        fontFamily: 'Open Sans',
        fontSize: 16,
        color: '#333',
        fontWeight: theme.fontWeights[700],
        textDecoration: 'normal',
        fontStyle: 'normal',
        textAlign: 'left',
    },
    // {
    //     text: 'What problem are you facing in this meeting room?',
    //     fontFamily: 'Open Sans Condensed',
    //     fontSize: 18,
    //     color: '#333',
    //     fontWeight: theme.fontWeights[700],
    //     textDecoration: 'normal',
    //     fontStyle: 'normal',
    //     textAlign: 'left',
    // },
    {
        text: 'Scan this QR code from your mobile to report the issue',
        fontFamily: 'Open Sans',
        fontSize: 16,
        color: '#333',
        fontWeight: theme.fontWeights[400],
        textDecoration: 'normal',
        fontStyle: 'normal',
        textAlign: 'left',
        width: 220,
    },
    {
        text: 'property 1 > building 2 > Room 2',
        fontFamily: 'Open Sans',
        fontSize: 12,
        color: '#6D737B',
        fontWeight: theme.fontWeights[400],
        textDecoration: 'normal',
        fontStyle: 'normal',
        textAlign: 'left',
    },
    {
        text: 'www.domain.com',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: 10,
        color: '#333',
        fontWeight: theme.fontWeights[400],
        textDecoration: 'normal',
        fontStyle: 'normal',
        textAlign: 'left',
    },
];
export const elementTypes = {
    pageSize: 'pageSize',
    backgroundColor: 'backgroundColor',
    backgroundImage: 'backgroundImage',
    circle: 'circle',
    square: 'square',
    triangle: 'triangle',
    arrowRight: 'arrowRight',
    horizontalLine: 'horizontalLine',
    verticalLine: 'verticalLine',
    star: 'star',
    heart: 'heart',
    image: 'image',
    qr: 'qr',
    text: 'text',
};
export const shapesList = [
    {
        shape: elementTypes.circle,
        icon: IconCircle,
    },
    {
        shape: elementTypes.square,
        icon: IconSquare,
    },
    {
        shape: elementTypes.triangle,
        icon: IconTriangle,
    },
    {
        shape: elementTypes.arrowRight,
        icon: IconArrowRight,
    },
    {
        shape: elementTypes.horizontalLine,
        icon: IconHorizontalLine,
    },
    {
        shape: elementTypes.verticalLine,
        icon: IconVerticalLine,
    },
    {
        shape: elementTypes.star,
        icon: IconStar,
    },
    {
        shape: elementTypes.heart,
        icon: IconHeart,
    },
];

export const defaultElements = [
    {
        type: elementTypes?.pageSize,
        id: `element${Date.now()}`,
        size: pageSizes?.A4,
        cuttingGuideStroke: 0,
        cuttingGuideStrokeColor: theme.color.black,
    },
];
export const basicTextProps = {
    opacity: 1,
    text: 'Enter Text Here',
    fontSize: 16,
    fontFamily: 'Open Sans',
    color: theme.color.black,
    textDecoration: 'normal',
    fontStyle: 'normal',
    fontWeight: theme.fontWeights[400],
    textAlign: 'left',
    // width: 125,
};
export const defaultTemplates = [
    {
        image: ImageTemplate1,
        title: 'temp-name',
        elements: [
            {
                type: 'pageSize',
                id: 'element1744780067175',
                size: 'Ledger',
            },
            {
                id: 'element1744780116472',
                x: 134.58287570698877,
                y: 95.49999999999956,
                opacity: 1,
                type: 'text',
                draggable: true,
                text: 'Default Template 1',
                fontSize: 16,
                fontFamily: 'Open Sans',
                color: '#eee8e8',
                textDecoration: 'normal',
                fontStyle: 'normal',
                fontWeight: 700,
                textAlign: 'left',
                fontVariant: 700,
                align: 'left',
                fill: '#eee8e8',
                visible: true,
                width: 172.92,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                skewY: 0,
                offsetX: 0,
                offsetY: 0,
            },
            {
                type: 'backgroundColor',
                id: 'element1744780122624',
                color: '#7e1515',
            },
        ],
    },
    {
        image: ImageTemplate2,
        title: 'temp-name',
        elements: [
            {
                type: 'pageSize',
                id: 'element1744780067175',
                size: 'A4',
            },
            {
                id: 'element1744780116472',
                x: 134.58287570698877,
                y: 95.49999999999956,
                opacity: 1,
                type: 'text',
                draggable: true,
                text: 'Default Template 2',
                fontSize: 16,
                fontFamily: 'Open Sans',
                color: '#eee8e8',
                textDecoration: 'normal',
                fontStyle: 'normal',
                fontWeight: 700,
                textAlign: 'left',
                fontVariant: 700,
                align: 'left',
                fill: '#eee8e8',
                visible: true,
                width: 172.92,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                skewY: 0,
                offsetX: 0,
                offsetY: 0,
            },
            {
                type: 'backgroundColor',
                id: 'element1744780122624',
                color: '#7e1515',
            },
        ],
    },
];

export const customTemplates = [
    {
        image: ImageCustomTemplate1,
        title: 'Custom temp-1',
        elements: [
            {
                type: 'pageSize',
                id: 'element1744780067175',
                size: 'A4',
            },
            {
                id: 'element1744780116472',
                x: 134.58287570698877,
                y: 95.49999999999956,
                opacity: 1,
                type: 'text',
                draggable: true,
                text: 'Custom Template 1',
                fontSize: 16,
                fontFamily: 'Open Sans',
                color: '#eee8e8',
                textDecoration: 'normal',
                fontStyle: 'normal',
                fontWeight: 700,
                textAlign: 'left',
                fontVariant: 700,
                align: 'left',
                fill: '#eee8e8',
                visible: true,
                width: 172.92,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                skewY: 0,
                offsetX: 0,
                offsetY: 0,
            },
            {
                type: 'backgroundColor',
                id: 'element1744780122624',
                color: '#7e1515',
            },
        ],
    },
    {
        image: ImageCustomTemplate2,
        title: 'Custom2',
        elements: [
            {
                type: 'pageSize',
                id: 'element1744780067175',
                size: 'A4',
            },
            {
                id: 'element1744780116472',
                x: 134.58287570698877,
                y: 95.49999999999956,
                opacity: 1,
                type: 'text',
                draggable: true,
                text: 'Custom Template 2',
                fontSize: 16,
                fontFamily: 'Open Sans',
                color: '#eee8e8',
                textDecoration: 'normal',
                fontStyle: 'normal',
                fontWeight: 700,
                textAlign: 'left',
                fontVariant: 700,
                align: 'left',
                fill: '#eee8e8',
                visible: true,
                width: 172.92,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                skewX: 0,
                skewY: 0,
                offsetX: 0,
                offsetY: 0,
            },
            {
                type: 'backgroundColor',
                id: 'element1744780122624',
                color: '#7e1515',
            },
        ],
    },
];

export const fontFamilies = [
    'Open Sans',
    'Roboto',
    'Lato',
    'Montserrat',
    'Source Sans Pro',
    'Inter',
    'Raleway',
    'Poppins',
    'Merriweather',
    'Noto Sans',
    'Work Sans',
    'Ubuntu',
    'Nunito',
    'Playfair Display',
    'DM Sans',
    'PT Sans',
    'Quicksand',
    'Plus Jakarta Sans',
    'Rubik',
    'Oswald',
    'Open Sans Condensed',
    // Funky fonts
    'Lobster',
    'Pacifico',
    'Bangers',
    'Caveat',
    'Shadows Into Light',
    'Indie Flower',
    'Fredericka the Great',
    'Chewy',
    'Coming Soon',
    'Gloria Hallelujah',
    'Luckiest Guy',
    'Amatic SC',
    'Patrick Hand',
    'Rock Salt',
    'Architects Daughter',
    'Baloo 2',
    'Boogaloo',
    'Concert One',
    'Courgette',
    'Great Vibes',
    'Handlee',
    'Kalam',
    'Mansalva',
    'Satisfy',
    'Special Elite',
    'Titan One',
];

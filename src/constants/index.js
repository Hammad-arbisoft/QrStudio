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
} from '@/assets';
import theme from '@/theme';

export const sideBarpillsList = {
    template: 'Template',
    text: 'Text',
    image: 'Image',
    shape: 'Shape',
    qr: 'QR',
    whiteLabel: 'White-label',
};

export const sideBarpillsText = {
    Template: 'Template',
    Text: 'Text',
    Image: 'Image',
    Shape: 'Shape',
    QR: 'QR Code',
    'White-label': 'Branding',
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
    },
    {
        text: '+ Heading 2',
        fontFamily: 'Open Sans',
        fontSize: 16,
        color: '#333',
        fontWeight: theme.fontWeights[700],
    },
    {
        text: 'What problem are you facing in this meeting room?',
        fontFamily: 'Open Sans Condensed',
        fontSize: 18,
        color: '#333',
        fontWeight: theme.fontWeights[700],
    },
    {
        text: 'Scan this QR code from your mobile to report the issue',
        fontFamily: 'Open Sans',
        fontSize: 16,
        color: '#333',
        fontWeight: theme.fontWeights[400],
    },
    {
        text: 'property 1 > building 2 > Room 2',
        fontFamily: 'Open Sans',
        fontSize: 12,
        color: '#6D737B',
        fontWeight: theme.fontWeights[400],
    },
    {
        text: 'www.domain.com',
        fontFamily: 'Plus Jakarta Sans',
        fontSize: 10,
        color: '#333',
        fontWeight: theme.fontWeights[400],
    },
];
export const elementTypes = {
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

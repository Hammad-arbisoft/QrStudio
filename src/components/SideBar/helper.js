import { IconImage, IconQrCode, IconShape, IconTemplate, IconText, IconWhiteLabel } from '@/assets';
import { sideBarpillsList } from '@/constants';

export const sideBarItems = [
    {
        id: sideBarpillsList.template,
        text: sideBarpillsList.template,
        icon: IconTemplate,
    },
    {
        id: sideBarpillsList.text,
        text: sideBarpillsList.text,
        icon: IconText,
    },
    {
        id: sideBarpillsList.image,
        text: sideBarpillsList.image,
        icon: IconImage,
    },
    {
        id: sideBarpillsList.shape,
        text: sideBarpillsList.shape,
        icon: IconShape,
    },
    {
        id: sideBarpillsList.qr,
        text: sideBarpillsList.qr,
        icon: IconQrCode,
    },
    {
        id: sideBarpillsList.whiteLabel,
        text: sideBarpillsList.whiteLabel,
        icon: IconWhiteLabel,
    },
];

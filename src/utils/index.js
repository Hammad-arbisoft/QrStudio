import { elementTypes } from '@/constants';

export const calculatePercentageValue = (value, percentage) => {
    return (value * percentage) / 100;
};

export const pickImage = () => {
    return new Promise((resolve, reject) => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.style.display = 'none';

        input.addEventListener('change', event => {
            if (event.target.files.length > 0) {
                resolve(event.target.files[0]);
            } else {
                reject(new Error('No file selected'));
            }
        });

        input.click();
    });
};

export const isElementShape = elem => {
    if (
        elem?.type === elementTypes?.circle ||
        elem?.type === elementTypes?.arrowRight ||
        elem?.type === elementTypes?.heart ||
        elem?.type === elementTypes?.horizontalLine ||
        elem?.type === elementTypes?.square ||
        elem?.type === elementTypes?.star ||
        elem?.type === elementTypes?.triangle ||
        elem?.type === elementTypes?.verticalLine
    ) {
        return true;
    } else {
        return false;
    }
};
export const isElementOfSameType = (elem, type) => {
    if (elem && elem?.type === type) {
        return true;
    } else {
        return false;
    }
};

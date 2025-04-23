import { elementTypes, fontFamilies } from '@/constants';
import { SUPPPORTED_LOCALES } from '@/constants/textConstants';

export const calculatePercentageValue = (value, percentage) => {
    return (value * percentage) / 100;
};
export const getPercentage = (part, whole) => {
    if (whole === 0) return 0;
    return (part / whole) * 100;
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

export const debounce = (func, delay) => {
    let timeoutId;

    return function (...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

export const sanitizeNumber = (value, defaultValue = 0, precision = 2) => {
    const num = parseFloat(value);
    if (isNaN(num)) return defaultValue;
    return parseFloat(num.toFixed(precision));
};

export const loadAllGoogleFonts = () => {
    const weights = [400, 700];
    const italics = [0, 1];

    const fontParams = fontFamilies.map(font => {
        const fontName = font.replace(/ /g, '+');
        const variantStr = italics
            .map(ital => weights.map(w => `${ital},${w}`).join(';'))
            .join(';');
        return `family=${fontName}:ital,wght@${variantStr}`;
    });

    const fontURL = `https://fonts.googleapis.com/css2?${fontParams.join('&')}&display=swap`;

    return new Promise((resolve, reject) => {
        try {
            if (!document.querySelector(`link[href="${fontURL}"]`)) {
                const link = document.createElement('link');
                link.href = fontURL;
                link.rel = 'stylesheet';
                document.head.appendChild(link);
            }

            const loadPromises = [];
            fontFamilies.forEach(font => {
                weights.forEach(weight => {
                    italics.forEach(ital => {
                        loadPromises.push(
                            document.fonts.load(
                                `${ital ? 'italic' : 'normal'} ${weight} 16px "${font}"`,
                            ),
                        );
                    });
                });
            });

            Promise.all(loadPromises)
                .then(() => resolve(`✅ All ${fontFamilies?.length} fonts loaded`))
                .catch(err => reject(err));
        } catch (err) {
            reject(err);
        }
    });
};
export const preloadRelevantImages = async (elements = []) => {
    const imagePromises = elements
        ?.map(elem => {
            let src = null;

            if (elem?.type === 'image' || elem?.type === 'backgroundImage') {
                src = elem?.src;
            } else if (elem?.type === 'qr') {
                src = elem?.qrLogo;
            }

            if (!src) return null;

            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve({ src, success: true });
                img.onerror = () => reject({ src, success: false });
                img.src = src;
            });
        })
        .filter(Boolean);

    return Promise?.allSettled(imagePromises).then(results => {
        const successes = results?.filter(r => r?.status === 'fulfilled').map(r => r?.value);

        const errors = results?.filter(r => r?.status === 'rejected').map(r => r?.reason);

        return { successes, errors };
    });
};
export const removeImageProperty = (elements = []) => {
    return elements.map(elem => {
        if ('image' in elem) {
            // eslint-disable-next-line no-unused-vars
            const { image, ...rest } = elem;
            return rest;
        }
        return elem;
    });
};

export const exportStageAsImage = async (stageRef, pageSizeKey, scale = 2) => {
    // eslint-disable-next-line no-async-promise-executor
    return new Promise(async (resolve, reject) => {
        try {
            const stage = stageRef?.current;
            if (!stage) {
                return reject('Stage is not available');
            }

            // Create a canvas with the scale factor
            const canvas = await stage.toCanvas({ pixelRatio: scale });

            // Convert canvas to data URL
            const dataURL = await canvas.toDataURL('image/png');

            // Return the data URL as the resolved value
            resolve(dataURL);
        } catch (error) {
            reject(error);
        }
    });
};

export const validateLocale = locale => {
    if (SUPPPORTED_LOCALES.includes(locale)) {
        return locale;
    } else {
        return 'en';
    }
};

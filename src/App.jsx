/* eslint-disable max-len */
import React, { useRef } from 'react';
import './App.css';
import { Studio } from './features';
import { InnerWrapper, Wrapper } from './styled';
import { customTemplates, DEF_TEMPLATE, defaultTemplates } from './constants';
let elems = [
    {
        type: 'pageSize',
        id: 'element1744757766844',
        size: 'A4',
    },
    {
        id: 'element1744757913595',
        x: 24.501248523661808,
        y: 40.074239464307254,
        stroke: '#000000',
        strokeWidth: 0,
        opacity: 0.5,
        type: 'image',
        draggable: true,
        src: 'https://i.ibb.co/zW7jxTxq/ea3f8b02-1ecd-47c7-a47d-37800dfd3591-1.png',
        rotation: 0,
        scaleX: 0.7846733734605479,
        scaleY: 0.7846733734605481,
        offsetX: 0,
        offsetY: 0,
        skewX: 0,
        skewY: 0,
    },
    {
        id: 'element1744757924400',
        x: 183.45410546534657,
        y: 98.45346441570172,
        stroke: '#f1dfdf',
        strokeWidth: 10,
        opacity: 1,
        type: 'image',
        draggable: true,
        src: 'https://i.ibb.co/8D09HfP1/3f2cd26cb93f495aac3be0573c733b9d.png',
        rotation: 0,
        scaleX: 0.543610320279107,
        scaleY: 0.543610320279107,
        offsetX: 0,
        offsetY: 0,
        skewX: 0,
        skewY: 0,
    },
    {
        type: 'backgroundImage',
        id: 'element1744757939772',
        src: 'https://i.ibb.co/fdcDwzyy/download.jpg',
        opacity: 1,
    },
    {
        id: 'element1744757997322',
        type: 'qr',
        height: 110,
        width: 110,
        x: 7.32804750878266,
        y: 224,
        fill: '#80D965',
        stroke: '#000000',
        strokeWidth: 2,
        draggable: true,
        qrLogo: 'https://i.ibb.co/G4JsVqJq/new.png',
        qrText: 'https://jsonformatter.org/',
        opacity: 1,
        logoVisible: true,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        offsetX: 0,
        offsetY: 0,
        skewX: 0,
        skewY: 0,
    },
    {
        id: 'element1744758014174',
        type: 'qr',
        height: 110,
        width: 110,
        x: 341.8130363727658,
        y: 119.87764407448526,
        fill: '#80D965',
        stroke: '#000000',
        strokeWidth: 2,
        draggable: true,
        qrLogo: 'https://i.ibb.co/27mZh3rH/star.png',
        qrText: 'https://react.dev/learn/updating-objects-in-state#updating-a-nested-object',
        opacity: 1,
        logoVisible: true,
        rotation: 44.05598684994009,
        scaleX: 1.450226669723415,
        scaleY: 1.4502266697234152,
        offsetX: 0,
        offsetY: 0,
        skewX: -1.0557678926130014e-16,
        skewY: 0,
    },
    {
        id: 'element1744758046379',
        x: 272.6183474567979,
        y: 524.25,
        fill: '#FFFFFF',
        stroke: '#000000',
        strokeWidth: 1,
        opacity: 1,
        type: 'square',
        draggable: true,
        height: 100,
        width: 100,
        name: 'square',
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        offsetX: 0,
        offsetY: 0,
        skewX: 0,
        skewY: 0,
    },
    {
        id: 'element1744758049898',
        x: 52.11834745679792,
        y: 347.50000000000006,
        opacity: 1,
        type: 'text',
        draggable: true,
        text: 'Scan this QR code from your mobile to report the issue',
        fontSize: 16,
        fontFamily: 'Open Sans',
        color: '#f5f0f0',
        textDecoration: 'normal',
        fontStyle: 'normal',
        fontWeight: 400,
        textAlign: 'left',
        width: 220,
        fontVariant: 400,
        align: 'left',
        fill: '#333',
        visible: true,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        offsetX: 0,
        offsetY: 0,
        skewX: 0,
        skewY: 0,
    },
    {
        id: 'element1744757900132',
        x: 11.50468342152216,
        y: 435.50000000000006,
        stroke: '#b13e3e',
        strokeWidth: 16,
        opacity: 1,
        type: 'image',
        draggable: true,
        src: 'https://i.ibb.co/Pvr6K2x0/Logo-3x.png',
        rotation: 0,
        scaleX: 0.46044553485888157,
        scaleY: 0.4604455348588817,
        skewX: 0,
        skewY: 0,
        offsetX: 0,
        offsetY: 0,
    },
];
let customImagesList = [
    'https://i.ibb.co/zW7jxTxq/ea3f8b02-1ecd-47c7-a47d-37800dfd3591-1.png',
    'https://i.ibb.co/8D09HfP1/3f2cd26cb93f495aac3be0573c733b9d.png',
    'https://i.ibb.co/fdcDwzyy/download.jpg',
    'https://i.ibb.co/G4JsVqJq/new.png',
    'https://i.ibb.co/27mZh3rH/star.png',
    'https://i.ibb.co/Pvr6K2x0/Logo-3x.png',
];
const App = () => {
    const studioRef = useRef();
    const getUpatedImageAndElements = async () => {
        let data = await studioRef?.current?.onSave();
        // eslint-disable-next-line no-console
        console.error({ data });
        let a = data?.image;
        const byteString = atob(a.split(',')[1]);
        const mimeString = a.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        const url = URL.createObjectURL(blob);
        // console.error({ url });
        window.open(url);
    };

    const uploadImageAndReturnUrl = async file => {
        // eslint-disable-next-line no-console
        console.log('Uploading file:', file);
        return new Promise(resolve => {
            setTimeout(() => {
                const uploadedUrl =
                    'https://i.ibb.co/zW7jxTxq/ea3f8b02-1ecd-47c7-a47d-37800dfd3591-1.png';
                // eslint-disable-next-line no-console
                console.log('Upload complete. File URL:', uploadedUrl);
                resolve(uploadedUrl);
            }, 1000);
        });
    };
    const onSave = async data => {
        console.error({ data });
        let a = data?.image;
        const byteString = atob(a.split(',')[1]);
        const mimeString = a.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeString });
        const url = URL.createObjectURL(blob);
        // console.error({ url });
        window.open(url);
    };
    // const supportedLocales = [
    //     'en',  // English
    //     'ru',  // Russian
    //     'pl',  // Polish
    //     'de',  // German
    //     'es',  // Spanish
    //     'fr',  // French
    //     'it'   // Italian
    //   ];
    return (
        <Wrapper>
            <div style={{ display: 'flex' }}>
                <button style={{ color: 'white' }} onClick={getUpatedImageAndElements}>
                    GetData
                </button>
            </div>

            <InnerWrapper>
                <Studio
                    ref={studioRef}
                    // elementsList={elems} // Selected auto
                    // defaultImages={[]}
                    customImages={[]}
                    defaultTemplatesList={DEF_TEMPLATE}
                    // customTemplatesList={DEF_TEMPLATE}
                    // onDeleteCustomTemplate={() => {
                    //     console.log('Calling onDeleteCustomTemplate')
                    // }}
                    // disableWhiteLabel={true}
                    // title={'New Title'}
                    // styleProps={
                    //     {
                    //         // primaryColor: 'green',
                    //     }
                    // }
                    // defaultText={'hellow this is default Text'}
                    // qrLink={'http://localhost:5173/'}
                    uploadImageCallBack={uploadImageAndReturnUrl}
                    onSave={onSave}
                    showSaveButton
                    // saveButtonText={'Save Progress'}
                    locale={'en'}
                />
            </InnerWrapper>
        </Wrapper>
    );
};

export default App;

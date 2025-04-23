import React from 'react';
import { propTypes } from './props';
import { Button } from '../Button';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconUpload } from '@/assets';
import { ImagesContainer, SingleItem, StyledContainer } from './styled';
import { Collapsable } from '../Collapsable';
import theme from '@/theme';
import { pickImage } from '@/utils';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const ImageSideBar = ({
    defaultImagesList,
    customImagesList,
    onAddCustomImageToList,
    onAddImageToCanvas,
    languageLocale,
    uploadImageCallBack,
    setLoadingUploadImage,
}) => {
    const renderDefaultContent = (
        <ImagesContainer>
            {defaultImagesList?.length === 0 && (
                <StyledText fontSize={10} color={theme.color.gray_535354}>
                    {TEXT_DICTIONARY?.[languageLocale]?.PLEASE_ADD_IMAGES}
                </StyledText>
            )}
            {defaultImagesList?.map((item, index) => (
                <SingleItem
                    key={index}
                    width={'auto'}
                    onClick={() => {
                        onAddImageToCanvas(item);
                    }}
                >
                    <StyledImage src={item} maxHeight={100} maxWidth={100} />
                </SingleItem>
            ))}
        </ImagesContainer>
    );

    const renderCustomImages = (
        <ImagesContainer>
            {customImagesList?.length === 0 && (
                <StyledText fontSize={10} color={theme.color.gray_535354}>
                    {TEXT_DICTIONARY?.[languageLocale]?.PLEASE_ADD_IMAGES}
                </StyledText>
            )}
            {customImagesList?.map((item, index) => (
                <SingleItem
                    key={index}
                    onClick={() => {
                        onAddImageToCanvas(item);
                    }}
                >
                    <StyledImage src={item} maxHeight={100} maxWidth={100} />
                </SingleItem>
            ))}
        </ImagesContainer>
    );

    const addImageToList = async () => {
        const file = await pickImage();
        if (!file) return;
        if (uploadImageCallBack) {
            setLoadingUploadImage(true);
            const imageUrl = await uploadImageCallBack(file);
            onAddCustomImageToList(imageUrl);
            setLoadingUploadImage(false);
        } else {
            const reader = new FileReader();
            reader.onload = () => {
                onAddCustomImageToList(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <StyledContainer>
            <Button
                text={TEXT_DICTIONARY?.[languageLocale]?.ADD_IMAGE}
                left={<StyledImage src={IconUpload} />}
                marginBottom={38}
                onClick={addImageToList}
            />
            <Collapsable
                title={TEXT_DICTIONARY?.[languageLocale]?.DEFAULT}
                content={renderDefaultContent}
            />
            <Collapsable
                title={TEXT_DICTIONARY?.[languageLocale]?.CUSTOM_IMAGES}
                content={renderCustomImages}
            />
        </StyledContainer>
    );
};

ImageSideBar.propTypes = propTypes;

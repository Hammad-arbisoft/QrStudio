import React from 'react';
import { propTypes } from './props';
import { Button } from '../Button';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconUpload } from '@/assets';
import { ImagesContainer, SingleItem, StyledContainer } from './styled';
import { Collapsable } from '../Collapsable';
import theme from '@/theme';
import { pickImage } from '@/utils';

export const ImageSideBar = ({
    defaultImagesList,
    customImagesList,
    onAddCustomImageToList,
    onAddImageToCanvas,
}) => {
    const renderDefaultContent = (
        <ImagesContainer>
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
                    Please Add Images
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
        const reader = new FileReader();
        reader.onload = () => {
            onAddCustomImageToList(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <StyledContainer>
            <Button
                text="Add Image"
                left={<StyledImage src={IconUpload} />}
                marginBottom={38}
                onClick={addImageToList}
            />
            <Collapsable title="Default" content={renderDefaultContent} />
            <Collapsable title="Custom Images" content={renderCustomImages} />
        </StyledContainer>
    );
};

ImageSideBar.propTypes = propTypes;

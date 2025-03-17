import React, { useMemo } from 'react';
import { propTypes } from './props';
import { Button } from '../Button';
import { StyledImage } from '@/generic/Styled';
import { IconTools, IconToolsPink, IconUpload, ImageSampleLogo, ImageSampleLogo2 } from '@/assets';
import { ImagesContainer, SingleItem, StyledContainer } from './styled';
import { Collapsable } from '../Collapsable';

export const ImageSideBar = () => {
    const defaultImagesList = useMemo(() => {
        return [
            { image: IconTools, onClick: () => {} },
            { image: IconToolsPink, onClick: () => {} },
        ];
    }, []);

    const CustomImagesList = useMemo(() => {
        return [
            { image: ImageSampleLogo, onClick: () => {} },
            { image: ImageSampleLogo2, onClick: () => {} },
        ];
    }, []);

    const renderDefaultContent = useMemo(() => {
        return (
            <ImagesContainer>
                {defaultImagesList?.map((item, index) => (
                    <SingleItem key={index} width={'auto'}>
                        <StyledImage src={item?.image} />
                    </SingleItem>
                ))}
            </ImagesContainer>
        );
    }, []);

    const renderCustomImages = useMemo(() => {
        return (
            <ImagesContainer>
                {CustomImagesList?.map((item, index) => (
                    <SingleItem key={index}>
                        <StyledImage src={item?.image} />
                    </SingleItem>
                ))}
            </ImagesContainer>
        );
    }, []);

    return (
        <StyledContainer>
            <Button text="Add Image" left={<StyledImage src={IconUpload} />} marginBottom={38} />
            <Collapsable title="Default" content={renderDefaultContent} />
            <Collapsable title="Custom Images" content={renderCustomImages} />
        </StyledContainer>
    );
};

ImageSideBar.propTypes = propTypes;

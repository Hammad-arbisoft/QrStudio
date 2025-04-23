import React from 'react';
import { propTypes } from './props';
import { StyledImage, StyledText } from '@/generic/Styled';
import theme from '@/theme';
import { ShapesContainer, SingleItem, StyledContainer } from './styled';
import { shapesList } from '@/constants';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const ShapeSideBar = ({ onAddShape, languageLocale }) => {
    return (
        <StyledContainer>
            <StyledText
                color={theme.color.gray_646464}
                fontWeight={theme.fontWeights[500]}
                marginRight={6}
                marginBottom={15}
            >
                {TEXT_DICTIONARY?.[languageLocale]?.ADD_SHAPES}
            </StyledText>
            <ShapesContainer>
                {shapesList.map((item, index) => {
                    return (
                        <SingleItem key={index} onClick={() => onAddShape(item?.shape)}>
                            <StyledImage src={item?.icon} />
                        </SingleItem>
                    );
                })}
            </ShapesContainer>
        </StyledContainer>
    );
};

ShapeSideBar.propTypes = propTypes;

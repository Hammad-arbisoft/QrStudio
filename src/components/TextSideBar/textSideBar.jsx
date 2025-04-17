import React from 'react';
import { propTypes } from './props';
import { Button } from '../Button';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconAddText, IconInfo } from '@/assets';
import { Container, ItemWrapper, StyledContainer } from './styled';
import { Collapsable } from '../Collapsable';
import { textList } from '@/constants';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const TextSideBar = ({ onAddTextToCanvas, translation }) => {
    const renderTextListContent = () => {
        return (
            <Container>
                {textList?.map((item, index) => {
                    return (
                        <ItemWrapper key={index} onClick={() => onAddTextToCanvas(item)}>
                            <StyledText
                                color={item?.color}
                                fontFamily={item?.fontFamily}
                                fontWeight={item?.fontWeight}
                                fontSize={item?.fontSize}
                            >
                                {item?.text}
                            </StyledText>
                        </ItemWrapper>
                    );
                })}
            </Container>
        );
    };
    return (
        <StyledContainer>
            <Button
                text={translation?.ADD_TEXT || TEXT_DICTIONARY?.ADD_TEXT}
                left={<StyledImage src={IconAddText} />}
                marginBottom={38}
                onClick={() => onAddTextToCanvas(null)}
            />
            <Collapsable
                title={translation?.HELP_TEXT || TEXT_DICTIONARY?.HELP_TEXT}
                content={renderTextListContent()}
                left={<StyledImage src={IconInfo} />}
            />
        </StyledContainer>
    );
};

TextSideBar.propTypes = propTypes;

/* eslint-disable prettier/prettier */
import React from 'react';
import { propTypes } from './props';
import { Button } from '../Button';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconAddText } from '@/assets';
import { Container, ItemWrapper, StyledContainer } from './styled';
import { Collapsable } from '../Collapsable';
import { textList } from '@/constants';
import { TEXT_DICTIONARY } from '@/constants/textConstants';

export const TextSideBar = ({ onAddTextToCanvas, languageLocale, defaultText }) => {
    const renderTextListContent = () => {
        return (
            <Container>
                {textList?.map((item, index) => {
                    return (
                        <ItemWrapper
                            key={index}
                            onClick={() => {
                                onAddTextToCanvas({
                                    ...item,
                                    text:
                                        defaultText || (TEXT_DICTIONARY?.[languageLocale][item.text] || item?.text),
                                });
                            }}
                        >
                            <StyledText
                                color={item?.color}
                                fontFamily={item?.fontFamily}
                                fontWeight={item?.fontWeight}
                                fontSize={item?.fontSize}
                            >
                                {defaultText ||
                                    (TEXT_DICTIONARY?.[languageLocale][item.text] || item?.text)}
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
                text={TEXT_DICTIONARY?.[languageLocale]?.ADD_TEXT}
                left={<StyledImage src={IconAddText} />}
                marginBottom={38}
                onClick={() => onAddTextToCanvas(null)}
            />
            <Collapsable
                title={TEXT_DICTIONARY?.[languageLocale]?.HELP_TEXT}
                content={renderTextListContent()}
                // left={<StyledImage src={IconInfo} />}
            />
        </StyledContainer>
    );
};

TextSideBar.propTypes = propTypes;

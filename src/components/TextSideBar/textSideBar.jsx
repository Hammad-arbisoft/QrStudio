import React, { useMemo } from 'react';
import { propTypes } from './props';
import { Button } from '../Button';
import { StyledImage, StyledText } from '@/generic/Styled';
import { IconAddText, IconInfo } from '@/assets';
import { Container, ItemWrapper, StyledContainer } from './styled';
import { Collapsable } from '../Collapsable';
import { textList } from '@/constants';

export const TextSideBar = () => {
    const renderTextListContent = useMemo(() => {
        return (
            <Container>
                {textList?.map((item, index) => {
                    return (
                        <ItemWrapper key={index}>
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
    }, []);
    return (
        <StyledContainer>
            <Button text="Add Text" left={<StyledImage src={IconAddText} />} marginBottom={38} />
            <Collapsable
                title="Help Text"
                content={renderTextListContent}
                left={<StyledImage src={IconInfo} />}
            />
        </StyledContainer>
    );
};

TextSideBar.propTypes = propTypes;

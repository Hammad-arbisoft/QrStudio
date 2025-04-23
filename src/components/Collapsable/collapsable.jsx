import React, { useCallback, useState } from 'react';
import { propTypes } from './props';
import { StyledImage, StyledText } from '@/generic/Styled';
import theme from '@/theme';
import { IconCheveronDown } from '@/assets';
import {
    CollapsableContainer,
    CollapsableContent,
    CollapsableHeader,
    IconWrapper,
    LeftIconWrapper,
} from './styled';

export const Collapsable = ({
    title,
    left,
    hideIcon = false,
    marginTop = 0,
    marginBottom = 30,
    content,
}) => {
    const [visible, setVisible] = useState(true);
    const toggleVisibility = useCallback(() => {
        if (hideIcon) return;
        setVisible(!visible);
    }, [visible, setVisible]);

    return (
        <CollapsableContainer marginTop={marginTop} marginBottom={marginBottom}>
            <CollapsableHeader onClick={toggleVisibility}>
                {left && <LeftIconWrapper>{left}</LeftIconWrapper>}
                <StyledText
                    color={theme.color.gray_646464}
                    fontWeight={theme.fontWeights[500]}
                    marginRight={6}
                >
                    {title}
                </StyledText>
                {!hideIcon && (
                    <IconWrapper>
                        <StyledImage src={IconCheveronDown} />
                    </IconWrapper>
                )}
            </CollapsableHeader>
            <CollapsableContent visible={visible}>{content}</CollapsableContent>
        </CollapsableContainer>
    );
};

Collapsable.propTypes = propTypes;
